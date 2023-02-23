import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import {  SafeAreaView,StyleSheet, View,Text,TextInput,FlatList,Alert} from "react-native";
import {setTodo} from'../Todo'
import uuid from 'react-native-uuid';
const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};
import {styles} from './styles1'
import * as RootNavigation from '../rootNavigation';
export default function AddItem({ navigation }) {
  // const[todos,setTodos]=React.useState([[] 
  // ]);

  const [textInputName, setTextInputName] = React.useState('');
  const [textInputAge, setTextInputAge] = React.useState('');
  const [textInputDescription, setTextInputDescription] = React.useState('');
  

  const addTodo=()=>{
    
//   if(!exceptionHandling.checkTypes(textInputName,textInputAge,textInputDescription))
//   {   Alert.alert("Error","Please enter valid Input")
// return;
//   }
    const newTodo={
    
     id:uuid.v4(),
     Name:textInputName,
     Age:textInputAge,
     Description:textInputDescription,
     completed:false,
     
    };
    setTextInputName('')
    setTextInputAge('')
    setTextInputDescription('')
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
      {/* <Icon name="add" color="white" size={30} /> */}
      <Text>Add</Text>
    
      </View>
     </TouchableOpacity>
     </View>
     </SafeAreaView>
  );
}
