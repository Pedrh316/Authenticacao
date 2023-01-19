import React from 'react'
import styled from 'styled-components';
import Card from '../components/Card';
import Accordion from '../components/Accordion';

const SHome = styled.div`
    .card{
        clear:both;
    }
    .card:nth-child(even){        
        float:right;
    }
    .subtitle{
        font-size:1.2rem;
    }
    .folders-list{
        padding-left:0;
        display:flex;
        flex-direction:column;
        gap:.5rem;

        .accordion{
            ul{
                margin-block:1rem 1.5rem;
                padding-right:1.5rem;
            }
            li{
                margin-bottom:.75rem;
                h4{
                    margin:0;
                }
            }
        }
        
    }
`

const Home = () => {
    return (
        <SHome>
            <Card>
                <h1 className="title">Projeto de autenticação</h1>
                <p>O sistema de login e registro nas aplicações web são fundamentais para controlar rotas de acesso, podendo algumas serem para usuários, admin, e ainda outras para o moderador.</p>
                <p>Devido à necessidade desse tipo de aplicação, decidi fazer o meu próprio, organizando em arquivos e pastas cada parte da estrutura do código.</p>
            </Card>            
            <Card>
                <h2 className="title">Como foi construido ?</h2>
                <p>O processo de criação deste projeto se deu com a utilização dos pacotes JS-Cookie, React-Router-DOM, React-Icons, Styled-Components e Axios para o lado do cliente, e Bcrypt, Express e Mongoose para o lado do servidor.</p>
            </Card>
            <Card>
                <h2 className='title'>Pastas</h2>
                <p>A separação das responsabilidades em arquivos e pastas foi fundamental para uma boa estruturação do projeto, de modo que a lógica esteve separada da parte mais declarativa do código.</p>
                <p>Abaixo está a lista das pastas do projeto:</p>
                <ul className='folders-list'>
                    <Accordion title="Front-end">
                        <ul>
                            <li><h4>Utils</h4>Para definir de constantes de rotas.</li>
                            <li><h4>Hooks</h4>Para construir hooks customizados.</li>
                            <li><h4>Routes</h4>Para definir os componentes das rotas do React-Router-Dom.</li>
                            <li><h4>useCases</h4>Dentro estão os arquivos de interação com o Back-end</li>
                            <li><h4>Schemas</h4>Contêm as configurações dos formulários.</li>
                            <li><h4>Components</h4>Abriga os componentes que as rotas irão utilizar</li>
                        </ul>
                    </Accordion>
                    <Accordion title="Back-end">
                        <ul>
                            <li><h4>Models</h4>Onde é definido os modelos de documentos do MongoDB.</li>
                            <li><h4>Controllers</h4>Representa os arquivos que farão o tratamento dos dados.</li>
                            <li><h4>Routes</h4>Faz listagem de todas as rotas para requisições POST, dado que a entrega de conteúdos estáticos é responsabilidade do React-Router-Dom</li>
                        </ul>
                    </Accordion>
                </ul>
            </Card>
        </SHome>
    )
}

export default Home