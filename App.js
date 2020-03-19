import React from 'react';
import {Button} from 'react-native';
//Navigation controllers
import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Screens
import ServicesList from "./App/services/servicesList";
import SingleService from "./App/services/singleService";
import { TouchableOpacity } from 'react-native-gesture-handler';

//Stack navigator object
const Stack = createStackNavigator();

export default class App extends React.Component {
    render() {
      return (
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="ServicesList" component={ServicesList} options={{title :"Search for services"}} />
            <Stack.Screen name="SingleService" 
                          component={SingleService} 
                          options={{
                            title :"Service Details",
                          
                          
                          }} />

          </Stack.Navigator>
        </NavigationContainer>
      );
    }
}

