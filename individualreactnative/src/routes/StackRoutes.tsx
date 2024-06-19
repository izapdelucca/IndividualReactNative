import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/Login";
import { BottomTabsRoutes } from "./BottomTabsRoutes";

export type ParametrosDaRota = {
  Login: { name: string };
  Pinterest: { name: string };
};

const Stack = createNativeStackNavigator<ParametrosDaRota>();

export function StackRoutes() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Pinterest" component={BottomTabsRoutes}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
