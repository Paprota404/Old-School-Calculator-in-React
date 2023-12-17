import React from "react";


export default function Calculator(){
    let [input,setInput] = React.useState([]);
    let [ready,setReady] = React.useState("");
   
    let signs = ["+","-","*"];

    function handleButtonClick(value){
        if(input.length===0&&(signs.some((sign) => sign === value)||value===0)){
            return
        }
        if(ready=="no"&&signs.some((sign) => sign === value)){
            setInput([input]);
            setReady("yes");
        }
        else if(ready=="no"){
            setInput([]);
            if(value===0){
                return;
            }
            setReady("yes");
        }
        else if((input[input.length-1]==="+"||input[input.length-1]==="-"||input[input.length-1]==="*")&&signs.some((sign) => sign === value)){
            return;
        }
        console.log(input);
        setInput(arr => [...arr,value]);
        
    }

    function submit(){
        if(ready=="no"){
            return
        }
        let str = input.join('');
        let result = eval(str);
        setInput(result);
        setReady("no");
        console.log(ready)
    }

    const span = {
        gridRowEnd:"span 2",
    };

    const hor = {
        gridColumnStart:1,
        gridColumnEnd:3
    }

    return (
    <>
    <div id="screen">
        <Screen input={input}/>
    </div>
        <div id="button-container">
        <Button value={1} onClick={() => handleButtonClick(1)}/>
        <Button value={2} onClick={() => handleButtonClick(2)}/>
        <Button value={3} onClick={() => handleButtonClick(3)}/>
        <Button value={"+"} onClick={() => handleButtonClick("+")}/>
        <Button value={4} onClick={() => handleButtonClick(4)}/>
        <Button value={5} onClick={() => handleButtonClick(5)}/>
        <Button value={6} onClick={() => handleButtonClick(6)}/>
        <Button value={"-"} onClick={() => handleButtonClick("-")}/>
        <Button value={7} onClick={() => handleButtonClick(7)}/>
        <Button value={8} onClick={() => handleButtonClick(8)}/>
        <Button value={9} onClick={() => handleButtonClick(9)}/>
        <Button value={"="} style={span} onClick={() => submit()}/>
        <Button value={"*"} style={hor} onClick={() => handleButtonClick("*")}/>
        <Button value={0} onClick={() => handleButtonClick(0)}/>
        </div>
    </>
    )
  }

  function Screen({input}){
    return <h1>{input}</h1>
  }

  type ButtonProps = {
    style?:any
    value: any
    onClick: () => void;
}

  function Button({value,style,onClick}:ButtonProps){
    return <button onClick={onClick} style={style}>{value}</button>
  }