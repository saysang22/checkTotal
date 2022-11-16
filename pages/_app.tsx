import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import ParentComponent from "../component/ParentComponent";
import Check from "../component/check";
import TotalCheck from "../component/TotalCheck";

function MyApp({ Component, pageProps }: AppProps) {
  interface DataType {}

  const [totalCheck, setTotalCheck] = useState(false);
  const [test, setTest] = useState<DataType>([]);
  const [testData, setTestTestData] = useState([
    {
      id: 0,
      name: "kim",
      check: false,
    },
    {
      id: 1,
      name: "park",
      check: false,
    },
    {
      id: 2,
      name: "lee",
      check: false,
    },
  ]);
  console.log(totalCheck, test);
  let copy = [...testData];

  //개별선택 체크박스----------------------------------------
  function pcheckEv(check: boolean, dataId: number) {
    let total_check = 0;
    copy[dataId].check = check;

    // console.log(totalCheck);

    let checkList = copy.filter((data) => {
      data.check === true ? total_check++ : total_check;
      return data.check === true ? data : null;
    });

    setTest(checkList);
    // console.log(copy.length, total_check);
    setTotalCheck(copy.length === total_check);
  }
  //----------------------------------------------------------

  //전체선택 및 해제 체크박스----------------------------------
  function pTotalEv() {
    setTotalCheck(!totalCheck);
    if (totalCheck === true) {
      copy.map((data) => {
        return (data.check = false);
      });
      setTestTestData(copy);
    } else {
      copy.map((data) => {
        return (data.check = true);
      });
    }
    let check2 = copy.filter((data) => {
      return data.check === true ? data : null;
    });
    setTest(check2);
    // alert("dd");
  }
  //----------------------------------------------------------

  return (
    <>
      <ParentComponent />

      {testData.map((a) => {
        return (
          <Check
            key={a.id}
            name={a.name}
            check={a.check}
            pcheckEv={() => {
              pcheckEv(!a.check, a.id);
            }}
          />
        );
      })}
      <TotalCheck
        name="전체"
        totalCheck={totalCheck}
        pTotalEv={() => {
          pTotalEv();
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
