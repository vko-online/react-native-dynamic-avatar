# react-native-dynamic-avatar

Port for [gridy-avatars](https://github.com/darosh/gridy-avatars)

## Install from npm

> `yarn add react-native-dynamic-avatar`

## Dependencies

- [react-native-svg](https://github.com/react-native-community/react-native-svg)

## Demo

<img src="demo.gif" alt="ViewPager" width="200" height="400">

## Basic usage

```jsx
import generate from 'react-native-dynamic-avatar'

export default function App () {

  const avatar = generate([0, 0, 0, 0, 0, 0], 128)
  // body type 0-7 --------^  |  |  |  |  |     ^------- SVG size
  // body color 0-7 ----------^  |  |  |  ^------- mouth color 0-7 
  // eye type 0-7 ---------------^  |  ^ --------- mouth type 0-7 
  // eye color 0-7 -----------------^

  return (
    <View>
      {avatar}
    </View>
  )
}
```

See [example.tsx](https://github.com/vko-online/react-native-dynamic-avatar/blob/master/example.tsx) for source of demo gif


