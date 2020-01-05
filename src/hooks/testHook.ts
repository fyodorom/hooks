import { useEffect, useState } from "react";
import useTestContext from "./testContext";
import fetchItems from "../api/fetchItems";

const useTest = () => {

  const { state, dispatch } = useTestContext();

  useEffect(() => {
    console.log("change");
 
    const updateItemState = async () => {
      const items = await fetchItems();
      dispatch({
        type: "TODO_ITEMS",
        testItems: items
      });
    }

    updateItemState();

  }, []);

  const { testItems } = state;

  return {
    testItems
  };

}

export default useTest;