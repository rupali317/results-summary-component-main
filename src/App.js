import { ResultSection } from "./components/ResultSection";
import { SummarySection } from "./components/SummarySection";
import * as GlobalStyles from "./styles/Global.style";

const App = () => {
  return (
    <>
      <GlobalStyles.BaseStyles />
      <GlobalStyles.ResetStyles />
      <GlobalStyles.DefaultStyles />
      <ResultSection />
      <SummarySection />
    </>
  );
};

export default App;
