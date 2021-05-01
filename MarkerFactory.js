import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList, TextInput, Alert, Modal, Pressable, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Send from './Send';

const MakerFactory = ({ store, name, account, bank, latitude, longitude, navigation }) => {
    const [num, setNum] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const submit = () => {
        setModalVisible(!modalVisible)
        navigation.navigate(Send);
    }
    return (
        <View>
        <Marker
            coordinate={{ latitude: parseFloat(latitude), longitude: parseFloat(longitude) }}
            image={require('./assets/placeholder2.png')}
            title={store}
            description={name}
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
                    <Text style={styles.modalText}>{store}</Text>
                    <Text style={styles.modalText}>{name}</Text>
                    <Text style={styles.modalText}>{account}</Text>
                    <Text style={styles.modalText}>{bank}</Text>
                    <TextInput
                        value={num}
                        onChangeText={(num) => setNum(num)}
                        placeholder={'상호명'}
                        style={styles.input}
                    ></TextInput>
                    
                    <Button
                    title={'등록'}
                    style={styles.button}
                    />
                    
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => submit()}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        </View>
    );

}

export default MakerFactory;
const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 70,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
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
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      button: {
        width: 300,
        height: 70,
        padding: 10,
        borderWidth: 1,
        marginBottom: 20,
    }
});