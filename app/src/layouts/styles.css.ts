// styles.css.ts
import { createTheme, createThemeContract, style } from "@vanilla-extract/css";

// テーマコントラクトを作成
const vars = createThemeContract({
	background: "background",
	textColor: "textColor",
});

// ダークテーマ用スタイル
export const darkTheme = createTheme(vars, {
	background: "white",
	textColor: "black",
});

// ライトテーマ用スタイル
export const lightTheme = createTheme(vars, {
	background: "black",
	textColor: "white",
});

// エクスポートされたスタイル
export const headerStyle = style({
	padding: "10px",
	fontSize: "20px",
	fontWeight: "bold",
	fontFamily: "cursive",
	backgroundColor: vars.background,
	color: vars.textColor,
});

export const contentStyle = style({
	margin: "20px",
});
