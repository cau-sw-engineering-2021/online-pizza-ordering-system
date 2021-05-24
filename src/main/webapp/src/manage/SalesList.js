import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import {fetchSalesList} from '../util/index';

const Saleslist = () => {

  const [salesList, setSalesList] = useState([]);
  const [inputs, setInputs] = useState({
    startYear: "",
    startMonth: "",
    startDay: "",
    endYear: "",
    endMonth: "",
    endDay: "",
  });

  const {startYear, startMonth, startDay, endYear, endMonth, endDay} = inputs;

  const onChange = (e) => {
    const { value, id } = e.target;
    setInputs({
        ...inputs,
        [id]: value
    });
};

  const getSalesList = (start, end) => {
    fetchSalesList(start, end).then(data => {
      console.log(data.saleslist);
      setSalesList(data.saleslist);
    })
  }

    useEffect(() => {
        getSalesList("", "");
      },[]);

    return (
        <div>
          <div>
              <span>Sales Management</span>
          </div>
          <div>
            <span>매출내역</span>
            <TextField label="YYYY" variant="outlined" onChange={onChange} value={startYear}/>
            <TextField label="MM" variant="outlined" onChange={onChange} value={startMonth}/>
            <TextField label="DD" variant="outlined" onChange={onChange} value={startDay}/>
            /
            <TextField label="YYYY" variant="outlined" onChange={onChange} value={endYear}/>
            <TextField label="MM" variant="outlined" onChange={onChange} value={endMonth}/>
            <TextField label="DD" variant="outlined" onChange={onChange} value={endDay}/>
            <Button>적용</Button>
          </div>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>LargePrice</TableCell>
                    <TableCell>MediumPrice</TableCell>
                    <TableCell>SmallPrice</TableCell>
                    <TableCell>ImgUrl</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {salesList.map((sales) => (
                    <TableRow key={sales.name}>
                      <TableCell component="th" scope="row">
                        {sales.name}
                      </TableCell>
                      <TableCell>{sales.largeprice}</TableCell>
                      <TableCell>{sales.mediumprice}</TableCell>
                      <TableCell>{sales.smallprice}</TableCell>
                      <TableCell>{sales.imgUrl}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </div>
    );
}

export default Saleslist;