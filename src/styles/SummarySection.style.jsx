import styled from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const SummarySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-s-4);
  padding: var(--space-s-4) var(--space-base-3) var(--space-base-3);

  @media (min-width: ${DesktopWidth}) {
      padding: var(--space-m-1) var(--space-m-3) var(--space-l-1);
      gap: var(--space-base-2);
      flex-basis: 50%;

      button {
          margin-top: 0.8125rem; /* 13px, the button has a gap of 41px and i did not want to wrap them in a div */
      }
  }
`;

export const Heading = styled.h2`
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-bold);
  color: var(--neutral-color5-solid);

  @media (min-width: ${DesktopWidth}) {
    font-size: var(--font-size-base);
  }
`;
