import React, { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import {
  NavBar,
  Image,
  Tabbar,
  Button,
  Range,
  Overlay,
  Loading,
} from "@nutui/nutui-react-taro";
import {
  ArrowLeft,
  Download,
  ImageRectangle,
  Edit,
  Undo,
} from "@nutui/icons-react";
import migan from "../../utils/migan";

import "./index.scss";
import "./iconfont.css";
import "../../icon/iconfont.css";
import Taro from "@tarojs/taro";
function Index() {
  const [value, setValue] = useState(40);
  const [smearBoxShow, isSboxShow] = useState(false);
  const [isShowLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const time = Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000;
    setTimeout(() => {
      setIsLoading(false);
      Taro.showModal({
        title: "提示",
        content: "模型加载失败,请检查网络或者科学上网后重试",
        showCancel: false,
        confirmText: "确定",
        success: function (res) {
          if (res.confirm) {
            Taro.switchTab({
              url: "/pages/index/index",
            });
          }
        },
      });
    }, time);
  }, []);

  const WrapperStyle = {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <View className="nutui-react-demo">
      <Overlay visible={isShowLoading}>
        <div className="wrapper" style={WrapperStyle}>
          <Loading direction="vertical">加载模型中</Loading>
        </div>
      </Overlay>
      <View className="index">
        <NavBar
          className="navbar"
          back={
            <>
              <ArrowLeft
                onClick={() => {
                  Taro.switchTab({
                    url: "/pages/index/index",
                  });
                }}
              />
              返回
            </>
          }
          right={
            <span className="flex-center" onClick={(e) => console.log("下載")}>
              <Download />
            </span>
          }
          onBackClick={(e) => console.log("返回")}
        >
          图片编辑
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
        <Tabbar
          activeColor="green"
          inactiveColor="white"
          className="tabbar"
          defaultValue={-1}
          onSwitch={(value) => {
            if (value == 2) {
              isSboxShow(true);
            } else {
              isSboxShow(false);
            }
          }}
        >
          {smearBoxShow && (
            <View className="smearBox">
              <View className="color">
                <span className="iconfont">&#xe600;</span>
                <button className="selection"></button>
                <button className="selection"></button>
                <button className="selection"></button>
              </View>
              <View className="pencil">
                <span className="iconfont">&#xe61f;</span>
                <Range
                  value={value}
                  className="range"
                  onChange={(val: any) => setValue(val)}
                />
              </View>
            </View>
          )}
          <Tabbar.Item
            className="item"
            title="导入"
            icon={<ImageRectangle />}
          />
          <Tabbar.Item className="item" title="画笔" icon={<Edit />} />
          <Tabbar.Item
            className="item"
            title="擦除"
            icon={<View className="iconfont icon-rubber"></View>}
          />
          <Tabbar.Item className="item" title="清除" icon={<Undo />} />
          <Tabbar.Item
            className="item"
            title="撤销"
            icon={<View className="iconfont icon-chexiao"></View>}
          />
          <Tabbar.Item
            className="item"
            title="恢复"
            icon={<View className="iconfont icon-huifu"></View>}
          />
        </Tabbar>
      </View>
    </View>
  );
}

export default Index;
