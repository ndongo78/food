import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AntDesign ,MaterialCommunityIcons} from "react-native-vector-icons"
import {View ,Image ,Text} from "react-native"
import Home from "../screens/Home"
import tw from 'twrnc';
import {Avatar} from 'react-native-paper';


const Stack = createNativeStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: {
          backgroundColor: '#999',
         elevation: 0,
         shadowOpacity: 0,
         borderBottomWidth: 0
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          textAlign:"center"
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }}
    >
    <Stack.Screen name="Home" component={Home} options={{
    headerLeft:()=>(
     <View>
     <Text style={tw`font-bold italic text-2xl transition ease-in-out`}>Bonjour John  </Text>
     </View>
     ),
    headerRight:()=>(
        <Avatar.Image
         source={{
         uri: `https://picsum.photos/200/300`,
          }}
          size={40}
          style={tw`rounded-3xl shadow-xl bg-white items-center`}
           />
     ),
        headerTitle:""
    }}
    
    />
    </Stack.Navigator>
  );
}

export default MyStack