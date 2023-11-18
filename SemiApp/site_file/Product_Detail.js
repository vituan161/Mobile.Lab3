import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button, Card } from "react-native-paper";

const ProductDetail = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const filePath = 'https://dummyjson.com/products/2';

    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data', error);
                setLoading(false);
            })
    },[]);

    if(loading){
        return <Text>Loading...</Text>
    }

    return (
        <Card>
            <Card.Title title="Product Detail" />
            <Card.Cover style={styles.image} source={{ uri: data.thumbnail }} />
            <Card.Content style={{ margin: 10 }}>
                <Text style={{ fontSize: 30 }}>Title: {data.title}</Text>
                <Text>Description: {data.description}</Text>
                <Text>Prices: {data.price}</Text>
                <Text>Discount: {data.discountPercentage} off</Text>
                <Text>Rating: {data.rating}</Text>
                <Text>Stock: {data.stock}</Text>
                <Text>Brand: {data.brand}</Text>
                <Text>Category: {data.category}</Text>
            </Card.Content>
            <Card.Actions>
                <Button style={styles.button}>Delete</Button>
                <Button style={styles.button}>Cancel</Button>
            </Card.Actions>
        </Card>
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
    button:{
        textDecorationColor: 'white',
    }
});

export default ProductDetail;