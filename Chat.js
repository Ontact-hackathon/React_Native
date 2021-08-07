import { white } from 'ansi-colors';
import { size } from 'lodash';
import { styleSheets } from 'min-document';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text } from 'react-native';

export default function Chat({ route })
{
    
    return (
        <View style={{ flex: 1 }}>
            <View style={{alignItems:'center', marginTop:10}}><Text style={{fontSize:20, fontWeight:'bold'}}>사랑이 가득한 타코야끼</Text></View>
            <View style={styles.textConL}><Text style={styles.text}>안녕하세요</Text></View>
            <View style={styles.textConR}><Text style={styles.text}>안녕하세요~ 궁금한게 있으신가요?</Text></View>
            <View style={styles.textConL}><Text style={styles.text}>혹시 오늘 언제까지 여나요??</Text></View>
            <View style={styles.textConR}><Text style={styles.text}>오늘 저녁 7시까지 열려있습니다~~</Text></View>
            <View style={{flexDirection:'row', marginTop:140}}>
            <TextInput
                    editable={true}
                    style={styles.input}
            />
                <View style={{ marginTop: 20 }}><Button style={{}} title="전송" /></View>
            </View>
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
        backgroundColor: "white",
        width:300,
        height: 60,
        margin: 10,
        borderRadius: 30,
        marginLeft: 30,
        fontSize: 20,
    },
    text: {
        fontSize: 20,
        color:"white",
    },
    textConR: {
        borderColor: "black",
        backgroundColor: 'gray',
        width: 200,
        height: 80,
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center',   
        justifyContent: 'center',
        margin: 20,
        marginLeft:200,
    },
        textConL: {
        borderColor: "black",
        backgroundColor: '#7589E1',
        width: 200,
        height: 80,
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center',   
        justifyContent: 'center',
        margin:20
    }
})

// export default function Chat({route}) {
//     const user = route.params.userId;  
//     const [bank, setBank] = useState('');
//     const [account, setAccount] = useState('');
//     useEffect(() => {
//         fetch("http://localhost:8080/api/userInfo/" + user)
//         .then(response => response.json())
//         .then(function (data) {
//             setBank(data.bank);
//             setAccount(data.account);
//         })
//     },[])
//     const Lookup = () => {
//         fetch("https://openapi.wooribank.com:444/oai/wb/v1/finance/getAccBasicInfo", {
//             method: 'POST',
//             headers: {
//                 'appKey': 'l7xx90ghoKOdmzsALEZeEm3M4c2v6YU0YK2a',
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 "dataHeader": {
//                     "UTZPE_CNCT_IPAD": "10.0.0.1",
//                     "UTZPE_CNCT_MCHR_UNQ_ID": "3B5E6E7B",
//                     "UTZPE_CNCT_TEL_NO_TXT": "01012341234",
//                     "UTZPE_CNCT_MCHR_IDF_SRNO": "IMEI",
//                     "UTZ_MCHR_OS_DSCD": "1",
//                     "UTZ_MCHR_OS_VER_NM": "8.0.0",
//                     "UTZ_MCHR_MDL_NM": "SM-G930S",
//                     "UTZ_MCHR_APP_VER_NM": "1.0.0"
//                 },
//                 "dataBody": {
//                     "INQ_ACNO": account,
//                     "INQ_BAS_DT": "20210220",
//                     "ACCT_KND": "P",
//                     "INQ_CUCD": "KRW"
//                 }
//             })
//         })
//         .then(response => response.json())
//             .then(function (data) {
//                 Alert.alert('잔액 : ' + parseInt(data.dataBody.CT_BAL)+'원('+data.dataBody.CUCD+')')
//             })
//     }
//     return (
//         <View style={styles.container}>
//             <TextInput
//                 value={bank}
//                 editable={false}
//                 onChangeText={(bank) => setBank(bank)}
//                 style={styles.input}
//             />
//             <TextInput
//                 value={account}
//                 editable={false}
//                 onChangeText={(account) => setAccount(account)}
//                 style={styles.input}
//             />
//             <Button
//                 title={'잔액 조회'}
//                 onPress={() => Lookup()}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#ecf0f1',
//     },
//     input: {
//         width: 200,
//         height: 44,
//         padding: 10,
//         borderWidth: 1,
//         borderColor: 'skyblue',
//         marginBottom: 10,
//     }
// })