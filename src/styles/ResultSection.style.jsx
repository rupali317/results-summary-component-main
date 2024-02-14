import { styled } from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const ResultSection = styled.section`
  background: linear-gradient(var(--gradient-pair1-1), var(--gradient-pair1-2));
  box-shadow: var(--shadow-1);
  color: var(--neutral-color4);
  display: flex;
  flex-direction: column;
  gap: var(--space-s-4);
  border-radius: var(--border-radius-none) var(--border-radius-none)
    var(--border-radius-soft) var(--border-radius-soft);
  padding: var(--space-s-4) var(--space-l-4) var(--space-m-3) var(--space-xl-1);
  text-align: center; /* RRC: Check if this is needed */
  align-items: center;

  @media (min-width: ${DesktopWidth}) {
    border-radius: var(--border-radius-soft);
    padding: var(--space-m-1) var(--space-l-2) var(--space-l-1);
    flex-basis: 50%;
    gap: var(--space-base-2);
  }
`;

export const RibbonText = styled.p`
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-bold);

  @media (min-width: ${DesktopWidth}) {
    font-size: var(--font-size-base);
  }
`;

export const CircleContainer = styled.div`
  background: linear-gradient(var(--gradient-pair2-1), var(--gradient-pair2-2));
  border-radius: var(--border-radius-round);
  width: 8.75rem; /* 140px */
  height: 8.75rem; /* 140px */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > em {
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-extra-bold);
    line-height: var(--line-height-xl);
    color: var(--neutral-color1);
    font-style: normal;
  }

  > div {
    font-weight: var(--font-weight-bold);
    opacity: 51.68%;
  }

  @media (min-width: ${DesktopWidth}) {
    gap: 0.25rem; /* 4px */
    height: 12.5rem; /* 200px */
    width: 12.5rem; /* 200px */
    margin-top: 0.4375rem; /* 7px */

    > em {
      font-size: var(--font-size-xl);
    }

    > div {
      font-size: var(--font-size-s);
    }
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs-1);

  > h1 {
    line-height: var(--line-height-normal);
    color: var(--neutral-color1);
  }

  @media (min-width: ${DesktopWidth}) {
    gap: var(--space-xs-3);

    > h1 {
      font-size: var(--font-size-m);
    }

    > p {
      font-size: var(--font-size-s);
    }
  }
`;
