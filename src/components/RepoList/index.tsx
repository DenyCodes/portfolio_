import { useEffect, useState } from 'react'
import { Infos, List, ListItem, Visitar, Image, Git, Site } from './styles'
import github from '../../images/Vector.png'

type Props = {
  nomeUsuario: string
}

type Repo = {
  id: number
  name: string
  language: string
  html_url: string
  homepage?: string
}

// Defina os nomes dos 5 repositórios específicos que deseja exibir
const specificRepos = [
  'efood_',
  'calculadora',
  'twitter_clone',
  'playtecno',
  'eplay',
  'todoreact',
  'minhas-tarefas',
  'sorteador-grunt',
  'ebac_sports',
  'github_react',
  'calculadoravue',
  'ebac_games_redux',
  'sorteador_grunt'
]

const RepoList = ({ nomeUsuario }: Props) => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [estaCarregando, setEstaCarregando] = useState(true)
  const [followers, setFollowers] = useState(0)
  const [reposCount, setReposCount] = useState(0)
  const [specificRepoList, setSpecificRepoList] = useState<Repo[]>([])

  useEffect(() => {
    const fetchData = async () => {
      let page = 1
      const perPage = 100
      let allRepos: Repo[] = []
      let fetching = true

      while (fetching) {
        const reposRes = await fetch(
          `https://api.github.com/users/${nomeUsuario}/repos?per_page=${perPage}&page=${page}`
        )
        const reposJson: Repo[] = await reposRes.json()

        if (reposJson.length > 0) {
          allRepos = [...allRepos, ...reposJson]
          page++
        } else {
          fetching = false
        }
      }

      const userRes = await fetch(`https://api.github.com/users/${nomeUsuario}`)
      const userJson = await userRes.json()

      setTimeout(() => {
        setEstaCarregando(false)
        setRepos(allRepos)
        setFollowers(userJson.followers)
        setReposCount(userJson.public_repos)

        // Filtrar os repositórios específicos
        const filteredRepos = allRepos.filter((repo: Repo) =>
          specificRepos.includes(repo.name)
        )
        setSpecificRepoList(filteredRepos)
      }, 1000)
    }

    fetchData()
  }, [nomeUsuario])

  return (
    <div className="Container">
      {estaCarregando ? (
        <h1>carregando...</h1>
      ) : (
        <>
          <Infos>
            <b>Seguidores:</b> {followers} | <b>Repositórios:</b> {reposCount}
          </Infos>
          <h2>Todos os Repositórios</h2>
          <List>
            {specificRepoList.map(
              ({ id, name, language, html_url, homepage }) => (
                <ListItem key={id}>
                  <div>
                    <b>Nome:</b> {name}
                  </div>
                  <div>
                    <b>Linguagem:</b> {language}
                  </div>
                  <Visitar>
                    <Git>
                      <a
                        href={html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={github} />
                        Visitar no GitHub
                      </a>
                    </Git>
                    {homepage && (
                      <Site>
                        <a
                          href={homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visitar o site
                        </a>
                      </Site>
                    )}
                  </Visitar>
                </ListItem>
              )
            )}
          </List>
        </>
      )}
    </div>
  )
}

export default RepoList
