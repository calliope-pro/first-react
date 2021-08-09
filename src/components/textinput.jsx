import { useEffect, useState } from "react";

const TextInput = (props) => {
  console.log(props);
  const [name, setName] = useState("");

  function handleName(event) {
    setName(event.target.value);
    // 入力する度にconsoleに新たに反映される
  }
  
  useEffect(() => {

  }, [name.length])
  if (name.length < 8) {
    return (
      <>
        <input onChange={handleName} type="text" value={name} />
        <p>8文字以上にしてください！</p>
      </>
    )
  } else {
    return (
      <>
        <input onChange={handleName} type="text" value={name} />
        <button type="submit" onClick={props.onSubmit} value={name}>作成</button>
      </>
    )
  }
};

export default TextInput;
