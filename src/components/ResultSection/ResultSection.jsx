import * as ResultSectionStyles from "../../styles/ResultSection.style";

export const ResultSection = () => {
  return (
    <ResultSectionStyles.ResultSection>
      <ResultSectionStyles.RibbonText>
        Your Result
      </ResultSectionStyles.RibbonText>
      <ResultSectionStyles.CircleContainer>
        <em>76</em>
        <div>of 100</div>
      </ResultSectionStyles.CircleContainer>
      <ResultSectionStyles.Comment>
        <h1>Great</h1>
        <p>
          Your performance exceeds 65% of the people conducting the test here!
        </p>
      </ResultSectionStyles.Comment>
    </ResultSectionStyles.ResultSection>
  );
};
