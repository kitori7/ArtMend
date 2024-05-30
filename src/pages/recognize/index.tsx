import React from "react";
import { View } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import "./index.scss";

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index">
        <Button type="primary" className="btn">
          背景识别和文字识别页面
        </Button>
      </View>
    </View>
  );
}

export default Index;
