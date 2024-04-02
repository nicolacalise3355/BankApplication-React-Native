import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { CardBoxStyle } from './style'
import { CardBoxProp } from '../../interfaces/AtomsInterfaces'

export const CardBox = ({ uri, availability, expenses, digits }: CardBoxProp) => {
  return (
    <View style={CardBoxStyle.container}>
        <ImageBackground source={{ uri: uri }} style={[{ opacity: 0.8 }, CardBoxStyle.imageBackground]}>
            <View style={CardBoxStyle.cardDataContainer}>
              <View style={CardBoxStyle.textContainer}>
                <Text style={CardBoxStyle.text}>{availability} / {expenses}</Text>
              </View>
              <View style={CardBoxStyle.textContainer}>
                <Text style={CardBoxStyle.text}>Card Number: ***{digits}</Text>
              </View>
            </View>
        </ImageBackground>
    </View>
  )
}
