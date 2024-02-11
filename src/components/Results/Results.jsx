import data from "./data.json";
import * as ResultStyles from "../../styles/Result.style";

export const Results = () => {
  const resultList = data.map((item) => {
    return (
      <ResultStyles.IndividualItem
        key={item.category}
        category={item.category}
        textColor={item.textColor}
      >
        <ResultStyles.Category>
          <img src={item.icon} alt="" role="presentation"></img>
          <span>{item.category}</span>
        </ResultStyles.Category>
        <ResultStyles.Score>
          {item.score} <ResultStyles.TotalScore> / 100</ResultStyles.TotalScore>
        </ResultStyles.Score>
      </ResultStyles.IndividualItem>
    );
  });
  return <ResultStyles.ResultLists>{resultList}</ResultStyles.ResultLists>;
};
