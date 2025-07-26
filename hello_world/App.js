
import { useState } from 'react';
import { View,Text, Image, ImageBackground, ScrollView, Button,Pressable, Modal,StatusBar, ActivityIndicator, Alert} from 'react-native'
import Greetings from './components/Greetings';
import Boxes from './components/Boxes';
const logoImg= require('./assets/icon.png')
const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: 'pink' }}>
      <StatusBar backgroundColor='grey' barStyle='dark-content' />
       <ScrollView>
    <View style={{ height: 100, width: 100, backgroundColor: 'blue' }} />
    <View style={{ height: 100, width: 100, backgroundColor: 'green' }} />
    <Greetings name="John" />
    <Boxes />
    <Text >Hello World</Text>
    <Pressable  onPress={() => Alert.alert('Pressable Pressed!','You pressed the Pressable component!',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }
      ])}>
      <Text style={{ color: 'red' }}>Pressable</Text>
    </Pressable>
    <Image source={logoImg} style={{ height: 100, width: 100 }} />

    <Image source={{ uri: "https://picsum.photos/id/237/100" }} style={{ height: 100, width: 100 }} />
    <ImageBackground source={{ uri: "https://picsum.photos/seed/picsum/200/600" }} style={{ flex: 1 }}>
      <Text>Hello World</Text>
    </ImageBackground>
   
      <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>

      <Image source={{ uri: "https://picsum.photos/id/237/100" }} style={{ height: 100, width: 100 }} />
      <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
      <View style={{ marginVertical: 50 }}>
        <Button title="Show Modal" onPress={() => setIsVisible(true)} color="midnightblue" disabled={false}  />
          <ActivityIndicator size="large" color="blue" animating={true} />
      </View>
    </ScrollView>
    <Modal visible={isVisible} onRequestClose={() => setIsVisible(false)} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey' }}>
        <Text>Hello from Modal!</Text>
        <Button title="Close Modal" onPress={() => setIsVisible(false)} color="red" />
      </View>
    </Modal>

    </View>
    
  )
}
export default App