import React from 'react';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';
import img7 from '../../images/img7.png';



const Home = () => {
    return (
        <div class="container my-4">
            <h3>Login as admin</h3>
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h3>First Click on the LOGIN</h3>
                </div>
                <div class="col-lg-6 col-12">
                    <img src={img1} className='img-fluid' alt="" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h3>You can logged as both user and admin</h3>
                    --------admin-------- <br />
                    Email: admin@admin.com <br />
                    Password: 123456
                </div>
                <div class="col-lg-6 col-12">
                    <img src={img2} className='img-fluid' alt="" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h3>If you logged as admin please click the Dashboard</h3>
                </div>
                <div class="col-lg-6 col-12">
                    <img src={img6} className='img-fluid' alt="" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h3>Then please the ORDER DETAILS</h3>
                    <p className='text-danger'>If you can not see ORDER DETAILS please refresh the page </p>
                </div>
                <div class="col-lg-6 col-12">
                    <img src={img7} className='img-fluid' alt="" />
                </div>
            </div>
            <hr />
            <h3>Login as user</h3>
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h3>First Click on the LOGIN</h3>
                </div>
                <div class="col-lg-6 col-12">
                    <img src={img1} className='img-fluid' alt="" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h3>You logged as both user and password</h3>
                    --------user-------- <br />
                    Email: user@user.com <br />
                    Password: 123456
                </div>
                <div class="col-lg-6 col-12">
                    <img src={img2} className='img-fluid' alt="" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h3>If you logged as user please click the Dashboard</h3>
                </div>
                <div class="col-lg-6 col-12">
                    <img src={img3} className='img-fluid' alt="" />
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-12">
                    <h3>Then plase click the ADD ORDERS</h3>
                </div>
                <div class="col-lg-6 col-12">
                    <img src={img5} className='img-fluid' alt="" />
                </div>
            </div>



        </div>
    );
};

export default Home;


// https://i.ibb.co/646fnG7/img5.png
// https://i.ibb.co/Ph3pSh0/img4.png
// https://i.ibb.co/QcPvQzT/img3.png
// https://i.ibb.co/D9hVSZz/img2.png
// https://i.ibb.co/cDcGHPw/img1.png