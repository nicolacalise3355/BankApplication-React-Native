import React from 'react'
import { SafeAreaView, Modal, Pressable, Text, View } from 'react-native'
import { MessageBoxStyle } from './style'
import { MessageBoxProps } from '../../interfaces/AtomsInterfaces'
import { timestampToDate } from '../../services/Utility'

export const MessageBox = ({ timestamp, title, message, callbackClose }: MessageBoxProps) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={MessageBoxStyle.container}>
      <Pressable onPress={callbackClose} testID='messageBox'>
        <View style={MessageBoxStyle.containerClose}>
          <Text style={MessageBoxStyle.close}>X</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <View style={MessageBoxStyle.containerText}>
          <Text style={MessageBoxStyle.simpleText}>Message: {title}</Text>
        </View>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <SafeAreaView style={MessageBoxStyle.modalContainer}>
            <View style={MessageBoxStyle.modalTextContainer}>
              <Text style={MessageBoxStyle.modalTitleText}>{title} : {timestampToDate(timestamp)}</Text>
              <Text style={MessageBoxStyle.modalText}>{message}</Text>
            </View> 
            <Pressable
              style={MessageBoxStyle.modalButtonClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>Close Modal</Text>
            </Pressable>
        </SafeAreaView>
      </Modal>
    </View>
  )
}
