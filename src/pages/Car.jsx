
import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';
import '../components/Car.css';
import '../components/Form.css';

export const CarList = () =>
{
    const[data,setData] = useState([]);
    const[dataBranch,setDataBranch] = useState([]);
    const[dataCate,setDataCate] = useState([]);
    const[name,setName] = useState("");
    const[cate,setCate] = useState(0);
    const[branch,setBrach] = useState(0);    
    const[seat,setSeat] = useState(0);
    const[dataSeat,setDataSeat] = useState([]);

    useEffect( async () => {
        let result = await fetch("http://localhost:8080/api/v1/cars");
        let branchResult = await fetch("http://localhost:8080/api/v1/branches");
        let categoriesResult = await fetch("http://localhost:8080/api/v1/categories");
        let seatResult = await fetch("http://localhost:8080/api/v1/cars/getListSeat");

        branchResult = await branchResult.json();
        categoriesResult = await categoriesResult.json();
        result = await result.json();
        seatResult = await seatResult.json();

        setData(result);
        setDataBranch(branchResult);
        setDataCate(categoriesResult);
        setDataSeat(seatResult);

    },[])

    async function search() {
        console.warn(seat);
        let result = await fetch('http://localhost:8080/api/v1/cars/search/?kw='+name+'&nbrSeat='+seat+'&branchId='+branch+'&categoryId='+cate);
        result = await result.json();
        setData(result);
    }

    return (
        <>
        <div className="col-md-3">
            <div id="booking" className="section">
                <div className="section">
                    <div className="container" >
                        <div className="row">
                            <div className="booking-form">
                                <div className="form-header">
                                    <h1>Chọn xe ngay thôi</h1>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Tên xe" onChange={(e)=>setName(e.target.value)}/>
                                        <span className="form-label">Destination</span>
                                    </div>
                                   
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                

                                                <select className="form-control" required onChange={(e)=>setCate(e.target.value)}>
                                                    <option value="0" selected>Phân khúc</option>
                                                    {dataCate.map((item) => 
                                                        <option value={item.id}>{item.name}</option>
                                                    )}

                                                </select>
                                                <span className="select-arrow"></span>
                                                <span className="form-label">Rooms</span>
                                            </div>
                                        </div>
                                   
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <select className="form-control" required onChange={(e)=>setBrach(e.target.value)}>
                                                <option value="0" selected>Hãng xe</option>
                                                {dataBranch.map((item) => 
                                                    <option value={item.id}>{item.name}</option>
                                                )}
                                                   
                                            </select>
                                            <span className="select-arrow"></span>
                                            <span className="form-label">Adults</span>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <select className="form-control" required onChange={(e)=>setSeat(e.target.value)}>
                                                <option value="0" selected>Số Ghế</option>
                                                {dataSeat.map((item) => 
                                                    <option value={item}>{item}</option>
                                                )}
                                                   
                                            </select>
                                            <span className="select-arrow"></span>
                                            <span className="form-label">Adults</span>
                                        </div>
                                    </div>  

                                    <div className="form-btn">
                                        <div className="submit-btn" onClick={search}>Tìm xe</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-md-8">
            <main>
                <div className="row">
                    <div className="col-lg-11 mx-auto">
                
                    <ul className="list-group shadow">
                        {
                            data.map((item) => 
                         
                        <li className="list-group-item">
                    
                            <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                <div className="media-body order-2 order-lg-1">
                                    <h3 className="mt-0 font-weight-bold mb-2" href="#">{item.name}</h3>
                                    <div className="row">
                                        <div className="col"><img src="https://icons.iconarchive.com/icons/icons8/android/512/Editing-Bg-Color-icon.png" style={{width : "20px", margin:"10px"}}/>Màu {item.color}</div>
                                        <div className="col"><img src="https://cdn-icons-png.flaticon.com/512/290/290081.png" style={{width : "30px", margin:"10px"}}/>Biển {item.licensePlate}</div>
                                        <div className="w-100"></div>
                                        <div className="col"><img src="https://www.seekpng.com/png/detail/787-7877997_png-file-seat-icon-png.png" style={{width : "20px", margin:"10px"}}/>{item.seatNumber} Chỗ</div>
                                        <div className="col"><img src="https://www.seekpng.com/png/detail/91-919510_sedan-svg-png-icon-free-download-sedan-car.png" style={{width : "40px", margin:"10px"}}/>Hạng {item.carCategory.name}</div>
                                        <div className="w-100"></div>
                                        <div className='col'> <img src={item.image} alt="Generic placeholder image" className="ml-lg-5 order-1 order-lg-2"/></div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-1">

                                        <h6 className="font-weight-bold my-2 item-price">{item.price.toLocaleString()}₫/ngày</h6>
                                    </div>
                                    <a className="list-btn" href={"/detail/"+item.id}>Chi tiết</a>
                                </div>
                            
                            </div> 
                        </li> 
                    )}
                    </ul> 
                </div>
            </div>
        </main>
        </div>
    </>
       
    )
}