import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Cover from './Cover';


const Navbar = () => {
    const { user, logOut, admin } = useAuth()


    return (
        <>
            <Cover></Cover>
            <div className='container-fluid m-0 p-0 sticky-top'>

                <nav class="navbar p-0 m-0 navbar-expand-lg navbar-light NavBarBg text-center   text-light ">
                    <div class="container-fluid   p-0 m-0">

                        <button class="navbar-toggler mx-auto border border-1 bg-info border-info text-info py-2 my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon text-info"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav mx-auto py-3">
                                <NavLink className='mx-3 my-2 fw-bold text-center border border-primary px-4 py-2 bg-primary  rounded-pill' style={{ fontSize: '18px' }} to="/home">HOME</NavLink>
                                <NavLink className='mx-3 my-2 fw-bold border border-primary px-4 py-2 bg-primary text-center  rounded-pill' style={{ fontSize: '18px' }} to="/books">BOOKS</NavLink>
                                <NavLink className='mx-3 my-2 fw-bold border border-primary px-4 py-2 bg-primary text-center  rounded-pill' style={{ fontSize: '18px' }} to="/blogs">BLOGS</NavLink>
                                <NavLink className='mx-3 my-2 fw-bold border border-primary px-4 py-2 bg-primary text-center  rounded-pill' style={{ fontSize: '18px' }} to="/contact">CONTACT</NavLink>
                                {
                                    user.email && <li class="nav-item dropdown my-3">
                                        <NavLink className='mx-3  fw-bold border border-primary nav-a dropdown-toggle  px-4 py-2 bg-primary text-center  rounded-pill' style={{ fontSize: '18px' }} to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            DASHBOARD
                                        </NavLink>


                                        <ul class="dropdown-menu text-center bg-dark" aria-labelledby="navbarDropdown">


                                            <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }}
                                                className="nav-a active nav-a text-uppercase text-info"
                                                to="/myOrders"
                                            >
                                                My Orders
                                            </NavLink> <br />

                                            <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }}

                                                className="nav-a active nav-a text-uppercase text-info"
                                                to="/addReview">

                                                Add Review
                                            </NavLink>

                                            <br />
                                            {user.email && admin &&
                                                <>
                                                    <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }}

                                                        className="nav-a active nav-a  text-info"
                                                        to="/allOrders"
                                                    >
                                                        Manage All Orders
                                                    </NavLink>
                                                    <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }}

                                                        className="nav-a active nav-a  text-info"
                                                        to="/addProducts"
                                                    >
                                                        Add a Products
                                                    </NavLink>
                                                    <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }}

                                                        className="nav-a active nav-a  text-info"
                                                        to="/allService"
                                                    >
                                                        Manage Products
                                                    </NavLink>
                                                    <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }}

                                                        className="nav-a active nav-a  text-info"
                                                        to="/makeAdmin"
                                                    >
                                                        Make Admin
                                                    </NavLink>
                                                </>}
                                            <br />


                                            <li onClick={logOut} className=" btn ms-2 btn-info">
                                                Log Out
                                            </li>

                                        </ul >

                                    </li >
                                }



                                {
                                    user.email ?
                                        <>
                                            < li class="nav-item fs-6 mx-2 my-3">
                                                <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }} to='/' className='border px-3 py-2 border border-info rounded-pill' onClick={logOut}>Sign Out</NavLink>

                                            </li>
                                            <li class="nav-item fs-6 mx-2  my-3">
                                                <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }} to='/'>{user?.displayName}</NavLink>
                                            </li ></> :
                                        < li class="nav-item fs-6 mx-2  my-3">
                                            <NavLink style={{ color: '#0dcaf0', fontSize: '18px' }} to='/signin' className='border border-info px-4 py-2 rounded-pill'>Sign in</NavLink>
                                        </li >

                                }
                            </div>
                        </div>
                    </div>
                </nav >
            </div >
        </>);
};

export default Navbar;