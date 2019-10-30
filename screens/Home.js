import React, {useState} from 'react';
import {View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView} from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

import yelp from '../api/yelp';
import useResult from '../hooks/useResult';


const Home = () => {
    const [userSearch, setUserSearch] = useState ('');
    const [searchApi, results, errorMessage] = useResult();

    const filterResultsByPrice = (price) => {
        //price === '$' or '$$' or '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    const searchHandler = () => {
        searchApi(userSearch);
    };

    return(
            <View style={styles.general}>
                <SearchBar
                onSearchChange={(newSearch) => setUserSearch(newSearch)}
                submitSearch={searchHandler}/>
                <Text style={styles.resu}>Hemos encontrado {results.length} resultados </Text>
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                <ScrollView>
                <ResultsList 
                 results={filterResultsByPrice('$')} 
                 title="Ahorrador"/>
                <ResultsList 
                 results={filterResultsByPrice('$$')} 
                 title="Carito"/>
                <ResultsList 
                 results={filterResultsByPrice('$$$')} 
                 title="Cheto"/>
                 </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    general:{
        marginTop:10,
        flex:1,
    },
    resu:{
        marginBottom: 5,
        marginLeft:10,
        fontSize: 12
    }
});

export default Home;