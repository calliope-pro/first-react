import { useState } from "react";

const TextInput = (props) => {
  const [name, setName] = useState("");

  function handleName(event) {
    setName(event.target.value);
    // 入力する度にconsoleに新たに反映される
  }

  if (0 < name.length && name.length < 8) {
    return (
      <>
        <input onChange={handleName} type="text" value={name} />
        <p>8文字以上にしてください！</p>
      </>
    )
  } else {
    return <input onChange={handleName} type="text" value={name} />;
  }
};

export default TextInput;
