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
import Pie_chart_female from "./Pie_chart_female";

const DataTableFemale = () => {
    const data = [
        {
          time: "7:30 AM",
          meal: "Breakfast",
          description: "Scrambled eggs",
          calories: "350",
        },
        {
          time: "10:00 AM",
          meal: "Snack",
          description: "yogurt",
          calories: "150",
        },
        {
          time: "12:30 PM",
          meal: "Lunch",
          description:
            "vegetables",
          calories: "440",
        },
        {
          time: "4:00 PM",
          meal: "Snack",
          description: "carrot",
          calories: "150",
        },
        {
          time: "6:30 PM",
          meal: "Dinner",
          description:
            "Potato..",
          calories: "450",
        },
        {
          time: "9:00 PM",
          meal: "Snack",
          description: "Mixed nuts and seeds",
          calories: "200",
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
      'http://192.168.1.6:3000/diet_chartt_female.pdf',
      FileSystem.documentDirectory + 'diet_chartt_female.pdf',
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
        <Pie_chart_female/>
       <DataTable style={{marginTop:50}}>
        <DataTable.Header style={{ backgroundColor: "lightpink" }}>
          <DataTable.Title >Time</DataTable.Title>
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
      <Button title="Full diet chart" onPress={openShareDialogAsync} />
    </ScrollView>
  )
}
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

export default DataTableFemale