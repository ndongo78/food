import tw from "twrnc";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {AntDesign} from "react-native-vector-icons";


export const  CardCart=()=>{

    return(
        <View
            style={tw`bg-white flex-row rounded-2xl m-4 h-40`}
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
                        style={tw`text-2xl font-bold mr-2 `}>10€</Text>
                </View>
            </View>
        </View>
    )
}

