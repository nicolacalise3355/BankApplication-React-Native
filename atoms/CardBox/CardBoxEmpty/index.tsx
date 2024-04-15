import React from 'react'
import { View, ImageBackground } from 'react-native'
import { CardBoxEmptyProp } from '../../../interfaces/AtomsInterfaces'
import { CardBoxStyle } from '../style'

export const CardBoxEmpty = ({ uri }: CardBoxEmptyProp) => {
  return (
    <View style={CardBoxStyle.container}>
        <ImageBackground source={{ uri: uri }} style={[{ opacity: 0.8 }, CardBoxStyle.imageBackground]}>
            <View style={CardBoxStyle.fullCardEmptyContainer}>
            </View>
        </ImageBackground>
    </View>
  )
}
