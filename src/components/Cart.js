import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Overlay, Button, ListItem } from 'react-native-elements'
import Payement from './Payement'
import Storage from "../Storage"
import Icon from 'react-native-vector-icons/AntDesign'

export default class Cart extends Component
{

    constructor(props) {
        super(props)
        this.state={
            cart: false,
            payement: false,
            nbItem: "",
            items: [],
            total: 0
        }
    }

    displayCart() {
        this.setState({cart: !this.state.cart})
        this.props.cart(this.state.cart)
    }

    async deleteItem(item) {
        let newArray = this.state.items
        let index = newArray.indexOf(item)

        if (index > -1) {
            this.setState({total: this.state.total -= item.price})
            newArray.splice(index, 1)
            this.setState({items: newArray})
            await Storage.saveItems(newArray, newArray.length)
        }
        else
            console.log('Error when deleting item')
    }

    showCart(item) {
        return (
            <View>
                <ListItem 
                    title={item.title + "  =  " + item.price + " $"}
                    rightIcon={
                        <Button 
                            type='clear'
                            icon={
                                <Icon 
                                    name="closecircle"
                                    size={15}
                                    color='red'
                                />
                            }
                            onPress={() => this.deleteItem(item)}
                        />
                    }
                    bottomDivider
                />
            </View>
        )
    }

    async componentDidMount() {
        let data = await Storage.getItems()

        let aTotal = 0
        this.setState({items: data.items, nbItem: data.nbItem})
        if (data.items) {
            for (let item of data.items)
                aTotal = aTotal += item.price
            this.setState({total: aTotal.toFixed(2)})
        }
            
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
                            <FlatList
                                data={this.state.items}
                                keyExtractor={(item) => item.id}
                                renderItem={({item}) => this.showCart(item)}
                            />
                            <Text>---------------------------------------------->    Total = {this.state.total} $</Text>
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
                        <Payement payement={this.displayCart.bind(this)} total={this.state.total} />
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