import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import ParentComponent from "../component/ParentComponent";
import { CheckBox } from "../component/check";
import TotalCheck from "../component/TotalCheck";

function MyApp({ Component, pageProps }: AppProps) {
  const [totalCheck, setTotalCheck] = useState(false);
  const [totalGroup, setTotalGroup] = useState([
    {
      name: "animal",
    },
    {
      name: "names",
    },
  ]);
  const [data, setData] = useState([
    {
      id: 0,
      name: "kim",
      age: 20,
      place: "제목을 입력해주세요",
      check: false,
      userY: "N",
      groupId: "names",
    },
    {
      id: 1,
      name: "park",
      age: 30,
      place: "전화번호를 입력해주세요",
      check: false,
      userY: "N",
      groupId: "names",
    },
    {
      id: 2,
      name: "lee",
      age: 40,
      place: "이메일을 입력해주세요",
      check: false,
      userY: "N",
      groupId: "names",
    },
    {
      id: 3,
      name: "강아지",
      age: 40,
      place: "이메일을 입력해주세요",
      check: false,
      userY: "N",
      groupId: "animals",
    },
    {
      id: 4,
      name: "고양이",
      age: 40,
      place: "이메일을 입력해주세요",
      check: false,
      userY: "N",
      groupId: "animals",
    },
    {
      id: 5,
      name: "다람쥐",
      age: 40,
      place: "이메일을 입력해주세요",
      check: false,
      userY: "N",
      groupId: "animals",
    },
  ]);

  //-------------------- 개별 체크박스 --------------------------
  interface DataType {}

  //checkde가 true 일 때 담을 빈 배열
  const [checkList, setCheckList] = useState<DataType>([]);

  console.log(checkList);

  function pcheckEv(check: boolean, dataId: number) {
    let copy = [...data];
    copy[dataId].check = check;
    let total_length = copy.length;
    let check_count = 0;

    let checkList = copy.filter((data) => {
      return data.check === true ? data : null;
    });

    setData(copy);

    setTotalCheck(total_length === check_count);
    setCheckList(checkList);
  }
  //----------------------------------------------------------------

  //전체선택 및 해제 체크박스----------------------------------
  function pTotalEv(group: string) {
    // console.log(group);
    let copy = [...data];

    copy.map((data) => {
      console.log(data.groupId === group);
      if (data.groupId === group) {
        setTotalCheck(!totalCheck);
      }
    });

    setData(
      copy.map((data) => {
        if (data.groupId === group) data.check = !totalCheck;
        return data;
      })
    );

    let check2 = copy.filter((data) => {
      if (data.groupId === group) {
        return data.check === true ? data : null;
      }
    });

    setCheckList(check2);
  }

  //----------------------------------------------------------
  return (
    <>
      <ParentComponent />
      {data.map((a) => {
        if (a.groupId === "names")
          return (
            <CheckBox
              key={a.id}
              name={a.name}
              check={a.check}
              id={a.groupId}
              pcheckEv={() => {
                pcheckEv(!a.check, a.id);
              }}
            />
          );
      })}
      <TotalCheck
        name="전체"
        id="names"
        totalCheck={totalCheck}
        pTotalEv={() => {
          pTotalEv("names");
        }}
      />
      <br />
      {data.map((a) => {
        if (a.groupId === "animals")
          return (
            <CheckBox
              key={a.id}
              id={a.groupId}
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
        id="animals"
        totalCheck={totalCheck}
        pTotalEv={() => {
          pTotalEv("animals");
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
