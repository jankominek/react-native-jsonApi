import React from 'react'
import { Text } from 'react-native'
import { ListFieldViewWrapper } from './ListFieldView.styled'

export const ListFieldView = (props) => {
  return (
    <ListFieldViewWrapper colCount={props.colCount}>
        <Text>{props.text}</Text>
    </ListFieldViewWrapper>
  )
}
