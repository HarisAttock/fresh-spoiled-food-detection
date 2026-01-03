import React, { useState, useContext } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EventRegister } from 'react-native-event-listeners';
import MaintabScreen from './screens/MaintabScreen';
import DrawerScreen from './screens/DrawerScreen';
import LoginsScreen from './screens/LoginsScreen';
import SignupScreen from './screens/SignupScreen';
import RestScreen from './screens/RestScreen';
import themeContext from './config/themeContext';
import theme from './config/theme';
const Stack = createStackNavigator();
export default function App() {
  const [Mode, setMode] = useState(false);
  React.useEffect(() => {
    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data);
    });
    return () => {
      EventRegister.removeAllListeners(eventListener);
    };
  });
  return (
    <themeContext.Provider value={Mode === true ? theme.dark : theme.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Logins">
          <Stack.Screen name="Logins" component={LoginsScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Rest" component={RestScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Maintab" component={MaintabScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Drawer" component={DrawerScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}




