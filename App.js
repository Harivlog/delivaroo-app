import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ResturentScreen from './screens/ResturentScreen';
import { Provider } from 'react-redux';
import { store } from './store'
import BaskitScreen from './screens/BaskitScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import DeliveryScreen from './screens/DeliveryScreen'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
        <Provider store={store}>

          <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturent" component={ResturentScreen} />
        <Stack.Screen 
        name="Baskit"
        component={BaskitScreen}
        screenOptions={{ presentation: 'modal' }} />
        <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
        
      </Stack.Navigator>
        </Provider>
   </NavigationContainer>
        

   
  );
}


