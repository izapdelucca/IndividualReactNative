
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from '../pages/Home';
import { Profile } from "../pages/Profile";
import Feather from "react-native-vector-icons/Feather";

export type TabsParametrosDaRota = {
  Home: { name: string};
  Profile: { name: string}
}

const Tab = createBottomTabNavigator();

export function BottomTabsRoutes () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: "black",

          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveTintColor: "black",

          tabBarIcon: ({ color, size }) => {
            return <Feather name="user" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
