import tw from "twrnc";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {AntDesign} from "react-native-vector-icons";
import {productsContext } from "../context/ProductProvider"
import {useContext} from "react"


export const  CardCart=({item})=>{
   const {
         addQty,
         removeQty
    } = useContext(productsContext);
    return(
        <View
            style={tw`bg-white flex-row rounded-2xl m-4 h-40`}
        >
            <Image
                source={{uri:item.image}}
                style={[{width:100,height:100,resizeMode:'contain'},tw`m-4 `]}
            />
            <View style={tw`justify-around p-2`}>
                <View>
                    <Text style={tw`text-2xl font-bold `}>
                        {item.name}</Text>
                    <Text style={``}>
                        Le lorem ipsum est, en imprimerie
                    </Text>
                </View>
                <View style={tw`flex-row justify-between items-center`}>
                    <View style={tw`flex-row  bg-amber-400 mr-3 rounded-2xl`}>
                        <TouchableOpacity
                            style={tw`items-center justify-center p-1 ${item.qty === 1 && 'text-white opacity-25'}`}
                        onPress={()=>removeQty(item)}
                         disabled={item.qty === 1 && true}
                        >
                            <AntDesign name={'minus'} style={tw`text-xl text-black font-bold`}    />
                        </TouchableOpacity>
                        <Text style={tw`text-xl text-black  items-center justify-center m-1`}>
                        {item.qty}
                        </Text>
                        <TouchableOpacity style={tw`items-center justify-center p-1`}
                        onPress={()=>addQty(item)}
                        >
                            <AntDesign name={'plus'} style={tw`text-xl text-black font-bold`}    />
                        </TouchableOpacity>
                    </View>
                    <Text
                        style={tw`text-2xl font-bold mr-2 `}>{item.price * item.qty}€</Text>
                </View>
            </View>
        </View>
    )
}

