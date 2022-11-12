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
    TouchableOpacity, ScrollView, Alert
} from "react-native"
import {Ionicons, AntDesign, MaterialCommunityIcons, MaterialIcons} from "react-native-vector-icons"
import tw from 'twrnc';
import React, {useRef, useState} from "react";
import {Avatar} from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';
import {useNavigation} from "@react-navigation/native";

const {width,height}=Dimensions.get('window')
const Cart =()=>{
    const navigation=useNavigation()
    const [cart, setCart] = useState([1,2,3,4].map((item,index)=>(
        {
            key:index
        }
    )));

    const rowRef = useRef(null);

    const closeRow = (rowMap, rowKey) => {

    };

    const deleteRow = (rowMap, rowKey) => {

    };

    const onRowDidOpen = rowKey => {
        //Alert.alert("")
        console.log('This row opened', rowKey);
    };

    const renderItem = data => (
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
    );

    const renderHiddenItem = (data, rowMap) => (
        <View
            style={
            tw`bg-transparent flex-row justify-end w-80%
             self-end items-center mt-6.7  h-29 mr-4`
            }
            >
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                //onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <MaterialCommunityIcons
                 name={'delete'}
                 size={45}
                 color={'red'}
                />
            </TouchableOpacity>
        </View>
    );

  return (
    <View style={styles.container}>
          <View style={tw`justify-between flex-row items-center `}>
       <Pressable
           style={tw`bg-white rounded-full m-2 p-2 justify-center items-center`}
           onPress={()=>navigation.navigate("Home")}
       >
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
       <View style={tw` h-${height/5.9}`}>
           <SwipeListView
               disableRightSwipe
               data={cart}
               renderItem={renderItem}
               renderHiddenItem={renderHiddenItem}
               leftOpenValue={75}
               rightOpenValue={-50}
               previewRowKey={'0'}
               previewOpenValue={-40}
               previewOpenDelay={3000}
               onRowDidOpen={onRowDidOpen}
               closeOnScroll={true}
           />
       </View>

        <View style={tw`  absolute w-100%
       bottom-0 bg-white h-40 rounded-t-5 p-2 shadow-xl`}
        >
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-xl font-bold`}>Total à payer</Text>
                <Text style={tw`text-xl font-bold mr-2`}>50€</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-xl font-bold`}>Articles</Text>
                <Text style={tw`text-xl font-bold  mr-2`}>4</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-xl font-bold`}>Livraison</Text>
                <Text style={tw`text-xl font-bold  mr-2`}>Gratuit</Text>
            </View>
             <TouchableOpacity
                 style={tw`bg-amber-400 self-center m-2 rounded-5`}
                  activeOpacity={.6}
                 >
                 <Text style={tw`p-3.3 text-xl  mr-2`}>Payer la commande</Text>
             </TouchableOpacity>
        </View>
    </View>
    )
}

export default Cart



const styles= StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor:"#9998",
  },

});