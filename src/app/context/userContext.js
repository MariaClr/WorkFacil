"use client"
import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

   useEffect( () => {
    const userCookies =  Cookies.get('usuario');
  
    
    if (userCookies) {
      try {
        const userData = JSON.parse(userCookies);
        setUser(userData);
      } catch (error) {
        setUser(userCookies); 
      }
    }
    console.log("teste cookies" + user);
    
  }, []); 


  const value = {
    user,
    setUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

