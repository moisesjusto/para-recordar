import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TextInput, Alert, } from 'react-native'
import { Button, Card } from "react-native-elements";
import { NavigationContainer, useRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'

//import
//import Login from './components/Login'
import Register from './components/Register'
import Regis from './components/Register2'
import List from './components/List'
import PS from './components/Piesa'
import Axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const image = require('./assets/android.png');

export default class App extends Component {
  state = {
    id: '',
    email: '',
    password: ''
  }


  User = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  Usor = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  Enviar = async () => {
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    const res = await Axios.get('http://localhost:4000',user);
    console.log(res);
    console.log(user);
  }
  Login = ({ route, navigation }) => {
    if (route.params[0] === undefined) {
      console.log('no esta');
      
    } else {
      this.setState({
        id:route.params
      })
    }
    console.log(route.params[0]);
    return (
      <SafeAreaProvider>
        <StatusBar style='auto' />
        <View style={styles.container}>
          <View style={styles.barra} />
          <ImageBackground source={image} style={styles.image}>
            <View style={styles.fondo}>
              <View style={styles.reyeno} />
              <Card containerStyle={styles.Form} >
                <Card.Title>Inciar Secion</Card.Title>
                <Card.Divider />
                <View style={styles.Spacio2} />
                <Text style={styles.texto}>Correo Eletronico</Text>
                <TextInput style={styles.Input}
                  onChange={this.User}
                />
                <Text style={styles.texto}>Contraceña</Text>
                <TextInput style={styles.Input}
                  onChange={this.Usor}
                />
                <View style={styles.Spacio} />
                <Button
                  title='Iniciar Secion'
                  onPress={this.Enviar}
                />
                <View style={styles.Spacio} />
                <Button
                  title='Crear Cuenta'
                  type='clear'
                  onPress={() => navigation.navigate('Registro')}
                />
                <Button
                  title='Olvide mi Contraceña'
                  type='clear'
                />
                <View style={styles.Spacio2} />
              </Card>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaProvider>
    )
  }
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer >
          {
            this.state.id ? (
              <>
                <Tab.Navigator headerMode='none' initialRouteName='list'>
                  <Tab.Screen name='list' 
                  component={List} />
                  <Tab.Screen name='piesa' component={PS} />
                </Tab.Navigator>
              </>
            ) : (
                <>
                  <Stack.Navigator headerMode='none' initialRouteName='login' >
                    <Stack.Screen name='login' component={this.Login}initialParams={this.state.id} />
                    <Stack.Screen name='Registro' component={Register} initialParams={this.state.id} />
                    <Stack.Screen name='Regis' component={Regis} initialParams={this.state.id} />
                  </Stack.Navigator>
                </>
              )
          }
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  barra: {
    flex: 0.1,
    backgroundColor: 'rgb(223, 223, 223)',
  },
  image: {
    flex: 2,
    resizeMode: "cover",
    justifyContent: "center"
  },
  fondo: {
    flex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.411)'
  },
  Form: {
    borderRadius: 20
  },
  reyeno: {

    width: 340,
    height: 100
  },
  Input: {
    width: 340,
    padding: 5,
    margin: 5,
    height: 50,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    fontSize: 20

  },
  texto: {
    fontSize: 15,
    padding: 5,
    margin: 5,
  },
  Spacio: {
    height: 50
  },
  Spacio2: {
    height: 40
  }
});
