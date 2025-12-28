import React from "react";
import { useContext, useState } from "react";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Contex/UserContex";

function useUpdateMylist() {
  const { User } = useContext(AuthContext);
  const [isMyListUpdates, setisMyListUpdates] = useState(false);

  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  const addToMyList = async (movie) => {
    try {
      await axios.post("/api/mylist/add", {
        userId: User._id || User.uid,
        movie,
      });

      notifySuccess("Movie added to MyList");
      setisMyListUpdates(true);
    } catch (error) {
      notifyError(error.response?.data?.message || error.message);
    }
  };

  const removeFromMyList = async (movie) => {
    try {
      await axios.post("/api/mylist/remove", {
        userId: User._id || User.uid,
        movie,
      });

      notifySuccess("Movie removed from MyList");
      setisMyListUpdates(true);
    } catch (error) {
      notifyError(error.response?.data?.message || error.message);
    }
  };



  const PopupMessage = (

   
    <Toaster
      toastOptions={{
        style: {
          padding: "1.5rem",
          backgroundColor: "#f4fff4",
          borderLeft: "6px solid lightgreen",
        },
      }}
    />
  );

  return { addToMyList, removeFromMyList, PopupMessage, isMyListUpdates };
}

export default useUpdateMylist;
