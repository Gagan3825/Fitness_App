import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const RestScreen = () => {
  const navigater=useNavigation();
  let timer=0;
  const [timeleft, settimeleft] = useState(3)
  const starttime=()=>{
    setTimeout(()=>{
      if(timeleft<=0){
        navigater.goBack();
        clearTimeout(timeleft-1);
      }
      settimeleft(timeleft-1);

    },1000);
  };
  useEffect(() => {
    starttime();
  
    return () => clearTimeout(timer);
  },);
  
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
     
      <Image style={styles.imagecontainer} source={{uri:'https://static.vecteezy.com/system/resources/thumbnails/004/581/124/small/time-to-take-a-break-coffee-break-time-to-relax-and-refresh-from-long-stress-interval-free-from-bored-sleepy-and-fatigue-concept-relax-businessman-with-a-cup-of-coffee-or-tea-with-alarm-clock-vector.jpg'}}/>
     <View>

     <Text style={styles.textcontainer}>Time for break⏱️</Text>
     </View>
      <Text style={styles.clockcontainer}>
        {timeleft}🎉
      </Text>
      
    </SafeAreaView>

  )
}

export default RestScreen

const styles = StyleSheet.create({
    imagecontainer:{
        width:'100%',
        height:'50%'
    },
    textcontainer:{
      fontSize: 30,
      fontWeight: "900",
      marginTop: 50,
      textAlign: "center",
    },
    clockcontainer:{
      fontSize: 30,
      fontWeight: "900",
      
      textAlign: "center",

    }
})