import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {fetchSalesList} from '../util/index';

function createData(name, phone, role) {
  return { name, phone, role };
}

const dummy = [
  createData('Frozen yoghurt', 159, 4.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
];

const SalesList = () => {
  const [salesList, setSalesList] = useState(null);

  const fetchByPeriod = (start, end) => {
      try {
    const data = fetchSalesList(start, end);
    console.log(data);
    setSalesList(data);
      } catch(e) {
          console.log(e);
      }
  }

  useEffect(() => {
    try {
      const data = fetchSalesList();
      console.log(data);
      setSalesList(data);
    } catch(e) {
        console.log(e);
    }
  }, []);

  if (!salesList) {
    return null;
  }

  return (
      <div>
        <div>
            <span>User Management</span>
        </div>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>이름</TableCell>
                  <TableCell>번호</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>  </TableCell>
                   <TableCell>  </TableCell>
                 </TableRow>
              </TableHead>
              <TableBody>
                {salesList.map((sales) => (
                  <TableRow key={sales.id}>
                     <TableCell component="th" scope="row">
                        {sales.name}
                    </TableCell>
                    <TableCell align="right">{sales.name}</TableCell>
                     <TableCell align="right">{sales.phone}</TableCell>
                     <TableCell align="right">{sales.role}</TableCell>
                   </TableRow>
                 ))}
               </TableBody>
            </Table>
           </TableContainer>
           <Button onClick = {fetchByPeriod("200101", "200413")}>Apply</Button>
      </div>
  );
}

export default SalesList;