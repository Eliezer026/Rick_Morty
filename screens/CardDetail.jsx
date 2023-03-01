import {Text, View, Image} from 'react-native'
import React from 'react';
import {CardDetailStyles} from "../styles/index";


// This is the Screen of detail 
const CardDetail = ({route}) => {

    const numbEpisode = [];
    const { item } = route.params;
    const maps = [item.episode];
    
    maps.map(item => item.map((e,r) =>  numbEpisode.push(r+1,",")));
    numbEpisode.pop();


  return (
    <View>
      <View style={{ paddingRight:-120 }} >
      <View>
      <View style={CardDetailStyles.row}>
              <Image style={[CardDetailStyles.image,{borderRadius:20, marginBottom:50}]} source={{ url : item.image}} />
              
              <View style={{ display:'flex', flexDirection:'column',justifyContent:'center', marginBottom:100}} >

              <View style={{ display:'flex', flexDirection:'row' }} >
             <View style={{ marginRight:60 }} >
              <Text style={[CardDetailStyles.title,{fontSize:18, fontWeight:'bold'}]} >Name:</Text>
              <Text style={[CardDetailStyles.title]} >{ item.name}</Text>
              <Text style={[CardDetailStyles.title,{fontSize:18, marginTop:9, fontWeight:'bold'}]} >Status:</Text>
              <Text style={[CardDetailStyles.title,]} >{ item.status}</Text>
              <Text style={[CardDetailStyles.title,{fontSize:18, marginTop:9, fontWeight:'bold'}]} >Species:</Text>
              <Text style={[CardDetailStyles.title,]} >{ item.species}</Text>
              <Text style={[CardDetailStyles.title,{fontSize:18, marginTop:9, fontWeight:'bold'}]} >Gender:</Text>
              <Text style={[CardDetailStyles.title,]} >{ item.gender}</Text>
              </View>
              <View>
              <Text style={[CardDetailStyles.title,{fontSize:18,fontWeight:'bold'}]} >Origin:</Text>
              <Text style={[CardDetailStyles.title, ]} >{ item.origin.name}</Text>
              <Text style={[CardDetailStyles.title,{fontSize:18, marginTop:9, fontWeight:'bold'}]} >Location:</Text>
              <Text style={[CardDetailStyles.title,]} >{ item.location.name}</Text>
              <Text style={[CardDetailStyles.title,{fontSize:18, marginTop:9, fontWeight:'bold'}]} >Episode:</Text>
              <View style={{ display:'flex', flexDirection:'column', alignContent:'flex-start',width:120 }} >
              <Text style={[CardDetailStyles.title,]} >{numbEpisode}</Text>
              </View>
              </View>
              </View>
              
              <View>
              </View>
              </View>
      </View>
    </View>
      </View>
    </View>
  )
}

export default CardDetail
