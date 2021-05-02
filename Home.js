import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions , Button, Callout, TouchableOpacity} from 'react-native';
import MapView, { Marker, OverlayComponent } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons'; 
import MarkerFactory from './MarkerFactory';

var id =0;
export default function Home() {
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    
    useEffect(() => {
        fetch("http://localhost:8080/api/register")
        .then(response => response.json())
        .then(data => setData(data))
    },[reload]);

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
                <View style={{position:'absolute',top:40, right:30,}}>
                                    <AntDesign name="reload1" size={24} color="black"  onPress={() => setReload(!reload)}/>
                </View>

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
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        width:'100%',
        height:'110%'
    },
});