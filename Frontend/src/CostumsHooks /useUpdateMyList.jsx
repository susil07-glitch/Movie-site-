import React, { useContext, useState } from 'react'
import { AuthContext } from '../Contex/UserContex'
import toast from 'react-hot-toast'

const useUpdateMyList = () => {

     const {User}=useContext(AuthContext)

     const [isMyListUpdates ,setIsMyListUpdates]=useState(fales)

     // tostes function //

     function notify(){
        toast.success("Movies added to my list")

     }

     function alertError(){
        toast.error(message)

     }

     const AddToMyList=(movie)=>{
        updateDoc(doc(db ,"MyList" ,User.uid),{movies:arrayUnion(movie)})
        .then(()=>{
         console.log("My list update successfull ")
         notify()
         isMyListUpdates(true)
        })
        .catch(()=>{
         
        })

     }

  return (
    <div>
      
    </div>
  )
}

export default useUpdateMyList
