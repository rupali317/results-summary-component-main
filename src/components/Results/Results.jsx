import data from "./data.json";

export const Results = () => {
  const resultList = data.map((item) => {
    return (
      <li key={item.category}>
        <img src={item.icon} alt="" role="presentation"></img>
        <span>{item.category}</span>
        <span>
          {item.score} <span>/ 100</span>
        </span>
      </li>
    );
  });
  return <ul>{resultList}</ul>;
};
