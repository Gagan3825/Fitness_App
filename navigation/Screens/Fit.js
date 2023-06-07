import { View, Text,StyleSheet,Image, ScrollView, Pressable, Button, TouchableOpacity ,SafeAreaView} from 'react-native'

import React, { useState, useContext } from "react";
import { useNavigation, useRoute } from '@react-navigation/native'
import { FitnessItemss } from '../../Context_new';


const Fit = () => {
  const route=useRoute();
  // console.log(route.params)
  const navigate=useNavigation();
  const [index, setIndex] = useState(0)
  const excer=route.params.excercise;
  const curr=excer[index];
  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    setWorkout,
    workout,
  } = useContext(FitnessItemss);
  console.log(completed,"first excersise")

  return (
    <SafeAreaView style={{backgroundColor:"white",flex:1}} >
      <Image
      style={{width:'100%',height:'40%',justifyContent:'center'}}
      source={{uri:curr.image}}
      />
      <Text style={style.namecontainer}>
        {curr.name}
      </Text>
      <Text style={style.name2container}>
        ×{curr.sets}
      </Text>
      

      {index+1>=excer.length?(
         <Pressable style={{
          backgroundColor: "#FF5722",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          borderRadius: 20,
          padding: 10,
          width: 150,
        }}
        onPress={()=>{
          navigate.navigate("excercise");
         
         }}
        
        >
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:'white'}}>
        Done
      </Text>
    </Pressable>
      ):(
        <Pressable style={{
          backgroundColor: "#FF5722",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          borderRadius: 20,
          padding: 10,
          width: 150,
        }}
        onPress={()=>{
          navigate.navigate("rest");
          setCompleted([...completed,curr.name]);
          setWorkout(workout+1);
          setMinutes(minutes+2.5);
          setCalories(calories+6.3);
          setTimeout(() => {
            setIndex(index + 1);
          }, 2000);
         
         }}
       >
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:'white'}}>
        Done
      </Text>
    </Pressable>
      )}
      
      
     
<Pressable style={{flexDirection:'row',alignItems:'center',marginLeft:'auto',marginRight:'auto',marginTop:50}}>

         
      <Pressable 
      disabled={index==0}
      onPress={()=>{
        navigate.navigate('rest');
        setTimeout(()=>{
          setIndex(index-1);
        },1000);
      }}
      style={{backgroundColor: "#4169E1",
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            width: 100,}}
           >
        <Text style={{color:'white',fontWeight:"bold",textAlign:'center'}}>
          Prev
        </Text>
      </Pressable>
      {index+1>=excer.length?(
         <Pressable style={{backgroundColor: "#4169E1",
         padding: 10,
         borderRadius: 20,
         marginHorizontal: 20,
         width: 100,}}
          onPress={()=>{
           navigate.navigate("excercise");
          }}>
     <Text style={{color:'white',fontWeight:"bold",textAlign:'center'}}>
       Skip
     </Text>
     </Pressable>
      ):(
        <Pressable style={{backgroundColor: "#4169E1",
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 20,
        width: 100,}}
         onPress={()=>{
          
          setTimeout(() => {
            setIndex(index + 1);
          }, 2000);
         }}>
    <Text style={{color:'white',fontWeight:"bold",textAlign:'center'}}>
      Skip
    </Text>
    </Pressable>
      )}
     
  </Pressable>
  {index+1>=excer.length?(
    <View style={{borderRadius:5,top:30}}>
    <Text style={{textAlign:'center',fontWeight:'bold'}}>Description:-</Text>
  <Text style={{fontSize:10,fontStyle:'italic',textAlign:'center',marginVertical:'auto',fontWeight:'bold',color:"black"}}>{curr.desc}</Text>
</View>
  ):(
    <View style={{borderRadius:5,top:30}}>
    <Text style={{textAlign:'center',fontWeight:'bold'}}>Description:-</Text>
<Text style={{fontSize:10,fontStyle:'italic',textAlign:'center',marginVertical:'auto',fontWeight:'bold',color:"black"}}>{curr.desc}</Text>
</View>
  )}
  
     
    </SafeAreaView>
  )
}
const style=StyleSheet.create({
  namecontainer:{
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:30,
    fontSize:30,
  },
  name2container:{
     marginLeft:'auto',
     marginRight:'auto',
     marginTop:30,
     fontSize:38,
  }
})
export default Fit