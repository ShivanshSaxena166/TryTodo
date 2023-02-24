import React, { useState } from 'react';
const COLORS={primary:'#1f145c',white:'#fff',black:'#000000'};
import {
  SafeAreaView, View,Text,FlatList,Alert} from 'react-native';
import ListItem from './ListItem';
import {styles} from './styles1'
import {contextTodo} from '../context/contextTodo'
import {useContext} from 'react'
import {
  StyleSheet
   
  } from 'react-native';
export default function List({navigation,route})

{
   
  const[todoStateList,settodoStateList]=useContext(contextTodo)
    return (
      <SafeAreaView
      style={styles2.safeareaView} >
       
        <View style={styles.header}>
       <Text style={styles2.textStyle}>TODO APP </Text>
  
       </View>
       <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles2.contentContainerStyle}
          data={todoStateList}
          renderItem={({item}) => <ListItem  todo={item} />}
        />
  
    </SafeAreaView>
    );
}


export const styles2 = StyleSheet.create({
safeareaView:{
  flex:1,backgroundColor:COLORS.white
},
textStyle:{fontWeight:'bold',fontSize:20,color:COLORS.primary

},
contentContainerStyle:
{padding: 20, paddingBottom: 100
  
}

    
   });
