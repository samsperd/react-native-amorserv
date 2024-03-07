import { createContext, useContext, useEffect, useState } from "react";
import ApiManager from '../api/ApiManager'
import AsyncStorage from '@react-native-async-storage/async-storage';




const Authcontext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState({})

    // Check if token and token storage has expired
    useEffect(() => {
        handleGetToken()
        user_profile()
    
    }, [])

    // Check if token is still avaliable every 5s
    useEffect(() => {
        setTimeout(() => {
          handleGetToken()
        }, 5000);
    })
      
    
    // check if token storage has expired
      const handleGetToken = async () => {
        const dataToken = await AsyncStorage.getItem('AccessToken')
    
        if (!dataToken) {
          setAuthenticated(false)
        }
        else {
           setAuthenticated(true)
          
        }
    
      }
    // log the user in
    const user_login = async (data) => {
        try {
            const result = await ApiManager("/auth/login", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                data: data
            });
            if (result.status == 200) {
                AsyncStorage.setItem('AccessToken', result.data.token);
                setAuthenticated(true)
                const dataToken = await AsyncStorage.getItem('AccessToken')
                ApiManager.defaults.headers.common['Authorization'] = `Bearer ${dataToken}`
              }
        } catch (error) {
            return error.response.data;
        }
    }

    // Register a user
    const user_register = async (data) => {
        try {
            const result = await ApiManager("/auth/register", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                data: data
            });

            return result

        } catch (error) {
            console.log("error", error);
            return error;
        }
    }

    // Get user profile
    const user_profile = async () => {

        try {
            const dataToken = await AsyncStorage.getItem('AccessToken')

            const result = await ApiManager("/user/profile", {
                method: "GET",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Bearer ${dataToken}`

                },
            });

            setUser(result.data);


        } catch (error) {
                setAuthenticated(false)
                AsyncStorage.removeItem('AccessToken')
        }
    }

    const user_logout = async () => {

    }


    return (
        <Authcontext.Provider value={{ authenticated, setAuthenticated, user_login, user_register, user }}>
            { children }
        </Authcontext.Provider>
    )
}


// Custom Hook to use Auth Context
export const useAuth = () => {
    const context = useContext(Authcontext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };