import React from 'react';
import './billDetail.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import queryString from 'query-string';
import {useParams, useLocation} from 'react-router-dom';

function emptyBody(){
    return (
        <div></div>
    )
}

function formatPrice(price){
    return price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

function Body(data){
    return (
        
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="180"
                    image={data.car.image}
                    alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Hóa đơn thuê xe {data.car.name} - {data.car.licensePlate}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Ngày tạo đơn: {data.startDate}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Trạng thái xác nhận: {data.confirmStatus}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Trạng thái thanh toán: {data.paymentStatus}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Ngày mượn xe: {data.startDate}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Ngày trả xe: {data.endDate}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Thông tin xe:
                            <Typography variant="inherit" color="InfoText">
                                số chỗ ngồi: {data.car.seatNumber}
                            </Typography>
                            <Typography align='' variant="inherit" color="InfoText">
                                màu xe: {data.car.color}
                            </Typography>
                        </Typography>
                        <Typography variant="body1" color="red">
                            Tổng số tiền: {formatPrice(data.totalPrice)}
                        </Typography>
                    
                    </CardContent>
                </CardActionArea>
            </Card>
       
    )
}

function BillDetail() {

    const [data, setData] = React.useState([]);
    const [fetched, setFetched] = React.useState(false);
    const {search} = useLocation();
    const {bill_id} = queryString.parse(search);
    
    React.useEffect(() => {
        console.log(bill_id);
        fetch(`http://localhost:8080/api/v1/bills/bill_id?id=${bill_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(result => {
            setData(result);
            setFetched(true);
        });
    }, []);

  

    return (<div className='billDetail'>
        {(fetched === true) ? Body(data) : emptyBody()}
    </div>);
    
}

export default BillDetail