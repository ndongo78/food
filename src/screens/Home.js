import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions ,Pressable} from 'react-native'
import tw from 'twrnc';
import {MaterialIcons , Ionicons ,MaterialCommunityIcons} from 'react-native-vector-icons'

import {menuItems} from "../../assets/constants/MenuItems";
import {CardItem} from "../components/CardItem";
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios'
import {useEffect, useState} from "react";


const {width,height}=Dimensions.get('window')

//console.log(height)
const Home=()=>{
    const [products, setProducts] = useState([]);
    const navigation = useNavigation();
    const route=useRoute()

  const fetchData = (category)=>{
      axios.get(
          `https://nd-del.herokuapp.com/api/products/${category}`,
          //{headers:{ Authorization: `Bearer ${token}`}}
      )
          .then(response => {
              setProducts(response.data)
          })
          .catch(error => {
              console.log("errors",error.response.data)
          })
  }
    const fetchAllData = ()=>{
        axios.get(
            `https://nd-del.herokuapp.com/api/products`,
            //{headers:{ Authorization: `Bearer ${token}`}}
        )
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => {
                console.log("errors",error.response.data)
            })
    }

  useEffect(()=>{
        fetchAllData()
  },[])



return (
 <View style={styles.container}>
  <View>
    <View style={tw`m-3`}>
        <Text style={tw`text-8 mt-2`}> Que voulez-vous </Text>
        <View style={tw`flex-row mt-2 mb-3`}>
            <Text style={tw`text-2xl ml-1 mb-2 mt-2`}> dîner aujourd'hui</Text>
            <Image source={require('../../assets/images/petit-dejeuner.png')}
                   style={[tw`w-10 h-10 ml-2`,{resizeMode: 'contain'}]}
            />
        </View>
    </View>
     <View>
         <FlatList
         data={menuItems}
         showsHorizontalScrollIndicator={false}
         horizontal={true}
         renderItem={({item})=>(
             <TouchableOpacity
             style={tw`m-4 w-20 h-15 bg-white justify-center items-center rounded[25] shadow-2xl`}
              activeOpacity={.8}
             onPress={()=>fetchData(item.category)}
             >
                 <Image source={item.img} style={[tw`w-10 h-10`,{resizeMode: 'contain'}]}   />
             </TouchableOpacity>
         )}
         />
     <Text style={tw`text-2xl m-2 p-2`}>Recommander pour vous !</Text>
     </View>
       <FlatList 
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item})=>(
        <Pressable
        onPress={()=>navigation.navigate("Detail",{item: item})}
        //style={tw`flex-row  flex-wrap ml-3 mr-3`}
        >
       <CardItem item={item} />
        </Pressable>
        )}
        style={tw` h-${height/7.8}`}
        numColumns={2}
       />
      
    </View>
     <View style={tw`flex-row  absolute w-100%
     bottom-0 bg-white h-16 justify-between items-center rounded-t-2xl`}>
      <TouchableOpacity style={tw`ml-4 items-center`}>
       <Ionicons name="ios-home-outline" size={25} 
       />
          {route.name === "Home" && <Text style={tw`bg-amber-500 h-2 w-2 rounded-full`} />}
      </TouchableOpacity>
      <TouchableOpacity>
       <Ionicons name="ios-search-outline" size={25}  />
      </TouchableOpacity>
      <View style={tw`bg-transparent -mt-4`}>
       <TouchableOpacity 
       style={tw`-mt-4 bg-amber-400 rounded-full`}
       onPress={()=>navigation.navigate("Cart")}
       >
       <MaterialCommunityIcons name="shopping-outline" size={25} style={tw`p-3`} />
      </TouchableOpacity>
      </View>
      <TouchableOpacity>
       <MaterialIcons name="favorite-outline"size={25}  />
      </TouchableOpacity>
      <TouchableOpacity style={tw`mr-4`}>
       <Ionicons name="notifications-outline" size={25} />
      </TouchableOpacity>
     </View>
 </View>
)
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#9998",
        justifyContent:"space-between"
    }
})