import React from 'react';
import './billDetail.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const dataExample = {
    "id": 2,
    "createAt": "2022-03-18 11:03:06",
    "paymentStatus": "đã thanh toán",
    "confirmStatus": "chưa duyệt",
    "paymentMethod": "cash",
    "totalPrice": 2000000.0,
    "startDate": "2022-03-18",
    "endDate": "2022-03-19",
    "employee": null,
    "car": {
        "id": 1,
        "name": "VINFAST LUX  A2.0",
        "color": "Brahminy White",
        "licensePlate": "30A-686.86",
        "seatNumber": 4,
        "image": "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw218d05cc/images/Lux-A/hinh-anh-gia-VinFast-Lux-a2.0-price-mau-trang-brahminy-white.png"
    }
}

function BillDetail() {
  return (
    <div className='billDetail'>
        <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="180"
                image={dataExample.car.image}
                alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Hóa đơn thuê xe {dataExample.car.name} - {dataExample.car.licensePlate}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Ngày tạo đơn: {dataExample.startDate}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Trạng thái xác nhận: {dataExample.confirmStatus}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Trạng thái thanh toán: {dataExample.paymentStatus}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Ngày mượn xe: {dataExample.startDate}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Ngày trả xe: {dataExample.endDate}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Thông tin xe:
                        <Typography variant="inherit" color="InfoText">
                            số chỗ ngồi: {dataExample.car.seatNumber}
                        </Typography>
                        <Typography align='' variant="inherit" color="InfoText">
                            màu xe: {dataExample.car.color}
                        </Typography>
                    </Typography>
                    <Typography variant="body1" color="red">
                        Tổng số tiền: {dataExample.totalPrice} VND
                    </Typography>
                
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  )
}

export default BillDetail