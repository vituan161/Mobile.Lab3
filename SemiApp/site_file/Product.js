import { useState } from "react";
import { useEffect } from "react";
import {Button, Alert, FlatList, Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './productStyle';
//import { Button } from "react-native-paper";


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
            <Text style = {{fontSize:30, fontWeight:'bold', left:20, top: 20}}>Product List</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View style={{flexDirection: 'row' }}>
                        <View style={styles.container}>
                            <Image style={styles.image} source={{ uri: item.thumbnail }} />
                            <View >
                                <Text>Title: {item.title}</Text>
                                <Text>Description: {item.description}</Text>
                                <Text>Prices: {item.price}</Text>
                                <Text style={{ color: '#008000' }}>Discount: {item.discountPercentage} off</Text>
                                <Text>Rating: {item.rating}</Text>
                                <Text>Stock: {item.stock}</Text>
                                <Text>Brand: {item.brand}</Text>
                                <Text>Category: {item.category}</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Button title='Detail'></Button>
                                    <Button title='Add'/>
                                    <Button title='Delete'/>
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
