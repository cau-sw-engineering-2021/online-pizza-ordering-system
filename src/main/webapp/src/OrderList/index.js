import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import { fetchOrderList, login } from '../util';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(orderId, lastUpdatedTime, preview, totalPrice, deliveryType, orderStatus) {
  return { orderId, lastUpdatedTime, preview, totalPrice, deliveryType, orderStatus};
}

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function DetailDialog(props) {
  const classes = useStyles();
  const { onClose, order, open } = props;

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} maxWidth="lg">
      <DialogTitle id="simple-dialog-title">상세내역</DialogTitle>
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>품목명</StyledTableCell>
              <StyledTableCell>가격</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              order.itemList ?
              order.itemList.map(({menu, optionList}) => {
                const mainItem = (<StyledTableRow key={`item-${menu.id}`}>
                  <StyledTableCell>{menu.name}</StyledTableCell>
                  <StyledTableCell>{menu.price}</StyledTableCell>
                  </StyledTableRow>);

                const optionItem = optionList.map(option => (
                  <StyledTableRow key={`option-${option.name}`}>
                    <StyledTableCell>+{option.name}</StyledTableCell>
                    <StyledTableCell>{option.price}</StyledTableCell>
                  </StyledTableRow>
                ));

                const detailItem = (<StyledTableRow key={`detail-${menu.id}`}>
                  <StyledTableCell> {menu.detail} </StyledTableCell>
                  <StyledTableCell> </StyledTableCell>
                  </StyledTableRow>
                );

                return (<>
                  {mainItem}
                  {optionItem}
                  + (고객 요청 사항){detailItem}
                </>);
              }) :
              ''
            }
          </TableBody>

        </Table>
      </TableContainer>
    </Dialog>
  );
}

export default function OrderList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [dialogData, setDialogData] = React.useState({});
  const [orderList, setOrderList] = React.useState([]);

  React.useEffect(async () => {
    const { jwt }= await login({
      id: "lmu",
      password: "test"
    });
    setInterval(async () => {
      const { order } = await fetchOrderList({ jwt });
      setOrderList(order);
    }, 1000);
  }, []);

  const handleClickOpen = (order) => {
    setDialogData(order);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="main">
      <CssBaseline />
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>주문 번호</StyledTableCell>
              <StyledTableCell>주문 시각</StyledTableCell>
              <StyledTableCell>주문 내역</StyledTableCell>
              <StyledTableCell>결재 금액</StyledTableCell>
              <StyledTableCell>배달 여부</StyledTableCell>
              <StyledTableCell>주문 상태</StyledTableCell>
              <StyledTableCell align="right">조작</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderList.map((order) => (
              <StyledTableRow key={order.id}>
                <StyledTableCell> {order.id} </StyledTableCell>
                <StyledTableCell>{order.lastUpdateTime}</StyledTableCell>
                <StyledTableCell>
                  {order.itemList.map(item=> `${item.menu.name}(${item.menu.detail}) x ${item.count}`)
                  .reduce((acc, cur) => (acc + "," + cur), '') }
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>{handleClickOpen(order)}}
                  >
                    상세내역 확인
                  </Button>
                </StyledTableCell>
                <StyledTableCell>{order.totalPrice}</StyledTableCell>
                <StyledTableCell>{order.deliveryType}</StyledTableCell>
                <StyledTableCell>{order.orderStatus}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    color="primary"
                  >
                    수령
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                  >
                    반려
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DetailDialog order={dialogData} open={open} onClose={handleClose}/>
    </Container>
  );
}
