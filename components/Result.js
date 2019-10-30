import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Card from '../components/Card';

const Result = ({ result }) => {
    return (
        <Card style={styles.card}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.description}>{result.rating} Estrellas, {result.review_count} Opiniones</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection:'row',
        marginLeft: 10,
        flexDirection: 'column'
    },
    title: {
        fontSize:15,
        fontWeight:'bold',
        maxWidth: 200
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 8,
        marginRight: 5,
        marginBottom: 5,
    },
    description: {
        marginTop:2,
        fontSize:13,
    }
})

export default Result;