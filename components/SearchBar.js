import React, { useState } from 'react';
import { Text, Keyboard, View, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import Colors from '../constants/Colors';

const SearchBar = ({ onSearchChange, submitSearch }) => {

    const [enteredSearch, setEnteredSearch] = useState();

    const inputHandler = inputText => {
        setEnteredSearch(inputText.replace(/[^a-zA-Z0-9_ ]/g, ''));
        onSearchChange(enteredSearch);
    };

    return(
        <View style={styles.searchBarContainer}>
            <TextInput placeholder = 'Ingresar Busqueda'
             style = {styles.textInputSearch}
             underlineColorAndroid={'transparent'}
             value={enteredSearch}
             onChangeText={inputHandler}
             autoCapitalize="none"
             autoCorrect={false}/>
            <TouchableOpacity 
             style = {styles.textSearchButton} 
             onPress={submitSearch}>
                <FontAwesome name="search" size={16} color="#000" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginBottom:5,
        marginHorizontal: 10,
    },
    textInputSearch: {
        flex: 8,
        borderColor: Colors.shadow,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
        height: 40,
        paddingLeft: 10,
    },
    textSearchButton: {
        flex: 1,
        backgroundColor: Colors.shadow,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 40,
    }
});

export default SearchBar;