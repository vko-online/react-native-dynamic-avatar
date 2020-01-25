import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  Text
} from 'react-native'
import Slider from '@react-native-community/slider'
import generate from 'react-native-dynamic-avatar'

export default function () {
  const [state, setState] = useState({
    body: 0,
    bodyColor: 1,
    eye: 0,
    eyeColor: 1,
    mouth: 0,
    mouthColor: 1
  })
  const avatar = generate([
    state.body,
    state.bodyColor,
    state.eye,
    state.eyeColor,
    state.mouth,
    state.mouthColor
  ], 128)

  return (
    <KeyboardAvoidingView behavior='padding'>
      {avatar}
      <Text>Body</Text>
      <Slider
        maximumValue={7}
        minimumValue={0}
        step={1}
        value={state.body}
        onValueChange={val => setState({ ...state, body: val })}
      />
      <Text>Body Color</Text>
      <Slider
        maximumValue={7}
        minimumValue={0}
        step={1}
        value={state.bodyColor}
        onValueChange={val => setState({ ...state, bodyColor: val })}
      />
      <Text>Eye</Text>
      <Slider
        maximumValue={7}
        minimumValue={0}
        step={1}
        value={state.eye}
        onValueChange={val => setState({ ...state, eye: val })}
      />
      <Text>Eye Color</Text>
      <Slider
        maximumValue={7}
        minimumValue={0}
        step={1}
        value={state.eyeColor}
        onValueChange={val => setState({ ...state, eyeColor: val })}
      />
      <Text>Mouth</Text>
      <Slider
        maximumValue={7}
        minimumValue={0}
        step={1}
        value={state.mouth}
        onValueChange={val => setState({ ...state, mouth: val })}
      />
      <Text>Mouth Color</Text>
      <Slider
        maximumValue={7}
        minimumValue={0}
        step={1}
        value={state.mouthColor}
        onValueChange={val => setState({ ...state, mouthColor: val })}
      />
    </KeyboardAvoidingView>
  )
}