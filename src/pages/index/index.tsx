import React, { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import { Swiper, Button, Tabbar, Image, Empty } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import "./index.scss";
import "../../icon/iconfont.css";
import { IImage } from "types/data";
import empty from "../../assets/images/empty.png";

import swiperList from "../../assets/images";

function Index() {
  const [historyArr, setHistoryArr] = useState([]);
  useEffect(() => {
    async function effect() {
      try {
        const arr = await Taro.getStorage({
          key: "history",
        });
        setHistoryArr(arr.data);
      } catch (error) {
        setHistoryArr([]);
      }
    }
    effect();
  });
  return (
    <View className="nutui-react">
      <View className="main-index">
        <Swiper className="swiper" height={225} autoPlay loop indicator>
          {swiperList.map((item) => {
            return (
              <Swiper.Item key={item}>
                <Image className="image" mode="aspectFill" src={item} />
              </Swiper.Item>
            );
          })}
        </Swiper>
        <View className="items-content">
          <div
            className="main-item"
            onClick={() => {
              Taro.navigateTo({ url: "/pages/edit/index" });
            }}
          >
            <span className="iconfont">&#xe636;</span>
            <span>图片编辑</span>
          </div>
          <div
            className="main-item"
            onClick={() => {
              Taro.navigateTo({ url: "/pages/smear/index" });
            }}
          >
            <span className="iconfont">&#xe632;</span>
            <span>Ai消除</span>
          </div>
          <div
            className="main-item"
            onClick={() => {
              Taro.navigateTo({ url: "/pages/recognize/index?activeTab=0" });
            }}
          >
            <span className="iconfont">&#xe6e1;</span>
            <span>Ai抠图</span>
          </div>
          <div
            className="main-item"
            onClick={() => {
              Taro.navigateTo({ url: "/pages/recognize/index?activeTab=1" });
            }}
          >
            <span className="iconfont">&#xe665;</span>
            <span>文字识别</span>
          </div>
        </View>
        <View className="history-content">
          <h3>历史记录</h3>
          <View
            className="imgs"
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/history/index",
              });
            }}
          >
            {historyArr.length === 0 ? (
              <Empty
                className="index-empty"
                style={{ flex: 1 }}
                imageSize={200}
                size="base"
                image={empty}
                title="暂无数据"
              ></Empty>
            ) : (
              historyArr.slice(0, 4).map((item: IImage) => {
                return (
                  <Image
                    className="index-img"
                    key={item.id}
                    src={item.url}
                  ></Image>
                );
              })
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

export default Index;
