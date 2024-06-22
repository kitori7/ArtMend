import React from "react";
import { View } from "@tarojs/components";
import { Swiper, Button, Tabbar, Image } from "@nutui/nutui-react-taro";
import { Cart, Category, Find, Home, User } from "@nutui/icons-react";
import Taro from "@tarojs/taro";
import Taro from "@tarojs/taro";
import "./index.scss";
import "../../icon/iconfont.css";
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
        <Swiper className="swiper" height={225} autoPlay loop indicator>
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
        <View className="tabbar">
          <div className="item">
            <span className="iconfont">&#xe636;</span>
            <span>图片编辑</span>
          </div>
          <div className="item">
            <span className="iconfont">&#xe632;</span>
            <span>Ai消除</span>
          </div>
          <div className="item">
            <span className="iconfont">&#xe6e1;</span>
            <span>Ai抠图</span>
          </div>
          <div className="item">
            <span className="iconfont">&#xe665;</span>
            <span>文字识别</span>
          </div>
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
