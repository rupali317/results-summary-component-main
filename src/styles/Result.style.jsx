import styled from "styled-components";
//import { string } from "prop-types";
//import { DesktopWidth } from "../constants/Breakpoints";

export const ResultLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs-4);
  list-style-type: none;
`;

// export const IndividualItem = styled.li({ textcolor: string })`
//   padding: var(--space-s-1) var(--space-xs-4) var(--space-s-2);
//   display: flex;
//   justify-content: space-between;
//   color: ${({ textcolor }) => textcolor};
//   background-color: var(--result-color1-light);
//   border-radius: var(--border-radius-softer);
// `;

export const IndividualItem = styled.li`
  padding: var(--space-s-1) var(--space-xs-4) var(--space-s-2);
  display: flex;
  justify-content: space-between;
  color: var(--result-color1-solid);
  background-color: var(--result-color1-light);
  border-radius: var(--border-radius-softer);
`;

export const Category = styled.div`
  display: flex;
  gap: var(--space-xs-2);
`;

export const Score = styled.div`
  display: flex;
  gap: var(--space-xs-1);
  color: var(--neutral-color5-solid);
  font-weight: var(--font-weight-bold);
`;

export const TotalScore = styled.span`
  color: var(--neutral-color5-opacity);
`;
