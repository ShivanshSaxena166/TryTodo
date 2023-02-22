import * as React from "react";
import { View, Text,Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListItems from "./components/ListItems";
import AddItem from "./components/AddItem";
import List from "./components/List";
import ItemDetails from "./components/ItemDetails"
import UpdateItem from "./components/UpdateItem";
import uuid from 'react-native-uuid';
import {navigationRef} from './rootNavigation';
const Stack = createNativeStackNavigator();

export default function App() {

  
  

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="TodoApp" component={ListItems}    />
        <Stack.Screen name="AddItem" component={AddItem}  />
        <Stack.Screen name="List" component={List}   />
        <Stack.Screen name="ItemDetails" component={ItemDetails} initialParams={{'key':'value'}}   />
        <Stack.Screen name="UpdateItem" component={UpdateItem} initialParams={{'key':'value'}}    />



      </Stack.Navigator>
    </NavigationContainer>
  );
}