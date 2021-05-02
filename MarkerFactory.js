import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList, TextInput, Alert, Modal, Pressable, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MakerFactory = ({ store, name, account, bank, latitude, longitude }) => {
    const [num, setNum] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const costRef = useRef();

    const Cancel = () => {
        setModalVisible(!modalVisible)
        costRef.current.clear();
        setNum('');
    }

    // 등록 버튼 누르면 이체 api 실행
    const OkButton = () => {
        if (num == '')
            Alert.alert("금액을 입력하세요.")
        else if (bank == "우리은행") {
            fetch("https://openapi.wooribank.com:444/oai/wb/v1/trans/executeWooriAcctToWooriAcct", {
                method: 'POST',
                headers: {
                    'appKey': 'l7xxjWg4sknkebVFA20XMzGnQiyRfmpsT01B',
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
                        "WDR_ACNO": "1002123456789",
                        "TRN_AM": parseInt(num),
                        "RCV_BKCD": "020",
                        "RCV_ACNO": parseInt(account),
                        "PTN_PBOK_PRNG_TXT": "입금"
                    }
                })
            })
                .then(response => response.json())
                .then(function (data) {
                    var sum = parseInt(data.dataBody.FEE_Am) + parseInt(num);
                    Alert.alert(data.dataBody.RNPE_FNM + "님에게 " + sum + "원을 입금하셨습니다.\n(당행 입금 수수료 : 0원)")
                    costRef.current.clear();
                    setNum('');
                })
        }
        else {
            fetch("https://openapi.wooribank.com:444/oai/wb/v1/trans/executeWooriAcctToOtherAcct", {
                method: 'POST',
                headers: {
                    'appKey': 'l7xxpLGgVKFQY2hkG28k5yo2LtLxPJlLEvPJ',
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
                        "WDR_ACNO": "1002123456789",
                        "TRN_AM": parseInt(num),
                        "RCV_BKCD": "088",
                        "RCV_ACNO": parseInt(account),
                        "PTN_PBOK_PRNG_TXT": "입금"
                    }
                })
            })
                .then(response => response.json())
                .then(function (data) {
                    var sum = parseInt(data.dataBody.FEE_Am) + parseInt(num);
                    Alert.alert(data.dataBody.RNPE_FNM + "님에게 " + sum + "원을 입금하셨습니다.\n(타행 입금 수수료 : 500원)")
                    costRef.current.clear();
                    setNum('');
                })
        }
    }

    return (
        <View>
            <Marker
                coordinate={{ latitude: parseFloat(latitude), longitude: parseFloat(longitude) }}
                image={require('./assets/pin.png')}
                onPress={() => setModalVisible(true)}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <Text style={styles.modalText}>{store}</Text>
                            <Text style={styles.modalText}>{name}</Text>
                            <Text style={styles.modalText}>{account}</Text>
                            <Text style={styles.modalText}>{bank}</Text>
                        </View>
                        <TextInput
                            value={num}
                            onChangeText={(num) => setNum(num)}
                            placeholder={'금액'}
                            style={styles.input}
                            ref={costRef}
                        ></TextInput>
                        <View style={{ flexDirection: 'row' }}>
                            <Button
                                title={'송금'}
                                style={styles.button}
                                onPress={() => OkButton()}
                            />
                            <Button
                                style={styles.button}
                                title={'취소'}
                                onPress={() => Cancel()}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );

}

const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
        textAlign: "right"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22

    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "left"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "left"
    },
    button: {
        width: 300,
        height: 70,
        padding: 10,
        borderWidth: 1,
        marginBottom: 20,
    }
});

export default MakerFactory;