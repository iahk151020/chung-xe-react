import React from 'react'
import { Heading } from '../components/Heading';
import { Slide } from '../components/Slide';
import { Footer } from '../components/Footer';

export const UserHome = () => {
    return(
        <>
            <Heading/>
            <Slide/>
            <main className='py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-12">
                            <h3 className="title" style={{fontFamily:'Courier New'}}>Lợi ích của Chungxe</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className = "col-md-6">
                            <div className="col-lg-4">
                                <img src="https://chungxe.vn/assets/images/icon/icon1.png" alt="" width="100" height="100"/>
                                <h2 style={{fontFamily:'Courier New'}}>Nhiều lựa chọn</h2>
                                <p>Hàng trăm loại xe đa dạng ở nhiều địa điểm trên cả nước, phù hợp với mọi mục đích của bạn</p>
                            </div>
                            <div className="col-lg-4">
                                <img src="https://chungxe.vn/assets/images/icon/icon3.png" alt="" width="100" height="100"/>
                                    <h2 style={{fontFamily:'Courier New'}}>Giá cả cạnh tranh</h2>
                                    <p>Giá thuê được niêm yết công khai và rẻ hơn tới 10% so với giá truyền thống</p>
                            </div>
                            <div class="col-lg-4">
                                <img src="https://chungxe.vn/assets/images/icon/icon5.png" alt="" width="100" height="100"/>
                                <h2 style={{fontFamily:'Courier New'}}>Hỗ trợ 24/7</h2>
                                <p>Có nhân viên hỗ trợ khách hàng trong suốt quá trình thuê xe</p>
                            </div>
                        </div>

                        <div className = "col-md-6">
                            <div className="col-lg-4">
                                <img src="https://chungxe.vn/assets/images/icon/icon1.png" alt="" width="100" height="100"/>
                                <h2 style={{fontFamily:'Courier New'}}>Nhiều lựa chọn</h2>
                                <p>Hàng trăm loại xe đa dạng ở nhiều địa điểm trên cả nước, phù hợp với mọi mục đích của bạn</p>
                            </div>
                            <div className="col-lg-4">
                                <img src="https://chungxe.vn/assets/images/icon/icon3.png" alt="" width="100" height="100"/>
                                    <h2 style={{fontFamily:'Courier New'}}>Giá cả cạnh tranh</h2>
                                    <p>Giá thuê được niêm yết công khai và rẻ hơn tới 10% so với giá truyền thống</p>
                            </div>
                            <div className="col-lg-4">
                                <img src="https://chungxe.vn/assets/images/icon/icon5.png" alt="" width="100" height="100"/>
                                <h2 style={{fontFamily:'Courier New'}}>Hỗ trợ 24/7</h2>
                                <p>Có nhân viên hỗ trợ khách hàng trong suốt quá trình thuê xe</p>
                            </div>
                        </div>
                        
                    </div>
                    <hr className="dash"/>
                    <div className = "container" style={{backgroundColor:'rgba(0, 0, 0, 0.05)'}}>
                        <div className="row featurette">
                            <div className="col-md-7">
                                <h2 className="featurette-heading"  style={{fontFamily:'Courier New'}}>Đặt xe</h2>
                                <p className="lead" style={{fontFamily:'Courier New'}}>Nhanh chóng đặt một chiếc xe ưng ý thông qua Website hoặc Ứng dụng (App) của chúng tôi</p>
                            </div>
                            <div className="col-md-5">
                                <img className="featurette-image img-fluid mx-auto"  alt="500x500" style={{width:'350px', height: '250px'}} src="https://chungxe.vn/assets/images/icon/step1.webp"/>
                            </div>
                        </div>
                        <hr/>
                        <div className="row featurette">
                            <div className="col-md-7 order-md-2">
                                <h2 className="featurette-heading" style={{fontFamily:'Courier New'}}>Nhận xe</h2>
                                <p className="lead" style={{fontFamily:'Courier New'}}>Nhận xe tại nhà hoặc các đại lý trong khu vực của chúng tôi</p>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <img className="featurette-image img-fluid mx-auto" alt="500x500" style={{width:'350px', height: '250px'}} src="https://chungxe.vn/assets/images/icon/step2.webp"/>
                            </div>
                        </div>
                        <hr/>
                        <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading" style={{fontFamily:'Courier New'}}>Tận hưởng</h2>
                            <p className="lead" style={{fontFamily:'Courier New'}}>Tất cả các phương tiện của chúng tôi đều đạt chuẩn an toàn</p>
                        </div>
                        <div className="col-md-5">
                            <img className="featurette-image img-fluid mx-auto"  alt="500x500" style={{width:'350px', height: '250px'}} src="https://chungxe.vn/assets/images/icon/step3.webp"/>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
