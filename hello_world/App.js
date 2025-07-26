import { View,Text } from 'react-native'
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'pink' }}>
    <View style={{ height: 100, width: 100, backgroundColor: 'blue' }} />
    <View style={{ height: 100, width: 100, backgroundColor: 'green' }} />
    <Text>Hello World</Text>
    </View>
  )
}
export default App