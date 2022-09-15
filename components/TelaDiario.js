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
import { TextInput } from "react-native-paper";

import RobotIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//uigradients.com
import bgimg from "../assets/backgroundImages/Telegram.jpg";
import TelaModal from "./TelaModal";

export default function TelaDiario() {
  const [visivel, setVisivel] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [diario, setDiario] = useState("");
  const [popup, setPopup] = useState();
  return (
    <View style={styles.container}>
      <ImageBackground source={bgimg} style={styles.imgBackground}>
        <Text style={styles.titulo}> Diário </Text>

        <TouchableOpacity
          style={styles.buttonNovo}
          //onPress={onPressDiario}
          //onPress={() => setPopup(<TelaModal />)}
          onPress={() => setVisivel(true)}
        >
          <Icon name="plus" size={24} />
        </TouchableOpacity>

        <View style={styles.containerImg}>
          <View style={styles.item}>
            <Text>diario1</Text>
          </View>
          <View style={styles.item}>
            <Text>diario2</Text>
          </View>

          <View style={styles.item}>
            <Text>diario3</Text>
          </View>
        </View>

        <TouchableOpacity>
          <RobotIcon name="robot" style={styles.icon} />
        </TouchableOpacity>
      </ImageBackground>
      <Modal visible={visivel}>
        <View style={styles.viewModal}>
          <TextInput
            style={{ fontSize: 28, marginBottom: 15, width: 150 }}
            placeholder="Titulo"
            placeholderTextColor="#4da6ff"
          />
          <TextInput
            multiline
            numberOfLines={4}
            style={{
              width: 350,
              borderColor: "none",
              flex: 1,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 50,
            }}
          >
            <Button title="Salvar" onPress={() => {}} />
            <Button
              title="Cancelar"
              onPress={() => {
                setVisivel(false);
              }}
            />
          </View>
        </View>
      </Modal>
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
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#92cbde",
    borderRadius: 50,
    marginLeft: 300,
    marginRight: 40,
    marginBottom: 15,
  },
  icon: {
    color: "#4da6ff",
    fontSize: 24,
    marginVertical: 10,
    marginLeft: 30,
  },
  viewModal: {
    position: "absolute",
    flex: 1,
    padding: 30,
    backgroundColor: "#92cbde",
  },
});
