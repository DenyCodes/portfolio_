import styled, { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`
export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`
export default GlobalCss
