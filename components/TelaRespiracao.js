import { View, Text, Image, Pressable, TextInput } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import gif from "../assets/images/control.gif";
import imagem from "../assets/images/imagem_control.png";

const TelaRespiracao = () => {
  const [inicio, setInicio] = useState(false);
  const [tempo, setTempo] = useState();
  return (
    <LinearGradient
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={["#f6f7f8", "#fff"]}
      style={{ flex: 1 }}
    >
      {inicio ? (
        <View style={{ marginBottom: 30 }}>
          <Image
            source={gif}
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
              marginTop: 80,
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              textAlign: "center",
              color: "#a95fc9",
            }}
          >
            Respire na frequência da bolha
          </Text>
        </View>
      ) : (
        <View style={{ marginBottom: 30 }}>
          <Image
            source={imagem}
            style={{
              width: 150,
              height: 150,
              alignSelf: "center",
              marginTop: 80,
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              textAlign: "center",
              color: "#a95fc9",
            }}
          >
            {/* Selecione o Tempo para começar o controle! */}
          </Text>
        </View>
      )}
      {/* <View
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
          placeholder="Tempo"
          keyboardType="numeric"
          value={tempo}
          onChangeText={setTempo}
        />
      </View> */}

      <Pressable
        onPress={() => {
          inicio ? setInicio(false) : setInicio(true);
        }}
        style={{
          width: "70%",
          padding: 15,
          marginVertical: 5,
          alignSelf: "center",
          alignItems: "center",
          borderRadius: 5,
          backgroundColor: "#3B71F3",
        }}
      >
        {inicio ? (
          <Text style={{ fontWeight: "bold", color: "white" }}>Pausar</Text>
        ) : (
          <Text style={{ fontWeight: "bold", color: "white" }}>Iniciar</Text>
        )}
      </Pressable>
    </LinearGradient>
  );
};

export default TelaRespiracao;
