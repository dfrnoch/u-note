import { createStitches } from "@stitches/react";

export const { styled, css, keyframes, globalCss } = createStitches({
  utils: {
    mb: (c: any) =>
      (v: any) => ({
        marginBottom: v,
      }),
    mr: (c: any) =>
      (v: any) => ({
        marginRight: v,
      }),
    mt: (c: any) =>
      (v: any) => ({
        marginTop: v,
      }),
    ml: (c: any) =>
      (v: any) => ({
        marginLeft: v,
      }),
  },
});
