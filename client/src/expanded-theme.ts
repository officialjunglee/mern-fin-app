import { Palette, PaletteColor } from "@mui/material";

declare module "@mui/material" {
    interface PaletteColor {
        [key: number]: string;
    }

    interface Palette {
        tertiary: PaletteColor;
    }
}