import { ComponentProps } from "react";

//A interface é do TypeScript e nela devemos associar o que deverá ser recebido pela props.

//O extends serve para informar que a nossa NavLink irá herdar todas as propriedades que a tag <a> tem.
interface NavLinkProps extends ComponentProps<'a'> {
    //A children irá capturar informações dentro da tag "pai". No caso a <NavLink>Essa informação</NavLink>
    children: string;
}

export function NavLink (props: NavLinkProps){

    //{...props} ele captura todas as propriades de uma <a> que estão no component <NavLink>
    return <a {...props} className='font-medium text-sm'>{props.children}</a>

}