import React, { useState } from "react";
import { View } from "@tarojs/components";
import { Button, Image, Popup, Cell, Avatar } from "@nutui/nutui-react-taro";
import "./index.scss";
import Taro from "@tarojs/taro";

function Index() {
  const [showBottom, setShowBottom] = useState(false);
  return (
    <View className="mine-index">
      <h2 className="mine-navbar">我的</h2>
      <View className="user">
        <Avatar size="75"></Avatar>
        <h2 className="name">默认账号</h2>
      </View>
      <ul className="other">
        <li>
          <Cell
            className="cell-btn"
            title="历史记录"
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/history/index",
              });
            }}
          />
        </li>
        <li>
          <Cell
            className="cell-btn"
            title="关于我们"
            onClick={() => {
              setShowBottom(true);
            }}
          />
        </li>
      </ul>
      <Popup
        className="about"
        visible={showBottom}
        position="bottom"
        onClose={() => {
          setShowBottom(false);
        }}
      >
        <h2>关于我们</h2>
        <p>
          我们是一个寻衅滋事阿萨斯大厦assas阿萨德as大事件点击as健康的花多少as健康的和撒客家话打开好看糊啊可视角度会看上阿克苏好看as啊
        </p>
      </Popup>
    </View>
  );
}

export default Index;
