import { View, Text,StyleSheet } from 'react-native'
const Greetings = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Greetings {name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    margin: 10
  },
  text: {
    fontSize: 20,
    color: 'darkblue',
    fontWeight: 'bold'
  }
})
export default Greetings