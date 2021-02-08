import React from 'react'
import AstroidCard from '../Components/Astroid.tsx/AstroidCard'
import { Text, View } from 'react-native'
import styles from '../Styles/global'
import { connect } from 'react-redux'
import {Astroid} from '../Types/types'

type Props = {
  astroid: Astroid
}


const AstroidView = (props: Props) => {
  return (
    <View style={styles.layout}>
      <AstroidCard >
        <Text style={styles.text}>
          Name: {props.astroid.astroid.name}
      </Text>
        <Text style={styles.text}>
          Nasa jpl url: {props.astroid.astroid.nasa_jpl_url}
      </Text>
        <Text style={styles.text}>
          Hazardous: {props.astroid.astroid.is_potentially_hazardous_asteroid? 'YES' : 'NO'}
      </Text>
      </AstroidCard>
    </View>
  )
}

const mapStateToProps = (state: {astroidState:Astroid}) => ({
  astroid: state.astroidState
})
export default connect(mapStateToProps)(AstroidView)