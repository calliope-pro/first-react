import { Content, Title, PublishButton, TextInput, Counter, FetchButton } from './components/index.jsx';
import { useEffect, useState } from 'react';

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);

  function publishArticle() {
    setIsPublished(!isPublished);
  }

  if (isPublished) {
    return (
      <div>
        <Title title={props.title} />
        <PublishButton isPublished={isPublished} onClick={publishArticle}>公開</PublishButton>
        <Content content={props.content} />
      </div>
    );
  } else {
    return (
      <div>
        <Title title={props.title} />
        <PublishButton isPublished={isPublished} onClick={publishArticle}>公開</PublishButton>
      </div>
    );
  };
};

function App() {
  const userId = 'google';
  return (
    <>
      <TextInput></TextInput>
      <Article title={'First'} content={'Hello React!'}></Article>
      <Counter></Counter>
      <FetchButton userName={userId}></FetchButton>
      {/* <Artic title={'First'} content={'Hello React!'}/> でもよい */}
    </>
  );
};

export default App;
