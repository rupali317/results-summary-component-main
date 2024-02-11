import data from "./data.json";
import * as ResultStyles from "../../styles/Result.style";

export const Results = () => {
  const resultList = data.map((item) => {
    return (
      <ResultStyles.IndividualItem
        key={item.category}
        textcolor={item.textColor}
      >
        <ResultStyles.Category>
          {/* RRC: Check if this can be done via grid method? instead of flex and introducing another div*/}
          <img src={item.icon} alt="" role="presentation"></img>
          <span>{item.category}</span>
        </ResultStyles.Category>
        <ResultStyles.Score>
          <span>{item.score}</span>
          <ResultStyles.TotalScore> / 100</ResultStyles.TotalScore>
        </ResultStyles.Score>
      </ResultStyles.IndividualItem>
    );
  });
  return <ResultStyles.ResultLists>{resultList}</ResultStyles.ResultLists>;
};
