import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default function Profile() {
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');
    const [valpw, setValpw] = useState('');
    const [bank, setBank] = useState('');
    const [account, setAccount] = useState('');
    useEffect(() => {
        fetch("http://localhost:8080/api/register", {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                userId: id,
                userPw: password
            })
        })
        }, [])
    return (
        <View style={styles.container}>
            <TextInput
                value={id}
                editable='false'
                style={styles.input}
            />
            <TextInput
                value={password}
                editable='false'
                style={styles.input}
            />
            <TextInput
                value={valpw}
                editable='false'
                style={styles.input}
            />
            <TextInput
                value={bank}
                editable='false'
                style={styles.input}
            />

            <TextInput
                value={account}
                editable='false'
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