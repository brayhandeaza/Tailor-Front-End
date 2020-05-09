import React, { Component } from 'react'
import { StyleSheet, Dimensions, View, Text ,Image, TouchableHighlight} from 'react-native'

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Icons } from '../constants/Image';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            index: 0
         }
        
    }

    handleTailorIndex = () => {
        setInterval(() => {
            this.setState({
                index: this.state.index < 3 ? this.state.index + 1 : 0
            })
        },1000)
    }
    componentDidMount() {
        this.handleTailorIndex()
    }
    render() { 
        return ( 
            <View style={styles.Home}>
                <Header/>
                <View style={styles.Circle}></View>
                <View style={styles.Square}>
                    <TouchableHighlight underlayColor="white" onPress={() =>{}}>
                        <Image style={styles.Icons} source={Icons.Views[this.state.index]} />
                    </TouchableHighlight>
                    <View style={{padding: 10}}>
                        <Text>You’re one of a kind, so why shouldn’t your clothes be?</Text>
                    </View>
                    <TouchableHighlight style={styles.GetTailor} underlayColor="#f6f6f6" onPress={() =>{}}>
                        <Text style={{color: "green", fontSize: 20}} >Get a tailor now</Text>
                    </TouchableHighlight>
                </View>
                <Footer/>
            </View>
         )
    }
}
 
const styles = StyleSheet.create({
    Home: {
        flex: 1,
        backgroundColor: "#f6f6f6"
    },
    Circle: {
        width: Dimensions.get("window").width * 2,
        height: "90%",
        backgroundColor: "white",
        borderRadius: Dimensions.get("window").width,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,

        position: "absolute",
        right: 0,
        top: 0
    },
    Square: {
        width: "100%",
        height: "60%",
        backgroundColor: "pink",
        paddingTop: 30,
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    Icons: {
        width: 200,
        height: 200,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
    },
    GetTailor: {
        width: 300,
        height: 55,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    },
    
})

export default Home;