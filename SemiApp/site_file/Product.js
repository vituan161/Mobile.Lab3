import { useState } from "react";
import { useEffect } from "react";
import {Button,Alert, FlatList, Text, View, Image, TouchableOpacity } from 'react-native'
import * as React from 'react';
import styles from './productStyle';
import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";


const ProductList = () => {
    const [data, setData] = useState([]);
    const filePath = 'https://dummyjson.com/products';
    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d.products);

            })
            .catch((error) => {
                console.error('Error fetching data', error);
            })
    });

    return (
        // <View>{data.map((item,index) => (
        //     <View key={index}>
        //         <Text>{item.id +" "+ item.title +" "+ item.price +" "+ item.brand}</Text>
        //     </View>
        // ))}</View>

        <View>
            <Text style = {{fontSize:30, fontWeight:'bold', margin:10}}>Product List</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View>
                        <View style = {styles.container}>
                            <Image style={styles.image} source={{ uri: item.thumbnail }} />
                            <View style= {{flex:1}}>
                                <Text>Title: {item.title}</Text>
                                <Text>Description: {item.description}</Text>
                                <Text>Prices: {item.price}</Text>
                                <Text style={{ color: '#008000' }}>Discount: {item.discountPercentage} off</Text>
                                <Text>Rating: {item.rating}</Text>
                                <Text>Stock: {item.stock}</Text>
                                <Text>Brand: {item.brand}</Text>
                                <Text>Category: {item.category}</Text>
                                <View style={{flexDirection:'row'}}>
                                    <TouchableOpacity style = {styles.buttons}><Text style={styles.buttonstext}>Detail</Text></TouchableOpacity>
                                    <TouchableOpacity style = {styles.buttons}><Text style={styles.buttonstext}>Add</Text></TouchableOpacity>
                                    <TouchableOpacity style = {styles.buttons}><Text style={styles.buttonstext}>Delete</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                }
            />
        </View>
    );
}
export default ProductList;
