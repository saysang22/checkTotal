
import { useState } from 'react';
interface testProps {
    textFun: (bo: boolean) => void,
}

const Child = ({textFun}: testProps) => {

    const [testBo, setTestbo] = useState(false);
// console.log(testBo)
    // console.log(testBo)

    function plusHandler () {

        // console.log(e.target)
        setTestbo(!testBo)
        textFun(!testBo)
    }

    return (
        <>
        <button type='button' onClick={()=>{plusHandler()}}>버튼</button>

        </>
    )
}

export default Child;