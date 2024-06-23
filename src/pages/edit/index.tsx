import React, { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import { NavBar, Button, AvatarCropper, Avatar } from "@nutui/nutui-react-taro";
import { ArrowLeft, Brush } from "@nutui/icons-react";
import "./index.scss";
import Taro from "@tarojs/taro";
import EditCard from "/src/components/edit-card";

function Index() {
  // 图片部分
  const [isShowImg, setIsShowImg] = useState(false);
  const [src, setSrc] = useState("");
  useEffect(() => {
    const instance = Taro.getCurrentInstance();
    // 获取路径参数
    if (instance.router) {
      const { params } = instance.router;
      if (params.src) {
        setSrc(params.src);
      }
    }
  }, []);

  const cutImage = (data: any) => {
    setSrc(data);
  };
  // 开始
  const [isShowCard, setIsShowCard] = useState(false);
  function onSave() {
    setIsShowCard(true);
  }
  function onClean() {
    setSrc("");
    setIsShowImg(false);
  }
  function navigateTo() {
    Taro.switchTab({
      url: "/pages/index/index",
    });
  }
  return (
    <View className="nutui-react-demo">
      <View className="index">
        <View className="w">
          <NavBar
            className="navbar"
            onBackClick={() => navigateTo()}
            back={
              <>
                <ArrowLeft />
                返回
              </>
            }
            right={
              <span className="flex-center" onClick={() => onClean()}>
                <Brush />
              </span>
            }
          >
            图片编辑
          </NavBar>
          <View className="center">
            <AvatarCropper editText="上传" onConfirm={cutImage}>
              <Avatar shape="square" icon={<></>} size="large" src={src} />
            </AvatarCropper>
          </View>
        </View>
        <View className="bottom" onClick={() => onSave()}>
          <Button className="btn">保存</Button>
        </View>
      </View>
      <EditCard
        onClose={() => setIsShowCard(false)}
        visible={isShowCard}
        imgUrl={src}
      ></EditCard>
    </View>
  );
}

export default Index;
