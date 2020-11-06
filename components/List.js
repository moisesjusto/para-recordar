import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList,SafeAreaView, Image,Text } from 'react-native';
import { Card } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Axios from 'axios';

export default class List extends Component {

    state = {
        nine: []
    };

    async componentDidMount() {
        const res = await Axios.get("https://moises-server.herokuapp.com/");
        this.setState({
            nine: res.data,
        });
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                <View style={{ width: 10, height: 10 }} />

                    <View style={{flexDirection:'row'}}>
                        <Image
                        source={require('../img/log.png')}
                        style={styles.icono}
                        />
                        
                    </View>
                    <Card.Divider/>

                    <FlatList
                        style={{ flex: 1 }}
                        data={this.state.nine}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) =>
                            (
                                item.name,
                                item.precio,
                                item._id,
                                item.url
                            )}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                key={item._id}
                                style={styles.toque}
                                onPress={()=> navigation.navigate('piesa',item._id)}
                                activeOpacity={2}
                            >
                                <Card.Image
                                    source={{ uri: item.url }}
                                    style={styles.img}
                                    resizeMode='stretch'
                                    resizeMethod='auto'
                                />
                                <Card.Title
                                    style={{ fontSize: 30 }}
                                >
                                    RD$ {item.precio}
                                </Card.Title>

                            </TouchableOpacity>
                            
                        )}
                       
                    />
                </SafeAreaView>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)'
    },
    barra: {
        flex: 1,
        backgroundColor: 'rgb(223, 223, 223)',
        flexDirection: 'column'
    },

    toque: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 380,
        height: 480,
        borderRadius: 20,
        justifyContent: 'center',
        flexDirection: 'column'

    },
    icono:{
        width:50,
        height:50,
        borderRadius:30,
        marginRight:300
    }
})

