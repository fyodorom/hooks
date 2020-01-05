import useTestContext from "./testContext"
import { useEffect } from "react";

interface AddItemsHook {
    onAddItemClick(): any
}

const useAddTest = (): AddItemsHook => {

    const { state, dispatch } = useTestContext();

    const onAddItemClick = () => {
        const item = { item: `NEW ${Math.random()}` }
        dispatch({
            type: "ADD_TEST_ITEM",
            item
        });
    };
    

    // useEffect(() => {

    //     const item = { item: `NEW ${Math.random()}` }
        
    //     const addToItemState = () => {
            
    //     }

    //     addToItemState();

    // }, []);

    return {
        onAddItemClick
    }

}

export default useAddTest;