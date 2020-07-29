import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Overlay, CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'


export default class SearchingTool extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            display: false,
            shirt: false,
            pant: false,
            shoes: false
        }
    }

    filter() {
        const item = {
            shirt: this.state.shirt,
            pant: this.state.pant,
            shoes: this.state.shoes
        }

        this.props.filter(item)
    }


    render () {
        return (
            <View style={{position: 'absolute', top: 650, left: 280}}>
                <Button 
                    buttonStyle={{width: 60, height: 60, backgroundColor: 'orange', borderRadius: 50}}
                    icon={
                        <Icon 
                            name="filter"
                            size={30}
                            color="white"
                        />
                    }
                    onPress={() => {
                        if(this.props.menu)
                            this.props.displayMenu(!this.props.menu)
                        this.setState({display: !this.state.display})
                    }}
                />
                <Overlay
                    isVisible={this.state.display}
                    onBackdropPress={() => this.setState({display: !this.state.display})}
                    overlayStyle={{height: 300, width: 300}}
                >
                    <View>
                        <View style={{marginTop: 20, justifyContent: 'space-evenly'}}>
                            <CheckBox 
                                title="Shirt"
                                checkedIcon='dot-circle-o'
                                checkedColor="#ff0073"
                                checked={this.state.shirt}
                                onPress={() => this.setState({shirt: !this.state.shirt})}
                            />
                            <CheckBox 
                                title="Pants"
                                checkedIcon='dot-circle-o'
                                checkedColor="#ff0073"
                                checked={this.state.pant}
                                onPress={() => this.setState({pant: !this.state.pant})}
                            />
                            <CheckBox 
                                title="Shoes"
                                checkedIcon='dot-circle-o'
                                checkedColor="#ff0073"
                                checked={this.state.shoes}
                                onPress={() => this.setState({shoes: !this.state.shoes})}
                            />
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, marginBottom: 20, marginLeft: 20, marginRight: 20}}>
                            <Button 
                                buttonStyle={{backgroundColor: "#ff0073", width: 100}}
                                title="Cancel"
                                onPress={() => this.setState({display: !this.state.display})}
                            />
                            <Button 
                                buttonStyle={{backgroundColor: "#ff0073", width: 100}}
                                title="Apply"
                                onPress={() => this.filter()}
                            />
                        </View>
                    </View>
                </Overlay>
            </View>
        )
    }
}