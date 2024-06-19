import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import { styled } from "./style";

interface CardPropsComponent {
  imageUrl?: ImageSourcePropType;
}

export function Card({ imageUrl }: CardPropsComponent) {
  return (
    <View>
      {/* {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />} */}
      {imageUrl && <Image source={imageUrl} style={styled.image} />}
    </View>
  );
};
