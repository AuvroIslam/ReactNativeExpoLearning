import { View,Text, Image, ImageBackground, ScrollView, Button,Pressable } from 'react-native'
const logoImg= require('./assets/icon.png')
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'pink' }}>
    <View style={{ height: 100, width: 100, backgroundColor: 'blue' }} />
    <View style={{ height: 100, width: 100, backgroundColor: 'green' }} />
    <Text >Hello World</Text>
    <Pressable  onPress={() => console.log('Pressable Pressed!')}>
      <Text style={{ color: 'red' }}>Pressable</Text>
    </Pressable>
    <Image source={logoImg} style={{ height: 100, width: 100 }} />

    <Image source={{ uri: "https://picsum.photos/id/237/100" }} style={{ height: 100, width: 100 }} />
    <ImageBackground source={{ uri: "https://picsum.photos/seed/picsum/200/600" }} style={{ flex: 1 }}>
      <Text>Hello World</Text>
    </ImageBackground>
    <ScrollView>
      <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>

      <Image source={{ uri: "https://picsum.photos/id/237/100" }} style={{ height: 100, width: 100 }} />
      <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
      <Button title="Click Me" onPress={() => console.log('Button Pressed!')} color="midnightblue" disabled={false} />
    </ScrollView>
    </View>
    
  )
}
export default App