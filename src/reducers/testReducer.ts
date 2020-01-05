const testReducer = (state: any, action: any) => {
    debugger
    switch (action.type) {
        case "ADD_TEST_ITEM": {
            return {
                ...state,
                testItems: [...state.testItems, action.item]
            }
        }
        case "TODO_ITEMS": {
            return {
                ...state,
                testItems: action.testItems
            };
        }
        default:
        {
            throw new Error("Unexpected Action")
        }
    }
}

export default testReducer;