import React from 'react'
import { View, ScrollView, Dimensions } from 'react-native'
import { TransactionBox } from '../../atoms'
import { TransactionsListStyle } from './style'
import { TransactionsListProps } from '../../interfaces/ComponentsInterfaces'

const defaultHeight = 400;

export const TransactionsList = ({ transactions, listHeight }: TransactionsListProps) => {
  return (
    <View style={TransactionsListStyle.containerScroll}>
      <View style={{ height: listHeight ?? defaultHeight }}>
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
