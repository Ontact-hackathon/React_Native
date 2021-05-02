import React, { Component } from 'react';
import { useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default function LogRegister({ navigation }) {
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');
    const [valpw, setValpw] = useState('');
    const [bank, setBank] = useState('');
    const [account, setAccount] = useState('');
    const [ok, setOk] = useState(true);


    const ValidatePw = (valpw) => {
        setValpw(valpw);
        if (valpw == password || valpw == '') setOk(true);
        else setOk(false)
    }
    const Register = () => {
        if (ok == false)
            Alert.alert("비밀번호를 확인해주세요.")
        else if (ok == true && password != '')  {
            fetch("http://localhost:8080/api/register", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    userId: id,
                    userPw: password,
                    userBank: bank,
                    userAccount: account
                })
            }).then(Alert.alert("회원가입이 완료됐습니다."))
                .then(navigation.goBack());

        }
        
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
            <TextInput
                value={valpw}
                onChangeText={(valpw) => ValidatePw(valpw)}
                placeholder={'Password'}
                secureTextEntry={true}
                style= {ok? styles.input: styles.ok}
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
                    onPress={() => Register()}
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
    ok: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
        marginBottom: 10,
    }
});