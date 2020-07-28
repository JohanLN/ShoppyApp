import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, Button, ThemeProvider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'
import Storage from '../Storage'


export default class MyHeader extends Component
{
    constructor(props) {
        super(props)
        this.state={
            menu: false,
            cart: false,
            items: [],
            nbItem: 0,
        }
    }

    displayMenu() {
        this.setState({menu: !this.state.menu})
        this.props.menu(this.state.menu)
    }

    displayCart() {
        this.setState({cart: !this.state.cart})
        this.props.cart(this.state.cart)
    }

    async componentDidMount() {
        let data = await Storage.getItems()
        if (!data)
            this.setState({nbItem: 0})
        else
            this.setState({nbItem: data.nbItem})
    }

    async componentDidUpdate() {
        let data = await Storage.getItems()
        if (!data)
            this.setState({nbItem: 0})
        else
            this.setState({nbItem: data.nbItem})
    }

    render () {
        return (
            <ThemeProvider theme={{ colors: { primary: "white" }}}>
                <Header 
                    leftComponent={ 
                        <Button 
                            type='clear'
                            icon={
                                <Icon 
                                    name="menu-fold"
                                    size={20}
                                    color="white"
                                />
                            }
                            onPress={() => this.displayMenu()}
                        />
                    }
                    centerComponent={{ text: "ShoppyApp" , style:{color: "white"} }}
                    rightComponent={
                        <Button 
                            type='clear'
                            icon={
                                <Icon 
                                    name="shoppingcart"
                                    size={20}
                                    color="white"
                                />
                            }
                            title={"  " + this.state.nbItem.toString()}
                            onPress={() => this.displayCart()}
                            buttonStyle={{color: 'white'}}
                        />
                    }
                    backgroundColor="#ff0073"
                />
            </ThemeProvider>
        )
    }
}