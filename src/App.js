import { Content, Title, PublishButton, TextInput, Counter } from './components/index.jsx';
import { useState } from 'react';

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  console.log(isPublished);
  console.log(useState(false));
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
  return (
    <>
      <TextInput></TextInput>
      <Article title={'First'} content={'Hello React!'}></Article>
      <Counter></Counter>
      {/* <Artic title={'First'} content={'Hello React!'}/> でもよい */}
    </>
  );
};

export default App;
