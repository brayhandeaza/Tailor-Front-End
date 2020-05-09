import React, { Component} from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight, TextInput } from 'react-native'
import { Footer } from 'native-base'

import { Icons } from '../constants/Image'

class Navegation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        return ( 
            <View style={styles.Footer}>
                <TouchableHighlight style={styles.Touchable}>
                    <View style={styles.Container} >
                        <Image style={styles.Icons} source={Icons.Footer.Home}/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.Touchable} >
                    <View style={styles.Container} >
                        <Image style={styles.Icons} source={Icons.Footer.Appointment}/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.Touchable} >
                    <View style={styles.Container} >
                        <Image style={styles.Icons} source={Icons.Footer.Gallery}/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.Touchable} >
                    <View style={styles.Container} >
                        <Image style={styles.Icons} source={Icons.Footer.Profile}/>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Footer: {
        width: "100%",
        height: 70,
        borderColor: "#ccc",
        backgroundColor: "white",
        borderTopWidth: 0,
        borderRightColor: "red",
        position: "absolute",
        bottom: 0,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start"
    },
    Container: {
        width: 50,
        height: 50,

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    Touchable: {
        width: 60,
        height: 60,
 
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    Icons: {
        width: 25,
        height: 25
    }
}) 

export default Navegation 
 