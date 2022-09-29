import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";

import RobotIcon from "react-native-vector-icons/MaterialCommunityIcons";

//uigradients.com
import bgimg from "../assets/backgroundImages/Telegram.jpg";

export default function TelaModal({ setPopup }) {
  //const [popup, setPopup] = useState();
  const [visivel, setVisivel] = useState(false);
  return (
    <View style={styles.container}>
      
      <ImageBackground source={bgimg} style={styles.imgBackground}>
        <Text> Tem certeza que deseja excluir? </Text>
        <Button
          title="Voltar"
          onPress={() => {
            setPopup();
          }}
        />
      </ImageBackground>
      <StatusBar barStyle="light-content" />
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
    alignItems: "center",
    justifyContent: "space-around",
  },
  item: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 130,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,

    elevation: 1,
  },
  imgBackground: {
    flex: 1,
  },
  titulo: {
    color: "white",
    fontSize: 30,
    paddingBottom: 30,
    padding: 20,
  },
  buttonNovo: {
    alignItems: "center",
    backgroundColor: "#92cbde",
    padding: 10,
    borderRadius: 20,
    marginLeft: 180,
    marginRight: 40,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 1,
  },
  icon: {
    color: "#4da6ff",
    fontSize: 24,
    marginVertical: 10,
    marginLeft: 260,
  },
  viewModal: {
    position: "absolute",
    flex: 1,
    padding: 30,
    backgroundColor: "lightyellow",
  },
});
