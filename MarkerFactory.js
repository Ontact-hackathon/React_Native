import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const MakerFactory = ({ store, name, account, bank, latitude, longitude }) => {

    return (
        <Marker
            coordinate={{ latitude: parseFloat(latitude), longitude: parseFloat(longitude) }}
            image={require('./assets/placeholder2.png')}
            title={store}
            description={name}
        />
    );

}

export default MakerFactory;
