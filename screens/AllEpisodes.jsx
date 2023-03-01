import { StyleSheet, Text, View, Image,Pressable, TouchableOpacity,FlatList, Alert} from 'react-native'
import React,{useEffect, useState} from 'react';
import {AllEpisodesStyles} from "../styles/index";
import photoBanner from "../assets/hero.png";
import EpisodesCard from '../components/EpisodesCard';
import { useNavigation } from '@react-navigation/native';




//this is Screen Main
const AllEpisodes = ({route}) => {

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);



    const navigation = useNavigation();
    useEffect(() => {

      fetchApi('https://rickandmortyapi.com/api/character');

        //calls the property headerSearchBarOptions
        navigation.getParent()?.setOptions({
            headerShown: true,
            headerTitle:"",
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                color:"#fff"
              },
              headerSearchBarOptions: { 
                placeholder: 'Search',
                color:"#fff",
                textColor:"#FFF",
                onChangeText:(event) => {
                  serchsEpisodes(event.nativeEvent.text);
                }

            
            },
        })

    },[data]);


    //Get dates with Fetch
    const fetchApi = async(url) => {
      try{

        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
        
      }catch(error) {
        console.error(error);
      }

    }

      
      
    
    //Search the elements
    const serchsEpisodes = (text) => {

      
      if(text){
        const newData = data.filter(item => {
          const itemData = item.name ? item.name : '';
          const textData = text;
          return itemData.indexOf(textData) > -1;
        });
        setFilterData(newData);


      }else {
        setData('');
        setFilterData(data);
      }


    }

  return (
    <View style={{ marginLeft:10, marginTop:110 }} >
      <View>
      <Image style={ AllEpisodesStyles.image}  source={photoBanner} />
      </View>
      <View style={{ marginTop:-150 }} >
        <Text style={{ color:'#fff', fontSize:30, fontWeight:'bold'}} >The Rick And Morty</Text>
        <Text style={{ color:'#fff',fontSize:30, fontWeight:'bold'}}>Challenge</Text>
        <Text style={{ color:'#fff',fontSize:15}}>Lorem Ipsum dolor sit amet</Text>
        <View style={{ padding:0 }} >
        <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginTop:10,marginLeft:10,
        borderRadius: 50, elevation: 3, backgroundColor: '#FF4FD4',width: 130, height: 40  }}>
          <Text style={{fontSize: 14, lineHeight: 21, fontWeight: 'bold',letterSpacing: 0.25,color: 'white',}}>Subscribe</Text>
        </TouchableOpacity>
        </View>
      </View>

<View style={{ marginBottom:60 }} >
      <FlatList
      
     data={filterData.length > 0 ? filterData : data}
     style={{ marginBottom:270, top:50 }}
     renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('Details',{item})} ><EpisodesCard episodes={item}/></TouchableOpacity> }
     />
</View>

    </View>
  )
}

export default AllEpisodes

const styles = StyleSheet.create({})