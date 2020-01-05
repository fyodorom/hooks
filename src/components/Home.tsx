import React from 'react';
import styled from 'styled-components';
import useTest from '../hooks/testHook';
import AddTest from "./AddTest";

const TestSpan = styled.span`
    box-sizing: border-box;
    border-radius: 10px;
    min-width: 20px;
    height: 20px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
`;

const TestStyledComponent = styled(TestSpan)`
    background-color: #fff;
    color: #999;
    box-shadow: 0 0 0 1px #d9d9d9 inset ;
`


const ToDoHome = () => {
    const res = useTest();
    const { testItems } = res;

    const itemsList = testItems.map((elem: any, index: number) => {
        return (
            <div>
                item #{index} : {elem.item}
            </div>
        )
    })
    
    return (
       <>
        <TestStyledComponent>
            {itemsList}
        </TestStyledComponent>
        <AddTest />
       </>
    )
}

export default ToDoHome;