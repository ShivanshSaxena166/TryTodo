
import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import {  SafeAreaView,StyleSheet, View,Text,TextInput,FlatList,Alert,Button} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Todo,setTodo,delTodo} from'../Todo'
import uuid from 'react-native-uuid';
const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};
import * as RootNavigation from '../rootNavigation';
import {styles} from './styles1'
export default function ItemDetails({navigation,route}){
    console.log("In ItemDetails")
    console.log(route.params.todoName);
    console.log(route.params.todoAge)
    console.log(route.params.todoDescription)

    const deleteTodo = () => {
        todoId=route.params.todoId
        var newTodosItem = Todo.filter(item => item.id != todoId);
        console.log("Nee");
        console.log(newTodosItem)
        delTodo(newTodosItem);
        RootNavigation.navigate('TodoApp')
       
      };
return(
    <SafeAreaView>

<View style={styles.listitem}>
  <View style={{flex:1}}>
  <TouchableOpacity > 
  {/* <TouchableOpacity  onPress={() => navigation.navigate('ItemDetails',{ todoId:todo.id,todoName:todo.Name,todoAge:todo.Age,todoDescription:todo.Description })}>  */}
  <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.primary}} >Name: {route.params.todoName}   </Text>
 
  <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.primary}}>Age: {route.params.todoAge} </Text>


  <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.primary}}>Description: {route.params.todoDescription} </Text>
  </TouchableOpacity>
  </View>
  {/* {console.log(todo.completed)} */}




</View>

    <View >
   
      <Button 
        title="Update"
        onPress={() => RootNavigation.navigate('UpdateItem', { todoId:route.params.todoId,todoName:route.params.todoName,todoAge:route.params.todoAge,todoDescription:route.params.todoDescription })}
      />
     
        <Button
        title="Delete"
        onPress={deleteTodo}
      />
    </View>
    </SafeAreaView>
)
}
