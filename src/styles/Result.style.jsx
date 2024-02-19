import styled, { css } from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";
import { CategoryStyle } from "../constants/CategoryStyle";

export const ResultLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs-4);
  list-style-type: none;
`;

export const IndividualItem = styled.li`
  padding: var(--space-s-1) var(--space-xs-4) var(--space-s-2);
  display: grid;
  grid-template-columns: 1.25rem auto 1.3125rem 2.6875rem; /* 20px auto 21px 43px */
  column-gap: var(--space-xs-1);
  ${(props) =>
    css`
      ${CategoryStyle[props.$category]}
    `}
  border-radius: var(--border-radius-softer);

  @media (min-width: ${DesktopWidth}) {
    font-size: var(--font-size-s);
    padding: var(--space-s-1) var(--space-xs-4) var(--space-xs-4);
  }
`;

export const Category = styled.span`
  margin-left: 0.25rem; /* 4px */
`;

export const IndividualScore = styled.span`
  color: var(--neutral-color5-solid);
  font-weight: var(--font-weight-bold);
`;

export const TotalScore = styled.span`
  color: var(--neutral-color5-opacity);
  font-weight: var(--font-weight-bold);
`;
