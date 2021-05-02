import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MarkerFactory from './MarkerFactory';

export default function Home() {
    const data = [
        {
            "id":1,
            "store": "맛난 호떡",
            "name": "김우리",
            "account": "2003004030020",
            "bank": "국민은행",
            "latitude": "35.844227",
            "longitude": "127.127468"
        }, {
            "id": 2,
            "store": "Qwe",
            "name": "Qwe",
            "account": "Qwe",
            "bank": "Qwe",
            "latitude": "35.848991",
            "longitude": "127.13656990000001"
        }
    ]
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 35.844227,
                    longitude: 127.127468,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002,
                }} >
                {data.map((obj) => {return (<MarkerFactory key={obj.id} store={obj.store} name={obj.name} account={obj.account} bank={obj.bank} latitude={obj.latitude} longitude={obj.longitude}/>)})}
                {/* <Marker
                    coordinate={{ latitude: 35.844015, longitude: 127.127487 }}
                    image={require('./assets/placeholder2.png')}
                    title="마싯는 타코야끼"
                    description="타코야끼 1000원에 5개 드시로오세영"
                /> */}
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