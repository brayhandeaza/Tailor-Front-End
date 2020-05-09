import React, { Component } from 'react'
import {StyleSheet, View, Text } from 'react-native'


// Components
import Footer from '../components/Footer'
import Header from '../components/Header'


class Appointments extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.Appointments}>
                <Header/>
                <Text>Profile</Text>
                <Footer/>
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    Appointments: {
        flex: 1,

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Appointments