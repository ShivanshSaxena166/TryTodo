
import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import {  SafeAreaView,StyleSheet, View,Text,TextInput,FlatList,Alert,Button} from "react-native";
const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};
import * as RootNavigation from '../rootNavigation';
import {styles} from './styles1'
import { useState ,useEffect } from 'react'
import { contextItemDetails,contextTodo } from "../context/contextTodo";
import {useContext} from 'react'


export default function ItemDetails({navigation,route}){

  const[todoStateList,settodoStateList]=useContext(contextTodo)
  const[contextItemDetail,setcontextItemDetail]=useContext(contextItemDetails)
  useEffect(() => {
    setcontextItemDetail(route.params.TODO);
  }, []);
  // console.log(contextItemDetails)
  // console.log("TODO")
  // console.log(route.params.TODO)
  // console.log("Iding")
  // console.log(contextItemDetail.id)

    // console.log("In ItemDetails")
    // console.log(route.params.todoName);
    // console.log(route.params.todoAge)
    // console.log(route.params.todoDescription)

    const deleteTodo = () => {
        // todoId=route.params.todoId
        var newTodosItem = todoStateList.filter(item => item.id != contextItemDetail.id);
        // console.log("Nee");
        // console.log(newTodosItem)
        settodoStateList(newTodosItem);
        RootNavigation.navigate('List')
       
      };
return(
    <SafeAreaView>

<View style={styles.listitem}>
  <View style={Itemstyles.viewStyle}>
  <TouchableOpacity > 
  {/* <TouchableOpacity  onPress={() => navigation.navigate('ItemDetails',{ todoId:todo.id,todoName:todo.Name,todoAge:todo.Age,todoDescription:todo.Description })}>  */}
  <Text style={Itemstyles.textStyle} >Name: {contextItemDetail.Name}   </Text>
 
  <Text style={Itemstyles.textStyle}>Age: {contextItemDetail.Age} </Text>


  <Text style={Itemstyles.textStyle}>Description: {contextItemDetail.Description} </Text>
  </TouchableOpacity>
  </View>
  {/* {console.log(todo.completed)} */}




</View>

    <View >
   
      <Button 
        title="Update"
        onPress={() => RootNavigation.navigate('UpdateItem')}
      />
     
        <Button
        title="Delete"
        onPress={deleteTodo}
      />
    </View>
    </SafeAreaView>
)
}


export const Itemstyles = StyleSheet.create({
 textStyle:{
  fontWeight:'bold', fontSize:15, color:COLORS.primary
 },
 viewStyle:{
  flex:1
 }

   });