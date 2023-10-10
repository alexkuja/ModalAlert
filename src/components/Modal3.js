import React, { Component, useState } from 'react';
import { Modal, Text, TouchableOpacity, View, Alert,StyleSheet } from 'react-native';

export default function Modal3({setShowModal}) {
  //const [modalVisible, setModalVisible] = useState(false);

  const modalHeader=(
    <View style={styles.modalHeader}>
      <Text style={styles.title}>Delete Your Account</Text>
      <View style={styles.divider}></View>
    </View>
  )

  const modalBody=(
    <View style={styles.modalBody}>
      <Text style={styles.bodyText}>Are you sure you want to delete your account ?</Text>
    </View>
  )

  const modalFooter=(
    <View style={styles.modalFooter}>
      <View style={styles.divider}></View>
      <View style={{flexDirection:"row-reverse",margin:10}}>
        <TouchableOpacity style={{...styles.actions,backgroundColor:"#db2828"}} 
          onPress={() => {
            setShowModal(true);
          }}>
          <Text style={styles.actionText}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.actions,backgroundColor:"#21ba45"}}>
          <Text style={styles.actionText}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  const modalContainer=(
    <View style={styles.modalContainer}>
      {modalHeader}
      {modalBody}
      {modalFooter}
    </View>
  )

  const modal = (
    <Modal
      transparent={false}
      visible={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.modal}>
        <View>
          {modalContainer}
        </View>
      </View>
    </Modal>
)

  return (
    <View style={styles.container}>
      
      {modal}

      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
        }}>
        <Text>Show Modal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal:{
    backgroundColor:"#00000099",
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer:{
    backgroundColor:"#f9fafb",
    width:"80%",
    borderRadius:5
  },
  modalHeader:{
    
  },
  title:{
    fontWeight:"bold",
    fontSize:20,
    padding:15,
    color:"#000"
  },
  divider:{
    width:"100%",
    height:1,
    backgroundColor:"lightgray"
  },
  modalBody:{
    backgroundColor:"#fff",
    paddingVertical:20,
    paddingHorizontal:10
  },
  modalFooter:{
  },
  actions:{
    borderRadius:5,
    marginHorizontal:10,
    paddingVertical:10,
    paddingHorizontal:20
  },
  actionText:{
    color:"#fff"
  }
});