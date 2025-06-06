import type NutritionNote from "@/views/NutritionNote.vue";

export default {
  select_language: "Languages",
  page: {
    home: "Home",
    calculator: "Calculator",
    food: "Food",
    about: "About",
    nutrition_note: "Nutrition Note",
  },
  page_title: {
    calculator: "Calculator",
    calculator_subtitle:
      "Enter your data to calculate the nutrients you need for a day and a meal (calories, protein, carbohydrates, fat)!",
    about: "About us",
    nutrition_note: "Nutrition Note",
  },
  button: {
    login: "Login",
    logout: "Logout",
    confirm: "Confirm",
    clear: "Clear",
    cancel: "Cancel",
    close: "Close",
    open: "Open",
    toXlsx: "Download as Excel(.xlsx)",
    RecommendMeal: "Recommend Meal",
    addCustomFood: "Add Custom Food",
    addCustomFoodtoList: "Add Food to Calculate",
    calculator: "Nutrition Calculator",
  },
  calculator_input: {
    title: "Calculate daily nutrition needs",
    gender: {
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
    calculate: "Calcluate my nutrition needs",
    choosing: "Choose food items",
    scroll_down: "Scroll down",
    food_selection_prompt:
      "Select food by clicking on the button below, and then",
    view_selected_food: "click ‘Total’ on the right to view the results of your selection.",
  },
  resultPage: {
    remove: "Remove",
    adjust: "Adjust",
    school_name: "School",
    name: "Name",
    date: "Date",
  },
  calories: "Calories (kcal)",
  protein: "Protein (g)",
  carbohydrate: "Carbohydrate (g)",
  fat: "Fat (g)",
  calculate: "Total",
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
  food_gram: "Weight (g)",
  food_unit: "Unit",
  food_dt_fibre: "Dietary fibre (g)",
  selection_result_title:
    "Am I getting enough nutrition from the food I eat?",
  selection_nutrition: "Nutrients",
  selection_intake: "Intake",
  selection_meal_requirement: "Nutriton needs per Meal",
  selection_meal_uptake_percentage: "Uptake Percentage per Meal",
  selection_daily_requirement: "Nutriton needs per day",
  selection_daily_uptake_percentage: "Uptake Percentage per Day",
  pivot: {
    id: "ID",
    item: "Item",
    class: "Category",
    subclass: "Subcategory",
    unit: "Unit",
    gram: "Gram",
    calories: "Calories",
    carbohydrate: "Carbohydrate",
    protein: "Protein",
    fat: "Fat",
    dietary_fibre: "Dietary Fibre",
    sugar: "Sugar",
    sodium: "Sodium",
  },
  DatePicker: {
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    today: "Today",
    clear: "Clear",
  },
};
