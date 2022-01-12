import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound'
import Footer from './Components/Footer/Footer'
import Blog from './Components/Home/Blog/Blog'
import Books from './Components/Home/Books/Books'
import Login from './Components/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FreeRead from './Components/Home/FreeRead/FreeRead';
import Navbar from './Components/Navbar/Navbar';
import AuthProvider from './Context/AuthProvider';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import MyOrders from './Components/MyOrders/MyOrders'
import AllOrders from './Components/AllOrders/AllOrders'
import MakeAdmin from './Components/ManageProducts/MakeAdmin/MakeAdmin'
import ManageProducts from './Components/ManageProducts/ManageProducts'
import NewOffer from './Components/AddBooks/AddBooks'
import AddReview from './Components/AddBookReview/AddBookReview'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import AdminRoute from './AdminRoute/AdminRoute'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/home' element={<Home></Home>} />
            <Route path='/books' element={<Books></Books>} />
            <Route path='/books/:id'
              element={<PrivateRoute><PlaceOrder /></PrivateRoute>}
            />
            <Route path='/myOrders' element={<MyOrders />} />

            <Route path='/allOrders' element={<AdminRoute><AllOrders /></AdminRoute>} />

            <Route path='/makeAdmin' element={<ManageProducts><MakeAdmin /></ManageProducts>} />

            <Route path='/allService' element={<AdminRoute><ManageProducts></ManageProducts></AdminRoute>} />

            <Route path='/addProducts' element={<AdminRoute><NewOffer /></AdminRoute>} />

            <Route path='/addReview' element={<AddReview />} />

            <Route path='/blogs' element={<Blog></Blog>} />

            <Route path='/contact' element={<FreeRead></FreeRead>} />

            <Route path='/signin' element={<Login></Login>} />

            <Route path='*' element={<NotFound></NotFound>} />


          </Routes>
          <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
