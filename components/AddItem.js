import React from "react";
import { TouchableOpacity } from 'react-native';
import {  SafeAreaView,StyleSheet, View,Text,TextInput} from "react-native";
import {setTodo} from'../Todo'
import uuid from 'react-native-uuid';
const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};
import {styles} from './styles1'
import * as RootNavigation from '../rootNavigation';
import {contextTodo} from '../context/contextTodo'
import {useContext} from 'react'
export default function AddItem({ navigation }) {

  const[todoStateList,settodoStateList]=useContext(contextTodo)

  const [textInputName, setTextInputName] = React.useState('');
  const [textInputAge, setTextInputAge] = React.useState('');
  const [textInputDescription, setTextInputDescription] = React.useState('');
  

  const addTodo=()=>{

    const newTodo={
    
     id:uuid.v4(),Name:textInputName,Age:textInputAge,Description:textInputDescription,completed:false,
     
    };
    setTextInputName('')
    setTextInputAge('')
    setTextInputDescription('')
   var Y=[...todoStateList,newTodo]
    
   settodoStateList(Y)

   setTodo(newTodo)
   RootNavigation.navigate('List')
  
  }  


 
  return (
    <SafeAreaView   style={{flex:1,backgroundColor:COLORS.white}}>
    <View style={styles.footer}>
    <View style={styles.inputContainer}>
    
      <TextInput placeholderTextColor={COLORS.white} 
      value={textInputName}
      placeholder="Add Name" onChangeText={text=>setTextInputName(text)} />
      <TextInput placeholderTextColor={COLORS.white} placeholder="Add Age"   value={textInputAge} onChangeText={text=>setTextInputAge(text)}/>
      <TextInput placeholderTextColor={COLORS.white} placeholder="Add Description"   value={textInputDescription} onChangeText={text=>setTextInputDescription(text)}/>
    </View>
    <TouchableOpacity onPress={addTodo}>
      <View style={styles.iconContainer}>
   
      <Text>Add</Text>
    
      </View>
     </TouchableOpacity>
     </View>
     </SafeAreaView>
  );
}
export const AddItemstyles = StyleSheet.create({
  
 
 });
