import React from 'react';
import {StyleSheet, View} from 'react-native';

import Colors from '../constants/Colors';

const Card = props => {
    return(
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: Colors.shadow,
        backgroundColor: Colors.card,
        elevation: 9,                        //Elevation solo funciona en Android
        padding: 10,
        borderRadius: 8
    },
});


export default Card;