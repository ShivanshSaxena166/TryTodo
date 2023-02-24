import React from 'react';
import {Todo,setTodo} from'../Todo'
import {View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native';
import * as RootNavigation from '../rootNavigation';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles1'
import {styles2} from './style2'

const ListItem=({todo})=>{
  const navigation = useNavigation();

return (<View style={styles.listitem}>
  <View style={{flex:1}}>
  <TouchableOpacity  onPress={() => RootNavigation.navigate('ItemDetails', { TODO:todo })}> 
  
  <Text style={styles2.textStyle} >Name: {todo.Name}   </Text>
 
  <Text style={styles2.textStyle}>Age: {todo.Age} </Text>


  <Text style={styles2.textStyle}>Description: {todo.Description} </Text>
  </TouchableOpacity>
  </View>
 




</View>
) 
} 
export default ListItem;