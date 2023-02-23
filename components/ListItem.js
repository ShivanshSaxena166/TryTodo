import React from 'react';
import {Todo,setTodo} from'../Todo'
const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};
import {View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native';
import * as RootNavigation from '../rootNavigation';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles1'

const ListItem=({todo, markTodoComplete,deleteTodo})=>{
  const navigation = useNavigation();
  
   
 

return (<View style={styles.listitem}>
  <View style={{flex:1}}>
  <TouchableOpacity  onPress={() => RootNavigation.navigate('ItemDetails', { todoId:todo.id,todoName:todo.Name,todoAge:todo.Age,todoDescription:todo.Description,TODO:todo })}> 
  {/* <TouchableOpacity  onPress={() => navigation.navigate('ItemDetails',{ todoId:todo.id,todoName:todo.Name,todoAge:todo.Age,todoDescription:todo.Description })}>  */}
  <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.primary,textDecorationLine: todo?.completed?'line-through':'none'}} >Name: {todo.Name}   </Text>
 
  <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.primary,textDecorationLine: todo?.completed?'line-through':'none'}}>Age: {todo.Age} </Text>


  <Text style={{fontWeight:'bold', fontSize:15, color:COLORS.primary,textDecorationLine: todo?.completed?'line-through':'none'}}>Description: {todo.Description} </Text>
  </TouchableOpacity>
  </View>
 




</View>
) 
} 
// const styles = StyleSheet.create({
//    listitem:{
//     padding: 20,
//     backgroundColor: COLORS.white,
//     flexDirection: 'row',
//     elevation: 12,
//     borderRadius: 7,
//     marginVertical: 10,
//     color:"#000000"
//    },
//    actionIcon: {
//     height: 25,
//     width: 25,
  
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'red',
//     marginLeft: 5,
//     borderRadius: 3,
//   }

//    });
   const markTodoComplete=(todoIds)=>{
    const newTodos =Todo.map(item=>{
      if(item.id==todoIds)
      {
        return {...item,completed:true}
      }
      return item;
    })
      
    setTodo(newTodos);
    }
   export default ListItem;