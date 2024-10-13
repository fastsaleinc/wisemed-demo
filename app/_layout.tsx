import { Stack } from "expo-router";
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://6dd4103d644623c12cb0ae49079cb047@o4508117735374848.ingest.us.sentry.io/4508117738389504',

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

export default function RootLayout() {
  return (
    <Stack >
      <Stack.Screen name="(tab)" options={{ headerShown: false }}/>
   

    </Stack>
  );
}
