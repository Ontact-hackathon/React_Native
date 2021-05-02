import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MarkerFactory from './MarkerFactory';

var id =0;
export default function Home() {
    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(1);
    const [loadingStatus, setLoadingStatus] = useState('.');
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setLoadingStatus(ls => ls + ".");
          }, 5000);
        fetch("http://localhost:8080/api/register")
        .then(response => response.json())
        .then(data => setData(data))
        return () => clearInterval(intervalId);
    },[]);

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 35.844227,
                    longitude: 127.127468,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002,
                }} >
                {data.map((obj) => {return (<MarkerFactory key={id++} store={obj.store} name={obj.name} account={obj.account} bank={obj.bank} latitude={obj.latitude} longitude={obj.longitude}/>)})}
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