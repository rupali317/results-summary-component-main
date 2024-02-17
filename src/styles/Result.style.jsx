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
  display: flex;
  justify-content: space-between;
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
