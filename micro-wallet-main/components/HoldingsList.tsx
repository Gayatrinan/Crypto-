import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { Holding, DefinedType } from "../types";

export default function HoldingsList({ holdingsData }) {
  const CRYPTO = holdingsData?.allHoldings?.filter(
    ({ category }) => category === "CRYPTO"
  );

  const REWARDS = holdingsData?.allHoldings?.filter(
    ({ category }) => category === "REWARDS"
  );

  const GIFT_CARD = holdingsData?.allHoldings?.filter(
    ({ category }) => category === "GIFT_CARD"
  );

  function amount(num) {
    return num.toLocaleString("en-US");
  }

  const CategoryCard = ({ title, subTitle }) => (
    <View style={{ flexDirection: "row", paddingBottom: 8 }}>
      <Text style={styles.subTitle}>{title}</Text>
      {subTitle ? (
        <Text style={{ paddingHorizontal: 20, fontSize: 20 }}>{subTitle}</Text>
      ) : (
        <Text style={{ paddingHorizontal: 20, fontSize: 20 }}>---</Text>
      )}
    </View>
  );

  const Item = ({ category }) => (
    <>
      {category?.map((h: Holding) => (
        <View style={styles.item}>
          <CategoryCard title={"Currency:"} subTitle={h.name} />
          <CategoryCard
            title={"Amount:"}
            subTitle={h.amount ? amount(h.amount) : null}
          />
          <CategoryCard title={"USD:"} subTitle={h.value_usd} />
          <CategoryCard title={"Symbol:"} subTitle={h.symbol} />
        </View>
      ))}
    </>
  );

  return (
    <View style={{ flex: 1 }}>
      {holdingsData && (
        <>
          <Text style={styles.title}>CRYPTO</Text>
          <Item category={CRYPTO} />

          <Text style={styles.title}>REWARDS</Text>
          <Item category={REWARDS} />

          <Text style={styles.title}>GIFT CARD</Text>
          <Item category={GIFT_CARD} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#FFF",
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    textAlign: "center",
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    paddingVertical: 12,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
