import Typography from "typography"
import parnassusTheme from "typography-theme-parnassus"

parnassusTheme.headerColor = "#625441"
parnassusTheme.bodyColor = "#4a4748"

parnassusTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    color: "#ac834e"
  }
})


const typography = new Typography(parnassusTheme)

export const { scale, rhythm, options } = typography
export default typography
