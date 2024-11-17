import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hal1 from "./halaman/hal1";
import Hal2 from "./halaman/hal2";
import Hal3 from "./halaman/hal3";
import Hal4 from "./halaman/hal4";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hal1" component={Hal1} options={{headerShown: false}}/>
        <Stack.Screen name="Hal2" component={Hal2} />
        <Stack.Screen name="Hal3" component={Hal3} />
        <Stack.Screen name="Hal4" component={Hal4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
