import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  layout: {
    padding: 20,
  },
  input: {
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth:1,
    marginBottom:20,
    padding: 5
  },
  primaryButton: {
    backgroundColor: '#0984e3',
    borderRadius: 5,
    marginBottom: 20,
    height: 40,
    justifyContent: 'center'

  },
  secondaryButton: {
    backgroundColor: '#74b9ff',
    borderRadius: 5,
    marginBottom: 20,
    height: 40,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  text: {
    paddingBottom: 10
  },
  astroidCard: {
    padding: 20,
    elevation:1,
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: '#000',
    // justifyContent: 'center',
    textAlign: 'left',
    // alignItems: 'center',
    shadowOffset: {
      width: 2,
      height:2
    },
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
})

export default styles