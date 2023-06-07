import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const path=require("../../assets/asset/Men_diet.jpg")
const path1=require("../../assets/asset/Female.jpg")
const Card_diet = () => {
  const navigate =useNavigation();
  return (
    <View style={{justifyContent:'center',alignContent:'center',flex:1}}>
      <Pressable onPress={()=>{
        console.warn("pressable aplicable")
        navigate.navigate("mentable")
      }}>
      <Card style={styles.cardcontainer}>
        {/* <Card.Title title='Men Diet'/> */}
        <Card.Cover source={path} style={{opacity:0.9}}/>
        <Card.Content >
            <Text style={{textAlign:'center',fontSize:15}}>Men diet chart</Text>
        </Card.Content>
      </Card>
      </Pressable>
     
      

      <Pressable onPress={()=>{
        console.warn("pressable aplicable")
        navigate.navigate("femaletable")
      }}>
      <Card style={styles.secondcardcontainer}>
        {/* <Card.Title title='Men Diet'/> */}
        <Card.Cover source={path1} style={{opacity:0.9}}/>
        <Card.Content >
            <Text style={{textAlign:'center',fontSize:15}}>Female diet chart</Text>
        </Card.Content>
      </Card>
      </Pressable>
      
      
      
    </View>
  )
}

export default Card_diet

const styles = StyleSheet.create({
    cardcontainer:{
        justifyContent:'center',
        alignContent:'center',
        // top:'50%',
    },
    secondcardcontainer:{
        marginTop:50,
        justifyContent:'center',
        alignContent:'center',
    }
})