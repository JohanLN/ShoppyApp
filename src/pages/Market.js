import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import MyHeader from '../components/MyHeader'
import Teaser from '../components/Teaser'
import Menu from '../components/Menu'
import Cart from '../components/Cart'

export default class Market extends Component
{

    constructor(props) {
        super(props)
        this.state = {
            menu: false,
            cart: false
        }
    }

    displayMenu() {
        this.setState({menu: !this.state.menu})
    }

    displayCart() {
        this.setState({cart: !this.state.cart})
    }

    render () {
        return (
            <View>
                <MyHeader menu={this.displayMenu.bind(this)} cart={this.displayCart.bind(this)} />
                <TouchableOpacity disabled={!this.state.menu} onPress={() => {this.setState({menu: false, cart: false})}}>
                    <Text style={styles.title}>Welcome to the ShoppApp market !</Text>
                </TouchableOpacity>

                    <ScrollView>
                        <TouchableOpacity style={{height:"100%", paddingBottom: 250}} disabled={!this.state.menu} onPress={() => {this.setState({menu: false, cart: false})}}>
                            <TouchableOpacity disabled={this.state.menu} onPress={() => this.props.navigation.navigate("Shop")}>
                                <Teaser id="Mixed" />
                            </TouchableOpacity>
                            <TouchableOpacity disabled={this.state.menu} onPress={() => this.props.navigation.navigate("Shop")}>
                                <Teaser id="Women" />
                            </TouchableOpacity>
                            <TouchableOpacity disabled={this.state.menu} onPress={() => this.props.navigation.navigate("Shop")}>
                                <Teaser id="Men" />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </ScrollView>
                {this.state.menu ? (
                    <Menu nav={this.props.navigation} initialRoute="Market" displayMenu={this.displayMenu.bind(this)} />
                ) : null}
                {this.state.cart ? (
                    <Cart cart={this.displayCart.bind(this)} />
                ) : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40, 
        textAlign: 'center', 
        paddingTop: 20,
        paddingBottom: 30,
        marginBottom: 30,
        backgroundColor: '#dedede', 
        borderBottomRightRadius: 30, 
        borderBottomLeftRadius: 30
    }
})