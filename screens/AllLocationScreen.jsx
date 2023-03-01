import { Text, View, FlatList } from 'react-native'
import React,{useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import ListLinksAllLocation from "../components/ListLinksAllLocation";




const AllLocationScreen = () => {

  const [data, setData] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {

      fetchApi('https://rickandmortyapi.com/api/location');
        navigation.getParent()?.setOptions({
            headerShown: false,
            headerTitle:"",
            headerBackTitleVisible:true,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                color:"#fff"
              },
              headerSearchBarOptions: { 
                placeholder: 'Search',
                color:"#fff",
                textColor:"#FFF"
            
            },
        })

    },[navigation.getParent()?.setOptions({
        headerShown: false
    })]);

    const fetchApi = async(url) => {
      try{

        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
        console.log(json.results);
        
      }catch(error) {
        console.error(error);
      }
    }

  return (
    <View style={{ marginTop:70,display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
      <Text style={{color:'#FFF', fontSize:20}} >List Links</Text>

      <FlatList
          showsHorizontalScrollIndicator={false}
          
          data={data}
          renderItem={({ item }) => <ListLinksAllLocation item={item} />}
          
        />
    </View>
  )
}

export default AllLocationScreen
