import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import CallScreen from "../screens/CallScreen";
import CallingScreen from "../screens/CallingScreen";
import ContactsScreen from "../screens/ContactScreen";
import IncomingCallScreen from "../screens/incomingCallScreen";
import LoginScreen from "../screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();


const Navigation = () => {
    return(
        <NavigationContainer >
            <Stack.Navigator   >
                
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Contacts" component={ContactsScreen}/>

                   <Stack.Group screenOptions={{headerShown:false}}>

                        <Stack.Screen name="Call" component={CallScreen}/>
                        <Stack.Screen name="Calling" component={CallingScreen}/>
                        <Stack.Screen name="IncommingCallScreen" component={IncomingCallScreen}/>

                   </Stack.Group>    
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigation;


