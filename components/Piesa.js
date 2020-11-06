import Axios from 'axios'
import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Piesa extends Component {

    state = {
        Art: []
    }

    async componentDidMount() {
        //examinar
        const id = this.props.route.params;
        const res = await Axios.get('https://moises-server.herokuapp.com/', id);
        this.setState({
            Art: res
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.touch}>
                    <Button
                    onPress={()=>{
                        this.props.navigation.navigate('list')
                    }}
                    type='clear'
                        icon={
                            <Icon
                                name="close"
                                size={40}
                                color="black"
                            />
                        }
                    />
                    
                </View>
                <Card.Divider />
                <View style={{height:40}} />
                <FlatList
                    style={{ flex: 2 }}
                    ListEmptyComponent={

                        <TouchableOpacity
                            style={styles.toque}
                            activeOpacity={2}
                        >
                            <Card.Image
                                source={{ uri: "https://scontent.fsti4-1.fna.fbcdn.net/v/t1.0-0/p600x600/122598627_1656768121172696_6514643895323874681_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_eui2=AeE-92gF6mtCnXBQXeh9_EzPpcgBay4Wrb-lyAFrLhatv38e2rMBhSpDU8wLt_WasmjPSk6OqkGPOvPv2aLr6X9v&_nc_ohc=y5hXC17a880AX-zfhDG&_nc_ht=scontent.fsti4-1.fna&tp=6&oh=21527447961985928769d37a4440e71c&oe=5FC627B5" }}
                                style={styles.img}
                                resizeMode='stretch'
                                resizeMethod='auto'
                            />
                            <Card.Divider />
                            <Card>
                                <Card.Title style={{ fontSize: 15 }}>PRECIO  $RD150</Card.Title>
                                <Card.Title style={{ fontSize: 15 }}>NOMBRE: camisa</Card.Title>
                                <Card.Title style={{ fontSize: 15 }}>DESCRIPSION: ninguna</Card.Title>

                            </Card>
                        </TouchableOpacity>

                    }
                />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    touch: {
        flexDirection: 'row-reverse',
    },
    texto: {
        width: 60,
        height: 50,
        padding: 5,
        margin: 5,
    },
    img: {
        width: 380,
        height: 480,
        borderRadius: 20,
        justifyContent: 'center',
        flexDirection: 'column'

    },
    toque: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})