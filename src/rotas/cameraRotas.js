import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from "../telas/Home";
import Camera from "../telas/Camera/camera";
import Descartar from "../telas/Descartar/index";


const Stack = createNativeStackNavigator();

export default function CameraRotas() {
    return (
       <NavigationContainer>
            <Stack.Navigator initialRouteName="IndexScreen">
                <Stack.Screen name='Home' component={Index} options={{ headerShown: false }}/>
                <Stack.Screen name='Camera' component={Camera} options={{ headerShown: false }}/>
                <Stack.Screen name='DescartarScreen' component={Descartar} options={{ headerShown: false }}/>
            </Stack.Navigator >
       </NavigationContainer>  
    );
}