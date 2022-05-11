import React,{useState,useEffect} from 'react';

import '../components/CarDetail.css';
import { Heading } from '../components/Heading';
import { Footer } from '../components/Footer';
import { withRouter } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import "react-datepicker/dist/react-datepicker.css";

function formatPrice(price){
    return price.toLocaleString('undefined', {style : 'currency', currency : 'VND'});
}

function CarDetail (props) {
    localStorage.removeItem('bill');
    const[data,setData] = useState([]);
    const[cate,setCate] = useState([]);
    const[paymentMethod,setPaymentMethod] = useState("");
    const [sDate, setSDate] = useState(new Date());
    const [eDate, setEDate] = useState(new Date());
    const user = JSON.parse(localStorage.getItem('user-info'));
    const history = useHistory();

     useEffect( async () => {
        let result = await fetch("http://localhost:8080/api/v1/cars/carid/?carid="+props.match.params.id);  
        result = await result.json(); 
        setCate(result.carCategory.name);
        setData(result);
    },[])

    let day = eDate.getDate()-sDate.getDate();
    let price = data.price;
    console.log(data.price);
    let carId = props.match.params.id;
    let customerId = user.id;

    if(eDate < sDate) 
    {
        day =0;
    } else {
        day = day;
    }

    let totalPrice = day*price;
    let confirmStatus = "pending";

    async function addBill() {

       if(day===0) {
           alert('Thời gian đặt xe không hợp lệ');
       }
       else {
        
            let paymentStatus = "paid";

            if(paymentMethod == "Cash") {
                paymentStatus = "unpaid";
            } 

            localStorage.getItem('user-info');
            let startDate = sDate.toISOString().split('T')[0];
            let endDate = eDate.toISOString().split('T')[0];

            let item={paymentStatus,confirmStatus, paymentMethod, totalPrice, startDate, endDate,carId, customerId};
           
            JSON.stringify(item);
            

            let result= await fetch("http://localhost:8080/api/v1/bills/create_bill", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json'
                },
                body: JSON.stringify(item)
                
            });
            result = await result.json();
            localStorage.setItem("bill",JSON.stringify(result));
            history.push("/Success/");
       }
    }
    
    return(
        <>
            <Heading/>
            <main className="flex-container">
                <div className="main-content row" style={{height: "800px"}}>
                   

                        <div className="top-content">
                            <img className="pro-img" src={data.image} alt="vinfast-fadil-mau-trang"/>
                            <div className="pro-info">
                                
                                    <h2>{data.name}</h2>
                                    <div className="info-list">
                                        <div className="info-list-item"><img src="https://icons.iconarchive.com/icons/icons8/android/512/Editing-Bg-Color-icon.png" style={{width : "20px", margin:"10px"}}/>Màu {data.color}</div>
                                        <div className="info-list-item"><img src="https://cdn-icons-png.flaticon.com/512/290/290081.png" style={{width : "30px", margin:"10px"}}/>Biển {data.licensePlate}</div>
                                        <div className="info-list-item"><img src="https://www.seekpng.com/png/detail/787-7877997_png-file-seat-icon-png.png" style={{width : "20px", margin:"10px"}}/>{data.seatNumber} Chỗ</div>
                                        <div className="info-list-item"><img src="https://www.seekpng.com/png/detail/91-919510_sedan-svg-png-icon-free-download-sedan-car.png" style={{width : "40px", margin:"10px"}}/>Hạng {cate}</div>
                                    </div>
                                
                            </div>
                        </div>

                    <div className="bottom-content">
                        <div className="bottom-content-item">
                            <h2>TÍNH NĂNG</h2>
                            <div className="item-list">
                                <div className="item-list-col">
                                    <p><img src="https://icon-library.com/images/da573c8d9d.png" style={{width : "20px", margin:"10px"}}/>Điều hòa (A/C)</p>
                                    <p><img src="https://icon-library.com/images/da573c8d9d.png" style={{width : "20px", margin:"10px"}}/>Khe cắm USB</p>
                                </div>
                                <div className="item-list-col">
                                    <p><img src="https://icon-library.com/images/da573c8d9d.png" style={{width : "20px", margin:"10px"}}/>Định vị (GPS)</p>
                                </div>
                                <div className="item-list-col">
                                    <p><img src="https://icon-library.com/images/da573c8d9d.png" style={{width : "20px", margin:"10px"}}/>Bluetooth</p>
                                </div>
                            </div>
                        </div>

                        <div className="bottom-content-item">
                            <h2>CHẤP NHẬN THANH TOÁN</h2>
                            <div className="item-list">
                                <div className="item-list-col">
                                    <p><img src='https://static.thenounproject.com/png/2247068-200.png' style={{width : "50px", margin:"10px"}}/>Thanh toán bằng tiền mặt</p>
                                    <p><img src='https://www.pikpng.com/pngl/b/71-718009_bank-free-download-png-icon-bank-logo-png.png' style={{width : "30px", margin:"10px 10px 20px"}}/>Thanh toán qua chuyển khoản ngân hàng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <aside className="main-sidebar row">
                    <div className="rent-time">
                        <h2>Thời gian thuê xe</h2>
                        <p>Ngày bắt đầu</p>
                            <DatePicker selected={sDate} onChange={(date:Date) => setSDate(date)} />
                        <p>Ngày kết thúc</p>
                            <DatePicker selected={eDate} onChange={(date:Date) => setEDate(date)} />
                    </div>

                    <div className="rent-method">
                        <h2>Phương thức thanh toán</h2>
                        
                    </div>
                    <div className="form-group">
                        <select className="form-control" onChange={(e)=>setPaymentMethod(e.target.value)}>
                            <option value="Cash">Tiền mặt</option>
                            <option value="Online">Chuyển khoản</option>
                        </select>
                    </div>                    
                    <div className="rent-price">
                        <h2>Chi tiết giá</h2>
                        <p>Đơn giá: {price} VND</p>
                        <p>Thời gian thuê : {day} ngày</p>
                        <p>Tổng tiền: {totalPrice.toLocaleString()} VND</p>
                    </div>
                    
                    <div className="button">
                        <a className="button" onClick={addBill}>ĐẶT NGAY</a>
                    </div>           
                </aside>
            </main>
            <Footer/>
        </>
    )
}

export default withRouter(CarDetail);