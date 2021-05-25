import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { fetchDisplayOrderList } from '../util';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function isPreparing(orderID, orderstatus, deliveryType) {
  if (orderstatus === "ACCEPTED" && deliveryType === "PICKUP") return true;
  return false;
}
function isComplete(orderID, orderstatus, deliveryType) {
  if (orderstatus === "COOK_COMPLETED" && deliveryType === "PICKUP") return true;
  return false;
}

const useStyles = makeStyles({
  table: {
    maxWidth: 150
  }
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [orderList, setOrderList] = useState([]);
  const refreshOrder = async () => {
    const { order } = await fetchDisplayOrderList();
    setOrderList(order);
  };

  useEffect(()=> {
    refreshOrder();
  }, []);

  const preparingList = orderList.filter(
    (element) =>
      isPreparing(
        element.id,
        element.orderStatus,
        element.deliveryType,
      )
  );
  const completeList = orderList.filter(
    (element) =>
      isComplete(
        element.id,
        element.orderStatus,
        element.deliveryType,
      )
  );

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Preparing">
        <TableHead>
          <TableRow>
            <StyledTableCell>Preparing</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {preparingList.map((row) => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      <Table className={classes.table} aria-label="Pleas Collect">
        <TableHead>
          <TableRow>
            <StyledTableCell>Please Collect</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {completeList.map((row) => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
