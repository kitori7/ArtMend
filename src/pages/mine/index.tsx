import React, { useState } from "react";
import { View } from "@tarojs/components";
import { Button, Image, Popup, Cell } from "@nutui/nutui-react-taro";
import "./index.scss";

function Index() {
  const [showBottom, setShowBottom] = useState(false);
  return (
    <View className="nutui-react-demo">
      <View className="index">
        <h2 className="navbar">我的</h2>
        <View className="user">
          <Image
            className="head"
            src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"
          />
          <h2 className="name">人坤的朋子</h2>
        </View>
        <ul className="other">
          <li>
            <Cell
              className="btn"
              title="历史记录"
              onClick={() => {
                console.log("click");
              }}
            />
          </li>
          <li>
            <Cell
              className="btn"
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
    </View>
  );
}

export default Index;
