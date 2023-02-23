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

import {contextTodo} from './context/contextTodo'
const Stack = createNativeStackNavigator();

import { useState } from 'react'

import { contextItemDetails} from "./context/contextTodo";
export default function App() {
  const[todoStateList,settodoStateList]=useState([{id: 3,Name:"Shivansh", Age:22, Description:"What do you say to death when it comes? Not Today ", completed: false},{id: 2,Name:"Geralt", Age:52, Description:"With age comes the wisdom", completed: false},{id: 5772,Name:"Bob", Age:30, Description:"Random happy fellla", completed: false}])  
  const[contextItemDetail,setcontextItemDetail]=useState([])


  return (
    <NavigationContainer ref={navigationRef}>
       <contextTodo.Provider value={[todoStateList,settodoStateList]}>
       <contextItemDetails.Provider value={[contextItemDetail,setcontextItemDetail]}>
      <Stack.Navigator>
        <Stack.Screen name="TodoApp" component={ListItems}    />
        <Stack.Screen name="AddItem" component={AddItem}  />
        <Stack.Screen name="List" component={List}   />
    

        <Stack.Screen name="ItemDetails" component={ItemDetails} initialParams={{'key':'value'}}   />
        <Stack.Screen name="UpdateItem" component={UpdateItem} initialParams={{'key':'value'}}    />
      



      </Stack.Navigator>
      </contextItemDetails.Provider>
      </contextTodo.Provider>
    </NavigationContainer>
  );
}