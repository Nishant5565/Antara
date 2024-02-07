import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { authUser } from '../../Functions/Constants';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  // Verify the token and navigate to the login page if the token is present but invalid
  const [user, setUser] = useState('');

const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logout = async () => {
     setIsLoggedIn(false);
     localStorage.removeItem('token');
     navigate('/');
   };

   useEffect(() => {
     authUser().then((data) => {
       setUser(data.data);
     })
   }
     , []);
     console.log(user);

useEffect(() => {
   const checkAndNavigate = async () => {
     const token = localStorage.getItem('token');
     if (token) {
       setIsLoggedIn(true);
     } else {
       setIsLoggedIn(false);
     navigate('/');
     }
   };
   checkAndNavigate();
 }, [navigate]);

 if (user.length === 0) {
   return <div className='dashboard-hero'></div>;
     }

  return (
    <>    
     <div className="flex justify-around items-center h-16 bg-pink text-white ">
          <h1 className='text-3xl font-bold'>Dashboard</h1>
          <div className='flex gap-1 '>
          <TypeAnimation
          sequence={[
            `Namaste ${user.name} 🙏`,
            1500, 
            `Hola ${user.name} 👋`,
            1500,
            `Hello ${user.name} 👐`,
            1500,
            `Bonjour ${user.name} 👋`,
            1500
          ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: '20px', display: 'inline-block', width: '200px'}}
              repeat={2}
            />

          </div>
     </div>
     {/* //* Styling in Dashboard.css */}
     <div className="dashboard-hero">
          <div className=''>
               <p   className=' text-brown flex gap-2'>
               Email Verification Status: {user.email_verified_at === null ? <div className=' flex gap-3'>
                    <p>Not Verified  </p>
                    <Link to='/verify'  className='text-white'
                    > Verify Now</Link>
               </div> : 'Verified'}
               

               </p>
          </div>
     </div>
    </>
  )
}

export default Dashboard