import { View, Text,StyleSheet } from 'react-native'
const Boxes = () => {
  return (
    <View>
        <View style={[styles.box, styles.greenBox]}><Text>Green Box</Text></View>
        <View style={[styles.box, styles.blueBox]}><Text>Blue Box</Text></View>
    </View>
  )
}
const styles = StyleSheet.create({
    box: {
        padding: 20,
        margin: 10,
        borderRadius: 10
    },
    greenBox: {
        backgroundColor: 'lightgreen'
    },
    blueBox: {
        backgroundColor: 'lightblue'
    }
})
export default Boxes