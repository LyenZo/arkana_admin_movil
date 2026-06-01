import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CrudCardsScreen from "./src/screens/CrudCardsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import NfcScansScreen from "./src/screens/NfcScansScreen";
import MatchesScreen from "./src/screens/MatchesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor="#151515"
        translucent={false}
      />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />

          <Stack.Screen
            name="Register"
            component={RegisterScreen}
          />
          <Stack.Screen
            name="Users"
            component={CrudCardsScreen}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Cards"
            component={CrudCardsScreen}
          />

          <Stack.Screen
  name="NfcScans"
  component={NfcScansScreen}
/>

<Stack.Screen
  name="Matches"
  component={MatchesScreen}
/>
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}