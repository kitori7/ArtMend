import React, { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import {
  NavBar,
  Image,
  Tabbar,
  Button,
  Uploader,
  Overlay,
  Loading,
} from "@nutui/nutui-react-taro";
import { removeBackground } from "@imgly/background-removal";
import { ArrowLeft, Download } from "@nutui/icons-react";

import "./index.scss";
import Taro from "@tarojs/taro";
import EditCard from "/src/components/edit-card";

function Index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const titleArr = ["AI抠图", "识别文字"];
  const [title, setTitle] = useState(titleArr[0]);

  useEffect(() => {
    const instance = Taro.getCurrentInstance();
    // 获取路径参数
    if (instance.router) {
      const { params } = instance.router;
      setActiveIndex(Number(params.activeTab) || 0);
      setTitle(titleArr[Number(params.activeTab) || 0]);
    }
  }, []);
  // 图片部分
  const [isShowImg, setIsShowImg] = useState(false);
  const [src, setSrc] = useState("");
  function onStart(res) {
    const img = res.taroFilePath;
    console.log(img);
    setIsShowImg(true);
    setSrc(img);
  }

  // 开始
  const [loading, setLoading] = useState(false);
  async function handleStart() {
    setLoading(true);
    // 抠图
    if (activeIndex === 0) {
      try {
        const response = await fetch(src);
        const blob = await response.blob();
        const result = await removeBackground(blob);
        const url = URL.createObjectURL(result);
        console.log(url);
        setSrc(url);
      } catch (error) {
        Taro.showToast({ title: "背景移除失败", icon: "none" });
      } finally {
        setLoading(false);
      }
    }
  }
  return (
    <View className="nutui-react-demo">
      <View className="index">
        <View className="w">
          <NavBar
            className="navbar"
            back={
              <>
                <ArrowLeft
                  onClick={() => {
                    Taro.navigateBack();
                  }}
                />
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
            {isShowImg ? (
              <Image className="img" src={src}></Image>
            ) : (
              <Uploader
                preview={false}
                uploadLabel="上传图片"
                className="btn"
                onStart={onStart}
                style={{
                  marginInlineEnd: "10px",
                  marginBottom: "10px",
                }}
              />
            )}
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
          <Button
            className="btn"
            onClick={() => {
              handleStart();
            }}
          >
            开始
          </Button>
        </View>
      </View>
      <Overlay visible={loading}>
        <div className="wrapper">
          <Loading direction="vertical">加载中</Loading>
        </div>
      </Overlay>
      <EditCard></EditCard>
    </View>
  );
}

export default Index;
