import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'


export default class Menu extends Component
{
    render () {
        return (
            <View style={styles.menuContainer}>
                <Button 
                    buttonStyle={styles.button}
                    icon={
                        <Icon 
                            name="user"
                            size={25}
                            color="white"
                        />
                    }
                    onPress={() => {}}
                />
                <Button 
                    buttonStyle={styles.button}
                    icon={
                        <Icon 
                            name="setting"
                            size={25}
                            color="white"
                        />
                    }
                    onPress={() => {}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuContainer:{
        height: 662,
        backgroundColor: "white",
        width: 100,
        position: 'absolute',
        top: 84
    },
    button:{
        marginTop: 30,
        marginLeft: 20,
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: 'orange'
    }
})