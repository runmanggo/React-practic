import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // 기본 값 "card " (따옴표 안에 공백 넣어줘야함) +
  return <div className={classes}>{props.children}</div>;
};

//props.children Card 컴포넌트 시작 태그와 종료 태그 사이에 있는 콘텐츠를 가져옴

export default Card;
