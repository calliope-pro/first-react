const PublishButton = (props) => {
  return (
    <button onClick={props.onClick}>
      公開{props.isPublished ? 'しています':'していません'}
    </button>
  );
};

export default PublishButton;