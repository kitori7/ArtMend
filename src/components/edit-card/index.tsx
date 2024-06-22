import React from "react";
import { View } from "@tarojs/components";
import { Popup, Image } from "@nutui/nutui-react-taro";
import "../../icon/iconfont.css";
import "./index.scss";
export default function EditCard() {
  return (
    <Popup
      closeable
      style={{ width: "100%", height: "90%" }}
      visible={true}
      left="< 返回"
      title="图片详情"
      position="bottom"
      className="pop"
    >
      <View className="imgBox">
        <Image
          className="img"
          src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"
        ></Image>
      </View>
      <View className="btnBox">
        <View className="item">
          <p className="iconfont">&#xe636;</p>
          <p>编辑</p>
        </View>
        <View className="item">
          <span className="iconfont">&#xe739;</span>
          <p>分享</p>
        </View>
        <View className="item">
          <span className="iconfont">&#xe74b;</span>
          <p>删除</p>
        </View>
        <View className="item">
          <span className="iconfont">&#xe64a;</span>
          <p>下载</p>
        </View>
      </View>
    </Popup>
  );
}
