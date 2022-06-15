import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import ResetPassword from "./src/screens/ResetPassword";
import { createStackNavigator } from "@react-navigation/stack";
import MainDashboard from "./src/screens/MainDashboard";
import LogNewSpot from "./src/screens/LogNewSpot";
import SpotsProvider from "./src/providers/spots";
import { RootStackParamList } from "./types";

export default function App() {
  const RootStack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <SpotsProvider>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <RootStack.Navigator>
          <RootStack.Screen
            name={"Login"}
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name={"SignUp"}
            component={SignUp}
            options={{ title: "Sign up" }}
          />
          <RootStack.Screen
            name={"MainDashboard"}
            component={MainDashboard}
            options={{ title: "Recycling Map" }}
          />
          <RootStack.Screen name={"ResetPassword"} component={ResetPassword} />
          <RootStack.Screen
            name={"LogNewSpot"}
            component={LogNewSpot}
            options={{ title: "Recycling Spot" }}
          />
        </RootStack.Navigator>
      </SpotsProvider>
    </NavigationContainer>
  );
}
