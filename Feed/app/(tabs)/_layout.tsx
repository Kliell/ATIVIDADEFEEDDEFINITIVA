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
}


// import { Tabs } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import React from "react";
// import { ComponentProps } from "react";

// type IconProps = ComponentProps<typeof Ionicons>;

// export default function TabsLayout() {
//   return React.createElement(
//     Tabs,
//     null,
//     React.createElement(Tabs.Screen, {
//       name: "index",
//       options: {
//         title: "Feed",
//         tabBarIcon: ({ color, size }: IconProps) =>
//           React.createElement(Ionicons, {
//             name: "home",
//             size,
//             color,
//           }),
//       },
//     })
//   );
// }

// import { Tabs } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { ComponentProps } from "react";

// type IconProps = ComponentProps<typeof Ionicons>;

// export default function TabsLayout(): JSX.Element {
//   return (
//     <Tabs>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Feed",
//           tabBarIcon: ({ color, size }: IconProps) => (
//             <Ionicons name="home" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }