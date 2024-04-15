import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const TransactionsListLoader = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}
