import React, { useState } from "react";
import { View } from "@tarojs/components";
import { Button, Image, Popup, Cell, Avatar } from "@nutui/nutui-react-taro";
import "./index.scss";
import Taro from "@tarojs/taro";

function Index() {
  const [showBottom, setShowBottom] = useState(false);
  return (
    <View className="mine-index">
      <h2 className="mine-navbar">我的</h2>
      <View className="user">
        <Avatar size="75"></Avatar>
        <h2 className="name">默认账号</h2>
      </View>
      <ul className="other">
        <li>
          <Cell
            className="cell-btn"
            title="历史记录"
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/history/index",
              });
            }}
          />
        </li>
        <li>
          <Cell
            className="cell-btn"
            title="关于我们"
            onClick={() => {
              setShowBottom(true);
            }}
          />
        </li>
      </ul>
      <Popup
        className="about"
        visible={showBottom}
        position="bottom"
        onClose={() => {
          setShowBottom(false);
        }}
      >
        <h2>关于我们</h2>
        <p>
          智绘修复
          APP是一款由21级数字媒体技术空白对照小组开发的创新型移动应用，致力于利用人工智能技术为用户提供卓越的图片处理和管理服务。
        </p>
        <h3>我们的目标</h3>
        <p>
          我们的目标是打造一个集图片修复、编辑、管理、分享于一体的综合性平台，帮助用户轻松应对各种图片处理需求。
        </p>
        <h3> 主要功能</h3>
        <p>
          <li>图片修复：智能去除图片中的瑕疵、水印和杂物，恢复图片的原貌。</li>
          <li>
            图片抠图：自动识别并抠出图片中的人物或物品，去除背景，方便用户二次创作。
          </li>
          <li>
            图片编辑：提供基础和高级编辑功能，包括裁剪、旋转、滤镜、调整亮度、对比度等。
          </li>
          <li>
            相册管理：创建、删除、重命名相册，分类管理图片，支持搜索和批量操作。
          </li>
          <li>
            图片分享与社交：支持图片分享到微信、微博、抖音等社交平台，并提供评论、点赞等互动功能。
          </li>
        </p>
        <h3>我们的团队</h3>
        <p>
          智绘修复 APP 由一支充满热情和创意的团队开发，团队成员包括：
          <br />
          组长:杨鹏
          <br />
          组员:许佳柔、陈杰豪、杨英林、丘文杰、陈浩
          <br />
          指导老师:赖永凯、吴保艳、彭浩、张泓毅
        </p>
      </Popup>
    </View>
  );
}

export default Index;
