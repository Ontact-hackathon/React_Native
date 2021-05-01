import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import * as Location from 'expo-location';
import Home from './Home'

export default function Register({navigation}) {
    // 컴포넌트
    const [storename, setStorename] = useState('');
    const [name, setName] = useState('');
    const [accountnumber, setAccountnumber] = useState('');
    const [bankname, setBankname] = useState('');

    // 위치
    const [location, setLocation] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
       <View style={styles.container}>
           <TextInput
           value={storename}
           onChangeText={(storename) => setStorename}
           placeholder={'상호명'}
           style={styles.input}
           />
           <TextInput
           value={storename}
           onChangeText={(name) => setName}
           placeholder={'사업자명'}
           style={styles.input}
           />
           <TextInput
           value={storename}
           onChangeText={(accountnumber) => setAccountnumber}
           placeholder={'계좌번호'}
           style={styles.input}
           />
           <TextInput
           value={storename}
           onChangeText={(bankname) => setBankname}
           placeholder={'은행명'}
           style={styles.input}
           />

            <View style={{ flexDirection: 'row' }}>
                <Button
                    title={'등록'}
                    style={styles.button}
                    onPress={() => navigation.navigate(Home)}
                />
            </View>
            <Text>{text}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 300,
        height: 70,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
    },
    button: {
        width: 300,
        height: 70,
        padding: 10,
        borderWidth: 1,
        marginBottom: 20,
    }
});