import * as React from 'react';
import { Alert, Text, TextInput, Button, View, StyleSheet } from 'react-native';

const AddProduct = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [discountPercentage, setDiscountPercentage] = React.useState('');
    const [rating, setRating] = React.useState('');
    const [stock, setStock] = React.useState('');
    const [brand, setBrand] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [image, setImage] = React.useState('');

    const handleSubmit = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                discountPercentage: discountPercentage,
                rating: rating,
                stock: stock,
                brand: brand,
                category: category,
                image: image,
            }),
        })
            .then(res => res.json())
            .then(console.log);
        Alert.alert('Product Added Successfully');
    };
    return (
        <View>
            <Text style={{ color: 'blue', fontSize: 15, fontWeight: 800 }}>Product Add</Text>
            <Text style={styles.textTitle} >Title</Text>
            <TextInput
                placeholder="Enter Title"
                onChangeText={text => setTitle(text)}
            />
            <Text style={styles.textTitle}>Description</Text>
            <TextInput
                placeholder="Enter Description"
                onChangeText={text => setDescription(text)}
            />
            <Text style={styles.textTitle}>Price</Text>
            <TextInput
                placeholder="Enter Price"
                onChangeText={text => setPrice(text)}
            />
            <Text style={styles.textTitle}>Discount Percentage</Text>
            <TextInput
                placeholder="Enter discount percentage"
                onChangeText={text => setDiscountPercentage(text)}
            />
            <Text style={styles.textTitle}>Rating</Text>
            <TextInput
                placeholder="Enter Rating"
                onChangeText={text => setRating(text)}
            />
            <Text style={styles.textTitle}>Stock</Text>
            <TextInput
                placeholder="Enter stock"
                onChangeText={text => setStock(text)}
            />
            <Text style={styles.textTitle}>Brand</Text>
            <TextInput
                placeholder="Enter brand"
                onChangeText={text => setBrand(text)}
            />
            <Text style={styles.textTitle}>Category</Text>
            <TextInput
                placeholder="Enter category"
                onChangeText={text => setCategory(text)}
            />
            <Text style={styles.textTitle}>Image</Text>
            <TextInput
                placeholder="Enter image URL(s)"
                onChangeText={text => setImage(text)}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
    },
    textTitle: {
        fontWeight: '800',
    },
    textInput: {
        marginBottom: 20,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: 'silver',
    },
    button: {
        height: 50,
        backgroundColor: '#ef506b',
        borderRadius: 10,
        justifyContent: 'center',
    },
});

export default AddProduct;
