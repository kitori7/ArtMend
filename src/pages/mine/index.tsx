import React from "react";
import { View } from "@tarojs/components";
import { Button, NavBar } from "@nutui/nutui-react-taro";
import { More, ArrowLeft } from '@nutui/icons-react'
import "./index.scss";

function Index() {
  return (
    <View className="mine">
      <NavBar
      >
        我的
      </NavBar>
    </View>
  );
}

export default Index;
