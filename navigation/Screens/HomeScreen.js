import { View, Text, StyleSheet, Image } from "react-native";
import React, { useContext } from "react";
import VideoPlayer from "expo-video-player";
import { ResizeMode, Video } from "expo-av";
import Videocontainer from "./Videocontainer";
import Fitness from "../Data/fitness";
import { FitnessItemss } from "../../Context_new";
const dumble = require("./image/dumble.jpg");

const data = [{ name: "Workout", status: 85, color: "#f8e4d9", image: dumble }];

const HomeScreen = ({ navigation, data }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const{
    minutes,
    calories,
    workout,
  }=useContext(FitnessItemss);
  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <View
        style={{
          height: "15%",
          width: "100%",
          backgroundColor: "#FF5722",
          borderBottomLeftRadius: 50,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            textAlign: "center",
            margin: 40,
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          Fitti
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <Video
          ref={video}
          style={{
            height: 300,
            width: "100%",
            alignSelf: "center",
            borderColor: "green",
            borderRadius: 20,
          }}
          source={require("./video.mp4")}
          //  source={{uri:'https://www.youtube.com/watch?v=mpfAv1KL_YM&ab_channel=5-MinuteFitness',}}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          isLooping={true}
          //  videoStyle={{width:"100%",height:200,borderColor:'black',borderWidth:10,borderRadius:5}}
          shouldPlay={true}
          isMuted={true}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
      {/* <View style={style.cardcontainer}>
        <View style={style.cardsecondcontainer}>
          <Image source={dumble} style={{ height: 50, width: 50 }} />
          <Text>hello world</Text>
          <View style={style.cardthirdcontainer}>

          <Image source={dumble} style={{ height: 60, width: 70 }} />
          <Text>hello world</Text>
          </View>
        </View>
        
      </View> */}
      <Videocontainer/>
     
    </View>
  );
};

const style = StyleSheet.create({
  cardcontainer: {
   
    flex: 1,
    // backgroundColor: "blue",

    flexDirection:"row",
    // padding: 10,
    // margin: 10,
     justifyContent : 'space-between',
  },
  cardsecondcontainer: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    
  },
  cardthirdcontainer:{
    width: 50,
    height: 50,
    backgroundColor: "red",
    marginLeft:100,
    fontSize:10,
    flex:1,
  }
});

export default HomeScreen;
