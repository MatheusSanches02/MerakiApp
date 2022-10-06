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
  FlatList,
} from "react-native";
import { TextInput } from "react-native-paper";

import RobotIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//uigradients.com
import bgimg from "../assets/backgroundImages/Telegram.jpg";
import TelaModal from "./TelaModal";
import Storage from "@react-native-async-storage/async-storage";
import TelaChatbot from "./TelaChatbot";

//secureTextEntry

function Item(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e8e8e8",
        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal: 20,
        padding: 5,
        justifyContent: "space-between",
        flexDirection: "row",
        borderRadius: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "black" }}>
          {"(" + props.item.id + ") " + props.item.titulo}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 14, color: "gray" }}>
          {props.item.diario}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Icon
          name="pencil-box-outline"
          size={24}
          onPress={() => {
            // alert("Apagar: " + props.item.id);
            props.onEditar(props.item.id);
          }}
        />
        <Icon
          name="delete"
          size={24}
          onPress={() => {
            // alert("Apagar: " + props.item.id);
            props.onApagar(props.item.id);
          }}
        />
      </View>
    </View>
  );
}

export default function TelaDiario() {
  const [visivel, setVisivel] = useState(false);
  //const [visivelChatbot, setVisivelChatbot] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [diario, setDiario] = useState("");
  //const [popup, setPopup] = useState();
  const [listaDiario, setListaDiario] = useState([]);
  const [id, setId] = useState(null);
  const [counter, setCounter] = useState(1);
  //const [visivelExcluir, setVisivelExcluir] = useState(false);

  function apagar(id) {
    const tempLista = [...listaDiario];
    for (let i = 0; i < tempLista.length; i++) {
      const o = tempLista[i];
      if (o.id === id) {
        tempLista.splice(i, 1);
        setListaDiario(tempLista);
        break;
      }
    }
    alert("Diário excluido com sucesso");
  }

  function editar(id) {
    setVisivel(true);
    const tempLista = [...listaDiario];
    for (let i = 0; i < tempLista.length; i++) {
      const o = tempLista[i];
      if (o.id === id) {
        setId(o.id);
        setTitulo(o.titulo);
        setDiario(o.diario);
      }
    }
  }

  function salvar() {
    if (id === null) {
      setListaDiario([...listaDiario, { id: counter, titulo, diario }]);
      setCounter(counter + 1);
      alert(`Diário com titulo ${titulo} salvo com sucesso`);
      setTitulo("");
      setDiario("");
      setId(null);
    } else {
      const tempLista = [...listaDiario];
      for (let i = 0; i < tempLista.length; i++) {
        const o = tempLista[i];
        if (o.id === id) {
          const novoObj = { id, titulo, diario };
          tempLista.splice(i, 1, novoObj);
          setListaDiario(tempLista);
          setTitulo("");
          setDiario("");
          setId(null);
          break;
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={bgimg} style={styles.imgBackground}>
        <TouchableOpacity
          style={styles.buttonNovo}
          //onPress={onPressDiario}
          //onPress={() => setPopup(<TelaModal />)}
          onPress={() => setVisivel(true)}
        >
          <Text style={{ color: "#0353a2", fontSize: 14 }}>Novo Diário</Text>
        </TouchableOpacity>

        <FlatList
          data={listaDiario}
          renderItem={(properties) => (
            <Item {...properties} onApagar={apagar} onEditar={editar} />
          )}
          style={{ flex: 1 }}
        />

        {/* <TouchableOpacity
          onPress={() => setVisivelChatbot(true)}
          style={styles.btnRobot}
        >
          <RobotIcon name="robot" style={styles.icon} />
        </TouchableOpacity> */}
      </ImageBackground>
      <Modal visible={visivel}>
        <View style={styles.viewModal}>
          <TextInput
            style={{ fontSize: 28, marginBottom: 15, width: 150 }}
            placeholder="Titulo"
            placeholderTextColor="#4da6ff"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            multiline
            numberOfLines={4}
            style={{
              width: 350,
              borderColor: "none",
              flex: 1,
            }}
            value={diario}
            onChangeText={setDiario}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 50,
            }}
          >
            <Button
              title="Salvar"
              onPress={() => {
                salvar();
                setVisivel(false);
              }}
            />
            <Button
              title="Cancelar"
              onPress={() => {
                setVisivel(false);
              }}
            />
          </View>
        </View>
      </Modal>

      {/* <Modal visible={visivelExcluir}>
        <View style={[styles.viewModal]}>
          <Text style={{ width: 350 }}>Tem certeza que deseja excluir?</Text>
          <Button
            title="Cancelar"
            onPress={() => {
              setVisivelExcluir(false);
            }}
          />
          <Button title="Excluir" onPress={apagar(id)} />
        </View>
      </Modal> */}
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
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#92cbde",
    padding: 10,
    borderRadius: 20,
    marginLeft: 200,
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
    color: "#0353a2",
    fontSize: 24,
  },
  viewModal: {
    position: "absolute",
    flex: 1,
    padding: 30,
    backgroundColor: "#92cbde",
  },
  btnRobot: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#92cbde",
    borderRadius: 50,
    marginRight: 40,
    marginBottom: 15,
    marginLeft: 10,
    opacity: 0.4,
  },
});
