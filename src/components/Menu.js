import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'


export default class Menu extends Component
{

    logout() {
        this.props.nav.navigate("Login")
    }

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
                    onPress={() => {
                        this.props.displayMenu(false)
                        this.props.nav.navigate("Account", {initialRoute: this.props.initialRoute})
                    }}
                />
                <Button 
                    buttonStyle={styles.button}
                    icon={
                        <Icon 
                            name="logout"
                            size={25}
                            color="white"
                        />
                    }
                    onPress={() => this.logout()}
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