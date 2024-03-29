import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  Button,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import RobotIcon from "react-native-vector-icons/MaterialCommunityIcons";

import DropShadow from "react-native-drop-shadow";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import Storage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#9C51B6" }}>
        <LinearGradient
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          colors={["#d574fc", "#efcdfd"]}
          style={{ flex: 1 }}
        >
          <Pressable
            style={{
              marginTop: "10%",
              marginLeft: "10%",
              borderRadius: 50,
              width: 50,
              alignItems: "center",
              backgroundColor: "white",
            }}
            onPress={() => cadastrar()}
          >
            <Icon name="keyboard-backspace" size={24} />
          </Pressable>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              fontFamily: "sans-serif",
              color: "#f0edf0",
              textAlign: "center",
              marginTop: "30%",
              marginBottom: "15%",
            }}
          >
            Cadastro
          </Text>
          {/* <Button
        title="Gravar"
        onPress={() => {
          Storage.setItem("usuario", "Nome do Usuario");
        }}
      />
      <Button
        title="Ler"
        onPress={() => {
          Storage.setItem("frase")
            .then((user) => {
              alert("Usuário: " + usuario);
            })
            .catch((erro) => {
              alert("Erro: " + erro);
            });
        }}
      /> */}
          <View
            style={{
              width: "100%",
              borderColor: "#e8e8e8",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              marginVertical: 5,
            }}
          >
            <TextInput
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View
            style={{
              width: "100%",
              borderColor: "#e8e8e8",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              marginVertical: 5,
            }}
          >
            <TextInput
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <Pressable
            style={{
              width: "100%",
              padding: 15,
              marginVertical: 5,
              alignItems: "center",
              borderRadius: 5,
              backgroundColor: "#3B71F3",
            }}
            onPress={() => cadastrar()}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Cadastrar
            </Text>
          </Pressable>
        </LinearGradient>
      </SafeAreaView>
    </>
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
    fontFamily: "cursive",
    fontSize: 15,
  },
  text2: {
    marginBottom: 16,
    marginLeft: 55,
    marginRight: 40,
    color: "#a38572",
    fontFamily: "cursive",
    fontSize: 15,
  },
  icon: {
    color: "#ffbf80",
    fontSize: 24,
    marginVertical: 10,
    marginLeft: 260,
  },
});
