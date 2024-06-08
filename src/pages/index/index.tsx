import React from "react";
import { View } from "@tarojs/components";
import { Swiper, Button, Tabbar, Image } from "@nutui/nutui-react-taro";
import { Cart, Category, Find, Home, User } from "@nutui/icons-react";
import "./index.scss";
const list = [
  "https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg",
  "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg",
  "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg",
  "https://storage.360buyimg.com/jdc-article/fristfabu.jpg",
];
function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index">
        <Swiper
          className="swiper"
          height={225}
          autoPlay
          loop
          indicator
          // style={{
          //   "--nutui-indicator-color": "#426543",
          //   "--nutui-indicator-dot-color": "#426ddd",
          // }}
        >
          {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img
                  className="image"
                  src={list[index]}
                  alt={list[index]}
                  draggable={false}
                />
              </Swiper.Item>
            );
          })}
        </Swiper>
        <Button className="import" shape="square" block>
          <span>+</span> 导入
        </Button>
        <View className="tabbar">
          <Tabbar
            className="tabbar"
            inactiveColor="#000"
            activeColor="#000"
            onSwitch={(value) => {
              console.log(value);
            }}
          >
            <Tabbar.Item
              title="图片编辑"
              icon={<Home width={28} height={28} />}
            />
            <Tabbar.Item
              title="Ai消除"
              icon={<Category width={28} height={28} />}
            />
            <Tabbar.Item
              title="Ai抠图"
              icon={<Find width={28} height={28} />}
            />
            <Tabbar.Item
              title="文字识别"
              icon={<Cart width={28} height={28} />}
            />
          </Tabbar>
        </View>
        <View className="history">
          <h3>历史记录</h3>
          <View className="imgs">
            <Image className="img" src={list[0]}></Image>
            <Image className="img" src={list[0]}></Image>
            <Image className="img" src={list[0]}></Image>
            <Image className="img" src={list[0]}></Image>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Index;
