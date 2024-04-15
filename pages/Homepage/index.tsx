import React from 'react'
import { Text, Pressable, View } from 'react-native'
import { HomepageStyle } from './style'
import useHttpSimulation from '../../hooks/useHttpSimulation'
import { Endpoints_uri } from '../../costants/Endpoints'
import { CardBox, CardBoxEmpty } from '../../atoms'
import { ICardInfo } from '../../interfaces/models/card'
import { MessageBox, TransactionsList, TransactionsListLoader } from '../../components'
import { ITransaction } from '../../interfaces/models/transaction'
import { IInbox } from '../../interfaces/models/Inbox'
import useAsyncStorage from '../../hooks/useLocalStorage'

//used as placeholder template, we assume we don't take this from api response.
const CARD_ASSET_SAMPLE = 'https://pearl.cdn.cornercard.ch/static/cop-ch/cross/images/cards/big/MASTERCARD_GOLD_CORNER.PNG';

export const Homepage = () => {

  const { data: messages, isLoading: isLoadingMessages, error: messageError } = useHttpSimulation(Endpoints_uri.inbox, 400);
  const { data: cardData, isLoading: isLoadingCardData, error: cardDataError } = useHttpSimulation(Endpoints_uri.cardInfo, 600);
  const { data: transactions, isLoading: isLoadingTransactions, error: transactionsError } = useHttpSimulation(Endpoints_uri.transactions, 1200);

  const { value: shouldDisplayMessage, setValue: setShouldDisplayMessage } = useAsyncStorage(true, 'displayMessage')

  const [showAllTransactions, setShowAllTransactions] = React.useState<boolean>(false);
  const [transactionsList, setTransactionsList] = React.useState<ITransaction[]>([])

  React.useEffect(() => {
    if(transactions && Array.isArray(transactions)) setTransactionsList((transactions as ITransaction[]).slice(0,3))
  }, [transactions])

  const changeTransactionsView = () => {
    const t = !showAllTransactions
    setTransactionsList(t ? transactions as ITransaction[] : (transactions as ITransaction[]).slice(0,3))
    setShowAllTransactions(t);
  }

  const closeMessagePopup = () => {
    setShouldDisplayMessage(false);
  }

  return (
    <View style={HomepageStyle.container}>
        { !isLoadingMessages && shouldDisplayMessage && messages &&
          //The duty to sort the messages by time should be a backend thing.
          <MessageBox 
            title={(messages as IInbox[])[0]?.title ?? ''} 
            timestamp={(messages as IInbox[])[0]?.timestamp ?? 0}
            message={(messages as IInbox[])[0]?.message ?? ''}
            callbackClose={closeMessagePopup}
          />
        }

        { isLoadingCardData && <CardBoxEmpty uri={CARD_ASSET_SAMPLE} />}
        { !isLoadingCardData && cardData && 
          <CardBox 
            uri={(cardData as ICardInfo).image} 
            digits={(cardData as ICardInfo).cardNumber?.toString().slice(-4)} 
            expenses={`${(cardData as ICardInfo).expenses?.amount} ${(cardData as ICardInfo)?.expenses?.currency}`} 
            availability={`${(cardData as ICardInfo).availability?.amount} ${(cardData as ICardInfo)?.availability?.currency}`}
          />
        }

        <Pressable onPress={changeTransactionsView} style={HomepageStyle.primaryBtn}>
          <Text>{showAllTransactions ? 'Show first three' : 'Show all'}</Text>
        </Pressable>

        { isLoadingTransactions && <TransactionsListLoader />}
        { !isLoadingTransactions && transactions && 
          <TransactionsList 
            transactions={transactionsList}
            listHeight={shouldDisplayMessage ? 400 : 500}
          />
        }
    </View>
  )
}
