import { styled } from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
export const ListItem = styled.li`
  list-style: none;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`
export const Infos = styled.div`
  margin-bottom: 20px;
`
export const Visitar = styled.div`
  text-transform: none;
  color: #fff;
`
export const Image = styled.img`
  width: 20px;
  margin-right: 10px;
`
export const Git = styled.div`
  margin: 10px;
  padding-top: 2px;
  border: 1px solid rgba(251,251,251);
  padding-top: 5px;
  align-items: center;
  display: flex;
  background-color: #000;
  justify-content: space-between;
  a {
    padding-top: 2px;
    margin-left: 47px;
    text-decoration: none;
    color: #fff;
    text-align: center;
}

  }
`
export const Site = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding-top: 5px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  a {
    margin-left: 80px;
    text-decoration: none;
    color: #000;
    text-align: center;
  }
`
export const Bottom = styled.button`
  background-color: #000;
  color: #fff;
  width: 100px;
  border-radius: 35px;
  margin: 5px;
  padding: 10px;
`
export const GitFoot = styled.div`
  background-color: #000;
  border-radius: 10px;
  a {
    text-transform: none;
    color: #fff;
    text-decoration: none;
  }
`
