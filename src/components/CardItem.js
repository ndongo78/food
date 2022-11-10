import React from 'react';
import tw from "twrnc";
import {Image, Text, View} from "react-native";
import {MaterialIcons} from "react-native-vector-icons";

export const CardItem=() =>{
    return (
        <View style={tw`bg-white w-40  m-3 relative mt-10 h-50 rounded-xl justify-between`}>
            <Image
                source={{uri:'https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0'}}
                style={[{width:100,height:100,resizeMode:'contain'},tw`absolute -top-10 left-5`]}
            />
            <View style={tw`items-center mt-15`}>
                <Text style={tw`text-2xl font-bold m-2`}>Big Mag</Text>
                <Text>description du menu</Text>
            </View>
            <View style={tw`flex-row justify-between m-2`}>
                <Text style={tw`text-xl`}>10€</Text>
                <MaterialIcons name={'favorite-outline'} size={30}  />
            </View>
        </View>
    );
}

