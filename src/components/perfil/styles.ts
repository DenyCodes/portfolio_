import styled from 'styled-components'

export const Header = styled.header`
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
    margin-bottom: 80px;
    p {
    margin-top:10px;
    color: #fff;}
}
`
export const Avatar = styled.img`
  border: 2px var(#000);
  width: 160px;
  height: 160px;
  border-radius: 50%;
`
export const Name = styled.h1`
  font-size: 18px;
  padding-top: 20px;
  color: #fff;
`
export const IconImg = styled.img`
  width: 50px;
`
export const DivIcon = styled.div`
  margin-top: 10px;
`
