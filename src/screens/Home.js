import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions,
    Pressable,
    ActivityIndicator,
    Animated,
    TextInput
} from 'react-native'
import tw from 'twrnc';
import {MaterialIcons , Ionicons ,MaterialCommunityIcons , AntDesign} from 'react-native-vector-icons'

import {menuItems} from "../../assets/constants/MenuItems";
import {CardItem} from "../components/CardItem";
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios'
import React, {useContext, useEffect, useRef, useState} from "react";
import {productsContext} from "../context/ProductProvider";


const {width,height}=Dimensions.get('window')

//console.log(height)
const Home=()=>{
    const {products,fetchData,fetchAllData,searchProduct,searchList,notFound} = useContext(productsContext);
    const navigation = useNavigation();
    const route=useRoute()
    const scrollY = useRef(new Animated.Value(0)).current;
    const {cart} = useContext(productsContext);


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
    <View 
    style={
   tw`flex-row self-center items-center
   bg-white rounded-xl  m-4`
    }
    >
     <AntDesign
      name='search1'
      size={25}
      style={tw`m-2`}
     />
      <TextInput
       placeholder="rechercher un produit"
       style={
         tw`bg-white w-70 h-12 p-1`
       }
       onChangeText={(text)=>searchProduct(text)}
      />
     <TouchableOpacity
         activeOpacity={.5}
     >
         <MaterialCommunityIcons
             name="order-bool-descending"
             size={30}
             style={tw`bg-amber-500 p-2 rounded`}
         />
     </TouchableOpacity>
    </View>
      {
          searchList.length > 0 ? (
              <Animated.FlatList
                  data={searchList}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item})=>(
                      <Pressable
                          onPress={()=>navigation.navigate("Detail",{item: item})}
                          //style={tw`flex-row  flex-wrap ml-3 mr-3`}
                      >
                          <CardItem item={item} scrollY={scrollY} />
                      </Pressable>
                  )}
                  style={tw` h-${height/7.8}`}
                  numColumns={2}
                  onScroll={Animated.event(
                      [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                      { useNativeDriver: true }
                  )}
              />
          ):(
              <>
                  <Text style={tw`text-red-600 text-xl italic ml-2`}> {notFound && "Désole pas d'article avec l'orthographe"} </Text>
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
                  {
                      products.length !== 0 ?
                          (
                              <Animated.FlatList
                                  data={products}
                                  keyExtractor={item => item.id.toString()}
                                  renderItem={({item})=>(
                                      <Pressable
                                          onPress={()=>navigation.navigate("Detail",{item: item})}
                                          //style={tw`flex-row  flex-wrap ml-3 mr-3`}
                                      >
                                          <CardItem item={item} scrollY={scrollY} />
                                      </Pressable>
                                  )}
                                  style={tw` h-${height/7.8}`}
                                  numColumns={2}
                                  onScroll={Animated.event(
                                      [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                                      { useNativeDriver: true }
                                  )}
                              />
                          )
                          :(
                              <View style={tw`justify-center items-center mt-10`}>
                                  <ActivityIndicator
                                      size={100}
                                      animating={true}
                                      color={"#000000"}
                                  />
                              </View>
                          )
                  }
              </>
          )
      }

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
       style={tw`-mt-5 bg-amber-500 rounded-full h-17 w-17 items-center justify-center`}
       onPress={()=>navigation.navigate("Cart")}
       >
           <Text style={tw`absolute z-100 text-white right-3 -top-2 rounded-full font-bold bg-red-800 p-1`}> {cart.length} </Text>
       <MaterialCommunityIcons name="shopping-outline" size={35} style={tw`text-white rounded-b-55`} />
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