import React from 'react'
import { View } from 'react-native'
import styles from '../../Styles/global'

type Props = {
  children: React.ReactNode
}


const AstroidCard = (props: Props) => {
  return(
    <View style={styles.astroidCard}>
      {props.children}
    </View>
  )
}
export default AstroidCard 