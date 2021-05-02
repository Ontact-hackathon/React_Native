import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import * as Location from 'expo-location';
import Home from './Home'

export default function Register({navigation}) {
    // 컴포넌트
    const [store, setStore] = useState('');
    const [name, setName] = useState('');
    const [account, setAccount] = useState('');
    const [bank, setBank] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [text, setText] = useState('Waiting..');
    const registerRef = useRef();
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
        })().then(
            function(){
                if (errorMsg) {
                    setText(errorMsg);
                } else if (location) {
                    setText('위치 반환 성공');
                    setLatitude(JSON.stringify(location.coords.latitude));
                    setLongitude(JSON.stringify(location.coords.longitude));
                }
            }
        )

    }, []);

    // 버튼 누르면 db에 저장
    const OkButton = () => {
        fetch("http://localhost:8080/api/register", {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({
                store: store,
                name: name, 
                account: account, 
                bank: bank, 
                latitude: latitude, 
                longitude: longitude
            })
        })
        setStore('');
        setName('');
        setAccount('');
        setBank('');
        registerRef.current.clear();
        setTimeout(() => console.log("wait"), 3000);
        navigation.navigate(Home);
    }

    return (
       <View style={styles.container}>
           <TextInput
           ref={registerRef}
           value={store}
           onChangeText={(store) => setStore(store)}
           placeholder={'상호명'}
           style={styles.input}
           />
           <TextInput
           ref={registerRef}
           value={name}
           onChangeText={(name) => setName(name)}
           placeholder={'사업자명'}
           style={styles.input}
           />
           <TextInput
           ref={registerRef}
           value={account}
           onChangeText={(account) => setAccount(account)}
           placeholder={'계좌번호'}
           style={styles.input}
           />
           <TextInput
           ref={registerRef}
           value={bank}
           onChangeText={(bank) => setBank(bank)}
           placeholder={'은행명'}
           style={styles.input}
           />

            <View style={{ flexDirection: 'row' }}>
                <Button
                    title={'등록'}
                    style={styles.button}
                    onPress={() => OkButton()}
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
        borderColor: 'skyblue',
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