const COLORS={primary:'#1f145c',white:'#fff',black:'#000000',Green:'#00FF00',red:'#FF0000'};
import {
  StyleSheet
   
  } from 'react-native';
export const styles = StyleSheet.create({
    header:{
     padding:20,
     flexDirection:"row",
     alignItems:'center',
     justifyContent:'space-between'
    },
    footer:{
     position:'absolute',
     bottom:0,
   
     width:'100%',
     flexDirection:'row',
     alignItems:'center',
     paddingHorizontal:20
   
   
    },
    inputContainer:{
    backgroundColor:'#000000',
    elevation:40,
    flex:1,
    height:150,
    marginVertical:20,
    marginRight:20,
    borderRadius:30,
    paddingHorizontal: 20,
    color: 'black'
   
   
    },
    iconContainer: {
     height: 50,
     width: 50,
     backgroundColor: COLORS.primary,
     elevation: 40,
     borderRadius: 25,
     justifyContent: 'center',
     alignItems: 'center',
   },
   listitem:{
     padding: 20,
     backgroundColor: COLORS.white,
     flexDirection: 'row',
     elevation: 12,
     borderRadius: 7,
     marginVertical: 10,
     color:"#000000"
    },
    actionIcon: {
     height: 25,
     width: 25,
   
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'red',
     marginLeft: 5,
     borderRadius: 3,
   }
   });