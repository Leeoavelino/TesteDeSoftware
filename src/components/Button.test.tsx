import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"

describe('Teste com botoes', () => {
    it('verificar a cor que fica com o desable true', () => {
        render(<Button disabled={false} onCLick={() => {}}>Clique em mim</Button>)
        const button = screen.getByRole('button', {name: 'Clique em mim'})

        expect(button).toHaveStyle({backgroundColor:'blue'})
    })
    it('verificar se o onClick foi chamado', () => {
        const onCLick = jest.fn()//verifica se a funçao foi chamada
        render(<Button disabled onCLick={onCLick} >Clique em mim</Button>)
        const botao = screen.getByText(/Clique em mim/i)
        fireEvent.click(botao)
        expect(onCLick).toHaveBeenCalledWith(10) //verifica se a funçao foi chamada e com parametro 10
        
    })
})

