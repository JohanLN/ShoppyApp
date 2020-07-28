import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'

export default class Payement extends Component
{

    constructor(props) {
        super(props)
        this.state = {
            payement: true,
            creditCard: "",
            validity: "",
            cvv: ""
        }
    }

    displayPayement() {
        this.setState({payement: !this.state.payement})
        this.props.payement(this.state.payement)
    }

    render () {
        return (
            <View style={{width: 300}}>
                <Text style={{textAlign: 'center', fontSize: 35, marginTop: 20}}>Total = 0 $</Text>
                <View style={styles.inputContainer}>
                    <Input 
                            placeholder="Credit card"
                            rightIcon={
                                <Icon 
                                    name="creditcard"
                                    size={20}
                                    color="gray"
                                />
                            }
                            onChangeText={text=>this.setState({creditCard: text})}
                        />
                    <Input 
                        placeholder="Validity date"
                        rightIcon={
                            <Icon 
                                name="calendar"
                                size={20}
                                color="gray"
                            />
                        }
                        onChangeText={text=>this.setState({validity: text})}
                    />
                    <Input 
                        placeholder="CVV"
                        rightIcon={
                            <Icon 
                                name="key"
                                size={20}
                                color="gray"
                            />
                        }
                        onChangeText={text=>this.setState({cvv: text})}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Cancel"
                        buttonStyle={{backgroundColor: "#ff0073", width: 100, borderRadius: 10}}
                        onPress={() => this.displayPayement()}
                    />
                    <Button 
                        title="Proceed"
                        buttonStyle={{backgroundColor: "#ff0073", width: 100, borderRadius: 10}}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 20,
        marginTop: 40,
        borderWidth: 0.25,
        borderRadius: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    }
})