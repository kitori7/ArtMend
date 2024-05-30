export enum IOperateType {
  eliminate, //清除
  ocr, //文字识别
  background, //清除背景
  edit, //编辑
}

export interface IImage {
  id: number; //标识符
  url: string; //图片地址
  operateType: IOperateType; //操作类型
  userName: string; //用户姓名
  base64Url?: string; //base64数据
}
