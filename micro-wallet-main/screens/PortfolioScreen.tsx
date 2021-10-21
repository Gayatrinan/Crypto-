import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView, RefreshControl, SafeAreaView } from "react-native";
import { useQuery, gql } from "@apollo/client";

import HoldingsList from "../components/HoldingsList";
import PieChartInfo from "../components/PieChartInfo";

export default function PortfolioScreen({}) {
  const [refreshing, setRefreshing] = useState(false);
  const [holdingsData, setHoldingsData] = useState([]);

  const HOLDINGS = gql`
    query {
      allHoldings {
        id
        name
        category
        icon_url
        amount
        value_usd
        symbol
        denomination
        number
        pin
      }
    }
  `;

  function fetchUpdatedHoldings() {
    const HOLDINGS = gql`
      query {
        allHoldings {
          id
          name
          category
          icon_url
          amount
          value_usd
          symbol
          denomination
          number
          pin
        }
      }
    `;
    const { data } = useQuery(HOLDINGS);
    setHoldingsData(data);
    setRefreshing(false);
  }

  const fetchHoldings = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const _onRefresh = React.useCallback(() => {
    setRefreshing(true);

    fetchHoldings(2000).then(() => {
      fetchUpdatedHoldings();
      setRefreshing(false);
    });
  }, []);

  const { data } = useQuery(HOLDINGS);

  console.log(data, "data");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            enabled={true}
            onRefresh={_onRefresh}
          />
        }
      >
        {data && (
          <>
            <PieChartInfo chartData={data} />
            <HoldingsList holdingsData={data} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
