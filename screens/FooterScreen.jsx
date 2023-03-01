import { StyleSheet, View } from 'react-native'
import React from 'react';
import  Entypo from "react-native-vector-icons/Entypo";


//Here is the icons that sees in footer.
const FooterScreen = () => {
  return (
    <View>
      <View style={{backgroundColor:'black',padding:4, marginTop:-109, display:'flex', flexDirection:'row', justifyContent:'space-around'}} >
    
    <Entypo name={"facebook-with-circle"} size={30} color={'white'}/>
    <Entypo name={"instagram-with-circle"} size={30} color={'white'}/>
    <Entypo name={"linkedin-with-circle"} size={30} color={'white'}/>

 </View>
    </View>
  )
}

export default FooterScreen

const styles = StyleSheet.create({})