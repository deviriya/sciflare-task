import React from 'react'
import { TableHead, TableRow } from '@mui/material'
import { StyledTableCell } from '../../../utils/styles'

export default function DashHead() {
    return (
        <TableHead>
            <TableRow>
                <StyledTableCell>S.NO</StyledTableCell>
                <StyledTableCell>User Name</StyledTableCell>
                <StyledTableCell>E-mail</StyledTableCell>
                <StyledTableCell>Contact</StyledTableCell>
                <StyledTableCell>Verified Status</StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
            </TableRow>
        </TableHead>
    )
}
