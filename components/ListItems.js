import React from "react";
import { Button, View, Text } from "react-native";

export default function ListItems({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   
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