import type router from "@/router";
import { createI18n } from "vue-i18n";

// Import your translation files
const messages = {
  en: {
    select_language: "Languages",
    page: {
      home: "Home",
      calculator: "Calculator",
      food: "Food",
      about: "About",
    },
    page_title: {
      calculator: "Calculator",
      calculator_subtitle: "Enter your data to calculate the nutrients you need for a day and a meal (calories, protein, carbohydrates, fat)!",
      about: "About us",
    },
    button: {
      confirm: "Confirm",
      clear: "Clear",
      cancel: "Cancel",
      close: "Close",
      open: "Open",
      toCSV: "Download as CSV",
    },
    calculator_input: {
      title: "Calculate my nutrition requirements per meal/day",
      gender:{
        male: "male",
        female: "female",
      },
      age: "Age",
      years_old: "years",
      height: "Height",
      centimeter: "cm",
      weight: "Weight",
      kilogram: "kg",
      activity_factor: {
        title: "Activity level",
        mild: "Light",
        moderate: "Medium",
        severe: "Heavy",
        tips: {
          mild: "e.g. reading, listening to music, computer work, using ipad, taking bus to school",
          moderate:
            "e.g. waling or biking to school, house chores, exercising during recess, shopping, gardening",
          severe:
            "e.g. joining sport teams, jogging, weight or heavy lifting, yard work",
        },
      },
      calculate: "Calculate my requirements!",
      choosing: "choosing me foods!",
      scroll_down: "Scroll down",
      food_selection_prompt: "Select food from below, then tap ‘View’ on the right.",
      view_selected_food: "View selected food and calculate nutrients.",
    },
    calories: "Calories(kcal)",
    protein: "Protein(g)",
    carbohydrate: "Carbohydrate(g)",
    fat: "Fat(g)",
    calculate: "View",
    calculator: "Nutrition Calculator",
    calculator_header_title: "Nutritionist Helps You Calculate",
    calculator_header_content:
      "Enter the following information to calculate your daily required calories and nutrients!",
    calculator_input_gender: "Gender",
    calculator_result_daily_title: "My Daily Nutrient Requirements",
    calculator_result_meal_title: "My Meal Nutrient Requirements",
    calculator_result_title_my: "My ",
    calculator_result_title_daily: "Daily",
    calculator_result_title_meal: "Meal",
    calculator_result_title_nutrient: " Nutrient Requirements",
    food_item: "Item",
    food_class: "Category",
    food_gram: "Grams",
    food_dt_fibre: "Dietary fibre(g)",
    selection_result_title:
      "Am I not getting enough nutrients from the meals I selected?",
    selection_nutrition: "Nutrition",
    selection_intake: "Intake",
    selection_meal_requirement: "Meal Requirement",
    selection_meal_uptake_percentage: "Uptake Percentage per Meal",
    selection_daily_requirement: "Daily Requirement",
    selection_daily_uptake_percentage: "Uptake Percentage per Day",
  },
  ch: {
    select_language: "語言",
    page: {
      home: "首頁",
      calculator: "營養計算機",
      food: "食物",
      about: "關於",
    },
    page_title: {
      calculator: "營養計算機",
      calculator_subtitle: "輸入資料，計算你一日及一餐所需的營養素(熱量、蛋白質、醣類、脂肪)喔！",
      about: "關於我們",
    },
    button: {
      confirm: "確認",
      clear: "清除",
      cancel: "取消",
      close: "關閉",
      open: "開啟",
      toCSV: "下載成CSV檔",
    },
    calculator_input: {
      title: "計算我的每日/每餐所需營養素",
      gender:{
        male: "男",
        female: "女",
      },
      age: "年齡",
      years_old: "歲",
      height: "身高",
      centimeter: "公分",
      weight: "體重",
      kilogram: "公斤",
      activity_factor: {
        title: "每日活動強度",
        mild: "輕度活動",
        moderate: "中度活動",
        severe: "重度活動",
        tips: {
          mild: "例如：看書、聽音樂、打電腦、用平板、補習、搭車上學",
          moderate: "例如：走路或騎腳踏車上學、做家事、下課打球、逛街、種菜",
          severe: "例如：運動校隊、跑步、重訓、搬重物、掃地或拖地超過30分鐘",
        },
      },
      calculate: "計算我的營養需求！",
      choosing: "開始選取食物！",
      scroll_down: "請往下滑",
      food_selection_prompt: "從下方選擇食物，再點按右方「查看」",
      view_selected_food: "查看已選食物以及計算營養素",
    },
    calories: "熱量(大卡)",
    protein: "蛋白質(克)",
    carbohydrate: "醣類(克)",
    fat: "脂肪(克)",
    calculate: "查看",
    calculator: "營養計算機",
    calculator_header_title: "營養師幫你算",
    calculator_header_content:
      "輸入以下資料，就可以算出你一日所需的熱量、醣類等營養素喔!",
    calculator_input_gender: "性別",
    calculator_result_daily_title: "我的一日營養素需求",
    calculator_result_meal_title: "我的一餐營養素需求",
    calculator_result_title_my: "我的",
    calculator_result_title_daily: "一日",
    calculator_result_title_meal: "一餐",
    calculator_result_title_nutrient: "營養素需求",
    food_item: "品項",
    food_class: "分類",
    food_gram: "克數",
    food_dt_fibre: "膳食纖維(克)",
    selection_result_title: "我選擇的餐食營養素夠不夠呢?",
    selection_nutrition: "營養素",
    selection_intake: "目前攝取量",
    selection_meal_requirement: "每餐所需營養素",
    selection_meal_uptake_percentage: "每餐攝取百分比",
    selection_daily_requirement: "每日所需營養素",
    selection_daily_uptake_percentage: "每日攝取百分比",
  },
};

const i18n = createI18n({
  locale: "ch", // Set the default locale
  messages, // Set locale messages
});

export default i18n;
