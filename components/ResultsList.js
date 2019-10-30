import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation} from 'react-navigation';

import Result from '../components/Result';

const ResultsList = ({title, results, navigation }) => {

    if (!results.length) {
        return null;
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal                              //es lo mismo que poner horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {             //item es el objeto actual al que estamos iterando, en este caso es el objeto que tiene toda la información del restaurante
                    return (
                    <TouchableOpacity onPress={() => navigation.navigate('SelectedDetail', {id:item.id})}>
                        <Result result={item}/>
                    </TouchableOpacity>
                    )
                }}             
            />
        </View>
    )
}



const styles = StyleSheet.create ({
    title:{
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 5
    },
    container:{
        marginBottom: 10
    }
});



export default withNavigation(ResultsList);