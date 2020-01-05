import { useContext } from 'react';
import { TestContext } from "../providers/testProvider";

const useTestContext = () => {
    const testContext: any = useContext(TestContext);
    return {
        state: testContext[0],
        dispatch: testContext[1]
    }
}

export default useTestContext;