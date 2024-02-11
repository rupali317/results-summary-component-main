import * as SummaryStyles from "../../styles/SummarySection.style";
import { Results } from "../Results";

export const SummarySection = () => {
  return (
    <SummaryStyles.SummarySection>
      <SummaryStyles.Heading>Summary</SummaryStyles.Heading>
      <Results />
      <button>Continue</button>
    </SummaryStyles.SummarySection>
  );
};
