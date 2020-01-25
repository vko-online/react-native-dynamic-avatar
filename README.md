# react-native-dynamic-avatar

Port for [gridy-avatars](https://github.com/darosh/gridy-avatars)

## Install from npm

> `yarn add react-native-dynamic-avatar`

## Dependencies

- [react-native-svg](https://github.com/react-native-community/react-native-svg)

## Docs/Example

- `generate(arr, size)` - _function_ - exports SVG avatar
- `arr` - _array_ - array with size of 6 elements, from 0 to 7, example: [0, 1, 2, 3, 4, 7]
- `size` - _number_ - avatar size (width, height), example: 64

<img src="demo.gif" alt="ViewPager" width="200" height="400">

See [example.tsx](https://github.com/vko-online/react-native-dynamic-avatar/blob/master/example.tsx) for source of demo gif


## Basic usage

```jsx
import generate from 'react-native-dynamic-avatar'

export default function App () {
  const avatar = generate([0, 0, 0, 0, 0, 0], 128)
  return (
    <View>
      {avatar}
    </View>
  )
}
```
