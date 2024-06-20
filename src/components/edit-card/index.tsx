import React from 'react'
import { Popup } from '@nutui/nutui-react-taro'

export default function EditCard() {
  return (
    <Popup
    closeable
    visible={true}
    left="返回"
    title="我是标题"
    position="bottom"
  ></Popup>
  )
}
