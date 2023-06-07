import { View, Text,StyleSheet,Image, ScrollView, Pressable, Button, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FitnessItemss } from '../../Context_new';
import { AntDesign } from '@expo/vector-icons';

const Workout = () => {
  const route=useRoute();
  const navigation=useNavigation();
  const{
    completed,
    setCompleted,
  }=useContext(FitnessItemss)
 
  return (
    <>
    <ScrollView
    showsHorizontalScrollIndicator={false}
    style={{ backgroundColor: "white" }}
    >
         <Image style={{width:'100%',height:450,borderBottomLeftRadius:50,borderBottomRightRadius:50,alignSelf:'center'}}
         source={{uri:route.params.image}}
         /> 

       
          
         {route.params.excercisees.map((item,index)=>(
          
          <Pressable style={{margin:20,flexDirection:'row',alignItems:'center',backgroundColor:"grey"}} key={index}>
            <Image style={{height:150,width:90}} source={{uri:item.image}}/>
            <View style={{marginLeft:10,justifyContent:'center'}}>

            <Text style={{textAlign:'center',justifyContent:'center',width:170}}>{item.name}</Text>
            </View>
            <View >

            <Text style={{fontSize:18}}>×{item.sets}</Text>
            </View>
            {completed.includes(item.name)?(
              <AntDesign style={{marginLeft:20}} name="checkcircle" size={24} color="green" />

            ):(
              null
            )}
          </Pressable>
         ))}

     </ScrollView>
          <View style={{backgroundColor:"white"}}>
            <Pressable onPress={()=>{navigation.navigate("fit",{excercise:route.params.excercisees})}} style={{ backgroundColor: "#FF5722",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 10,
          width:120,
          borderRadius:20,}}>
              <Text style={{alignContent:'center',alignSelf:'center',fontSize:20,color:'white'}}>Start</Text>
            </Pressable>
          </View>
    
    </>
  )
}

export default Workout