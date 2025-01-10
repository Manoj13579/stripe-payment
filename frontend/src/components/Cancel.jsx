import React, { useEffect } from 'react'
import toast from "react-hot-toast";


const Cancel = () => {

  useEffect(() => {
    // toast needs a delay to show
    const timer = setTimeout(() => {
      toast.error("Payment cancelled!");
    }, 100); // 1s delay
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      cancelled
    </div>
  )
}

export default Cancel
