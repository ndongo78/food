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
import { Rating, AirbnbRating } from 'react-native-ratings';
import {useNavigation, useRoute} from "@react-navigation/native";


const {width,height}=Dimensions.get('window')

const Detail=()=>{
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
        <Ionicons name="ios-chevron-back-sharp" size={35} />
       </Pressable>
       <Pressable style={tw`bg-white rounded-full m-2 p-2 justify-center items-center`}>
        <Ionicons name="ios-heart" size={35} />
           {/*<Text>❤️</Text>*/}
       </Pressable>
     </View>
        <ScrollView>
        <View style={tw`justify-center items-center`}>
            <Image
                source={{uri:item.image}}
                style={[{width:width-50,height:height/3.2,resizeMode:'contain'},tw`m-4 `]}
            />
        </View>
        <View style={tw`mt-4`}>
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`ml-2 text-3xl font-semibold`}>{item.name}</Text>
                <Text style={tw`ml-2 text-3xl font-semibold mr-3`}>{item.price}€</Text>
            </View>
               <View style={tw`justify-start mb-15`}>
                <Rating
                    //showRating
                    onFinishRating={()=>{}}
                    style={tw`absolute left-2 top-3 bg-slate-300`}
                    tintColor={'#999'}
                    readonly={true}
                    ratingCount={5}
                    startingValue={Number(item.note)}
                />
               </View>
            <View style={tw`flex-row justify-between mt-2`}>
                <View style={tw`flex-row`}>
                    <View style={tw`flex-row items-end justify-center`}>
                        <Text style={tw`text-4xl`}>🔥</Text>
                        <Text style={tw`text-xs`}>210 colories</Text>
                    </View>
                    <View style={tw`flex-row items-end justify-center ml-4`}>
                        <Text style={tw`text-5xl`}>🛵</Text>
                        <Text style={tw`text-xs`}>15 à 20mn</Text>
                    </View>
                </View>
                <View style={tw`flex-row  bg-amber-400 mr-3 rounded-2xl`}>
                    <TouchableOpacity style={tw`items-center justify-center p-2`}>
                        <AntDesign name={'minus'} style={tw`text-2xl text-black font-bold`}    />
                    </TouchableOpacity>
                    <Text style={tw`text-2xl text-black font-bold items-center justify-center m-1`}>1</Text>
                    <TouchableOpacity style={tw`items-center justify-center p-2`}>
                        <AntDesign name={'plus'} style={tw`text-2xl text-black font-bold`}    />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={tw`text-2xl m-3`}>Description</Text>
                <View>
                    <Text style={tw`text-sm ml-1`}>
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour
                        calibrer une mise en page,
                        le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée
                    </Text>
                </View>
                <Text style={tw`text-2xl m-3 font-bold`}>Ingrédients</Text>
                <View style={tw`flex-row justify-around items-end mb-2`}>
                <View style={tw`flex-row justify-between`}>
                 <Image
                 source={require("../../assets/ingredients/salade.png")} 
                 style={[tw`w-15 h-15 `,
                 {resizeMode: 'contain'}]} 
                 />
                  <Image
                 source={require("../../assets/ingredients/hache.png")} 
                 style={[tw`w-15 h-15 `,
                 {resizeMode: 'contain'}]} 
                 />
                </View>
                
                 <TouchableOpacity style={tw`-mt-4 bg-amber-400 rounded-full w-15 h-15 items-center justify-center`}>
                  <MaterialCommunityIcons name="shopping-outline" size={25} style={tw`p-3`} />
                   </TouchableOpacity>
                <View style={tw`flex-row justify-between -ml-2`}>
                 <Image
                 source={require("../../assets/ingredients/fromage.png")} 
                 style={[tw`w-15 h-15`,
                 {resizeMode: 'contain'}]} 
                 />
                  <Image
                 source={require("../../assets/ingredients/cornichon.png")} 
                 style={[tw`w-15 h-15 `,
                 {resizeMode: 'contain'}]} 
                 />
                </View>
      </View>
            </View>
        </View>
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