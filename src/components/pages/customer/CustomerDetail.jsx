import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import './CustomerDetail.css';

function emptyBody(){
    return (
        <div>.</div>
    )
}

function Body(data){
    return (
       
            <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Họ tên: {data.fullName}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Địa chỉ: {data.address}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Số điện thoại: {data.phoneNumber}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Username: {data.username}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Password: {data.password}
                    </Typography>
              
                
                </CardContent>
            </CardActionArea>
        </Card>

       
    )
}

function CustomerDetail(props) {

    const [data, setData] = React.useState([]);
    const [fetched, setFetched] = React.useState(false);

    const customer_name = useLocation().search.split('=')[1];
    console.log(customer_name);
    
    
    React.useEffect(async() => {
        fetch(`http://localhost:8080/api/v1/customers/customer-detail?customer_name=${customer_name}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setData(result);
            setFetched(true);
        });
    }, []);

  

    return (<div className='customer-detail'>
        {(fetched == true) ? Body(data) : emptyBody()}
    </div>);
    
}

export default CustomerDetail;