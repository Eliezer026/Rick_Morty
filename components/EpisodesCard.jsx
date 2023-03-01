import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';
import {EpisodeCardStyles} from '../styles/index';

const EpisodesCard = ({episodes}) => {
  return (
    
    <View style={{ margin:10 }} >
      <View style={EpisodeCardStyles.row} >
          <Image style={EpisodeCardStyles.image} source={{ url :episodes?.image}} />

          <View style={EpisodeCardStyles.titleContainer} >

              <View style={{ display:'flex', flexDirection:'column',justifyContent:'space-around'}} >
              <View>
              <Text style={[EpisodeCardStyles.title,{fontSize:14, fontWeight:'bold'}]} >{episodes?.name}</Text>
              <Text style={[EpisodeCardStyles.title,{fontWeight:'bold'}]} >{episodes?.status} - {episodes?.species}</Text>
              </View>
              <View>
              <Text style={[EpisodeCardStyles.title,{fontWeight:'bold'}]} >Last known Location</Text>
              <Text style={EpisodeCardStyles.title} >{episodes?.location?.name}</Text>
              </View>
              </View>
            
          </View>


      </View>
    </View>
  )
}

export default EpisodesCard

const styles = StyleSheet.create({})