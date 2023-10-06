import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const upedateToTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    /**
     * action.item 장바구니에 추가하려는 아이템
     */

    const existingCartItem = state.items[existingCartItemIndex]; //헤당항목이 있을 경우에만 작동함

    let updateItems;

    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
        //이미 들어 있는 물건에 수량만 추가하겠금 만들어둠
      };
      updateItems = [...state.items]; //기존 장바구니 변경하지 않도록
      updateItems[existingCartItemIndex] = updateItem;
      // 이 부분은 새롭게 생성한 updateItems 배열에서 특정 인덱스의 아이템을 업데이트하는 과정
      //existingCartItemIndex는 이미 장바구니에 있는 아이템의 위치를 나타내며, 그 위치에 업데이트된 아이템 정보(updateItem)를 할당
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: upedateToTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      //해당 인덱스 위치에 업데이트된 항목 객체를 대입함으로써 해당 항목만 업데이트
    }
    /**
     * 장바구니에 있는 특정 아이템의 수량(amount)이 1일 때, 즉 그 아이템을 완전히 제거해야 할 때의 로직
     */

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
