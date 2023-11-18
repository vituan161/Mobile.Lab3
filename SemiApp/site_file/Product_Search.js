import React from "react";
import { useState } from "react";
import { View, Text, FlatList, Image, TextInput, Button, StyleSheet } from "react-native";
import {Card}from "react-native-paper"

const SearchProduct = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    let filePath = 'https://dummyjson.com/products';

    const Filter = () => {
        if (value != '')
            filePath = 'https://dummyjson.com/products/search?q=' + value;
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
            });
    };

    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>Search Products</Text>
            <TextInput
                placeholder="Enter Title"
                onChangeText={text => setValue(text)} />
            <Button title="SEARCH" onPress={Filter}></Button>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <Card>
                            <Card.Title title="Product Detail"/>
                            <Card.Cover style={styles.image} source={{ uri: item.thumbnail }} />
                            <View style={{ margin: 10 }}>
                                <Text style={{ fontSize: 30 }}>Title: {item.title}</Text>
                                <Text>Description: {item.description}</Text>
                                <Text>Prices: {item.price}</Text>
                                <Text>Discount: {item.discountPercentage} off</Text>
                                <Text>Rating: {item.rating}</Text>
                                <Text>Stock: {item.stock}</Text>
                                <Text>Brand: {item.brand}</Text>
                                <Text>Category: {item.category}</Text>
                            </View>
                    </Card>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    image: {
        borderRadius: 10,
        alignSelf: 'center',
        width: "100%",
        height: 200,
    },
});

export default SearchProduct;

{/* <View style={styles.container}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 10 }}>Product Detail</Text>
                            <Image style={styles.image} source={{ uri: item.thumbnail }} resizeMode="cover" />
                            <View style={{ margin: 10 }}>
                                <Text style={{ fontSize: 30 }}>Title: {item.title}</Text>
                                <Text>Description: {item.description}</Text>
                                <Text>Prices: {item.price}</Text>
                                <Text>Discount: {item.discountPercentage} off</Text>
                                <Text>Rating: {item.rating}</Text>
                                <Text>Stock: {item.stock}</Text>
                                <Text>Brand: {item.brand}</Text>
                                <Text>Category: {item.category}</Text>
                            </View>
                        </View> */}