import React, { Component } from 'react'
import {StyleSheet, View, Image, TouchableHighlight } from 'react-native';

import { Icons } from '../constants/Image';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.Header}>
                <TouchableHighlight style={styles.Touchable} >
                    <Image style={styles.Icons} source={Icons.Views[0]} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.Touchable} >
                    <Image style={styles.Icons, {width: 25, height: 25}} source={Icons.Header.More} />
                </TouchableHighlight>
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    Header: {
        width: "100%",
        height: 100,
        zIndex: 1000,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        position: "absolute",
        top: 0,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    Touchable: {
        width: 50,
        height: 50,
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    Icons: {
        width: 40,
        height: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
    }
})

export default Header;