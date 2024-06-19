import React from "react";
import { View, Text } from "react-native";
import { styled } from "./style";
import { ButtonComponents } from "../../components/ButtonComponents";
import { useNavigation } from "@react-navigation/native";

export function Profile() {

  const navegando = useNavigation();

  const handleLogout = () => {
    navegando.navigate("Login", { name: "Login" });
  }
  
  return (
    <View style={styled.conatiner}>
      <Text style={styled.title}>Usuário</Text>

      <ButtonComponents title="Sair" recebendoFuncao={handleLogout}/>
    </View>
  );
}
