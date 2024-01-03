import { render, screen } from "@testing-library/react"
import { fireEvent } from "@testing-library/react"
import App from "./App"

const soma = (x: number, y: number) => {
  return x + y 
}

describe('primeiro conjunto de testes', () => {
  it('primeiro teste que é o teste de soma', () => {
    expect(soma(4, 4)).toBe(8)
  })
  it('Verificar a mensagem que esta no h1', () => {
    render(<App />)
    screen.getByText('Ola Mundo!')
  })
  it('verificar se ao clicar no botao mudamos a msg', () => {
    render(<App />)
    screen.getByText('Um texto qualquer para aprendizado.')

    const botao = screen.getByText(/Mudar Mensagem/i) //encontra o botao que tem escrito Mudar Mensagem
    fireEvent.click(botao) //clica no botao.
    screen.getByText('Nova Mensagem') //verifica se agora aparece essa mensagem
    const oldMsg = screen.queryByText('Um texto qualquer para aprendizado.')

    expect(oldMsg).not.toBeInTheDocument() //espera que nao esteja no documento

  })

})



