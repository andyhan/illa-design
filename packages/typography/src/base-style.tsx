import * as React from "react"
import { TypographyColorScheme } from "./interface"
import { css, SerializedStyles } from "@storybook/theming"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyFontColor(colorScheme: TypographyColorScheme): SerializedStyles {
  return css`
    color: ${globalColor(`--${illaPrefix}-${colorScheme}-02`)};
  `
}

export function applyFontContentStyle(bold: boolean, mark: boolean | TypographyColorScheme, underline: boolean, deleted: boolean, disabled: boolean, code: boolean): SerializedStyles {

  let finalCss = css``

  if (code) {
    finalCss = css`
      ${finalCss};
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
    `
  }

  if (bold) {
    finalCss = css`
      ${finalCss};
      font-weight: bold;
    `
  }

  if (mark === true) {
    finalCss = css`
      ${finalCss};
      background-color: ${globalColor(`--${illaPrefix}-yellow-06`)};
    `
  } else {
    finalCss = css`
      ${finalCss};
      background-color: ${globalColor(`--${illaPrefix}-${mark}-06`)};
    `
  }

  finalCss = css`
    ${finalCss};
    text-decoration: ${underline && "underline"} ${deleted && "line-through"};
  `

  if (disabled) {
    finalCss = css`
      ${finalCss};
      cursor: not-allowed;
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
      user-select: none;
    `
  }

  return finalCss
}

export function applyExpandLabelCss(): SerializedStyles {
  return css`
    cursor: pointer;
    margin: 0 4px;
    text-decoration: none;
    color: ${globalColor(`--${illaPrefix}-techBlue-03`)};
  `
}

export function applyCopyableContainerSize(): SerializedStyles {
  return css`
    cursor: pointer;
    display: inline-block;
    margin-left: 4px;
    text-align: center;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  `
}