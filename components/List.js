import React, { useState } from 'react';
const COLORS={primary:'#1f145c',white:'#fff',black:'#000000'};
import {
  SafeAreaView, View,Text,FlatList,Alert} from 'react-native';

import ListItem from './ListItem';
import {Todo,setTodo} from'../Todo'
import {styles} from './styles1'
import {contextTodo} from '../context/contextTodo'
import {useContext} from 'react'
export default function List({navigation,route})
{
   
  const[todoStateList,settodoStateList]=useContext(contextTodo)
   
    // React.useEffect(() => {
    //   // getTodosFromUserDevice();
    

    // }, [{navigation}]);
  
    // React.useEffect(() => {
  
    // }, [Todo]);
    // console.log(Todo)
  
  // const saveTodoToUserDevice = async (Todo) => {
  //   try {
  //     const stringifyTodos = JSON.stringify(Todo);
  //     await AsyncStorage.setItem('Todo', stringifyTodos);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  // const getTodosFromUserDevice = async () => {
  //   try {
  //     const todos = await AsyncStorage.getItem('Todo');
  //     if (todos != null) {
  //       setTodo(JSON.parse(Todo));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const markTodoComplete = (todoId) => {
    const newTodosItem = Todo.map(item => {
      if (item.id == todoId) {
        return {...item, completed: true};
      }
      return item;
    });
  
    setTodo(newTodosItem);
  };
  const deleteTodo = (todoId) => {
    const newTodosItem = Todo.filter(item => item.id != todoId);
    setTodo(newTodosItem);
  };
  
  const clearAllTodos = () => {
    Alert.alert('Confirm', 'Clear todos?', [
      {
        text: 'Yes',
        onPress: () => setTodo([]),
      },
      {
        text: 'No',
      },
    ]);
  };
  
    return (
      <SafeAreaView
      style={{flex:1,backgroundColor:COLORS.white}} >
       
        <View style={styles.header}>
       <Text style={{fontWeight:'bold',fontSize:20,color:COLORS.primary}}>TODO APP </Text>
       {/* <Icon name="delete" size={25} color="red" onPress={clearAllTodos} /> */}
       </View>
       <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 20, paddingBottom: 100}}
          data={todoStateList}
          renderItem={({item}) => <ListItem  todo={item} markTodoComplete={markTodoComplete} deleteTodo={deleteTodo} />}
        />
       

  
    </SafeAreaView>
    );
}
