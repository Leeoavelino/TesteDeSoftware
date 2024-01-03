import { ReactNode } from "react";


export default function Button({disabled, children, onCLick}: {disabled: boolean, children: ReactNode, onCLick: (number: number) => void } ){

    return(

        <button style={{backgroundColor: disabled ? 'red' : 'blue', padding:'10px', border: 'none', borderRadius: '15px', cursor: 'pointer'}} onClick={() => onCLick(10)}> {children} </button>

    )
}