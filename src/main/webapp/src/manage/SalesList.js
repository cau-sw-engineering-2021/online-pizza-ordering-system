import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField, Button, Typography } from '@material-ui/core';
import {fetchSalesList, fetchSalesListByPeriod} from '../util/index';

const Header = styled.div`
max-width: 1280px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
font: 30px bold sans-serif;
`
const InputContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
` 
const InputBox = styled(TextField)`
  max-width: 100px;
  max-height: 60px;
  display: flex;
`
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
    console.log(start, end);
    fetchSalesListByPeriod({start, end}).then(data => {
      console.log(data.sales);
      setSalesList(data.sales);
    })
  }

    useEffect(() => {
        fetchSalesList().then(data=> {
          console.log(data.sales);
          setSalesList(data.sales);
        })
      },[]);

    return (
        <div>
          <Header>
            <Typography variant="h4" align="center" style={{ margin: "1em 0" }}>
              Sales Management
            </Typography>
        </Header>
          <InputContainer>
            <span>매출내역</span>
            <InputBox label="YYYY" variant="outlined" onChange={onChange} value={startYear} id="startYear"/>
            <InputBox label="MM" variant="outlined" onChange={onChange} value={startMonth} id="startMonth"/>
            <InputBox label="DD" variant="outlined" onChange={onChange} value={startDay} id="startDay"/>
            <span>~</span>
            <InputBox label="YYYY" variant="outlined" onChange={onChange} value={endYear} id="endYear"/>
            <InputBox label="MM" variant="outlined" onChange={onChange} value={endMonth} id="endMonth"/>
            <InputBox label="DD" variant="outlined" onChange={onChange} value={endDay} id="endDay"/>
            <Button onClick={() => {getSalesList(
              startYear+"-"+startMonth+"-"+startDay,
              endYear+"-"+endMonth+"-"+endDay
            )}}>적용</Button>
          </InputContainer>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Orderer</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Pizza</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {salesList && salesList.map((sales) => (
                    <TableRow key={sales.name}>
                      <TableCell component="th" scope="row">
                        {sales.id}
                      </TableCell>
                      <TableCell>{sales.deliveryType}</TableCell>
                      <TableCell>{sales.lastUpdateTime}</TableCell>
                      <TableCell>{sales.totalPrice}</TableCell>
                      <TableCell>{sales.orderStatus}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </div>
    );
}

export default Saleslist;