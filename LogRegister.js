import React, { Component } from 'react';
import { useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default function LogRegister({ navigation }) {
    const [ID, setID] = useState('');
    const [password, setPassword] = useState('');
    const [validpw, setValipw] = useState('');
    const [bank, setBank] = useState('');
    const [account, setAccount] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                value={ID}
                onChangeText={(ID) => setID(ID)}
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
            <TextInput
                value={validpw}
                onChangeText={(validpw) => setValipw(validpw)}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />
            <TextInput
                value={bank}
                onChangeText={(bank) => setBank(bank)}
                placeholder={"OO은행"}
                style={styles.input}
            />
            <TextInput
                value={account}
                onChangeText={(account) => setAccount(account)}
                placeholder={'account'}
                style={styles.input}
            />
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title={'OK'}
                    style={styles.input}
                />
                <Button
                    title={'Cancel'}
                    style={styles.input}
                    onPress={() => navigation.goBack()}
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