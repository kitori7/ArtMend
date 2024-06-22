export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/mine/index",
    "pages/smear/index",
    "pages/recognize/index",
    "pages/history/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath:'./icon/index.png',
        selectedIconPath:"./icon/indexActive.png"
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath:'./icon/mine.png',
        selectedIconPath:"./icon/mineActive.png"
      },
    ],
  },
});
