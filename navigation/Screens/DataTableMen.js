import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React, { useEffect,useState} from "react";
// import { DataTable } from 'react-native-paper';
import { DataTable } from "react-native-paper";
import * as FileSystem from "expo-file-system";
import * as Linking from 'expo-linking';
import * as DocumentPicker from 'expo-document-picker';
import * as Permissions from 'expo-permissions';
// import * as FileSystem from 'expo-file-system';
import Constants from 'expo-constants';
// import { Platform } from 'react-native';
import * as Sharing from 'expo-sharing';
import { Notifications } from 'expo';
import New_pie_chart from "./New_pie_chart";
// import { Asset } from "expo-asset";
// import RNFS from 'react-native-fs';
// import RNFetchBlob from 'react-native-fetch-blob';
// import RNFS from 'react-native-fs';


const DataTableMen = () => {
  const data = [
    {
      time: "7:00 AM",
      meal: "Breakfast",
      description: "Whole Wheat Toast - 2 slices",
      calories: "570",
    },
    {
      time: "10:00 AM",
      meal: "Snack",
      description: "Mixed Nuts - 1 handful",
      calories: "180",
    },
    {
      time: "1:00 PM",
      meal: "Lunch",
      description:
        "Grilled Chicken Breast - 4 oz\nBrown Rice - 1/2 cup\nSteamed Vegetables - 1 cup\nSalad - Mixed greens, veggies, and dressing",
      calories: "440",
    },
    {
      time: "4:00 PM",
      meal: "Snack",
      description: "Protein Shake - 1 scoop\nApple - 1 medium",
      calories: "215",
    },
    {
      time: "7:00 PM",
      meal: "Dinner",
      description:
        "Grilled Salmon - 6 oz\nSweet Potato - 1 medium\nSteamed Broccoli - 1 cup",
      calories: "435",
    },
    {
      time: "9:00 PM",
      meal: "Snack",
      description: "Low-fat Greek Yogurt - 1 cup\nAlmonds - 1 ounce",
      calories: "290",
    },
  ];
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [document, setDocument] = useState(null);

  async function openShareDialogAsync(){

    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    Sharing.shareAsync(document);

  };

  async function handleDownload(){

    const callback = downloadProgress => {
      const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
      setDownloadProgress(progress * 100);
    };
    
    const downloadResumable = FileSystem.createDownloadResumable(
      'http://192.168.1.6:3000/diet_chartt_men.pdf',
      FileSystem.documentDirectory + 'diet_chartt_men.pdf',
      {},
      callback
    );
    
    try {
      const { uri } = await downloadResumable.downloadAsync();
      console.log('Finished downloading to ', uri);
      setDocument(uri);
    } catch (e) {
      console.error(e);
    }
    
    
  }

  useEffect(()=>{

    console.log(downloadProgress);

  }, [downloadProgress]);

  useEffect(()=>{

    handleDownload()

  },[]);

 

  



 
  
  
   

 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <New_pie_chart/>
      <DataTable style={{marginTop:50}}>
        <DataTable.Header style={{ backgroundColor: "skyblue" }}>
          <DataTable.Title>Time</DataTable.Title>
          <DataTable.Title>Meal</DataTable.Title>
          <DataTable.Title>Description</DataTable.Title>
          <DataTable.Title>Calories</DataTable.Title>
        </DataTable.Header>

        {data.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{item.time}</DataTable.Cell>
            <DataTable.Cell>{item.meal}</DataTable.Cell>
            <DataTable.Cell>{item.description}</DataTable.Cell>
            <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
          </DataTable.Row>
        ))}
        <DataTable.Row>
          <DataTable.Cell />
          <DataTable.Cell />
          <DataTable.Cell style={styles.totalCell}>Total</DataTable.Cell>
          <DataTable.Cell numeric style={styles.totalCell}>
            {data.reduce((total, item) => total + parseInt(item.calories), 0)}
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      {/* <Button title="Download Excel" onPress={()=>{

      }} /> */}
      <Button title="Full diet chart" onPress={openShareDialogAsync} />
    </ScrollView>
  );
};

export default DataTableMen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  totalCell: {
    fontWeight: "bold",
  },
});
