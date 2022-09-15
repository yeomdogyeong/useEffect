import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  
  const onClick = () => {
    setValue((one) => one + 1);
  }
 console.log("i run all the time");
 
 useEffect(()=> {
  console.log("i run only once")
 }, []);

 useEffect(()=> {
  console.log("i run when value changes.")
 }, [value])
 useEffect (() => {
  if (keyword !== "" && keyword.length > 5) {
    console.log("search for", keyword)
 }} ,[keyword]);
 useEffect(()=> {
  console.log("i run when keyword or value changed")
 },[keyword, value]);
 

 const onChange = (event) => {
  setKeyword(event.target.value);
 }
 
 
 return (
   
  <div>
   <h1>{value}</h1>
   <button onClick={onClick}>click me</button>
   <input
    placeholder="search here"
    value={keyword}
    onChange={onChange}
    type="text"
    />
  </div>
  );
}

export default App;
