import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import React from "react";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning:false
})

export default function RootLayout() {
  return(
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOption={{headerShown:false}}>
          <Stack.Screem name ="(tabs)"/>
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
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

