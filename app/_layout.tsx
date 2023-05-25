import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import ModalScreen from './modal';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

const Stack = createStackNavigator();

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false}} />
          {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */} 
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="modal" component={ModalScreen} options={{ presentation: 'modal' }} />
        </Stack.Navigator>
      </ThemeProvider>
    </>
  );
}
