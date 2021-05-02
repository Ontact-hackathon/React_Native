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
    const Lookup = () => {
        fetch("https://openapi.wooribank.com:444/oai/wb/v1/finance/getAccBasicInfo", {
            method: 'POST',
            headers: {
                'appKey': 'l7xx90ghoKOdmzsALEZeEm3M4c2v6YU0YK2a',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "dataHeader": {
                    "UTZPE_CNCT_IPAD": "10.0.0.1",
                    "UTZPE_CNCT_MCHR_UNQ_ID": "3B5E6E7B",
                    "UTZPE_CNCT_TEL_NO_TXT": "01012341234",
                    "UTZPE_CNCT_MCHR_IDF_SRNO": "IMEI",
                    "UTZ_MCHR_OS_DSCD": "1",
                    "UTZ_MCHR_OS_VER_NM": "8.0.0",
                    "UTZ_MCHR_MDL_NM": "SM-G930S",
                    "UTZ_MCHR_APP_VER_NM": "1.0.0"
                },
                "dataBody": {
                    "INQ_ACNO": account,
                    "INQ_BAS_DT": "20210220",
                    "ACCT_KND": "P",
                    "INQ_CUCD": "KRW"
                }
            })
        }).then(response => response.json())
            .then(function (data) {
                Alert.alert("잔액 : " + parseInt(data.dataBody.CT_BAL)+"원("+data.dataBody.CUCD+")")
            })
    }
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
            <Button
                title={'잔액 조회'}
                onPress={() => Lookup()}
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