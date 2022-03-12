interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'gray'
    return(
        <button
            className={`px-3 py-2 rounded-md
            bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white
            ${props.className ?? ''}
        `}>
            {props.children}
        </button>
    )
}