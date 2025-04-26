import * as actionTypes from "../actionTypes/productsListTypes";
const mongoose = require('mongoose');

const vegetablesList = () => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.VEGETABLE_LIST_REQUEST,
  });

  try {
  
    const fruits = [
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Apple, 1kg", price: 120, unit: "1kg", image: "/images/images/apple.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Watermelon, 1 Piece", price: 70, unit: "1pc", image: "images/images/watermelon.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Papaya, 1 Piece", price: 50, unit: "1pc", image: "/images/images/papaya.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Pomegranate, 500g", price: 110, unit: "500g", image: "/images/images/pomegranate.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Banana, 1 Dozen", price: 60, unit: "1 dozen", image: "/images/images/banana.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Mango, 1kg", price: 150, unit: "1kg", image: "/images/images/mango.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Black Grapes, 500g", price: 80, unit: "500g", image: "/images/images/bgrapes.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Green Grapes, 500g", price: 80, unit: "500g", image: "/images/images/ggrapes.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Pineapple, 1 Piece", price: 90, unit: "1pc", image: "images/images/pineapple.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Kiwi, 3 Pieces", price: 90, unit: "3pc", image: "images/images/kiwi.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Guava, 500g", price: 40, unit: "500g", image: "images/images/guava.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Muskmelon, 1 Piece", price: 80, unit: "1pc", image: "images/images/Muskmelon.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Dragon Fruit, 1 Piece", price: 250, unit: "1pc", image: "images/images/dragonfruit.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Chikoo (Sapota), 500g", price: 50, unit: "500g", image: "images/images/chikoo.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Kinnow Orange, 1 kg", price: 90, unit: "1kg", image: "images/images/orange.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Plum, 500g", price: 90, unit: "500g", image: "images/images/Plum.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Blueberries, 250g", price: 200, unit: "250g", image: "images/images/blueberries.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Strawberries, 250g", price: 150, unit: "250g", image: "images/images/strawberries.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Persimmon, 500g", price: 180, unit: "500g", image: "images/images/Persimmon.png", category: "Fruit" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Mosambi, 1kg", price: 120, unit: "1kg", image: "images/images/mosambi.png", category: "Fruit" },
    ];
   
    const vegetables = [
      
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Tomato, 1kg", price: 30, unit: "1kg", image: "/images/images/tomaa.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Lady Finger, 500g", price: 25, unit: "500g", image: "/images/images/LadyFinger.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Potato, 500g", price: 25, unit: "500g", image: "/images/images/potato.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Onion, 1kg", price: 45, unit: "1kg", image: "images/images/Onion.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Cabbage, 1 Pc (450g-750gm)", price: 8, unit: "1pc", image: "images/images/Cabbage.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Cauliflower, 1 Pc (400-600g)", price: 15, unit: "1pc", image: "images/images/Cauliflower.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Ginger, 100g", price: 8, unit: "100g", image: "images/images/Ginger.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Garlic, 100g", price: 30, unit: "100g", image: "images/images/Garlic.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Carrot, 500g", price: 35, unit: "500g", image: "images/images/carrot.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Beetroot, 500g", price: 20, unit: "500g", image: "images/images/beetroot.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Capsicum, 250g", price: 30, unit: "250g", image: "images/images/Capsicum.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Red Chilli, 100g", price: 15, unit: "100g", image: "images/images/redchilli.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Yellow Bell Pepper, 250g", price: 45, unit: "250g", image: "images/images/yellowbellpepper.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Broccoli, 1 Pc", price: 70, unit: "1pc", image: "images/images/broccoli.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Radish, 500g", price: 25, unit: "500g", image: "images/images/radishh.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Green Chilli, 100g", price: 15, unit: "100g", image: "images/images/greenchilli.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Bottle Gourd, 1kg", price: 30, unit: "1kg", image: "images/images/BottleGourd.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Drumstick, 250g", price: 35, unit: "250g", image: "images/images/drumstick.png", category: "Vegetable" },
      { _id: new mongoose.Types.ObjectId(), name: "Fresh Turnip, 500g", price: 30, unit: "500g", image: "images/images/Turnip.png", category: "Vegetable" },
    ];

    const data = [...fruits, ...vegetables];

    data.forEach((item) => {
      item.quantity = 0;
      item.purchasing = false;
    });

    if (localStorage.getItem("cartItems")) {
      const products = getState().cart.cartData.vegetablesCart;
      data.map((item) => {
        products.map((product) => {
          const index = data.findIndex((x) => x._id === product._id);
          if (index !== -1) data[index] = product;
          return data;
        });
        return data;
      });
    }

    dispatch({
      type: actionTypes.VEGETABLE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.VEGETABLE_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const filteredProducts = (value) => (dispatch) => {
  dispatch({
    type: actionTypes.VEGETABLE_FILTER_SEARCH,
    payload: value,
  });
};

export default vegetablesList;
