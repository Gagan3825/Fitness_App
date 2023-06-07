import { View, Text,StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import Card_diet from './Card_diet'
const path=require("../../assets/asset/Background.jpg")

const DietScreen = ({navigation}) => {
  return (
    <View style={style.maincontainer}>
     {/* <Image  /> */}
     <ImageBackground source={path} style={style.imagescreen}></ImageBackground>
     
      <Card_diet/>
     
    </View>
  )
}
const style=StyleSheet.create({
maincontainer:{
  height:"100%",
},
imagescreen:{
  // flex:1,
  position:"absolute",
  height:"100%",
  width:"100%",
  justifyContent: 'center',
  opacity:0.5,
  // marginTop:50,
}
})


export default DietScreen