// 関数コンポーネントが主流(アロー関数でもfunction宣言でもok)
const Title = (props) => {
  // console.log(props);
  // propsはObjectであり、ここではtitleなどのインスタンス変数を持つ
  return <h2>{props.title}</h2>;
};

export default Title;
