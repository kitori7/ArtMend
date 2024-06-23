import React, { memo, useEffect } from "react";
import { View, Image } from "@tarojs/components";
import { Popup } from "@nutui/nutui-react-taro";
import "../../icon/iconfont.css";
import "./index.scss";
import Taro from "@tarojs/taro";
import { IImage } from "types/data";
interface IProps {
  visible: boolean;
  imgObj: IImage;
  onClose: (id?: number) => void;
  children?: React.ReactNode;
}
export default memo<IProps>(function EditCard({ visible, imgObj, onClose }) {
  function saveImg() {
    Taro.saveImageToPhotosAlbum({
      filePath: imgObj.url,
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
      url: `/pages/edit/index?src=${imgObj.url}`,
    });
  }

  function onDelete() {
    Taro.showModal({
      title: "提示",
      content: "确定要删除吗？",
      success: (res) => {
        if (res.confirm) {
          onClose(imgObj.id);
        }
      },
    });
  }
  return (
    <Popup
      closeable
      visible={visible}
      title="图片详情"
      position="bottom"
      className="pop"
      onClose={onClose}
    >
      <View className="imgBox">
        <Image className="img" mode="aspectFit" src={imgObj.url}></Image>
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
        <View
          className="item"
          onClick={() => {
            onDelete();
          }}
        >
          <span className="iconfont">&#xe74b;</span>
          <p>删除</p>
        </View>
      </View>
    </Popup>
  );
});
