import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return React.createElement(
    Stack,
    null,
    React.createElement(Stack.Screen, {
      name: "(tabs)",
      options: { headerShown: false },
    })
  );
}

// import { Stack } from "expo-router";

// export default function RootLayout(): JSX.Element {
//   return (
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     </Stack>
//   );
// }

