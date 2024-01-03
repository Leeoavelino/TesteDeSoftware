
import { fireEvent, render, screen } from "@testing-library/react"
import { rest } from 'msw';
import { setupServer } from 'msw/node'
import Tasks from "./Tasks"

describe('Usando o Mock nas Tasks', () => {
    const worker = setupServer(
        
        rest.get('https://jsonplaceholder.typicode.com/todos', async (req, res, ctx) => {

            return res(
                ctx.json([
                    {
                        userId: 1,
                        id: 1,
                        title: "delectus aut autem",
                        completed: false
                    },
                ])
            )
        })  
    )
    beforeAll(() => {
        worker.listen()
    })

    it('Pegar tarefas com o click no botao e mostrar na tela.', async () => {
        render(<Tasks />)
        const botao = screen.getByText(/Get Tasks from API/i)
        fireEvent.click(botao)
        await screen.findByText(/delectus aut autem/i)
    })
})

