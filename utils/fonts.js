import { Oranienbaum } from "next/font/google";
import localFont from "next/font/local";

export const nodestoCaps = localFont({
  src: "../fonts/NodestoCapsCondensedBold.otf",
  display: "swap",
});

export const oraniembaum = Oranienbaum({
  weight: "400",
  preload: false,
});
