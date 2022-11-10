import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import tw from 'twrnc';
import {MaterialIcons} from 'react-native-vector-icons'

import {menuItems} from "../../assets/constants/MenuItems";
import {CardItem} from "../components/CardItem";

const Home=()=>{
return (
 <View style={styles.container}>
    <View>
        <Text style={tw`text-3xl mt-2`}> Que voulez-vous </Text>
        <Text style={tw`text-2xl ml-1`}> dîner aujourd'hui</Text>
    </View>
     <View>
         <FlatList
         data={menuItems}
         showsHorizontalScrollIndicator={false}
         horizontal={true}
         renderItem={({item})=>(
             <TouchableOpacity
             style={tw`m-4 w-30 h-20 bg-white justify-center items-center rounded[25]`}
              activeOpacity={.8}
             >
                 <Image source={item.img} style={[tw`w-15 h-15`,{resizeMode: 'contain'}]}   />
             </TouchableOpacity>
         )}
         />
     </View>
     <Text>Recommander pour vous</Text>
     <View style={tw`flex-row flex-wrap `}>
         <CardItem />
         <CardItem />
         <CardItem />
     </View>
 </View>
)
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#999"
    }
})