import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Overlay, Button } from 'react-native-elements'
import Storage from '../Storage'

export default class AddElement extends Component
{
    constructor(props) {
        super(props)
    }

    displayAdd() {
        this.props.displayAdd(false)
    }

    async addStorage() {
        const array = []
        array.push(this.props.element)

        await Storage.saveItem(array)
        this.displayAdd()
    }

    render () {
        const element = this.props.element
        return(
            <Overlay overlayStyle={{height: 200, width: 300}} onBackdropPress={() => this.displayAdd()}>
                <View>
                    <Text style={{fontSize: 35, marginTop: 20, marginBottom: 40, textAlign: 'center'}}>{element.title}  =  {element.price}</Text>
                    <View style={styles.buttonContainer}>
                        <Button 
                            buttonStyle={{backgroundColor: "#ff0073", width: 100, borderRadius: 10}}
                            title="Cancel"
                            onPress={() => this.displayAdd()}
                        />
                        <Button 
                            buttonStyle={{backgroundColor: "#ff0073", width: 100, borderRadius: 10}}
                            title="Add to cart"
                            onPress={() => this.addStorage()}
                        />
                    </View>
                </View>
            </Overlay>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20
    }
})