import { ComponentProps } from "react";
//Extensão do tailwind para mesclar as classes
import { twMerge } from 'tailwind-merge'

interface TableCellProps extends ComponentProps<'td'>{

}

export function TableCell (props: TableCellProps) {
    return(
        //O twmerge informa que as classes padrão são que estão entre aspas. A props.clasName são as classes a serem mescladas
        <td {...props} className={twMerge("py-3 px-4 text-sm text-zinc-400", props.className)} />
    )
}