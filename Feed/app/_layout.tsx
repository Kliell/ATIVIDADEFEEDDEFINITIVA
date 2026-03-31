import { useColorScheme } from 'react-native';
import { ThemeProvider, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning:false
})

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ConvexProvider client={convex}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  );
}



// import { ConvexProvider, ConvexReactClient } from "convex/react";
// import { Stack } from "expo-router";
// import React from "react";
// import { ThemeProvider } from 'react-native';


// const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
//   unsavedChangesWarning:false
// })

// export default function RootLayout() {
//   return(
//     <ConvexProvider client={convex}>
//       <ThemeProvider>
//         <Stack screenOption={{headerShown:false}}>
//           <Stack.Screen name ="(tabs)"/>
//         </Stack>
//       </ThemeProvider>
//     </ConvexProvider>
//   );
// }

// import { Stack } from "expo-router";

// export default function RootLayout(): JSX.Element {
//   return (
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     </Stack>
//   );
// }

