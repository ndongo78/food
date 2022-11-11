import {View,Text, Platform,SafeAreaView ,StyleSheet,StatusBar} from "react-native"

const Detail=()=>{
  return(
    <SafeAreaView style={styles.const}>
     <Text>Detail</Text>
    </SafeAreaView>
    )
}

export default  Detail

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});