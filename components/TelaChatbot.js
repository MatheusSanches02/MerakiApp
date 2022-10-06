import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import axios from "axios";
import { Buffer } from "buffer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const TelaChatbot = () => {
  const [permission, setPermission] = useState("");
  const [recording, setRecording] = useState("");
  const [resposta, setResposta] = useState("");
  const [lista, setLista] = useState([]);
  const [counter, setCounter] = useState(1);
  const [id, setId] = useState(null);

  useEffect(() => {}, []);

  const sendMessage = (recording) => {
    const formData = new FormData();
    formData.append("file", {
      uri: recording.getURI(),
      name: "test.wav",
      type: "audio/wav",
    });
    axios
      .post(
        (url =
          "https://nodered-app-1tdsr-fiap-2021.mybluemix.net/transcription"),
        (data = formData),
        {
          responseType: "text",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(async function (response) {
        setResposta(response.data);
        setLista([...lista, { id: counter, resposta: response.data }]);
        setCounter(counter + 1);
        setId(null);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
        console.error(error.response);
      });
  };

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        const recording = new Audio.Recording();
        try {
          await recording.prepareToRecordAsync(
            Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
          );
          await recording.startAsync();
        } catch (err) {
          console.log(err);
        }
        setRecording(recording);
      } else {
        setPermission("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    await recording.stopAndUnloadAsync();
    let resp = recording;
    setRecording(undefined);
    sendMessage(resp);
  }
  return (
    <LinearGradient
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={["#05dfcb", "#bdfcf7"]}
      style={{ flex: 1 }}
    >
      <Text>{permission}</Text>
      <View
        style={{
          borderWidth: 2,
          width: "70%",
          height: "30%",
          flex: 1,
          marginLeft: "15%",
        }}
      >
        <FlatList
          data={lista}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <Text>{item.resposta}</Text>;
          }}
        />
      </View>
      <TouchableOpacity onPress={recording ? stopRecording : startRecording}>
        <Icon
          name={recording ? "stop-circle-outline" : "microphone"}
          size={28}
          color={"black"}
          style={{ marginLeft: "85%", marginTop: "20%", marginBottom: 15 }}
        />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    flex: 1,
    margin: 16,
  },
  button: {
    margin: 16,
  },
});

export default TelaChatbot;
