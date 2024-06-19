import React from "react";
import { View, Text, SafeAreaView, ScrollView, ViewStyle } from "react-native";
import { styled } from "./style";
import { Card } from "../../components/CardComponent";

export function Home() {
  return (
    <View style={styled.container}>
      <Text style={styled.title}>Tudo</Text>
      <SafeAreaView style={styled.containerCard}>
        <>
          <Card imageUrl={require("../../assets/image1.jpeg")} />
          <Card imageUrl={require("../../assets/image2.jpeg")} />
          <Card imageUrl={require("../../assets/image3.jpeg")} />
          <Card imageUrl={require("../../assets/image4.jpeg")} />
          <Card imageUrl={require("../../assets/image5.jpeg")} />
          <Card imageUrl={require("../../assets/image6.jpeg")} />
        </>
      </SafeAreaView>
    </View>
  );
}
