import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import RobotIcon from "react-native-vector-icons/MaterialCommunityIcons";

import DropShadow from "react-native-drop-shadow";

//uigradients.com
import bgimg1 from "../assets/backgroundImages/Margo.jpg";

import imgWaves from "../assets/images/waves.jpg";
import imgFireplace from "../assets/images/fireplace.jpg";
import imgRain from "../assets/images/rain.jpg";
import imgStones from "../assets/images/stones.jpg";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function TelaMeditacao() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgimg1} style={styles.imgBackground}>
        <Text style={styles.titulo}> Meditação </Text>
        <View style={styles.containerImg}>
          {/* <Text
            style={[styles.titulo, { color: "#eef104", textAlign: "center" }]}
          >
            Reproduzindo:
          </Text> */}
          <View style={styles.imageView}>
            <Pressable onPress={() => {}}>
              <Image source={imgWaves} style={styles.image}></Image>
            </Pressable>
            <Pressable>
              <Image source={imgFireplace} style={styles.image}></Image>
            </Pressable>
          </View>

          <View style={styles.textView}>
            <Text style={styles.text1}>Ondas</Text>
            <Text style={styles.text1}>Lareira</Text>
          </View>

          <View style={styles.imageView}>
            <Pressable>
              <Image source={imgRain} style={styles.image}></Image>
            </Pressable>
            <Pressable>
              <Image source={imgStones} style={styles.image}></Image>
            </Pressable>
          </View>

          <View style={styles.textView}>
            <Text style={styles.text2}>Chuva</Text>
            <Text style={styles.text2}>Natureza</Text>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  containerImg: {
    flex: 1,
    justifyContent: "center",
  },
  imgBackground: {
    flex: 1,
  },
  titulo: {
    color: "white",
    fontSize: 33,
    paddingTop: 20,
    padding: 10,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
    margin: 20,
    borderWidth: 5,
    borderColor: "#ffcc99",
    //shadowColor: '#000',
    //shadowOpacity: 0.5,
    //shadowRadius: 100,
    //shadowOffset: {width: 0, height: 3},
    //elevation: 1,
  },
  imageView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text1: {
    marginLeft: 50,
    marginRight: 50,
    color: "#a38572",
    fontSize: 15,
  },
  text2: {
    marginBottom: 16,
    marginLeft: 55,
    marginRight: 40,
    color: "#a38572",
    fontSize: 15,
  },
  icon: {
    color: "#ffbf80",
    fontSize: 24,
    marginVertical: 10,
    marginLeft: 260,
  },
});
