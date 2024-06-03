import React from "react";
import { View } from "@tarojs/components";
import { NavBar, Image, Tabbar, Button } from "@nutui/nutui-react-taro";
import {
  ArrowLeft,
  Download,
  ImageRectangle,
  Edit,
  Undo,
} from "@nutui/icons-react";

import "./index.scss";
import "./iconfont.css";

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index">
        <NavBar
          className="navbar"
          back={
            <>
              <ArrowLeft />
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
          {/* <Image
            // src={src}
            onClick={() => {
              console.log("click image");
            }}
          /> */}
        </View>
        <Tabbar
          activeColor="green"
          inactiveColor="white"
          className="bottom"
          defaultValue={0}
          // value={activeIndex}
          // onSwitch={(value) => {
          //   setActiveIndex(value);
          // }}
        >
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
          <Tabbar.Item
            className="item"
            title="更多"
            icon={<View className="iconfont icon-gengduo"></View>}
          />
          {/* 点击更多弹出是否重载模型 */}
        </Tabbar>
      </View>
    </View>
  );
}

export default Index;
