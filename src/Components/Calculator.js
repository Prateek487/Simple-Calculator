import { useState } from "react";
import classes from "./Calculator.module.css";

const Calculator = (props) => {
  const [curVal, setCurVal] = useState("0");
  const [expVal, setExpVal] = useState("");
  const [preVal, setPreVal] = useState("");
  const [isContent, setContent] = useState("true");
  const [theme, setTheme] = useState("true");
  const [sci, setSci] = useState(false);

  const calculate = () => {
    if (expVal === "+") {
      return +preVal + +curVal;
    } else if (expVal === "-") {
      return +preVal - +curVal;
    } else if (expVal === "*") {
      return +preVal * +curVal;
    } else if (expVal === "/") {
      return +preVal / +curVal;
    }
  };
  const onClickHandler = (val) => {
    switch (val) {
      case 0:
        if (curVal === "0") {
          setContent(true);
          setCurVal("0");
        } else {
          setCurVal(curVal + "0");
        }
        break;
      case 1:
        if (curVal === "0") {
          setContent(true);
          setCurVal("1");
        } else {
          setCurVal(curVal + "1");
        }

        break;
      case 2:
        if (curVal === "0") {
          setContent(true);
          setCurVal("2");
        } else {
          setCurVal(curVal + "2");
        }
        break;
      case 3:
        if (curVal === "0") {
          setContent(true);
          setCurVal("3");
        } else {
          setCurVal(curVal + "3");
        }
        break;
      case 4:
        if (curVal === "0") {
          setContent(true);
          setCurVal("4");
        } else {
          setCurVal(curVal + "4");
        }
        setCurVal(curVal + "4");
        break;
      case 5:
        if (curVal === "0") {
          setContent(true);
          setCurVal("5");
        } else {
          setCurVal(curVal + "5");
        }
        break;
      case 6:
        if (curVal === "0") {
          setContent(true);
          setCurVal("6");
        } else {
          setCurVal(curVal + "6");
        }
        break;
      case 7:
        if (curVal === "0") {
          setContent(true);
          setCurVal("7");
        } else {
          setCurVal(curVal + "7");
        }
        break;
      case 8:
        if (curVal === "0") {
          setContent(true);
          setCurVal("8");
        } else {
          setCurVal(curVal + "8");
        }
        break;
      case 9:
        if (curVal === "0") {
          setContent(true);
          setCurVal("9");
        } else {
          setCurVal(curVal + "9");
        }
        break;
      case 11:
        if (expVal === "") {
          setContent(false);
          setPreVal(curVal);
          setCurVal("0");
          setExpVal("+");
        } else {
          setPreVal(calculate());
          setContent(false);
          setCurVal("0");
          setExpVal("+");
        }

        break;
      case 12:
        if (expVal === "") {
          setPreVal(curVal);
          setCurVal("0");
          setExpVal("-");
        } else {
          setPreVal(calculate());
          setCurVal("0");
          setExpVal("-");
        }
        setContent(false);
        break;
      case 13:
        if (expVal === "") {
          setPreVal(curVal);
          setCurVal("0");
          setExpVal("*");
        } else {
          setPreVal(calculate());
          setCurVal("0");
          setExpVal("*");
        }
        setContent(false);
        break;
      case 16: //divide
        if (expVal === "") {
          setPreVal(curVal);
          setCurVal("0");
          setExpVal("/");
        } else {
          setPreVal(calculate());
          setCurVal("0");
          setExpVal("/");
        }
        setContent(false);
        break;
      case 14: //clear
        setCurVal("0");
        setPreVal("");
        setExpVal("");
        setContent(true);
        break;
      case 15: //=
        setPreVal("");
        setCurVal(calculate());
        setExpVal("");
        setContent(true);
        break;
      case 18: // light
        setTheme(false);
        break;
      case 19: // Dark
        setTheme(true);
        break;
      case 17: // Scientific Mode
        setSci(!sci);
        break;
      case 20: // +/-
        if (isContent) {
          console.log(curVal.charAt(0));
          if (curVal.charAt(0) === "-") {
            setCurVal(curVal.substring(1));
          } else {
            setCurVal("-" + curVal);
          }
        } else {
          console.log(preVal.charAt(0));
          if (preVal.charAt(0) === "-") {
            setPreVal(preVal.substring(1));
          } else {
            setPreVal("-" + preVal);
          }
        }
        break;
      case 21: // Sq
        if (isContent) {
          setCurVal(Math.pow(+curVal, 2));
        } else {
          setPreVal(Math.pow(+preVal, 2));
        }
        break;
      case 22: // Sqrt
        if (isContent) {
          setCurVal(Math.sqrt(+curVal));
        } else {
          setPreVal(Math.sqrt(+preVal));
        }
        break;
      default:
        break;
    }
    console.log(val);
  };

  return (
    <form>
      <div className={theme ? classes.dark : classes.light}>
        {isContent && <input value={curVal}></input>}
        {/* <input value={expVal}></input> */}
        {!isContent && <input value={preVal}></input>}
        <div>
          <button type="button" onClick={onClickHandler.bind(this, 1)}>
            1
          </button>
          <button type="button" onClick={onClickHandler.bind(this, 2)}>
            2
          </button>
          <button type="button" onClick={onClickHandler.bind(this, 3)}>
            3
          </button>
          <button type="button" onClick={onClickHandler.bind(this, 11)}>
            Add (+)
          </button>
        </div>
        <div>
          <button type="button" onClick={onClickHandler.bind(this, 4)}>
            4
          </button>
          <button type="button" onClick={onClickHandler.bind(this, 5)}>
            5
          </button>
          <button type="button" onClick={onClickHandler.bind(this, 6)}>
            6
          </button>
          <button type="button" onClick={onClickHandler.bind(this, 12)}>
            Subtract (-)
          </button>
        </div>
        <div>
          <button type="button" onClick={onClickHandler.bind(this, 7)}>
            7
          </button>
          <button type="button" onClick={onClickHandler.bind(this, 8)}>
            8
          </button>
          <button type="button" onClick={onClickHandler.bind(this, 9)}>
            9
          </button>
          <button type="button" onClick={onClickHandler.bind(this, 13)}>
            Multiply (*)
          </button>
        </div>
        <div>
          <button type="button" onClick={onClickHandler.bind(this, 14)}>
            Clear
          </button>
          <button type="button" onClick={onClickHandler.bind(this, 0)}>
            0
          </button>
          <button type="button" onClick={onClickHandler.bind(this, 15)}>
            =
          </button>
          <button type="button" onClick={onClickHandler.bind(this, 16)}>
            Divide (/)
          </button>
        </div>
        <div>
          <button type="button" onClick={onClickHandler.bind(this, 17)}>
            Scientific Mode
          </button>
        </div>
        {sci && (
          <div>
            <button type="button" onClick={onClickHandler.bind(this, 20)}>
              +/-
            </button>
            <button type="button" onClick={onClickHandler.bind(this, 21)}>
              Sq
            </button>
            <button type="button" onClick={onClickHandler.bind(this, 22)}>
              Sqrt
            </button>
          </div>
        )}
        <div>
          <button type="button" onClick={onClickHandler.bind(this, 18)}>
            Light Theme
          </button>
          <button type="button" onClick={onClickHandler.bind(this, 19)}>
            Dark Theme
          </button>
        </div>
      </div>
      {/* Please uncomment Below Block to understand the Working */}
      {/* <div> 
        <input value={curVal}></input>
        <input value={expVal}></input>
        <input value={preVal}></input>
      </div> */}
    </form>
  );
};

export default Calculator;
