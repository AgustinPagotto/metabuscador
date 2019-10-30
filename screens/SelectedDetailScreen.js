import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native';

import yelp from '../api/yelp';
import Colors from '../constants/Colors';
import Card from '../components/Card';

const SelectedDetailScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return( 
            <View style={styles.container}>
                <View style={styles.titleContainer} >
                    <Text style={styles.title}>{result.name}</Text>
                </View>
                <Card style={styles.card}>
                    <Text style={styles.titledetalle}>Detalles del Restaurante:</Text>
                    <Text style={styles.detalle}>Estrellas: {result.rating}</Text>
                    <Text style={styles.detalle}>Cantidad de Opiniones: {result.review_count}</Text>
                    <Text style={styles.detalle}>Numero de Telefono: {result.display_phone}</Text>
                    <Text style={styles.detalle}>Direccion: {result.location.address1}</Text>
                </Card>
                <Card style={styles.card2}>
                <Text style={styles.titledetalle}>Fotos del Restaurante:</Text>
                <FlatList 
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={result.photos}
                  keyExtractor={(photo) => photo}
                  renderItem={({item})=>{
                    return <Image style={styles.image} source={{uri: item}}/>
                }}
                />
                </Card>
            </View>
    );
};

const styles = StyleSheet.create({
    card:{
        width:'95%',
        paddingVertical: 5,
        justifyContent:'center',
        marginBottom: 15,
        backgroundColor: Colors.card3,
    },

    card2:{
        width:'95%',
        paddingVertical: 5,
        justifyContent:'center',
        paddingBottom: 10,
        backgroundColor: Colors.card3,
    },

    container:{
        flex:1,
        alignItems: 'center',
        marginTop: 40,
    },

    title:{
        fontWeight:'bold',
        fontSize:18,
        color:'white'
    },
    
    titledetalle:{
        fontWeight:'bold',
        fontStyle:'italic',
        fontSize:18,
        marginBottom: 10
    },
    
    detalle:{
        fontStyle:'italic',
        fontSize:15,
    },
    
    image:{
        width: 300,
        height: 300,
        borderRadius: 8,
        marginRight: 15
    },

    titleContainer:{
        borderRadius: 8,
        backgroundColor: Colors.card2,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginVertical: 15,
    }

})

export default SelectedDetailScreen;