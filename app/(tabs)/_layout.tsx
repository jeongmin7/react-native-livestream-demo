import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { FontAwesome5 } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shopping"
        options={{
          title: "shopping",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-cart" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="alarm"
        options={{
          title: "alarm",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bell" size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="myPage"
        options={{
          title: "myPage",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
