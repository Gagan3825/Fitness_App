import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen'
import DietScreen from './Screens/DietScreen'
import Exercise from './Screens/Exercise'
import LoginScreen from './Screens/LoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Workout from './Screens/Workout';
import Fit from './Screens/Fit';
import RestScreen from './Screens/RestScreen';
import DataTableMen from './Screens/DataTableMen';
import DataTableFemale from './Screens/DataTableFemale';
import Loginsignup from './Screens/Loginsignup';


const tab=createBottomTabNavigator();
const homeName="Home";
const dietName ="DietChart"
const Login ="Login"
const excercise ="Exercise"

const Exer=createNativeStackNavigator()
   function ExcerScreen() {
    return(
      
        <Exer.Navigator >
        <Exer.Screen  name="excercise" component={Exercise} options={{headerShown:false}}/>
        <Exer.Screen  name="Workout" component={Workout} />
        <Exer.Screen name='fit'  component={Fit} options={{headerShown:false}}/>
        <Exer.Screen name='rest'  component={RestScreen} options={{headerShown:false}}/>
        <Exer.Screen name='mentable' component={DataTableMen}  options={{headerShown:false}}/>
        <Exer.Screen name='femaletable' component={DataTableFemale}  options={{headerShown:false}}/>
        
      
      </Exer.Navigator>
      
     
    )
    
  }

const Maincontainer = () => {
  return (
   <NavigationContainer>
   
    <tab.Navigator initialRouteName= {homeName}
    
    screenOptions={({route})=>({
        tabBarActiveBackgroundColor:'#090B0E',
        tabBarIcon:({focused,color,size})=>{
        let iconname;
        let rn=route.name;
        if (rn==homeName) {
            iconname=focused?'home' : 'ios-home-outline';
            return <Ionicons name={iconname} size={size} color={"#FF5722"}/>
            
        }
        else if (rn==dietName) {
            iconname=focused?'list' : 'ios-pie-chart-sharp';
            return <Ionicons name={iconname} size={size} color={"#FF5722"}/>
            
        }

        else if (rn==excercise) {
            iconname=focused?'yoga' : 'yoga';
            return <MaterialCommunityIcons name={iconname} size={size} color={"#FF5722"}/>
            
        }

        else if (rn==Login) {
            iconname=focused?'login' : 'login';
            return <MaterialCommunityIcons name={iconname} size={size} color={"#FF5722"}/>
            
        }
         return <Ionicons name={iconname} size={size} color={color}/>;
       },
    })}>
        
        
    <tab.Screen name={homeName} component={HomeScreen} options={{headerShown:false}} />
    <tab.Screen name={excercise} component={ExcerScreen}   options={{headerShown:false}}/>
    <tab.Screen name={dietName} component={DietScreen} options={{headerShown:false}}/>
    <tab.Screen name={Login} component={LoginScreen} options={{headerShown:false}}/>

    </tab.Navigator>
    <StatusBar  hidden = {false} backgroundColor = "#FF5722"/>
   </NavigationContainer>
  )
}

export default Maincontainer  