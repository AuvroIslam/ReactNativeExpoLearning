# React Native Expo Learning

## React Native vs Expo

- **React Native**: Complex setup
- **Expo**: Makes development easier
- **Cross-platform advantage**: iOS app can't be built in Windows using React Native, but with Expo you can


## Hello World

- **Node.js**: Latest version download
- **Follow documentation**: `npx create-expo-app --template blank` (without the Expo Router navigation system)
- **Start the app**: `npm start` (App.js works as root file when we start the server)
- **Create your first app**: Go and type "Hello World" there


## Core Components

- **Import requirement**: Need to import core components

### View

- **Space usage**: Only takes space occupied by its children
- **Full screen**: Using `flex: 1` so view takes all available screen
- **Nested components**: Nested view components (view is like div, so the second one will go below the first view as they are in block)


### Text

- **Text wrapping**: All text must be wrapped inside Text component
- **Nesting allowed**: Nesting of Text component is also allowed


### Image

- **Image types**: We can display static image, network image and local disk image

#### Static Image
- **Import requirement**: Need to import like this `const logoImg = require('./assets/icon.png')`

#### Network Image
- **No import needed**: No need to import, need to use uri and send as object
- **Example**: `<Image source={{ uri: "https://picsum.photos/id/237/100" }} style={{ height: 100, width: 100 }} />`

### Image Background

- **Child positioning**: Everything that will be child inside it, will appear on top of it


### Scroll View

- **Content overflow problem**: If I add some big text then image then big text again, I won't be able to see the text again
- **Solution**: We need Scroll View
- **Height requirement**: Scroll View needs a bounded height to work properly
- **Usage**: Let's put everything that we want inside Scroll View (text and image), then we will be able to see them properly

### Button

- **Self-closing tag**: Button in React Native is a self-closing tag
- **Title prop**: `title="press"`, the button text will be "press"
- **Event handling**: `onPress` is equivalent to `onClick` of React
- **Styling**: Using `color` prop can change color, using `disabled` prop can make the button disabled
- **Style limitations**: Other styles like padding, margin don't have any effect (put it inside a View and do these things)

### Pressable

- **Use case**: Used when we want to trigger some action, if we press text or image
- **Event handling**: Like button, has `onPress` prop

### Modal

- **Purpose**: Overlays app content
- **Visibility control**: Use state inside its `visible` prop, on button press make it visible
- **Back button handling**: Also add `onRequestClose` prop - it triggers when back button or similar gestures are pressed
- **Animation types**: You can use `animationType`, how it will appear
- **Animation options**: By default it is set to `none`, you can use `fade` and `slide`

