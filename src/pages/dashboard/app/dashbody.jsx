import React, { Fragment, useState } from 'react'
import { StyledTableCell, StyledTableRow } from '../../../utils/styles';
import { Delete, Edit } from '@mui/icons-material';
import { Button } from '@mui/material';
import { EditUserDetails } from '../../Modal/editModal';


export default function DashBody({ userDetails, fetchUser }) {

    const [item, setItem] = useState({})
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const handleEdit = (item) => {
        setItem(item);
        setOpen(true);
    }

    const handledelete = (item) => {
        console.log(item)
    }

    return (
        <Fragment>

            {userDetails?.length > 0 ?
                userDetails.map((row) => (
                    <StyledTableRow key={row.id}>
                        <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                        <StyledTableCell>{row.username}</StyledTableCell>
                        <StyledTableCell>{row.email}</StyledTableCell>
                        <StyledTableCell>{row.contact}</StyledTableCell>
                        <StyledTableCell>{row.email}</StyledTableCell>
                        <StyledTableCell>
                            <Button onClick={() => handleEdit(row)}>
                                <Edit />
                            </Button>
                        </StyledTableCell>
                        <StyledTableCell>
                            <Button onClick={() => handledelete(item)}>
                                <Delete />
                            </Button>
                        </StyledTableCell>
                    </StyledTableRow>
                ))
                :
                <StyledTableRow>
                    <StyledTableCell align='center' colSpan={7}>No data found</StyledTableCell>
                </StyledTableRow>
            }

            <EditUserDetails details={item} fetchUser={fetchUser} handleOpen={handleOpen} open={open} />
        </Fragment>
    )
}
