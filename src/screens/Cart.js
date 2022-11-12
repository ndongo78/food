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
import React from "react";
import {Avatar} from 'react-native-paper';

const {width,height}=Dimensions.get('window')
const Cart =()=>{
  return (
    <View style={styles.container}>
          <View style={tw`justify-between flex-row items-center `}>
       <Pressable style={tw`bg-white rounded-full m-2 p-2 justify-center items-center`}>
        <Ionicons name="ios-chevron-back-sharp" size={35} />
       </Pressable>
       <Text style={tw`text-2xl font-semibold`}>votre panier</Text>
       <Pressable style={tw`rounded-full m-2 p-2 justify-center items-center`}>
        <Avatar.Image
         source={{
         uri: `https://picsum.photos/200/300`,
          }}
          size={40}
          style={tw`rounded-3xl shadow-xl bg-white items-center`}
           />
       </Pressable>
     </View>
     <View
     style={tw`bg-white flex-row rounded-xl m-4`}
     >
        <Image
         source={{uri:'https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0'}}
             style={[{width:100,height:100,resizeMode:'contain'},tw`m-4 `]}
          />
          <View style={tw`justify-around p-2`}>
           <View>
             <Text style={tw`text-2xl font-bold `}>
             Big Mac</Text>
           <Text style={``}>
             Le lorem ipsum est, en imprimerie
           </Text>
           </View>
           <View style={tw`flex-row justify-between items-center`}>
               <View style={tw`flex-row  bg-amber-400 mr-3 rounded-2xl`}>
                    <TouchableOpacity style={tw`items-center justify-center p-1`}>
                        <AntDesign name={'minus'} style={tw`text-xl text-black font-bold`}    />
                    </TouchableOpacity>
                    <Text style={tw`text-xl text-black  items-center justify-center m-1`}>1</Text>
                    <TouchableOpacity style={tw`items-center justify-center p-1`}>
                        <AntDesign name={'plus'} style={tw`text-xl text-black font-bold`}    />
                    </TouchableOpacity>
                </View>
                 <Text 
                 style={tw`text-2xl font-bold `}>10€</Text>
           </View>
          </View>
     </View>
    </View>
    )
}

export default Cart



const styles= StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor:"#999",
  }
});