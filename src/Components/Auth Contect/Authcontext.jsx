import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase Setup/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from 'firebase/auth';


export const contextForm = createContext(null)
const Authcontext = ({children}) => {
    const[user,setuser] = useState(null)
    const [loader,setloader] = useState(true)

    const signupSetup = (email, password) =>{
        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const signinSetup = (email, password) =>{
        setloader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
        const unSubcribe =  onAuthStateChanged(auth,currentUser =>{
            setuser(currentUser)
            setloader(false)
            return () =>{
                unSubcribe();
                setuser(null)
            }
        }) 
    },[])

    const logOut = () =>{
        setloader(true)
       return signOut(auth);

    }
   
    // const updateUser = () =>{
        
    //     return updateProfile(auth.currentProfile,profile =>{
    //         console.log("current user",currentProfile);
    //     })
    // }

   

    const contextData = {
        person : "Azmir Khan",
        signupSetup,
        signinSetup,
        user,
        logOut,
        loader,
        
    }
    return (
        <div>
            <contextForm.Provider value={contextData}>
               {children}
            </contextForm.Provider>
        </div>
    );
};

export default Authcontext;