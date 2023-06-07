import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Maincontainer from './navigation/Maincontainer';
import Workout from './navigation/Screens/Workout';
import Fit from './navigation/Screens/Fit';
import RestScreen from './navigation/Screens/RestScreen';
import { FitnessContext } from './Context_new';
import * as SplashScreen from 'expo-splash-screen';

import MaleChart from './navigation/Screens/MaleChart';
import Card_diet from './navigation/Screens/Card_diet';
// import Pie_chart_diet from './navigation/Screens/Pie_chart_diet';
import New_pie_chart from './navigation/Screens/New_pie_chart';
import DataTableMen from './navigation/Screens/DataTableMen';
import Pie_chart_female from './navigation/Screens/Pie_chart_female';
import Splash from './navigation/Screens/Splash';
import LoginScreen from './navigation/Screens/LoginScreen';


export default function App() {
  useEffect(() => {
    // Function to hide the splash screen after 3 seconds
    async function hideSplashScreen() {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      await SplashScreen.hideAsync();
    }

    hideSplashScreen();
  }, []);
  return (
    <FitnessContext>
      {/* <LoginScreen/> */}
       <Maincontainer/>
    </FitnessContext>
  // <Fit/>
  // <RestScreen/>
  // <MaleChart/>
  // <Card_diet/>
  // <Pie_chart_diet/>
  // <New_pie_chart/>
  // <DataTableMen/>
  // <Pie_chart_female/>
  // <Splash/>
  );
}

