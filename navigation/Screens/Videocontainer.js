import { View, Text,Button } from 'react-native'
import React, { useContext } from "react";
import { ResizeMode, Video } from 'expo-av'
import { Card } from 'react-native-shadow-cards'
import { Image } from 'react-native'
import { FitnessItemss } from '../../Context_new'
// const img=require('')
const Videocontainer = () => {
  const{
    minutes,
    calories,
    workout,
  }=useContext(FitnessItemss);
    
  return (

    <View style={{flex:1,justifyContent:'center',backgroundColor: 'white',alignItems:'center'}}>
      <Card style={{padding:10,backgroundColor:'#73F74B',margin:15,cornerRadius:10,opacity:0.8,alignItems:'center',borderRadius:30}}>
        
       <Image source={require('./image/dumble.jpg')} style={{height:50,width:50,borderRadius:10,justifyContent:'center',alignItems:'center'}}/>
       <Text style={{fontStyle:'italic',color:'white',fontSize:20,fontWeight:'bold'}}>Workout:-{workout}</Text>
      </Card>
      <Card style={{padding:10,backgroundColor:'#DD552A',margin:15,cornerRadius:20,opacity:0.8,alignItems:'center',borderRadius:30}}>
       <Image source={require('./image/fire2.jpg')} style={{height:50,width:50,borderRadius:10}}/>
       <Text style={{fontStyle:'italic',color:'white',fontSize:20,fontWeight:'bold'}}>calories:-{calories}</Text>

      </Card>
      <Card style={{padding:10,backgroundColor:'#F4E63F',margin:15,cornerRadius:10,opacity:0.8,alignItems:'center',borderRadius:30}}>
       <Image source={require('./image/clock.jpg')} style={{height:50,width:50,borderRadius:10}}/>
       <Text style={{fontStyle:'italic',color:'white',fontSize:20,fontWeight:'bold'}}>Min:-{minutes}</Text>

      </Card>
      
  
    
    </View>
  )
}

export default Videocontainer