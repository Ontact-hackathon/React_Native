import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView,{Marker} from 'react-native-maps';

export default function Home() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 35.844227,
                    longitude: 127.127468,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002,
                }} >
                <Marker
                    coordinate={{ latitude: 35.844015, longitude: 127.127487 }}
                    image={require('./assets/placeholder2.png')}
                    title="마싯는 타코야끼"
                    description="타코야끼 1000원에 5개 드시로오세영"
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});