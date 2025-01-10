import React, { useEffect } from 'react'
import toast from "react-hot-toast";

const Success = () => {

  useEffect(() => {
    // toast needs a delay to show
    const timer = setTimeout(() => {
      toast.success("Payment successful!");
    }, 100); // 1s delay
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      success
    </div>
  )
}

export default Success
