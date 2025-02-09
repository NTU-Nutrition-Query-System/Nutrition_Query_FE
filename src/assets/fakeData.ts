import { ref, watch, computed, onMounted } from "vue";
import type { foodItem } from "@/interfaces/Calculator";
export const fakeProducts = ref<foodItem[]>([
  {
    id: 1,
    item: "醬燒烤雞三明治",
    class: "三明治、漢堡類",
    gram: 88,
    calories: 181,
    carbohydrate: 3.7,
    fat: 6.6,
    protein: 3.3,
  },
  {
    id: 2,
    item: "火腿起司蛋三明治",
    class: "三明治、漢堡類",
    gram: 67,
    calories: 192,
    carbohydrate: 20.6,
    fat: 9.3,
    protein: 6.4,
  },
  {
    id: 3,
    item: "經典總匯三明治",
    class: "三明治、漢堡類",
    gram: 93,
    calories: 176,
    carbohydrate: 22.0,
    fat: 6.9,
    protein: 6.5,
  },
  {
    id: 4,
    item: "美式熱狗堡",
    class: "三明治、漢堡類",
    gram: 153,
    calories: 468,
    carbohydrate: 34.1,
    fat: 30.4,
    protein: 14.5,
  },
  {
    id: 5,
    item: "經典雙牛起司堡",
    class: "三明治、漢堡類",
    gram: 124,
    calories: 315,
    carbohydrate: 31.1,
    fat: 13.0,
    protein: 18.2,
  },
  {
    id: 6,
    item: "豬肉起司堡",
    class: "三明治、漢堡類",
    gram: 88,
    calories: 208,
    carbohydrate: 24.1,
    fat: 7.4,
    protein: 11.1,
  },
  {
    id: 7,
    item: "豬肉滿福堡加蛋",
    class: "三明治、漢堡類",
    gram: 87,
    calories: 387,
    carbohydrate: 28.0,
    fat: 21.0,
    protein: 23.0,
  },
  {
    id: 8,
    item: "豬肉滿福堡",
    class: "三明治、漢堡類",
    gram: 87,
    calories: 316,
    carbohydrate: 27.0,
    fat: 16.0,
    protein: 16.0,
  },
  {
    id: 9,
    item: "青蔬滿福堡",
    class: "三明治、漢堡類",
    gram: 87,
    calories: 289,
    carbohydrate: 28.0,
    fat: 12.0,
    protein: 18.0,
  },
  {
    id: 10,
    item: "火腿蛋堡",
    class: "三明治、漢堡類",
    gram: 87,
    calories: 309,
    carbohydrate: 31.0,
    fat: 14.0,
    protein: 16.0,
  },
  {
    id: 11,
    item: "吉士蛋堡",
    class: "三明治、漢堡類",
    gram: 87,
    calories: 288,
    carbohydrate: 30.0,
    fat: 13.0,
    protein: 13.0,
  },
  {
    id: 12,
    item: "麥香魚",
    class: "三明治、漢堡類",
    gram: 87,
    calories: 338,
    carbohydrate: 36.0,
    fat: 16.0,
    protein: 15.0,
  },
  {
    id: 13,
    item: "雙層牛肉吉士堡",
    class: "三明治、漢堡類",
    gram: 87,
    calories: 475,
    carbohydrate: 35.0,
    fat: 26.0,
    protein: 26.0,
  },
  {
    id: 14,
    item: "麥香雞",
    class: "三明治、漢堡類",
    gram: 87,
    calories: 387,
    carbohydrate: 45.0,
    fat: 17.0,
    protein: 14.0,
  },
  {
    id: 15,
    item: "雞蛋沙拉三明治",
    class: "三明治、漢堡類",
    gram: 90,
    calories: 199,
    carbohydrate: 23.9,
    fat: 8.1,
    protein: 7.6,
  },
  {
    id: 16,
    item: "紐澳良風味烤雞鮮蔬三明治",
    class: "三明治、漢堡類",
    gram: 111,
    calories: 291,
    carbohydrate: 23.1,
    fat: 16.5,
    protein: 12.4,
  },
  {
    id: 17,
    item: "豬肉起司蛋堡",
    class: "三明治、漢堡類",
    gram: 121,
    calories: 237,
    carbohydrate: 26.3,
    fat: 8.1,
    protein: 14.9,
  },
  {
    id: 18,
    item: "火腿蛋多穀貝果堡",
    class: "三明治、漢堡類",
    gram: 110,
    calories: 234,
    carbohydrate: 47.4,
    fat: 5.7,
    protein: 10.2,
  },
  {
    id: 19,
    item: "輕乳酪巧克力三明治",
    class: "三明治、漢堡類",
    gram: 76,
    calories: 174,
    carbohydrate: 25.8,
    fat: 5.5,
    protein: 5.4,
  },
  {
    id: 20,
    item: "火腿起司三明治",
    class: "三明治、漢堡類",
    gram: 100,
    calories: 323,
    carbohydrate: 38.0,
    fat: 15.0,
    protein: 9.0,
  },
  {
    id: 21,
    item: "火腿蛋三明治",
    class: "三明治、漢堡類",
    gram: 100,
    calories: 275,
    carbohydrate: 28.2,
    fat: 13.2,
    protein: 10.9,
  },
  {
    id: 22,
    item: "泰國芭樂(去蒂去籽)",
    class: "水果",
    gram: 160,
    calories: 69,
    carbohydrate: 15.5,
    fat: 0.2,
    protein: 1.3,
  },
  {
    id: 23,
    item: "黑珍珠蓮霧(去蒂去籽)",
    class: "水果",
    gram: 165,
    calories: 71.8,
    carbohydrate: 16.8,
    fat: 0.2,
    protein: 0.7,
  },
  {
    id: 24,
    item: "珍珠芭樂(去蒂去籽)",
    class: "水果",
    gram: 150,
    calories: 70.7,
    carbohydrate: 15.9,
    fat: 0.3,
    protein: 1.1,
  },
  {
    id: 25,
    item: "紅心芭樂(去蒂去籽)",
    class: "水果",
    gram: 150,
    calories: 69.4,
    carbohydrate: 16.1,
    fat: 0.2,
    protein: 0.8,
  },
  {
    id: 26,
    item: "富士蘋果(去籽)",
    class: "水果",
    gram: 130,
    calories: 64.1,
    carbohydrate: 15.5,
    fat: 0.1,
    protein: 0.3,
  },
  {
    id: 27,
    item: "青龍蘋果(去皮去籽)",
    class: "水果",
    gram: 120,
    calories: 70.7,
    carbohydrate: 16.6,
    fat: 0.6,
    protein: 0.4,
  },
  {
    id: 28,
    item: "櫻桃(去蒂去籽)",
    class: "水果",
    gram: 80,
    calories: 67,
    carbohydrate: 15.3,
    fat: 0.2,
    protein: 1.0,
  },
  {
    id: 29,
    item: "龍眼(去殼去籽)",
    class: "水果",
    gram: 90,
    calories: 72.9,
    carbohydrate: 16.1,
    fat: 0.5,
    protein: 1.0,
  },
  {
    id: 30,
    item: "龍眼乾",
    class: "水果",
    gram: 22,
    calories: 63,
    carbohydrate: 15.6,
    fat: 0.2,
    protein: 1.1,
  },
  {
    id: 31,
    item: "百香果(去皮)",
    class: "水果",
    gram: 140,
    calories: 65.1,
    carbohydrate: 15.0,
    fat: 3.4,
    protein: 3.1,
  },
  {
    id: 32,
    item: "香蔥經典嫩雞胸",
    class: "肉類",
    gram: 115,
    calories: 154,
    carbohydrate: 4.14,
    fat: 5.3,
    protein: 16.56,
  },
  {
    id: 33,
    item: "糖醋炸雞",
    class: "肉類",
    gram: 100,
    calories: 243.5,
    carbohydrate: 21,
    fat: 11.9,
    protein: 13.1,
  },
  {
    id: 34,
    item: "里脊肉",
    class: "肉類",
    gram: 35,
    calories: 55,
    carbohydrate: 0,
    fat: 3,
    protein: 7,
  },
  {
    id: 35,
    item: "蛤蠣",
    class: "肉類",
    gram: 160,
    calories: 55,
    carbohydrate: 0,
    fat: 3,
    protein: 7,
  },
  {
    id: 36,
    item: "蒜辣烤腿排",
    class: "肉類",
    gram: 110,
    calories: 226,
    carbohydrate: 1.3,
    fat: 16.2,
    protein: 18.8,
  },
  {
    id: 37,
    item: "蝦仁",
    class: "肉類",
    gram: 50,
    calories: 22,
    carbohydrate: 0.5,
    fat: 0.1,
    protein: 4.8,
  },
  {
    id: 38,
    item: "花枝",
    class: "肉類",
    gram: 60,
    calories: 34,
    carbohydrate: 2.2,
    fat: 0.4,
    protein: 7.3,
  },
  {
    id: 39,
    item: "豬大里肌",
    class: "肉類",
    gram: 35,
    calories: 74,
    carbohydrate: 0,
    fat: 5,
    protein: 6.7,
  },
  {
    id: 40,
    item: "豬後腿肉",
    class: "肉類",
    gram: 35,
    calories: 43,
    carbohydrate: 0.1,
    fat: 1.4,
    protein: 7.1,
  },
  {
    id: 41,
    item: "雞翅",
    class: "肉類",
    gram: 40,
    calories: 84,
    carbohydrate: 0,
    fat: 5.8,
    protein: 7.3,
  },
  {
    id: 42,
    item: "雞排",
    class: "肉類",
    gram: 40,
    calories: 73,
    carbohydrate: 0,
    fat: 4.9,
    protein: 6.8,
  },
  {
    id: 43,
    item: "雞爪",
    class: "肉類",
    gram: 30,
    calories: 63,
    carbohydrate: 0.4,
    fat: 4,
    protein: 6.2,
  },
  {
    id: 44,
    item: "秋刀魚",
    class: "肉類",
    gram: 35,
    calories: 97,
    carbohydrate: 1.4,
    fat: 7.6,
    protein: 6.6,
  },
  {
    id: 45,
    item: "梅花肉",
    class: "肉類",
    gram: 35,
    calories: 72,
    carbohydrate: 0,
    fat: 4.9,
    protein: 6.6,
  },
  {
    id: 46,
    item: "五花肉",
    class: "肉類",
    gram: 50,
    calories: 184,
    carbohydrate: 0,
    fat: 16.9,
    protein: 7.3,
  },
  {
    id: 47,
    item: "豬蹄膀",
    class: "肉類",
    gram: 40,
    calories: 132,
    carbohydrate: 0,
    fat: 11.4,
    protein: 6.8,
  },
  {
    id: 48,
    item: "雞胸肉",
    class: "肉類",
    gram: 30,
    calories: 36,
    carbohydrate: 0,
    fat: 0.7,
    protein: 7,
  },
  {
    id: 49,
    item: "雞腿",
    class: "肉類",
    gram: 40,
    calories: 65,
    carbohydrate: 0.1,
    fat: 3.8,
    protein: 7.2,
  },
  {
    id: 50,
    item: "青江菜",
    class: "青菜類",
    gram: 100,
    calories: 25,
    carbohydrate: 5,
    fat: 0,
    protein: 1,
  },
  {
    id: 51,
    item: "花椰菜",
    class: "青菜類",
    gram: 100,
    calories: 25,
    carbohydrate: 5,
    fat: 0,
    protein: 1,
  },
  {
    id: 52,
    item: "胡瓜",
    class: "青菜類",
    gram: 100,
    calories: 14,
    carbohydrate: 2.9,
    fat: 0.1,
    protein: 0.7,
  },
  {
    id: 53,
    item: "蒲瓜",
    class: "青菜類",
    gram: 100,
    calories: 18,
    carbohydrate: 4,
    fat: 0.1,
    protein: 0.5,
  },
  {
    id: 54,
    item: "木耳",
    class: "青菜類",
    gram: 100,
    calories: 38,
    carbohydrate: 8.8,
    fat: 0.1,
    protein: 0.9,
  },
  {
    id: 55,
    item: "茭白筍",
    class: "青菜類",
    gram: 100,
    calories: 20,
    carbohydrate: 4,
    fat: 0.2,
    protein: 1.3,
  },
  {
    id: 56,
    item: "綠豆芽",
    class: "青菜類",
    gram: 100,
    calories: 24,
    carbohydrate: 4.1,
    fat: 0.2,
    protein: 2.3,
  },
  {
    id: 57,
    item: "洋蔥",
    class: "青菜類",
    gram: 100,
    calories: 42,
    carbohydrate: 10,
    fat: 0.1,
    protein: 1,
  },
  {
    id: 58,
    item: "高麗菜",
    class: "青菜類",
    gram: 100,
    calories: 23,
    carbohydrate: 4.8,
    fat: 0.1,
    protein: 1.3,
  },
  {
    id: 59,
    item: "大白菜",
    class: "青菜類",
    gram: 100,
    calories: 17,
    carbohydrate: 2.9,
    fat: 0.3,
    protein: 1.2,
  },
  {
    id: 60,
    item: "芥菜",
    class: "青菜類",
    gram: 100,
    calories: 19,
    carbohydrate: 3.4,
    fat: 0.5,
    protein: 0.8,
  },
  {
    id: 61,
    item: "萵苣",
    class: "青菜類",
    gram: 100,
    calories: 16,
    carbohydrate: 2.8,
    fat: 0.1,
    protein: 1.1,
  },
  {
    id: 62,
    item: "冬瓜",
    class: "青菜類",
    gram: 100,
    calories: 11,
    carbohydrate: 2.4,
    fat: 0.1,
    protein: 0.4,
  },
  {
    id: 63,
    item: "玉米筍",
    class: "青菜類",
    gram: 100,
    calories: 31,
    carbohydrate: 5.8,
    fat: 0.3,
    protein: 2.2,
  },
  {
    id: 64,
    item: "小黃瓜",
    class: "青菜類",
    gram: 100,
    calories: 13,
    carbohydrate: 2.4,
    fat: 0.2,
    protein: 0.9,
  },
  {
    id: 65,
    item: "苦瓜",
    class: "青菜類",
    gram: 100,
    calories: 19,
    carbohydrate: 4.1,
    fat: 0.1,
    protein: 0.9,
  },
  {
    id: 66,
    item: "甜椒(青椒)",
    class: "青菜類",
    gram: 100,
    calories: 29,
    carbohydrate: 5.9,
    fat: 0.4,
    protein: 1,
  },
  {
    id: 67,
    item: "絲瓜",
    class: "青菜類",
    gram: 100,
    calories: 19,
    carbohydrate: 3.9,
    fat: 0.1,
    protein: 1.1,
  },
  {
    id: 68,
    item: "胡蘿蔔",
    class: "青菜類",
    gram: 100,
    calories: 39,
    carbohydrate: 8.9,
    fat: 0.1,
    protein: 1.1,
  },
  {
    id: 69,
    item: "白蘿蔔",
    class: "青菜類",
    gram: 100,
    calories: 18,
    carbohydrate: 3.9,
    fat: 0.1,
    protein: 0.5,
  },
  {
    id: 70,
    item: "綠蘆筍",
    class: "青菜類",
    gram: 100,
    calories: 22,
    carbohydrate: 3.5,
    fat: 0.2,
    protein: 2.7,
  },
  {
    id: 71,
    item: "小白菜",
    class: "青菜類",
    gram: 100,
    calories: 10,
    carbohydrate: 1.5,
    fat: 0.2,
    protein: 1.1,
  },
  {
    id: 72,
    item: "芥蘭",
    class: "青菜類",
    gram: 100,
    calories: 20,
    carbohydrate: 3.2,
    fat: 0.3,
    protein: 1.7,
  },
  {
    id: 73,
    item: "油菜",
    class: "青菜類",
    gram: 100,
    calories: 12,
    carbohydrate: 1.6,
    fat: 0.2,
    protein: 1.4,
  },
  {
    id: 74,
    item: "空心菜",
    class: "青菜類",
    gram: 100,
    calories: 22,
    carbohydrate: 3.5,
    fat: 0.3,
    protein: 2,
  },
  {
    id: 75,
    item: "青江菜",
    class: "青菜類",
    gram: 100,
    calories: 10,
    carbohydrate: 1.6,
    fat: 0,
    protein: 1.3,
  },
  {
    id: 76,
    item: "紅鳳菜",
    class: "青菜類",
    gram: 100,
    calories: 22,
    carbohydrate: 3.5,
    fat: 0.4,
    protein: 2.1,
  },
  {
    id: 77,
    item: "紫甘藍",
    class: "青菜類",
    gram: 100,
    calories: 28,
    carbohydrate: 5.9,
    fat: 0.2,
    protein: 1.5,
  },
  {
    id: 78,
    item: "龍鬚菜",
    class: "青菜類",
    gram: 100,
    calories: 25,
    carbohydrate: 4.9,
    fat: 0.2,
    protein: 1.8,
  },
  {
    id: 79,
    item: "花椰菜",
    class: "青菜類",
    gram: 100,
    calories: 23,
    carbohydrate: 4.5,
    fat: 0.1,
    protein: 1.8,
  },
  {
    id: 80,
    item: "金針菜",
    class: "青菜類",
    gram: 100,
    calories: 40,
    carbohydrate: 7.4,
    fat: 0.5,
    protein: 2.4,
  },
  {
    id: 81,
    item: "茄子",
    class: "青菜類",
    gram: 100,
    calories: 25,
    carbohydrate: 5.3,
    fat: 0.2,
    protein: 1.2,
  },
  {
    id: 82,
    item: "番茄(大)",
    class: "青菜類",
    gram: 100,
    calories: 19,
    carbohydrate: 4.1,
    fat: 0.1,
    protein: 0.8,
  },
  {
    id: 83,
    item: "香菇",
    class: "青菜類",
    gram: 100,
    calories: 39,
    carbohydrate: 7.6,
    fat: 0.1,
    protein: 3,
  },
  {
    id: 84,
    item: "牛蒡",
    class: "青菜類",
    gram: 100,
    calories: 84,
    carbohydrate: 19.1,
    fat: 0.4,
    protein: 2.5,
  },
  {
    id: 85,
    item: "竹筍",
    class: "青菜類",
    gram: 100,
    calories: 21,
    carbohydrate: 3.7,
    fat: 0.2,
    protein: 2.1,
  },
  {
    id: 86,
    item: "苜蓿芽",
    class: "青菜類",
    gram: 100,
    calories: 20,
    carbohydrate: 2.5,
    fat: 0.2,
    protein: 3.2,
  },
  {
    id: 87,
    item: "韭菜",
    class: "青菜類",
    gram: 100,
    calories: 25,
    carbohydrate: 5,
    fat: 0,
    protein: 1,
  },
  {
    id: 88,
    item: "地瓜葉",
    class: "青菜類",
    gram: 100,
    calories: 28,
    carbohydrate: 4.4,
    fat: 0.3,
    protein: 3.2,
  },
  {
    id: 89,
    item: "芹菜",
    class: "青菜類",
    gram: 100,
    calories: 15,
    carbohydrate: 3.1,
    fat: 0.1,
    protein: 0.8,
  },
  {
    id: 90,
    item: "茼蒿",
    class: "青菜類",
    gram: 100,
    calories: 16,
    carbohydrate: 2.2,
    fat: 0.3,
    protein: 1.7,
  },
  {
    id: 91,
    item: "紅莧菜",
    class: "青菜類",
    gram: 100,
    calories: 22,
    carbohydrate: 3.3,
    fat: 0.3,
    protein: 2.6,
  },
  {
    id: 92,
    item: "青江菜",
    class: "青菜類",
    gram: 100,
    calories: 10,
    carbohydrate: 1.6,
    fat: 0,
    protein: 1.3,
  },
  {
    id: 93,
    item: "洋菇",
    class: "青菜類",
    gram: 100,
    calories: 25,
    carbohydrate: 3.8,
    fat: 0.2,
    protein: 3,
  },
  {
    id: 94,
    item: "金針菇",
    class: "青菜類",
    gram: 100,
    calories: 37,
    carbohydrate: 7.2,
    fat: 0.3,
    protein: 2.6,
  },
  {
    id: 95,
    item: "莧菜",
    class: "青菜類",
    gram: 100,
    calories: 17,
    carbohydrate: 2.6,
    fat: 0.3,
    protein: 1.9,
  },
  {
    id: 96,
    item: "菠菜",
    class: "青菜類",
    gram: 100,
    calories: 18,
    carbohydrate: 2.4,
    fat: 0.3,
    protein: 2.2,
  },
  {
    id: 97,
    item: "草菇",
    class: "青菜類",
    gram: 100,
    calories: 36,
    carbohydrate: 5.9,
    fat: 0.3,
    protein: 3.8,
  },
  {
    id: 98,
    item: "黃豆芽",
    class: "青菜類",
    gram: 100,
    calories: 47,
    carbohydrate: 5,
    fat: 1.6,
    protein: 5.3,
  },
  {
    id: 99,
    item: "小籠包",
    class: "點心",
    subclass: "中式點心",
    gram: 1,
    calories: 100,
    carbohydrate: 16.3,
    fat: 3.1,
    protein: 6.2,
  },
  {
    id: 100,
    item: "水餃",
    class: "點心",
    subclass: "水餃鍋貼餛飩",
    gram: 1,
    calories: 150,
    carbohydrate: 27.6,
    fat: 5.2,
    protein: 8.3,
  },
  {
    id: 101,
    item: "鍋貼",
    class: "點心",
    subclass: "水餃鍋貼餛飩",
    gram: 1,
    calories: 160,
    carbohydrate: 28.5,
    fat: 6.0,
    protein: 7.5,
  },
  {
    id: 102,
    item: "蘋果派",
    class: "點心",
    subclass: "西式點心",
    gram: 1,
    calories: 250,
    carbohydrate: 35.2,
    fat: 12.5,
    protein: 2.8,
  },
  {
    id: 103,
    item: "可頌麵包",
    class: "點心",
    subclass: "西式點心",
    gram: 1,
    calories: 300,
    carbohydrate: 39.6,
    fat: 15.4,
    protein: 5.6,
  },
  {
    id: 104,
    item: "蛋塔",
    class: "點心",
    subclass: "西式點心",
    gram: 1,
    calories: 220,
    carbohydrate: 28.1,
    fat: 12.8,
    protein: 4.3,
  },
  {
    id: 105,
    item: "巧克力餅乾",
    class: "點心",
    subclass: "西式點心",
    gram: 1,
    calories: 150,
    carbohydrate: 20.3,
    fat: 7.8,
    protein: 2.4,
  },
  {
    id: 106,
    item: "鬆餅",
    class: "點心",
    subclass: "西式點心",
    gram: 1,
    calories: 200,
    carbohydrate: 28.2,
    fat: 9.3,
    protein: 4.0,
  },
  {
    id: 107,
    item: "薯條",
    class: "點心",
    subclass: "西式點心",
    gram: 1,
    calories: 180,
    carbohydrate: 30.5,
    fat: 6.9,
    protein: 2.3,
  },
  {
    id: 108,
    item: "炸雞翅",
    class: "點心",
    subclass: "西式點心",
    gram: 1,
    calories: 250,
    carbohydrate: 16.0,
    fat: 17.5,
    protein: 18.3,
  },
]);
