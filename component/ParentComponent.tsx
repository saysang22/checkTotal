import { useState } from 'react';
import Child from './child';

const ParentComponent  = () => {

  // function test(x :string){
  //   return x
  // }
  // console.log(test('안녕'))

  const [testData, setTestData] = useState(false);

  function textFun (bo :boolean) {
    setTestData(bo)
    alert('자식에서 이벤트 호출함')
  }

  // console.log(testData);

  return (
    <>
    <Child textFun = {(bo) => {textFun(bo)}}/>
    </>
  )
}

export default ParentComponent;