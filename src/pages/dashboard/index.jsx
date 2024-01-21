import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { CardBody } from 'reactstrap';
import { Button, } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { CustomModal } from '../Modal';
import DashHead from './app/dashHead';
import DashBody from './app/dashbody';
import axios from 'axios';


function Dashboard() {

  const [userDetails,setuserDetails]=React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  React.useEffect(()=>{
    fetchUser();
  },[])
  
  const fetchUser=()=>{
    // axios.get("https://crudcrud.com/get").then((response)=>{
    //   console.log(response)
      // setuserDetails(response?.data)
    // })
  }

  return (
    <div>
      <CardBody>

        <div className='d-flex justify-content-between align-items-start'>
          <h2 className='title'>Dashboard</h2>
          <Button variant='contained' className='btn' onClick={handleOpen}>
            <AddIcon /> Add User
          </Button>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <DashHead />
            <TableBody>
              <DashBody fetchUser={fetchUser} userDetails={userDetails} />
            </TableBody>
          </Table>
        </TableContainer>
      </CardBody>

      <CustomModal open={open} handleOpen={handleOpen} fetchUser={fetchUser} />
    </div>
  )
}

export default Dashboard

