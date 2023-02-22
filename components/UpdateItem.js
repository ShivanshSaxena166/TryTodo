import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import {  SafeAreaView,StyleSheet, View,Text,TextInput,FlatList,Alert,Button} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Todo,setTodo,delTodo,updateTodo} from'../Todo'
const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};
import * as RootNavigation from '../rootNavigation';
import {styles} from './styles1'

export default function UpdateItem({navigation,route}) {
    // const[todos,setTodos]=React.useState([[] 
    // ]);
    const [textInputName, setTextInputName] = React.useState('');
    const [textInputAge, setTextInputAge] = React.useState('');
    const [textInputDescription, setTextInputDescription] = React.useState('');
    
   
    const update=()=>{
        todoId=route.params.todoId
        const newTodos =Todo.map(item=>{


          if(item.id==todoId)
          
          { 

            if(textInputName!='')
            item.Name=textInputName
        
            if(textInputAge!='')
            item.Age=textInputAge
            if(textInputDescription!='')
          item.Description=textInputDescription

            
            
   return item
          }
          return item;
        })
          console.log("Update")
          console.log(newTodos)
        updateTodo(newTodos);
        RootNavigation.navigate('TodoApp')
        }
  
   
    return (
      <SafeAreaView   style={{flex:1,backgroundColor:COLORS.white}}>
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
        
      <View style={styles.footer}>
      <View style={styles.inputContainer}>
      
        <TextInput placeholderTextColor={COLORS.white} 
        value={textInputName}
        placeholder="Update Name" onChangeText={text=>setTextInputName(text)} />
        <TextInput placeholderTextColor={COLORS.white} placeholder="Update Age"   value={textInputAge} onChangeText={text=>setTextInputAge(text)}/>
        <TextInput placeholderTextColor={COLORS.white} placeholder="Update Description"   value={textInputDescription} onChangeText={text=>setTextInputDescription(text)}/>
      </View>
      <TouchableOpacity onPress={update}>
        <View style={styles.iconContainer}>
        {/* <Icon name="add" color="white" size={30} /> */}
        <Text>Update</Text>
      
        </View>
       </TouchableOpacity>
       </View>
       </SafeAreaView>
    );
  }
  