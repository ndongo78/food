import {
    View,
    Text,
    Platform,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Pressable,
    Image,
    Dimensions,
    TouchableOpacity, ScrollView
} from "react-native"
import {Ionicons ,AntDesign,MaterialCommunityIcons} from "react-native-vector-icons"
import tw from 'twrnc';
import React, {useContext} from "react";
import { Rating, AirbnbRating } from 'react-native-ratings';
import {useNavigation, useRoute} from "@react-navigation/native";
import {productsContext} from "../context/ProductProvider";
import {CardDetaill} from "../components/CardDetaill";


const {width,height}=Dimensions.get('window')

const Detail=()=>{
    const {cart} = useContext(productsContext);
    const {addToCart} = useContext(productsContext);
    const navigation=useNavigation()
const router=useRoute()
    const {item}=router.params

    return(
    <SafeAreaView style={styles.container}>
     <View style={tw`justify-between flex-row`}>
       <Pressable
           style={tw`bg-white rounded-full m-2 p-2 justify-center items-center`}
           onPress={()=>navigation.navigate("Home")}
       >
        <Ionicons name="ios-chevron-back-sharp" size={35} style={tw`p-1 `} />
       </Pressable>
       <Pressable
           style={tw`bg-white rounded-full m-2 p-2 justify-center items-center bg-amber-500`}
          onPress={()=>navigation.navigate("Cart")}
       >
           <Text style={tw`absolute z-100 text-white right-3 -top-2 rounded-full font-bold bg-red-800 p-1`}> {cart.length} </Text>
           <MaterialCommunityIcons name="shopping-outline" size={30} style={tw`p-2 text-white`} />
           {/*<Text>❤️</Text>*/}
       </Pressable>
     </View>
        <ScrollView>
            <CardDetaill item={item} />
            <TouchableOpacity
                style={tw`-mt-4 bg-amber-500   w-55 m-3  items-center justify-center self-center rounded-6`}
                onPress={()=>addToCart(item)}
            >
                <Text style={tw`text-white p-3 text-2xl `}>Je commande</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
    )
}

export default  Detail

const styles= StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor:"#9998",
  }
});