import { createGlobalStyle } from "styled-components";
//import { DesktopWidth } from "../constants/Breakpoints";

export const BaseStyles = createGlobalStyle`
:root {
    /* Colors */
    --result-color1-solid: hsl(0, 100%, 67%);
    --result-color1-light: hsl(0, 100%, 98%);
    --result-color2-solid: hsl(39, 100%, 56%);
    --result-color2-light: hsl(38, 100%, 98%);
    --result-color3-solid: hsl(166, 100%, 37%);
    --result-color3-light: hsl(162, 63%, 97%);
    --result-color4-solid: hsl(234, 85%, 45%);
    --result-color4-light: hsl(234, 71%, 97%);
    --gradient-pair1-1: hsl(252, 100%, 63%);
    --gradient-pair1-2: hsl(241, 81%, 54%);
    --gradient-pair2-1: hsla(256, 72%, 46%, 1);
    --gradient-pair2-2: hsla(241, 72%, 46%, 0);
    --neutral-color1: hsl(0, 0%, 100%);
    --neutral-color2: hsl(220, 100%, 96%);
    --neutral-color3: hsl(221, 100%, 96%);
    --neutral-color4: hsl(241, 100%, 89%);
    --neutral-color5-solid: hsl(224, 30%, 27%);
    --neutral-color5-opacity: hsl(224, 30%, 27%, 0.5);
    --neutral-color6: hsl(0, 0%, 0%);
    --shadow-color: hsla(224, 82%, 58%, 15%);
  
    /* Typography */
    --font-size-xs: 1rem; /* 16px */
    --font-size-s: 1.125rem; /* 18px */
    --font-size-base: 1.5rem; /* 24px */
    --font-size-m: 2rem; /* 32px */
    --font-size-l: 3.5rem; /* 56px */
    --font-size-xl: 4.5rem; /* 72px; */
  
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;
  
    --line-height-auto: auto;
    --line-height-xl: 4.5rem; /* 72px; */
  
    --space-none: 0rem;
  
    --space-xs-1: 0.5rem; /*8px */
    --space-xs-2: 0.75rem; /*12px */
    --space-xs-3: 0.875rem; /*14px */
    --space-xs-4: 1rem; /*16px */
  
    --space-s-1: 1.0625rem; /*17px */
    --space-s-2: 1.125rem; /*18px */
    --space-s-3: 1.375rem; /*22px */
    --space-s-4: 1.5rem; /*24px */
  
    --space-base-1: 1.5625rem; /*25px */
    --space-base-2: 1.75rem; /* 28px */
    --space-base-3: 1.875rem; /* 30px */
    --space-base-4: 2.1875rem; /* 35px */
  
    --space-m-1: 2.375rem; /*38px */
    --space-m-2: 2.4375rem; /*39px */
    --space-m-3: 2.5rem; /* 40px */
    --space-m-4: 2.5625rem; /*41px */
  
    --space-l-1: 2.875rem; /* 46px */
    --space-l-2: 3.375rem; /* 54px */
    --space-l-3: 3.4375rem; /* 55px */
    --space-l-4: 3.5625rem; /* 57px */
  
    --space-xl-1: 3.625rem; /*58px */
    --space-xl-2: 3.6875rem; /* 59px */
    --space-xl-3: 3.75rem; /* 60px */
  
    /* Borders */
    --border-radius-none: 0rem;
    --border-radius-softer: 0.75rem; /* 12px */
    --border-radius-soft: 2rem; /* 32px */
    --border-radius-round: 8rem; /* 128px */
  
    /* Shadows */
    --shadow: 0rem 1.875rem 3.75rem 0rem var(--shadow-color); /* 0px 30px 60px 0px */

    /* Outline */
    --outline-width-1: 0.25rem /* 4px */
  }
  
  @font-face {
    font-family: "HankenGrotesk";
    src: url("/assets/fonts/static/HankenGrotesk-Medium.ttf") format("truetype");
    font-weight: 500;
    font-display: swap;
  }
  
  @font-face {
    font-family: "HankenGrotesk";
    src: url("/assets/fonts/static/HankenGrotesk-Bold.ttf") format("truetype");
    font-weight: 700;
    font-display: swap;
  }
  
  @font-face {
    font-family: "HankenGrotesk";
    src: url("/assets/fonts/static/HankenGrotesk-ExtraBold.ttf") format("truetype");
    font-weight: 800;
    font-display: swap;
  }
`;

export const ResetStyles = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default spaces */
* {
  margin: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-block-end: 0;
  padding-block-start: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
}

/* Avoid text overflows */
body,
h1,
h2,
p {
  overflow-wrap: break-word;
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* Set shorter line heights on headings and interactive elements, Balance text wrapping on headings*/
h1,
h2 {
  line-height: 1.1;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture,
svg {
  max-width: 100%;
  display: block;
}

button {
    border-width: 0rem;
    font: inherit;
}
`;

export const DefaultStyles = createGlobalStyle`
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-s-4);
    font-family: "HankenGrotesk", sans-serif;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-auto);
    background-color: var(--neutral-color2);
}

main {
    background-color: var(--neutral-color1);
    box-shadow: var(--shadow);
}

button {
    padding: var(--space-s-1) var(--space-xs-4) var(--space-xs-4);
    color: var(--neutral-color1);
    background-color: var(--neutral-color5-solid);
    border-radius: var(--border-radius-round);
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-bold);

    &:hover {
        background: linear-gradient(var(--gradient-pair1-1), var(--gradient-pair1-2));
        box-shadow: var(--shadow);
        cursor: pointer;
    }

    &:focus, &:focus-visible {
        outline: var(--result-color2-solid) solid var(--outline-width-1);
    }
}
`;
