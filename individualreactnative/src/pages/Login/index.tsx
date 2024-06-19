import {
  View,
  Text,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import React, { useState } from "react";
import { styled } from "./style";
import { TextInputComponent } from "../../components/TextInput";
import { ButtonComponents } from "../../components/ButtonComponents";
import { useNavigation } from "@react-navigation/native";

export function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navegando = useNavigation();

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleLogin = () => {
    if (email) {
      navegando.navigate("Pinterest", { name: "Login" });
    } else {
      Alert.alert("Credenciais invalidas!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styled.container}>
        <Image source={require("../../assets/background.webp")}/>

        <Image
          source={require("../../assets/pinterest_logo.png")}
          style={{ width: 90, height: 90, position: 'absolute' }}
          alt="logo do app"
        ></Image>

        <Text style={styled.title}>Bem-vindo(a) ao Pinterest</Text>

        <TextInputComponent
          recebendoFuncao={handleEmail}
          recebendoValue={email}
          recebendoPlaceHolder="Endereço de email"
        />

        <TextInputComponent
          recebendoFuncao={handlePassword}
          recebendoValue={password}
          recebendoPlaceHolder="Insira sua senha"
          recebendoTipoDoInput={true}
        />

        <ButtonComponents title="Continuar" recebendoFuncao={handleLogin} />

        <Text style={styled.termos}>
          Ao continuar, você concorda com os{" "}
          <Text style={styled.highlight}>Termos de Serviço</Text> do Pinterest e
          confirma que leu a nossa{" "}
          <Text style={styled.highlight}>
            Política de Privacidade. Aviso na coleta de informações
          </Text>
          .
        </Text>

        {/* <TouchableOpacity style={styled.button} onPress={handleLogin}>
          <Text style={styled.textButton}>Continuar</Text>
        </TouchableOpacity> */}
      </View>
    </TouchableWithoutFeedback>
  );
}
