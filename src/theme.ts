import { createCss } from "@stitches/react";

export const { styled, css, global, keyframes } = createCss({
  utils: {
    mb: (c) => (v) => ({
      marginBottom: v,
    }),
    mr: (c) => (v) => ({
      marginRight: v,
    }),
    mt: (c) => (v) => ({
      marginTop: v,
    }),
    ml: (c) => (v) => ({
      marginLeft: v,
    }),
  },
});
