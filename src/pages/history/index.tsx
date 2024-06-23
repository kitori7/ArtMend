import React, { useCallback, useState } from "react";
import { View } from "@tarojs/components";
import { NavBar, Grid, Image, Empty } from "@nutui/nutui-react-taro";
import { ArrowLeft, Brush } from "@nutui/icons-react";
import "./index.scss";
import HistoryCard from "/src/components/history-card";
import Taro from "@tarojs/taro";
import { IImage } from "types/data";
import empty from "../../assets/images/empty.png";

function Index() {
  const [historyList, setHistoryList] = useState([]);
  useState(() => {
    async function effect() {
      try {
        const res = await Taro.getStorage({
          key: "history",
        });
        setHistoryList(res.data || []);
      } catch (error) {
        Taro.setStorage({
          key: "history",
          data: [],
        });
        setHistoryList([]);
      }
    }
    effect();
  });

  const [isShowCard, setIsShowCard] = useState(false);
  const [currentImg, setCurrentImg] = useState<IImage>({ url: "", id: 0 });
  function onItemClick(item: IImage) {
    setIsShowCard(true);
    setCurrentImg(item);
  }
  const onDelete = useCallback(
    (id: number) => {
      if (id) {
        console.log(id);
        const newArr = historyList.filter((item: IImage) => {
          return item.id !== id;
        });
        setHistoryList(newArr);
        Taro.setStorage({
          key: "history",
          data: newArr,
        });
      }
      setIsShowCard(false);
    },
    [isShowCard]
  );
  function onClean() {
    Taro.showModal({
      title: "提示",
      content: "确定要清空吗？",
      success: (res) => {
        if (res.confirm) {
          setHistoryList([]);
          Taro.setStorage({
            key: "history",
            data: [],
          });
        }
      },
    });
  }
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
          onBackClick={() => {
            Taro.navigateBack();
          }}
          right={
            <Brush
              onClick={() => {
                onClean();
              }}
            />
          }
        >
          历史记录
        </NavBar>
        <View className="imgScroll">
          <Grid columns={3} square gap={5} className="imgList">
            {historyList.length === 0 ? (
              <Empty
                image={empty}
                style={{ width: "100%" }}
                title="暂无数据"
              ></Empty>
            ) : (
              historyList.map((item: IImage) => {
                return (
                  <Grid.Item onClick={() => onItemClick(item)}>
                    <Image key={item.id} radius={5} src={item.url} />
                  </Grid.Item>
                );
              })
            )}
          </Grid>
        </View>
      </View>
      <HistoryCard
        visible={isShowCard}
        imgObj={currentImg}
        onClose={(id: number) => onDelete(id)}
      ></HistoryCard>
    </View>
  );
}

export default Index;
