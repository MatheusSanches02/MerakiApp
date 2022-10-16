import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TextInput,
} from "react-native";
import { Audio } from "expo-av";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import bgimg from "../assets/backgroundImages/ab.jpg";
import base64 from "react-native-base64";
import * as Speech from "expo-speech";

const TelaChatbot = () => {
  const [permission, setPermission] = useState("");
  const [recording, setRecording] = useState("");
  const [resposta, setResposta] = useState("");
  const [lista, setLista] = useState([]);
  const [counter, setCounter] = useState(1);
  const [id, setId] = useState(null);
  const { CHATBOT_KEY } = process.env;
  const key = CHATBOT_KEY;
  const encodedKey = base64.encode(`apikey:${key}`);
  const [chatMessage, setChatMessage] = useState([]);
  const [message, setMessage] = useState("");
  let [context, setContext] = useState("");

  useEffect(() => {
    axios
      .post(
        `https://api.us-south.assistant.watson.cloud.ibm.com/instances/661be620-d5f6-47f9-8b84-8d439a959e5a/v1/workspaces/e1fa47ac-f4a0-4760-9ec7-7aece31f1de6/message?version=2018-09-20`,
        {
          input: { text: message },
        },
        {
          headers: {
            Authorization: `Basic ${encodedKey}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setContext(res.data.context);
        setChatMessage(res.data.output.text);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (chatMessage.length > 1) {
      chatMessage.map((value) => {
        Speech.speak(value, { language: "pt-BR" });
      });
    } else {
      if (chatMessage[0] != null) {
        Speech.speak(chatMessage[0], { language: "pt-BR" });
      }
    }
  }, [chatMessage]);

  const sendMessage = (messageUser) => {
    axios
      .post(
        `https://api.us-south.assistant.watson.cloud.ibm.com/instances/661be620-d5f6-47f9-8b84-8d439a959e5a/v1/workspaces/e1fa47ac-f4a0-4760-9ec7-7aece31f1de6/message?version=2018-09-20`,
        {
          input: { text: messageUser },
          context,
        },
        {
          headers: {
            Authorization: `Basic ${encodedKey}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setContext(res.data.context);
        setChatMessage(res.data.output.text);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const userMessage = (recording) => {
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
        sendMessage(response.data);
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
    userMessage(resp);
  }
  return (
    <>
      <ImageBackground source={bgimg} style={styles.imgBackground}>
        <Text>{permission}</Text>
        <View
          style={{
            borderWidth: 2,
            width: "70%",
            height: "30%",
            flex: 1,
            marginLeft: "15%",
            backgroundColor: "#92cbde",
            opacity: 0.7,
            borderRadius: 25,
          }}
        >
          <Text
            style={{
              backgroundColor: "white",
              marginTop: 15,
              minWidth: "30%",
              maxWidth: "70%",
              marginRight: 30,
              borderRadius: 10,
            }}
          >
            {chatMessage}
          </Text>
          <Text
            style={{
              backgroundColor: "white",
              marginTop: 15,
              minWidth: "30%",
              maxWidth: "70%",
              marginLeft: "65%",
              borderRadius: 10,
            }}
          >
            {resposta}
          </Text>
          <FlatList
            data={lista}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <Text>{item.resposta}</Text>;
            }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TextInput
              style={{
                backgroundColor: "white",
                marginBottom: 15,
                width: "70%",
                alignSelf: "center",
                borderRadius: 10,
              }}
              placeholder="Digite aqui..."
            />
            <Icon name="send" size={24} />
          </View>
        </View>

        <TouchableOpacity
          onPress={recording ? stopRecording : startRecording}
          style={{
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
          }}
        >
          <Icon
            name={recording ? "stop-circle-outline" : "microphone"}
            size={28}
            color={"black"}
          />
        </TouchableOpacity>

        <StatusBar style="auto" />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBackground: {
    flex: 1,
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
