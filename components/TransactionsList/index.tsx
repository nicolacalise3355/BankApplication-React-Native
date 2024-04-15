import React from 'react'
import { View, ScrollView } from 'react-native'
import { TransactionBox } from '../../atoms'
import { TransactionsListStyle } from './style'
import { TransactionsListProps } from '../../interfaces/ComponentsInterfaces'

export const TransactionsList = ({ transactions, listHeight = 400 }: TransactionsListProps) => {
  return (
    <View style={TransactionsListStyle.containerScroll}>
      <View style={{ height: listHeight }}>
        <ScrollView>
          <View style={TransactionsListStyle.container}>
            {
              transactions.map((t) => <TransactionBox transaction={t} key={t.id} /> )
            }
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
