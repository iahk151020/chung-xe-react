import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import DateFnsUtils  from '@date-io/date-fns';
import './RentingHistory.css';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Button, Grid } from '@mui/material';

const columns = [
    { id: 'stt', label: 'STT', minWidth: 80 },
    { id: 'billId', label: 'Mã hóa đơn', minWidth: 100 },
    { id: 'customerName', label: 'Khách hàng', minWidth: 100 },
    { id: 'carName', label: 'Tên xe', minWidth: 100 },
    { id: 'licensePlates', label: 'Biển số xe', minWidth: 100 },
    { id: 'startDate', label: 'Ngày bắt đầu', minWidth: 100 },
    { id: 'endDate', label: 'Ngày kết thúc', minWidth: 100 },
    { id: 'totalPrice', label: 'Tổng giá thuê', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100 }
  ];
  
function createData(stt, billId, customerName, carName, licensePlates, startDate, endDate, totalPrice) {
    return { stt, billId, customerName, carName, licensePlates, startDate, endDate, totalPrice };
}


function  RentingHistory() {

    let [page, setPage] = React.useState(0);
    let [rowsPerPage, setRowsPerPage] = React.useState(10);
    let [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
    let [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
    const [search, setSearch] = React.useState(false);
    const [rows, setRows] = React.useState([]);
    
    const formatStartDate = () => {
        const startDate = selectedStartDate.getDate() < 10 ? '0' + selectedStartDate.getDate() : selectedStartDate.getDate();
        const startYear = selectedStartDate.getFullYear();
        const startMonth = selectedStartDate.getMonth() + 1 < 10 ? '0' + (selectedStartDate.getMonth() + 1) : selectedStartDate.getMonth() + 1;
        return `${startYear}-${startMonth}-${startDate}`;
    }

    const formatEndDate = () => {
        const startDate = selectedEndDate.getDate() < 10 ? '0' + selectedEndDate.getDate() : selectedEndDate.getDate();
        const startYear = selectedEndDate.getFullYear();
        const startMonth = selectedEndDate.getMonth() + 1 < 10 ? '0' + (selectedEndDate.getMonth() + 1) : selectedEndDate.getMonth() + 1;
        return `${startYear}-${startMonth}-${startDate}`;
    }

    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleStartDateChange = (date) => {
        setSelectedStartDate(date);
    }

    const handleEndDateChange = (date) => {
        setSelectedEndDate(date);
    }
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSearching = (event) => {
        setSearch(true);        
    }
    
   
    React.useEffect(async(key) => {
        console.log(1);
        fetch(`http://localhost:8080/api/v1/booking-car/list-by-date?startDate=${formatStartDate()}&endDate=${formatEndDate()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            setRows(data.map((item, index) => createData(index + 1, item.bookingId, item.customerName, item.carName, item.licensePlates, item.startDate, item.endDate, item.totalPrice)));
        });
        setSearch(false)
    }, [search]);

  return (    
    <div className="rentingHistory">
        <div className="title">Lịch sử thuê xe</div>

        <div className="datePicker">
                <div className="startDatePicker">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify='space-around'>
                            <KeyboardDatePicker
                                disableToolbar
                                variant='inline'
                                format='yyyy-MM-dd'
                                margin='normal'
                                id='startDatePicker'
                                label='Ngày bắt đầu'
                                value={selectedStartDate}
                                onChange={handleStartDateChange}
                                KeyboardButtonProps={{
                                    'arial-label': 'change date',
                                }}
                            />  
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>
                <div className="endDatePicker">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify='space-around'>
                            <KeyboardDatePicker
                                disableToolbar
                                variant='inline'
                                format='yyyy-MM-dd'
                                margin='normal'
                                id='endDatePicker'
                                label='Ngày kết thúc'
                                value={selectedEndDate}
                                onChange={handleEndDateChange}
                                KeyboardButtonProps={{
                                    'arial-label': 'change date',
                                }}
                            />  
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>
                <div className="btnSearch">
                    <Button onClick={handleSearching}>Tìm kiếm</Button>
                </div>
            </div>

        <div className="rentingHistoryContent">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 600 }}>
                    <Table stickyHeader aria-label="sticky table" >
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                            
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                                    {columns.map((column) => {
                                        if (column.id == 'action'){
                                            return (
                                                <TableCell>
                                                    {<Link to={`/admin/bills/confirm/${row.billId}`} >Chi tiết</Link>}
                                                </TableCell>
                                            )
                                        } else {
                                            const value = row[column.id];
                                            return (    
                                                    <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                    </TableCell>                                      
                                            );
                                        }
                                    })}
                                </TableRow>
                            
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
         </Paper>
        </div>
    </div>
  )
}

export default  RentingHistory;