import { StyleSheet } from "react-native";


//Here is the Styles of Componet Episodes

 export const EpisodeCardStyles = StyleSheet.create({
   
    plot:{
        color:'darkgrey',


    },
    image:{
        height:150,
        width:150,
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
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:5,
        backgroundColor:'#fff',
        height:83,
        

    },
    title:{
        color:'black',
        fontSize:11

    },
    duration:{
        color:'darkgrey',
        fontSize:10
        

    }
  });