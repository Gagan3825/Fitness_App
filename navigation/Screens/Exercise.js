import { View, Text,StyleSheet,Image, ScrollView } from 'react-native'
import React from 'react'

import Fitness from '../Data/fitness'
import FitnessCard from '../FitnessCard'

const Exercise = ({navigation}) => {
  return (
   
    <View style={style.bannercontainer}>
     

      <Image source={require('./image/excersise.jpg')}  style={style.imagecontainer}/>
      
      <View>
        <FitnessCard/>
        
      </View>
    </View>
 
   
  )
}
const style=StyleSheet.create({
  bannercontainer:{
    
    flex:1,
    
    
  },
  imagecontainer:{
    
    // flex:1,
    height:"100%",
    width:"100%",
    position:"absolute",
    opacity:0.5,

    


  }
})
export default Exercise