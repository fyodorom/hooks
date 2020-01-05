import React from "react";
import useAddTest from "../hooks/addTestHook";

const AddTest = () => {

    const { onAddItemClick } = useAddTest();

    return (
        <>
            <div onClick={ () => onAddItemClick() }>Add Me</div>
        </>
    )
}

export default AddTest