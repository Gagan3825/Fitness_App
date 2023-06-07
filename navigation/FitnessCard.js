import { StyleSheet, Text, View,Image,Pressable,ScrollView } from 'react-native'
import React from 'react'
import fitness from './Data/fitness'
import { useNavigation } from '@react-navigation/native';
import Workout from './Screens/Workout';

const FitnessCard = () => {
    const fitnessData=fitness;
    const navigation=useNavigation();
    
  return (
    
    <View >
        {fitnessData.map((item,key)=>(
            <Pressable style={styles.maincontainer}
            onPress={()=> navigation.navigate("Workout",{
                image:item.image,
                excercisees:item.excersises,
                id:item.id,
            })

            }
            >
                <Image  style={{width:"90%",height:140,padding:15,justifyContent:'center',borderRadius:15,}} source={{uri:item.image}}/>
                <Text style={styles.textcolor}>{item.name}</Text>
            </Pressable>
            

            
        ))}
    </View>
   
  )
}

export default FitnessCard

const styles = StyleSheet.create({
    maincontainer:{
        alignItems:'center',
        margin:10,
        justifyContent:'center',
        top:50,
        

        
    },
    textcolor:{
        color:"#000000",
        fontWeight:'bold',
        fontSize:18,
    }
})