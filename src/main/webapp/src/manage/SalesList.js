import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import { fetchSalesList, fetchSalesListByPeriod } from "../util/index";

const Header = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 30px bold sans-serif;
`;
const InputContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const InputBox = styled(TextField)`
  max-width: 100px;
  max-height: 60px;
  display: flex;
`;
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

  const { startYear, startMonth, startDay, endYear, endMonth, endDay } = inputs;

  const onChange = (e) => {
    const { value, id } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const getSalesList = (start, end) => {
    fetchSalesListByPeriod({ start, end }).then((data) => {
      setSalesList(data.sales);
    });
  };

  useEffect(() => {
    fetchSalesList().then((data) => {
      setSalesList(data.sales);
    });
  }, []);

  return (
    <div>
      <Header>
        <Typography variant="h4" align="center" style={{ margin: "1em 0" }}>
          Sales Management
        </Typography>
      </Header>
      <InputContainer>
        <span>매출내역</span>
        <InputBox
          label="YYYY"
          variant="outlined"
          onChange={onChange}
          value={startYear}
          id="startYear"
        />
        <InputBox
          label="MM"
          variant="outlined"
          onChange={onChange}
          value={startMonth}
          id="startMonth"
        />
        <InputBox
          label="DD"
          variant="outlined"
          onChange={onChange}
          value={startDay}
          id="startDay"
        />
        <span>~</span>
        <InputBox
          label="YYYY"
          variant="outlined"
          onChange={onChange}
          value={endYear}
          id="endYear"
        />
        <InputBox
          label="MM"
          variant="outlined"
          onChange={onChange}
          value={endMonth}
          id="endMonth"
        />
        <InputBox
          label="DD"
          variant="outlined"
          onChange={onChange}
          value={endDay}
          id="endDay"
        />
        <Button
          onClick={() => {
            getSalesList(
              startYear + "-" + startMonth + "-" + startDay,
              endYear + "-" + endMonth + "-" + endDay
            );
          }}
        >
          적용
        </Button>
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
            {salesList &&
              salesList.map((sales) => {
                console.log(sales);
                return (
                  <TableRow key={sales.id}>
                    <TableCell component="th" scope="row">
                      {sales.id}
                    </TableCell>
                    {sales.user ? (
                      <TableCell>{sales.user.name}</TableCell>
                    ) : (
                      <TableCell>Anonymous</TableCell>
                    )}
                    <TableCell>{sales.lastUpdateTime}</TableCell>
                    <TableCell>{sales.totalPrice}</TableCell>
                    {sales.itemList && sales.itemList.length !== 0 ? (
                      sales.itemList.length === 1 ? (
                        <TableCell>{sales.itemList[0].menu.name}</TableCell>
                      ) : (
                        <TableCell>
                          {sales.itemList[0].menu.name} 외
                          {sales.itemList.length - 1}
                        </TableCell>
                      )
                    ) : (
                      <TableCell> </TableCell>
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Saleslist;
