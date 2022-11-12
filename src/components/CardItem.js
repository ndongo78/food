import React, {useEffect} from 'react';
import tw from "twrnc";
import {Image, Text, View, Dimensions, Pressable, Alert, TouchableOpacity} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons";

const {width}=Dimensions.get('window')

//console.log('width',width)

export const CardItem=({item}) =>{
    const navigation = useNavigation();





    return (
        <View style={tw`bg-white w-${width/9.5} m-3  relative mt-15 shadow-2xl   h-50 rounded-xl justify-between`}>
            <Image
                source={{uri:item.image}}
                style={[{width:100,height:100,resizeMode:'contain'},tw`absolute -top-10 left-5`]}
            />
            <View style={tw`items-center mt-15`}>
                <Text style={tw`text-2xl font-bold m-2`}> {item.name} </Text>
                <Pressable
                    onPress={()=>navigation.navigate("Detail",{item: item})}
                    //style={tw`flex-row  flex-wrap ml-3 mr-3`}
                >
                <Text style={tw`text-sm `}>voir plus ...</Text>
                </Pressable>
            </View>
            <View style={tw`flex-row justify-between m-2`}>
                <Text style={tw`text-xl`}> {item.price} € </Text>
                <TouchableOpacity
                onPress={()=>Alert.alert('item',item.id.toString())}
                style={tw`shadow-2xl bg-[#111] rounded-full`}
                >
                <AntDesign name={'plus'} size={25} color={'#fff'}  />
                </TouchableOpacity>
            </View>
        </View>
    );
}

