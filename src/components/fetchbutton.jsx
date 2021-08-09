import { useState } from "react";

const FetchButton = (props) => {
  const [displayName, setDisplayName] = useState(null);
  console.log(props);

  const fetchGitHubAPI = () => {
    // コンテキストマネージャーだと思えば良い
    fetch(`https://api.github.com/users/${props.userName}`)
      .then((res) => res.json()) // resをfetchの返り値としている
      .then((data) => {
        // res.json()を返り値としている
        setDisplayName(data.name);
        console.log(data);
      });
  };

  return (
    <>
      <button onClick={fetchGitHubAPI}>{props.userName}のGitHub-APIによる取得</button>
      <p>Display Name: {displayName}</p>
    </>
  );
};

export default FetchButton;
