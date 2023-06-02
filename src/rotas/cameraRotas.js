import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from "../telas/Home";
import Camera from "../telas/Camera/camera";


const Stack = createNativeStackNavigator();

export default function CameraRotas() {
    return (
       <NavigationContainer>
            <Stack.Navigator initialRouteName="IndexScreen">
                <Stack.Screen name='IndexScreen' component={Index}/>
                <Stack.Screen name='CameraScreen' component={Camera}/>
            </Stack.Navigator >
       </NavigationContainer>  
    );
}