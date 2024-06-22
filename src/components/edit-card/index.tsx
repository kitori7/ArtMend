import React, { memo } from "react";
import { View, Image } from "@tarojs/components";
import { Popup } from "@nutui/nutui-react-taro";
import "../../icon/iconfont.css";
import "./index.scss";
import Taro from "@tarojs/taro";
interface IProps {
  visible: boolean;
  imgUrl: string;
  onClose: () => void;
  children?: React.ReactNode;
}
export default memo<IProps>(function EditCard({ visible, imgUrl, onClose }) {
  function saveImg() {
    Taro.saveImageToPhotosAlbum({
      filePath: imgUrl,
      success: (res) => {
        Taro.showToast({
          title: "保存成功",
          icon: "none",
        });
      },
    });
  }
  function onShare() {
    if (Taro.getEnv() === "WEB") {
      Taro.showToast({
        title: "分享功能只在小程序端使用，请移步小程序端",
        icon: "error",
      });
    } else {
      Taro.showShareMenu({
        withShareTicket: true,
      });
    }
  }

  function onEdit() {
    Taro.navigateTo({
      url: "/pages/recognize/index?activeTab=0",
    });
  }
  return (
    <Popup
      closeable
      style={{ width: "100%", height: "90%" }}
      visible={visible}
      title="图片详情"
      position="bottom"
      className="pop"
      onClose={onClose}
    >
      <View className="imgBox">
        <Image
          className="img"
          mode="aspectFit"
          // src={"https://storage.360buyimg.com/jdc-article/fristfabu.jpg"}
          src={imgUrl}
        ></Image>
      </View>
      <View className="btnBox">
        <View
          className="item"
          onClick={() => {
            onEdit();
          }}
        >
          <p className="iconfont">&#xe636;</p>
          <p>编辑</p>
        </View>
        <View className="item" onClick={() => onShare()}>
          <span className="iconfont">&#xe739;</span>
          <p>分享</p>
        </View>
        <View
          className="item"
          onClick={() => {
            saveImg();
          }}
        >
          <span className="iconfont">&#xe64a;</span>
          <p>下载</p>
        </View>
      </View>
    </Popup>
  );
});
