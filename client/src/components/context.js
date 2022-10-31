// import React,{ useEffect, useState } from "react";

// const AppContext=React.createContext();
// let AppProvider;
// const Context = () => {

//     const [userData,setUserData]=useState({});
      
//    const callAboutPage= async()=>{
//       try {
//         const res= await fetch('/about',{
//             method:"GET",
//             headers:{
//              Accept:"appllication/json",
//              "Content-Type":"application/json"
//             },
//             credentials:"include"
//         });
//         const data= await res.json();
//          console.log(data);
//          if(!res.status===200){
//            const error=new Error(res.error);
//            throw error;
//          }
//          setUserData(data);
//       } catch (error) {
//           console.log(error);
//       }
//    }
 
//     useEffect(()=>{
     
//        callAboutPage();
//     },[])
 
  
//   AppProvider=({children})=>{

//   return (
//     <AppProvider value="shashank">
//         {children}
//     </AppProvider>
//   )
// }
// }

// export default Context
// export {AppContext,AppProvider};