import React, { useState } from "react";
import { View } from "@tarojs/components";
import { NavBar, Image, Tabbar, Button, Range } from "@nutui/nutui-react-taro";
import { ArrowLeft, Download } from "@nutui/icons-react";

import "./index.scss";

function Index() {
  let [activeIndex, setActiveIndex] = useState(0);
  let [show, setShow] = useState(true);
  return (
    <View className="nutui-react-demo">
      <View className="index">
        {show && (
          <View className="w">
            <NavBar
              className="navbar"
              back={
                <>
                  <ArrowLeft />
                  返回
                </>
              }
              right={
                <span
                  className="flex-center"
                  onClick={(e) => console.log("下載")}
                >
                  <Download />
                </span>
              }
              onBackClick={(e) => console.log("返回")}
            >
              Ai抠图
            </NavBar>
            <View className="center">
              <Button className="btn" fill="none">
                点击导入图片
              </Button>
              <Image
                className="img"
                // src={src}
                onClick={() => {
                  console.log("click image");
                }}
              />
            </View>
          </View>
        )}
        {!show && (
          <View className="w">
            <NavBar
              className="navbar"
              back={
                <>
                  <ArrowLeft />
                  返回
                </>
              }
              right={
                <span
                  className="flex-center"
                  onClick={(e) => console.log("下載")}
                >
                  <Download />
                </span>
              }
              onBackClick={(e) => console.log("返回")}
            >
              文字识别
            </NavBar>
            <View className="center">
              <Button className="btn" fill="none">
                点击导入图片
              </Button>
              <Image
                className="img"
                // src={src}
                onClick={() => {
                  console.log("click image");
                }}
              />
            </View>
          </View>
        )}
        <View className="bottom">
          <Tabbar
            className="tabbar"
            defaultValue={0}
            value={activeIndex}
            onSwitch={(value) => {
              setActiveIndex(value);
              setShow(!show);
            }}
            activeColor="black"
            inactiveColor="white"
          >
            <Tabbar.Item className="item" title="抠图" />
            <Tabbar.Item className="item" title="文字" />
            <View className="mask"></View>
          </Tabbar>
          <Button className="btn">开始</Button>
        </View>
      </View>
    </View>
  );
}

export default Index;
