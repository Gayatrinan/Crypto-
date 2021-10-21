import React from "react";
import { PieChart } from "react-native-chart-kit";
import { View, Dimensions } from "react-native";

import { Holding } from "../types";

const screenWidth = Dimensions.get("window").width;

export default function PieChartInfo({ chartData }) {
  const chartMetrics = chartData?.allHoldings?.map((h: Holding) => {
    return {
      name: h.name,
      currency: h.value_usd,
      amount: "$ " + h.value_usd,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    };
  });

  return (
    <View style={{ alignItems: "center" }}>
      {chartData && (
        <PieChart
          data={chartMetrics}
          width={screenWidth}
          height={250}
          chartConfig={{
            backgroundColor: "#b90602",
            backgroundGradientFrom: "#e53935",
            backgroundGradientTo: "#ef5350",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
              flexDirection: "column",
            },
          }}
          accessor={"currency"}
          backgroundColor={"transparent"}
          center={[5, 5]}
          paddingLeft={"20"}
        />
      )}
    </View>
  );
}
