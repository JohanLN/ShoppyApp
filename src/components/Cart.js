import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Overlay, Button } from 'react-native-elements'
import Payement from './Payement'

export default class Cart extends Component
{

    constructor(props) {
        super(props)
        this.state={
            cart: false,
            payement: false
        }
    }

    displayCart() {
        this.setState({cart: !this.state.cart})
        this.props.cart(this.state.cart)
    }

    render () {
        return (
            <View>
                <Overlay
                    isVisible={true}
                    onBackdropPress={() => this.displayCart()}
                >
                    {!this.state.payement ? (
                        <View>
                            <Text>---------------------------------------------->    Total = 0 $</Text>
                            <View style={styles.buttonContainer}>
                                <Button 
                                    buttonStyle={{backgroundColor: "#ff0073", width: 100, borderRadius: 10}}
                                    title="Cancel"
                                    onPress={() => this.displayCart()}
                                />
                                <Button 
                                    buttonStyle={{backgroundColor: "#ff0073", width: 100, borderRadius: 10}}
                                    title="Payement"
                                    onPress={() => this.setState({payement: true})}
                                />
                            </View>
                        </View>
                    ) : 
                        <Payement payement={this.displayCart.bind(this)} />
                    }
                </Overlay>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
        marginBottom: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})