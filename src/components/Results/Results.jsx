import data from "./data.json";
import * as ResultStyles from "../../styles/Result.style";

export const Results = () => {
  const resultList = data.map((item) => {
    return (
      <ResultStyles.IndividualItem
        key={item.category}
        $category={item.category}
      >
        <img
          src={item.icon}
          alt=""
          role="presentation"
          width="20"
          height="20"
        ></img>
        <ResultStyles.Category>{item.category}</ResultStyles.Category>
        <ResultStyles.IndividualScore>
          {item.score}
        </ResultStyles.IndividualScore>
        <ResultStyles.TotalScore> / 100</ResultStyles.TotalScore>
      </ResultStyles.IndividualItem>
    );
  });
  return <ResultStyles.ResultLists>{resultList}</ResultStyles.ResultLists>;
};
