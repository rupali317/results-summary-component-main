import { createGlobalStyle } from "styled-components";
//import { DesktopWidth } from "../constants/Breakpoints";


export const BaseStyles = createGlobalStyle`
:root {
  /* Colors */
  --result-color1-solid: hsl(0, 100%, 67%);
  --result-color1-opacity: hsl(0, 100%, 67%, 0.95);
  --result-color2-solid: hsl(39, 100%, 56%);
  --result-color2-opacity: hsl(39, 100%, 56%, 0.95);
  --result-color3-solid: hsl(166, 100%, 37%);
  --result-color3-opacity: hsl(166, 100%, 37%, 0.95);
  --result-color4-solid: hsl(234, 85%, 45%);
  --result-color4-opacity: hsl(234, 85%, 45%, 0.95);
  --gradient-pair1-1: hsl(252, 100%, 67%);
  --gradient-pair1-2: hsl(241, 81%, 54%);
  --gradient-pair2-1: hsla(256, 72%, 46%, 1);
  --gradient-pair2-2: hsla(241, 72%, 46%, 0);
  --neutral-color-1: hsl(0, 0%, 100%);
  --neutral-color-2: hsl(221, 100%, 96%);
  --neutral-color-3: hsl(241, 100%, 89%);
  --neutral-color-4: hsl(224, 30%, 27%);
  --shadow-color: hsla(224, 82%, 58%, 15%);

  /* Typography */
  --font-size-xs: 1rem; /* 16px */
  --font-size-s: 1.125rem; /* 18px */
  --font-size-base: 1.5rem; /* 24px */
  --font-size-m: 2rem; /* 32px */
  --font-size-l: 3.5rem; /* 56px */
  --font-size-xl: 4.5rem; /* 72px; */

  --font-weight-bold: 500;
  --font-weight-medium: 700;
  --font-weight-regular: 800;

  --line-height-auto: auto;
  --line-height-xl: 4.5rem; /* 72px; */

  /* 8px, 12px, 14px, 16px, 17px, 18px, 22px, 24px, 25px, 28px, 30px, 35px, 38px, 39px, 40px, 41px, 46px, 54px, 55px, 57px, 58px, 59px, 60px*/
  --space-none: 0rem;

  --space-xs-1: 0.25rem; /*8px */
  --space-xs-2: 0.25rem; /*12px */
  --space-xs-3: 0.25rem; /*14px */
  --space-xs-4: 0.25rem; /*16px */

  --space-s-1: 0.25rem; /*17px */
  --space-s-2: 0.25rem; /*18px */
  --space-s-3: 0.25rem; /*22px */
  --space-s-4: 0.25rem; /*24px */

  --space-base-1: 1.25rem; /*25px */
  --space-base-2: 1.4375rem; /* 28px */
  --space-base-3: 1.5rem; /* 30px */
  --space-base-4: 1.5rem; /* 35px */

  --space-m-1: 1.875rem; /*38px */
  --space-m-2: 1.9375rem; /*39px */
  --space-m-3: 2rem; /* 40px */
  --space-m-4: 2.028125rem; /*41px */

  --space-l-1: 2.5rem; /* 46px */
  --space-l-2: 2.75rem; /* 54px */
  --space-l-3: 3rem; /* 55px */
  --space-l-4: 3.0625rem; /* 57px */

  --space-xl-1: 4.4375rem; /*58px */
  --space-xl-2: 5.125rem; /* 59px */
  --space-xl-3: 6.1875rem; /* 60px */

  /* Borders */
  --border-radius-none: 0rem;
  --border-radius-softer: 0.75rem; /* 12px */
  --border-radius-soft: 2rem; /* 32px */
  --border-radius-round: 8rem; /* 128px */

  /* Shadows */
  --shadow: 0rem 1.875rem 3.75rem 0rem var(--shadow-color);
}

@font-face {
  font-family: "HankenGrotesk";
  src: url("/fonts/static/HankenGrotesk-Medium.ttf") format("truetype");
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "HankenGrotesk";
  src: url("/fonts/static/HankenGrotesk-Bold.ttf") format("truetype");
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: "HankenGrotesk";
  src: url("/fonts/static/HankenGrotesk-ExtraBold.ttf") format("truetype");
  font-weight: 800;
  font-display: swap;
}
`;

export const ResetStyles = createGlobalStyle`
/* Box sizing rules */ *,
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
`;

export const DefaultStyles = createGlobalStyle`
`;
