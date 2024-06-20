import React from "react";
import { View } from "@tarojs/components";
import { NavBar, Grid, Image } from "@nutui/nutui-react-taro";
import { ArrowLeft } from "@nutui/icons-react";
import "./index.scss";
import EditCard from "/src/components/edit-card";

function Index() {
  const list = [
    "https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg",
    "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg",
    "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg",
    "https://storage.360buyimg.com/jdc-article/fristfabu.jpg",
  ];
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
          onBackClick={(e) => console.log("返回")}
        >
          历史记录
        </NavBar>
        <View className="imgScroll">
          <Grid columns={3} square className="imgList">
            <Grid.Item className="imgItems">
              <Image radius={5} src={list[0]} width="100%" height="100%" />
            </Grid.Item>
            <Grid.Item className="imgItems">
              <Image radius={5} src={list[0]} width="100%" height="100%" />
            </Grid.Item>
            <Grid.Item className="imgItems">
              <Image radius={5} src={list[0]} width="100%" height="100%" />
            </Grid.Item>
          </Grid>
        </View>
        <EditCard></EditCard>
      </View>
    </View>
  );
}

export default Index;
