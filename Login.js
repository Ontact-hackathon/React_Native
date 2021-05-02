import React, { useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import BNavigation from './BNavigation';
import LogRegister from './LogRegister';

export default function Login({navigation}) {
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => {
        fetch("http://localhost:8080/api/register", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                userId: id,
                userPw: password
            })
        }).then()
    }
    return (
        <View style={styles.container}>
            <TextInput
                value={id}
                onChangeText={(id) => setID(username)}
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
                    onPress={() => navigation.navigate(BNavigation)}
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