import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../../Styles/global'

type Props = {
  title: string,
  onPress: Function,
  style: any,
  disabled: boolean
}


const Button = (props: Props) => {
  return(
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={props.style}
      disabled={props.disabled}
    >
      <Text style={styles.buttonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button