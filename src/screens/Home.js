import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions ,Pressable} from 'react-native'
import tw from 'twrnc';
import {MaterialIcons , Ionicons ,MaterialCommunityIcons} from 'react-native-vector-icons'

import {menuItems} from "../../assets/constants/MenuItems";
import {CardItem} from "../components/CardItem";
import { useNavigation } from '@react-navigation/native';


const {width,height}=Dimensions.get('window')

//console.log(height)
const Home=()=>{
  const navigation = useNavigation();
return (
 <View style={styles.container}>
  <View>
    <View>
        <Text style={tw`text-3xl mt-2`}> Que voulez-vous </Text>
        <Text style={tw`text-2xl ml-1 mb-2 mt-2`}> dîner aujourd'hui</Text>
    </View>
     <View>
         <FlatList
         data={menuItems}
         showsHorizontalScrollIndicator={false}
         horizontal={true}
         renderItem={({item})=>(
             <TouchableOpacity
             style={tw`m-4 w-20 h-15 bg-white justify-center items-center rounded[25]`}
              activeOpacity={.8}
             >
                 <Image source={item.img} style={[tw`w-10 h-10`,{resizeMode: 'contain'}]}   />
             </TouchableOpacity>
         )}
         />
     
     <Text style={tw`text-2xl m-2`}>Recommander pour vous</Text>
     </View>
       
       <FlatList 
        data={menuItems}
        keyExtractor={item => item.img.toString()}
        renderItem={({item})=>(
        <Pressable
            onPress={()=>navigation.navigate("Detail",{item: item})}
            style={tw`flex-row  flex-wrap ml-3 mr-3`}>
         <CardItem item={item} />
          </Pressable>
        )}
        style={tw` h-${height/7}`}
        numColumns={2}
      
       />
      
    </View>
     <View style={tw`flex-row  absolute w-100%
     bottom-0 bg-white h-15 justify-between items-center rounded-xl`}>
      <TouchableOpacity style={tw`ml-4`}>
       <Ionicons name="ios-home-outline" size={25} 
       />
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
        backgroundColor:"#999",
        justifyContent:"space-between"
    }
})