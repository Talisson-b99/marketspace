import { NativeBaseProvider, VStack } from "native-base";
import { StatusBar } from "react-native";

import {
  Karla_400Regular,
  Karla_700Bold,
  Karla_300Light,
  useFonts,
} from "@expo-google-fonts/karla";

import { THEME } from "./src/theme";
import { Loading } from "@components/Loading";
import { SignIn } from "@screens/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
    Karla_300Light,
  });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="transparent"
        translucent
      />
      <VStack flex={1} bg="#fff">
        {fontsLoaded ? <SignIn /> : <Loading />}
      </VStack>
    </NativeBaseProvider>
  );
}
