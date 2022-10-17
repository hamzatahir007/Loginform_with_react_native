import React, { useState } from "react";
import { TextInput, View , Image , TouchableOpacity} from "react-native";
import Text from "@kaloraat/react-native-text";
import Signup from './screens/Signup';
import Navigations from "./screens/routes/homeStack";
export default function App() {
  return(
    <Navigations />
  ) 
  

  


  //for navigating screens
  // const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
//         <Stack.Screen name="DetailScreen" component={DetailScreen} />
//         <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

};