interface CheckType {
  name: string;
  check: boolean;
  id: string;
  pcheckEv: () => void;
}
[];

export const CheckBox = ({ name, check, id, pcheckEv }: CheckType) => {
  function checkEv() {
    pcheckEv();
  }

  return (
    <>
      <div className="checkb">
        <input
          type="checkbox"
          onChange={() => {}}
          className="ck"
          style={{ display: "none" }}
          checked={check}
          id={id}
        />
        <label
          className="ck"
          id={id}
          onClick={() => {
            checkEv();
          }}
        >
          <span className="ck_btn"></span>
          <span className="ck_txt">{name}</span>
        </label>
      </div>

      <style jsx>
        {`
          /* CHECKBOX */

          .ck_btn {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 1px solid #333;
            border-radius: 3px;
            position: relative;
            vertical-align: middle;
            background-color: #fff;
            box-sizing: border-box;
          }

          .ck_txt {
            display: inline-block;
            margin: 0 0 0 4px;
          }

          .ck_btn:after {
            content: "";
            display: inline-block;
            width: 9px;
            height: 5px;
            position: absolute;
            left: 1px;
            top: 1px;
          }
          .ck:checked + label .ck-btn {
            border: 1px solid #333;
          }
          .ck:checked + label .ck_btn::after {
            border-left: 3px solid #333;
            border-bottom: 3px solid #333;
            transform: rotate(-45deg);
          }
          .ck:disabled + label .ck_btn {
            border: 1px solid #333;
          }
        `}
      </style>
    </>
  );
};

export default CheckBox;
