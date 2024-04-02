import React from 'react'
import { View, Text } from 'react-native'
import { TransactionBoxProps } from '../../interfaces/AtomsInterfaces'
import { TransactionsBoxStyle } from './style'

export const TransactionBox = ({ transaction }: TransactionBoxProps) => {
  return (
    <View style={TransactionsBoxStyle.container}>
        <View>
            <Text style={TransactionsBoxStyle.simpleText}>
                {transaction.merchant} - {transaction.amount} {transaction.currency}
            </Text>
        </View>
        <View>
            <Text style={TransactionsBoxStyle.simpleText}>
                {transaction.location} - {transaction.date} - {transaction.status}
            </Text>
        </View>
    </View>
  )
}