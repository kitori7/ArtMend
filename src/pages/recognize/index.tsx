import React, { useState } from "react";
import { View } from "@tarojs/components";
import {
  NavBar,
  Image,
  Tabbar,
  Button,
  Range,
  Toast,
  Uploader,
} from "@nutui/nutui-react-taro";
import { ArrowLeft, Download } from "@nutui/icons-react";

import "./index.scss";
import Taro from "@tarojs/taro";

function Index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const titleArr = ["AI抠图", "识别文字"];
  const [title, setTitle] = useState(titleArr[0]);

  // 图片部分
  function onStart(res) {
    console.log(res);
  }
  return (
    <View className="nutui-react-demo">
      <View className="index">
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
            {title}
          </NavBar>
          <View className="center">
            <Uploader
              onStart={onStart}
              style={{
                marginInlineEnd: "10px",
                marginBottom: "10px",
              }}
              onChange={(v) => {
                console.log("outer onChange", v);
              }}
            />
            <Image
              className="img"
              // src={src}
              onClick={() => {
                console.log("click image");
              }}
            />
          </View>
        </View>
        <View className="bottom">
          <Tabbar
            className="tabbar"
            defaultValue={0}
            value={activeIndex}
            onSwitch={(value) => {
              setActiveIndex(value);
              setTitle(titleArr[value]);
            }}
            activeColor="white"
            inactiveColor="black"
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
