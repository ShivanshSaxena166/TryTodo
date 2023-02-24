import React from "react";
import { Button, View, Text } from "react-native";
import {
  StyleSheet} from 'react-native';

export default function ListItems({ navigation }) {
  return (
    <View style={styles.listitemsStyles}>
   
      <Button 
        title="ListItems"
        onPress={() => navigation.navigate('List')}
      />
     
        <Button
        title="Add"
        onPress={() => navigation.navigate("AddItem")}
      />
    </View>
  );
}


export const styles = StyleSheet.create({
listitemsStyles:
{
  flex: 1, alignItems: "center", justifyContent: "center"
}
   });


