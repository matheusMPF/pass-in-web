import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'> {
    //Passamos o atributo "transparent" como opicional adicionando "?".
    transparent?: boolean;
}

//Criei um obejto "Transparent" para que o atributo de mesmo nome, não seja capturada dentro da "...props". Já que a mesma não é um atributo de uma tag <button>
export function IconButton ({transparent, ...props}: IconButtonProps) {
    return (
    <button {...props} 
    className={twMerge(
        'border border-white/10 rounded-md p-1.5',
        transparent ? 'bg-black/20' : 'bg-white/10',
        props.disabled ? 'opacity-50' : null,
    )}
    />
)
}