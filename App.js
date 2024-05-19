const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomePage from "./screens/HomePage";
import Report from "./screens/Report";
import Map1 from "./screens/Map1";
import InputReport from "./screens/InputReport";
import Live from "./screens/Live";
import Alert1 from "./screens/Alert1";
import LogIn from "./screens/LogIn";
import Register from "./screens/Register";
import MyProfile from "./screens/MyProfile";
import MyProfile1 from "./screens/MyProfile1";
import IncidentReported from "./screens/IncidentReported";
import Messages from "./screens/Messages";
import Frame from "./components/Frame";
import EmergencyContact from "./screens/EmergencyContact";
import Frame1 from "./components/Frame1";
import Frame2 from "./components/Frame2";
import Frame3 from "./components/Frame3";
import Frame4 from "./components/Frame4";
import Frame5 from "./components/Frame5";
import Message from "./screens/Message";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "JuliusSansOne-Regular": require("./assets/fonts/JuliusSansOne-Regular.ttf"),
    "K2D-Regular": require("./assets/fonts/K2D-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Report"
              component={Report}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map1"
              component={Map1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InputReport"
              component={InputReport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Live"
              component={Live}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Alert1"
              component={Alert1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyProfile"
              component={MyProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyProfile1"
              component={MyProfile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IncidentReported"
              component={IncidentReported}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Messages"
              component={Messages}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmergencyContact"
              component={EmergencyContact}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame4"
              component={Frame4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame5"
              component={Frame5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Message"
              component={Message}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
