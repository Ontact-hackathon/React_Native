import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default function Profile({route}) {
    const user = route.params.userId;
    
    const [bank, setBank] = useState('');
    const [account, setAccount] = useState('');
    useEffect(() => {
        fetch("http://localhost:8080/api/userInfo/" + user)
        .then(response => response.json())
        .then(function (data) {
            setBank(data.bank);
            setAccount(data.account);
        })
    },[])
    return (
        <View style={styles.container}>
            <TextInput
                value={bank}
                editable='false'
                onChangeText={(bank) => setBank(bank)}
                style={styles.input}
            />
            <TextInput
                value={account}
                editable='false'
                onChangeText={(account) => setAccount(account)}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'skyblue',
        marginBottom: 10,
    }
})