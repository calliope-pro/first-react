import { useEffect } from "react";

const PublishButton = (props) => {
  useEffect(() => {
    if (props.isPublished) {
      console.log("hello world");
    }
    return () => {
      // レンダリング直後にuseEffect内で初めに呼ばれる
      let h4 = document.createElement("small");
      h4.innerText = "WOWOWOWOWOWWOOW";
      document.body.appendChild(h4);
      console.log("hello h4");
    };
  }, [props.isPublished]);

  return (
    <button onClick={props.onClick}>
      公開{props.isPublished ? "しています" : "していません"}
    </button>
  );
};

export default PublishButton;
