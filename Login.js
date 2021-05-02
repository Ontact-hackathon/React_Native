import React, { useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import BNavigation from './BNavigation';
import LogRegister from './LogRegister';

import {CommonActions} from '@react-navigation/native';

export default function Login({navigation}) {
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');

    const [checkLogin, setCheckLogin] = useState(false);

    const onLogin = () => {
        fetch("http://localhost:8080/api/loginInfo/" + id + "/" + password)
            .then(response => response.json())
            .then(function(data){
                if(data.check == true) {
                    //navigation.navigate(BNavigation)
                    navigation.dispatch(
                        CommonActions.navigate({
                            name: 'BNavigation',
                            params: {
                                userId: id,
                            },
                        })
                    )
                } else {
                    Alert.alert("아이디 또는 비밀번호를 확인해주세요.")
                }
            }
            )

    }
    return (
        <View style={styles.container}>
            <TextInput
                value={id}
                onChangeText={(id) => setID(id)}
                placeholder={'ID'}
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={() => onLogin()}
                />
                <Button
                    title={'Register'}
                    style={styles.input}
                    onPress={() => navigation.navigate(LogRegister)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ecf0f1',
        backgroundColor: 'white',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'skyblue',
        marginBottom: 10,
    },
});