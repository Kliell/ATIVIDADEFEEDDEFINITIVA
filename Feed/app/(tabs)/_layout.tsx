import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

type IconProps = ComponentProps<typeof Ionicons>;

export default function TabsLayout(): JSX.Element {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Feed",
          tabBarIcon: ({ color, size }: IconProps) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}