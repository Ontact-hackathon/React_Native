import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList, TextInput, Alert, Modal, Pressable, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MakerFactory = ({ userNum, store, name, account, bank, latitude, longitude }) => {
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
        else {
            fetch("http://localhost:8080/api/bank/" + userNum, {
                method: 'PUT',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify({
                    money: parseInt(num)
                })
            })
            .then(response => response.json())
            .then(function (data) {
                var sum = parseInt(num);
                Alert.alert(`${sum}원이 결제되었습니다.\n 현재 남은 금액 : ${data}`)
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
                        <View>
                            <Button
                                title={'사장님과 채팅하기!'}
                                style={styles.button}
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