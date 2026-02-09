import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

    // useEffect(() => {
    //     const handleOnline = () => setOnlineStatus(true);
    //     const handleOffline = () => setOnlineStatus(false);

    //     window.addEventListener("online", handleOnline);
    //     window.addEventListener("offline", handleOffline);

    //     return () => {
    //         window.removeEventListener("online", handleOnline);
    //         window.removeEventListener("offline", handleOffline);
    //     };
    // }, []);
    useEffect(()=>{
      window.addEventListener("online", () =>{
        setOnlineStatus(true);
      })
      window.addEventListener("offline", () =>{
        setOnlineStatus(false);
      })

    },[]);
    return onlineStatus; 
}
export default useOnlineStatus;