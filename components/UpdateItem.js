import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import {  SafeAreaView,StyleSheet, View,Text,TextInput,FlatList,Alert,Button} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Todo,setTodo,delTodo,updateTodo} from'../Todo'
const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};
import * as RootNavigation from '../rootNavigation';
import {styles} from './styles1'
import { contextTodo,contextItemDetails } from "../context/contextTodo";
import {useContext} from 'react'

export default function UpdateItem({navigation,route}) {
  
    const[todoStateList,settodoStateList]=useContext(contextTodo)
    const[contextItemDetail,setcontextItemDetail]=useContext(contextItemDetails)
    const [textInputName, setTextInputName] = React.useState('');
    const [textInputAge, setTextInputAge] = React.useState('');
    const [textInputDescription, setTextInputDescription] = React.useState('');
    
   
    const update=()=>{
   
        const newTodos =todoStateList.map(item=>{


          if(item.id==contextItemDetail.id)
          
          { 

            if(textInputName!='')
            item.Name=textInputName
        
            if(textInputAge!='')
            item.Age=textInputAge
            if(textInputDescription!='')
          item.Description=textInputDescription

            setcontextItemDetail(item)
            
   return item
          }
          return item;
        })
          console.log("Update")
          console.log(newTodos)
        settodoStateList(newTodos);
        RootNavigation.navigate('ItemDetails')
        }
  
   
    return (
      <SafeAreaView   style={{flex:1,backgroundColor:COLORS.white}}>
        <View style={styles.listitem}>
  <View style={{flex:1}}>
  <TouchableOpacity > 
  {/* <TouchableOpacity  onPress={() => navigation.navigate('ItemDetails',{ todoId:todo.id,todoName:todo.Name,todoAge:todo.Age,todoDescription:todo.Description })}>  */}
  <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.primary}} >Name: {contextItemDetail.Name}   </Text>
 
  <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.primary}}>Age: {contextItemDetail.Age} </Text>


  <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.primary}}>Description: {contextItemDetail.Description} </Text>
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
  