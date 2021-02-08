import React ,{useState} from 'react'
import {View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { SearchAstroid, StartRandomSearch } from '../Redux/Actions/astroidAction'
import  styles from '../Styles/global' 

type Props = {
    Astroid: Function
    StartRandomSearch : Function
    navigation : {  
        navigate : Function
    }
}

const AstroidSearch = (props: Props) => {

    const [id, setId] = useState('')

    const handleChange = (value: string) => {
        setId(value)
    }
    const handleSubmit = () => {
        console.log(id)
        props.Astroid(id)
        props.navigation.navigate('Astroid')
      }
      const handleRandom = () => {
        props.StartRandomSearch()
        props.navigation.navigate('Astroid')
      }
    return (
        <View style={styles.layout}>
        <TextInput style={styles.input} onChangeText={(value: string) => handleChange(value)} value={id}/>
        <Button  title='Submit' onPress={() => handleSubmit()} disabled={id.length === 0}/>
        <Button  title='Random Asteroid' onPress={() => handleRandom()} disabled={false}/>
        </View>
    ) 
}
export default connect(null,{SearchAstroid,StartRandomSearch})(AstroidSearch)