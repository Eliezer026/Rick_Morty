import { StyleSheet } from "react-native";

//Here is the Styles de la Screen CardDetail

 export const CardDetailStyles = StyleSheet.create({
   
    plot:{
        color:'darkgrey',


    },
    image:{
        height:200,
        width:200,
        aspectRatio:16/9,
        resizeMode:'cover',
        borderRadius:3

    },
    titleContainer:{
        flex:1,
        padding:5,
        justifyContent:'center',

    

    },
    row:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:30,
        backgroundColor:'#fff',
        height:603,

        

    },
    title:{
        color:'black',
        fontSize:14

    },
    duration:{
        color:'darkgrey',
        fontSize:10
        

    }
  });