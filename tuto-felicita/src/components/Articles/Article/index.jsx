const Article = (props) => {
  // props = {
  //   title: 'Article 1',
  //   content:'Ici la description de l\'article 1',
  //   date:'2021/03/16',
  // }

  const {
    title,
    content,
    date,
    propFunction,
  } = props;

  return (
    <div className="Article">
      <h2 onClick={() => { propFunction('YIPI article title') }}>{title}</h2>
      <p>{content}</p>
      <p><small>{date}</small></p>
    </div>
  );
};

export default Article;
