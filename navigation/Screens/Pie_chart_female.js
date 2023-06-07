import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import { VictoryPie } from 'victory-native'
const graphicColor = ['#4c97f5', '#d0d67b', '#e97eb2', '#d52a5a']; // Colors
const defaultGraphicData = [
  { y: 0, name: 'Carbs', color: '#FFC0CB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { y: 0, name: 'Protein', color: '#FFA07A', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { y: 100, name: 'Fat', color: '#87CEEB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { y: 0, name: 'Other', color: '#ADFF2F', legendFontColor: '#7F7F7F', legendFontSize: 15 },
]; 
const Pie_chart_female = () => {
    const [graphicData, setGraphicData] = useState(defaultGraphicData);

    

    useEffect(() => {
        const dietData = [
          { name: 'Carbs', population: 40, color: '#FFC0CB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'Protein', population: 30, color: '#FFA07A', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'Fat', population: 20, color: '#87CEEB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'Other', population: 10, color: '#ADFF2F', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        ];
    
        // Calculate the total population for percentage calculation
        const totalPopulation = dietData.reduce((total, item) => total + item.population,0);
    
        // Convert the population to percentage
        const updatedGraphicData = dietData.map(item => ({
          y: (item.population / totalPopulation) * 100,
          name: item.name,
          color: item.color,
          legendFontColor: item.legendFontColor,
          legendFontSize: item.legendFontSize,
        }));
    
        setGraphicData(updatedGraphicData);
      }, []);
  return (
    <View  style={{justifyContent:'center',alignItems:'center',top:20}}>
    <VictoryPie
      animate={{ easing: 'exp' }}
      data={graphicData}
      width={300}
      height={300}
      colorScale={graphicColor}
      innerRadius={30}
      padding={60}
      labels={({ datum }) => `${datum.name}\n${datum.y.toFixed(1)}%`}
    />
  </View>
  )
}

export default Pie_chart_female

const styles = StyleSheet.create({})