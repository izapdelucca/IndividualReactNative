import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { styled } from "./style";

type PropsButton = {
  title: string;
  recebendoFuncao: () => void;
}

export function ButtonComponents ({title, recebendoFuncao}: PropsButton) {
  return (
    <TouchableOpacity style={styled.button} onPress={recebendoFuncao}>
      <Text style={styled.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}
