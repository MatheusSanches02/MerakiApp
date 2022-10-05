import React from "react";
import "react-native-gesture-handler";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MyScreen from "./components/AssetExample";
import TelaMeditacao from "./components/TelaMeditacao";
import TelaDiario from "./components/TelaDiario";
import TelaLogin from "./components/TelaLogin";
import TelaChatbot from "./components/TelaChatbot";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Icon.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const icons = {
            Diário: "text-box-multiple-outline",
            Respirar: "weather-windy",
            ChatBot: "robot",
            Relaxar: "meditation",
            Conta: "account-circle-outline",
          };

          return (
            <Icon
              name={icons[route.name]}
              color={focused ? "#4f4f4f" : "#9c9c9c"}
              size={20}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Diário" component={TelaDiario} />
      <Tab.Screen name="Respirar" component={MyScreen} />
      <Tab.Screen name="ChatBot" component={TelaChatbot} />
      <Tab.Screen name="Relaxar" component={TelaMeditacao} />
      <Tab.Screen name="Conta" component={MyScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={TelaLogin}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Diário"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
