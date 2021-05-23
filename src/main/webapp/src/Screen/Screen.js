import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

// just for test
function createData(orderID, orderstatus, shouldDeliver) {
  return { orderID, orderstatus, shouldDeliver };
}

function isPreparing(orderID, orderstatus, shouldDeliver) {
  if (orderstatus === "order accepted" && shouldDeliver === false) return true;
  return false;
}
function isComplete(orderID, orderstatus, shouldDeliver) {
  if (orderstatus === "cook completed" && shouldDeliver === false) return true;
  return false;
}

// just for test
// should get from the DB
const initOrderList = [
  createData(1, "ordered", true),
  createData(2, "canceled", true),
  createData(3, "cook completed", true),
  createData(4, "order accepted", false),
  createData(5, "cook completed", false),
  createData(6, "order accepted", true),
  createData(7, "ordered", false),
  createData(8, "cook completed", true),
  createData(9, "served", true),
  createData(10, "delivering", false),
  createData(11, "delivery completed", false),
  createData(12, "invalid", false)
];

const useStyles = makeStyles({
  table: {
    maxWidth: 150
  }
});

export default function CustomizedTables() {
  const classes = useStyles();
  const preparingList = initOrderList.filter(
    (element) =>
      isPreparing(
        element.orderID,
        element.orderstatus,
        element.shouldDeliver
      ) === true
  );
  const completeList = initOrderList.filter(
    (element) =>
      isComplete(
        element.orderID,
        element.orderstatus,
        element.shouldDeliver
      ) === true
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
                {row.orderID}
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
                {row.orderID}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
