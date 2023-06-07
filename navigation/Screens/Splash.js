import { View, Text,ImageBackground,StyleSheet } from 'react-native'
import React from 'react'

const img=require("../../assets/asset/Fitti.png")

const Splash = () => {
  return (
    <View style={style.maincontainer}>
    <ImageBackground source={img} style={style.imagecontiner}></ImageBackground>
    </View>
  )
}
const style=StyleSheet.create({
    maincontainer:{
      flex:1,
      justifyContent:'center',
      alignContent:'center',
    },
    imagecontiner:{
      height:"100%",
      width:"100%",
      justifyContent:'center',
      alignContent:'center',
      
    }
})

export default Splash