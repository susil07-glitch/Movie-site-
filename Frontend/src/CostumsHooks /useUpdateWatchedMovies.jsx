import React, { useContext, useState } from 'react'
import { AuthContext } from '../Contex/UserContex'
import toast ,{Toaster}from 'react-hot-toast'
import {db} from 'firebase'
const useUpdateWatchedMovies = () => {

    const {User}=useContext(AuthContext)
    const [error,setError]=useState(false)

    function notify(){
        toast.success("Movie removed from watched List")

    }

    function alertError(message){
        toast.error(message);

    }
  // Add to watched movie list function //

    const  AddToWatchedList = (movie)=>{
        updateDoc(doc(db,"WatchedMovie",User.uid),{
            movies:arrayUnoin(movie),

        })

    }
 

    // remove from watched movie list //

    const RemoveFromWatchedList =(movie)=>{

        updateDoc(doc(db,"watchedMovie",User.uid),{
            movies:arrayRemove(movie)

        })

        .then(()=>{
            notify();

        })
        .catch((error)=>{

            console.log(error.code)
            console.log(error.message)
            alertError(error.message)
            setError(true)

        })

    }


    const removePopupMessage = (
    <Toaster
      toastOptions={{
        style: {
          padding: "1.5rem",
          backgroundColor: Error ? "#fff4f4" : "#f4fff4",
          borderLeft: Error ? "6px solid red" : "6px solid lightgreen",
        },
      }}
    />
  );



  return {AddToWatchedList,RemoveFromWatchedList,removePopupMessage}
}

export default useUpdateWatchedMovies
