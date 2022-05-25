import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity
  } from 'react-native';

import RobotIcon from 'react-native-vector-icons/MaterialCommunityIcons';


//uigradients.com
import bgimg from '../assets/backgroundImages/Telegram.jpg'


export default class App extends React.Component {
  
constructor(props){
  super(props)
  StatusBar.setBarStyle('light-content')
  StatusBar.setBackgroundColor('#000')
}


  render(){
  return (
    <View style={styles.container}>
    
      <ImageBackground source={bgimg} style={styles.imgBackground}>
      <Text style={styles.titulo}> Diário </Text>

          <TouchableOpacity
            style={styles.buttonNovo}
            //onPress={onPressDiario}
          >
            <Text style={{color:'white', fontSize:14}}>Novo Diário</Text>
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
          <RobotIcon name='robot' style={styles.icon}/>
        </TouchableOpacity>

      </ImageBackground>
      <StatusBar barStyle='light-content'/>
    </View>
  );
}
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  item: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    margin:10,
    paddingHorizontal:130,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,

    elevation: 1,

  },
  imgBackground:{
    flex:1
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    paddingBottom: 30,
    padding: 20,
  },
  buttonNovo:{
    alignItems: "center",
    backgroundColor: "#92cbde",
    padding: 10,
    borderRadius:20,
    marginLeft:180,
    marginRight:40,
    marginBottom:15,
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
    color:'#4da6ff',
    fontSize:'2.3em',
    marginVertical:10,
    marginLeft:260
  }
});
