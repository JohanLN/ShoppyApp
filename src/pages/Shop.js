import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import MyHeader from '../components/MyHeader'
import Menu from '../components/Menu'
import Cart from '../components/Cart'
import SearchingTool from '../components/SearchingTool'
import AddElement from '../components/AddElement'

export default class Shop extends Component
{

    constructor(props) {
        super(props)
        this.state = {
            menu: false,
            cart: false,
            shirt: true,
            pant: true,
            shoes: true,
            add: false,
            selected: {},
            filter: [0, 1, 2],
            items: 
            [
                {
                    id: 1,
                    title: 'shirt1',
                    price: 15,
                    link: "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg",
                    filter: 0
                },
                {
                    id: 2,
                    title: 'shirt2',
                    price: 9.95,
                    link: "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg",
                    filter: 0
                },
                {
                    id: 3,
                    title: 'pant1',
                    price: 20.99,
                    link: "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg",
                    filter: 1
                },
                {
                    id: 4,
                    title: 'pant2',
                    price: 34.84,
                    link: "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg",
                    filter: 1
                },
                {
                    id: 5,
                    title: 'shoes1',
                    price: 71.96,
                    link: "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg",
                    filter: 2
                },
                {
                    id: 6,
                    title: 'shoes2',
                    price: 35.35,
                    link: "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg",
                    filter: 2
                },
            ]
        }
    }

    displayMenu() {
        this.setState({menu: !this.state.menu})
    }

    displayCart() {
        this.setState({cart: !this.state.cart})
    }

    displayAdd(status) {
        this.setState({add: status.status})
        if (status.status)
            this.setState({selected: status.item})
        else
            this.setState({selected: {}})
    }

    displayItems(item) {
        if(item.shirt !== this.state.shirt || item.pant !== this.state.pant || item.shoes !== this.state.shoes)
            this.filter(item)
        return (
            <View>
                <TouchableOpacity disabled={this.state.menu} onPress={() => this.displayAdd({item, status: true})}>
                    {this.state.filter[0] == item.filter || this.state.filter[1] == item.filter || this.state.filter[2] == item.filter ? (
                        <Text style={{fontSize: 20, textAlign:'center', marginTop: 30, marginBottom: 10}}>{item.title}  {item.price} $</Text>
                    ): null}
                    {this.state.filter[0] == item.filter || this.state.filter[1] == item.filter || this.state.filter[2] == item.filter ? (
                        <Image
                            style={{height: 300, width: 300, alignSelf: 'center', borderRadius: 30}}
                            source={{uri: item.link}}
                        />
                    ) : null}
                </TouchableOpacity>
            </View>
        )
    }

    filter(item) {
        const newFilter = this.state.filter
        this.setState({shirt: item.shirt, pant: item.pant, shoes: item.shoes})
        if (this.state.shirt)
            newFilter[0] = 0
        else
            newFilter[0] = -1
        if (this.state.pant)
            newFilter[1] = 1
        else
            newFilter[1] = -1
        if (this.state.shoes)
            newFilter[2] = 2
        else
            newFilter[2] = -1
        if (this.state.shirt && this.state.pant && this.state.shoes || (!this.state.shirt && !this.state.pant && !this.state.shoes)) {
            newFilter[0] = 0
            newFilter[1] = 1
            newFilter[2] = 2
        }
        this.setState({filter: newFilter})
    }
    
    render () {
        return (
            <View>
                <MyHeader menu={this.displayMenu.bind(this)} cart={this.displayCart.bind(this)}/>
                <TouchableOpacity style={{height: "100%", paddingBottom: 200}}  disabled={!this.state.menu} onPress={() => {this.setState({menu: false, cart: false})}}>
                    <ScrollView>
                        <FlatList 
                            data={this.state.items}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) => this.displayItems(item)}
                        />
                    </ScrollView>
                </TouchableOpacity>
                {this.state.menu ? (
                    <Menu nav={this.props.navigation} initialRoute="Shop" displayMenu={this.displayMenu.bind(this)} />
                ) : null}
                {this.state.cart ? (
                    <Cart cart={this.displayCart.bind(this)} />
                ) : null}
                <SearchingTool filter={this.filter.bind(this)} menu={this.state.menu} displayMenu={this.displayMenu.bind(this)}/>
                {this.state.add ? (
                    <AddElement displayAdd={this.displayAdd.bind(this)} element={this.state.selected} />
                ) : null}
            </View>
        )
    }
}