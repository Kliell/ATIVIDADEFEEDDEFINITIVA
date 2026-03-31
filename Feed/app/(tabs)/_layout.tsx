import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function TabsLayout() {
  return React.createElement(
    Tabs,
    null,
    React.createElement(Tabs.Screen, {
      name: "index",
      options: {
        title: "Feed",
        tabBarIcon: ({ color, size }) =>
          React.createElement(Ionicons, {
            name: "home",
            size,
            color,
          }),
      },
    })
  );
  return TabsLayout
}
