import { Search, MoreHorizontal, ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight, } from 'lucide-react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-Row'
import { ChangeEvent, useState } from 'react'
import { attendees } from '../data/attendees'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList() {

    const totalPages = Math.ceil(attendees.length / 10);

    const [search, setShearch] = useState('');
    const [page, setPage] = useState(1);

    function onSearchInputChange(event: ChangeEvent<HTMLInputElement>) {

        setShearch(event.target.value)
    }

    function goToNextPage (){
        setPage(page + 1)
    }

    function goToPreviousPage (){
        setPage(page - 1)
    }
    function goToFirstPage (){
        setPage(1)
    }

    function goToLastPage (){
        setPage(totalPages)
    }



    return (

        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center py-2 px-8">

                <h1 className="text-2xl font-bold">Participantes</h1>

                <div className="px-3 py-1.5 w-72 border border-white/10  rounded-lg text-sm flex items-center gap-3">

                    <Search className='size-4 text-emerald-300' />

                    <input onChange={onSearchInputChange} className="bg-transparent flex-1 outline-none p-0 border-none text-sm " placeholder="Buscar Participante" />

                </div>
            </div>

            <Table>

                <thead>

                    <TableRow >
                        <TableHeader style={{ width: 48 }}>
                            <input type="checkbox" className='size-4 bg-black/20 rounded border-white/10 ' />
                        </TableHeader>
                        <TableHeader> Código</TableHeader>
                        <TableHeader> Participante</TableHeader>
                        <TableHeader> Data de inscrição</TableHeader>
                        <TableHeader>Data do check-in</TableHeader>
                        <TableHeader style={{ width: 64 }}> </TableHeader>
                    </TableRow>
                </thead>

                <tbody>
                    {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
                        return (
                            <TableRow key={attendee.id} >
                                <TableCell>
                                    <input type="checkbox" className='size-4 bg-black/20 rounded border-white/10 ' />
                                </TableCell>
                                <TableCell>{attendee.id}</TableCell>
                                <TableCell>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-semibold text-white'>{attendee.name}</span>
                                        <span className='text-zinc-400'>{attendee.email}</span>
                                    </div>
                                </TableCell>
                                {/* Configura a data para que fica no formato do Brasil */}
                                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                                <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>

                                <TableCell>
                                    {/* A propriedade transparent tem a finalidade de diferenciar esse botão dos demais, para evitar-mos de criar um novo component */}
                                    <IconButton transparent={true}>
                                        <MoreHorizontal />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>
                <tfoot>
                    <TableRow>
                        <TableCell colSpan={3}>
                            Mostrando {page * 10} de {attendees.length} itens
                        </TableCell>

                        <TableCell className='text-right' colSpan={3} >
                            <div className='inline-flex items-center gap-8'>
                                <span>Página {page} de {totalPages}</span>

                                <div className='flex gap-1.5'>
                                    <IconButton onClick={goToFirstPage} disabled={page === 1} >
                                        <ChevronsLeft  />
                                    </IconButton>

                                    <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                                        <ChevronLeft />
                                    </IconButton>

                                    <IconButton onClick={goToNextPage} disabled={page === totalPages} >
                                        <ChevronRight />
                                    </IconButton>

                                    <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                                        <ChevronsRight  />
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                </tfoot>
            </Table>

        </div>

    )
}