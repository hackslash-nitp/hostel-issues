// import React, {useState} from 'react'
// import axios from "axios"
// import { Link, useNavigate } from "react-router-dom"
// import  "./styles/complain.css"
// //import status from './status'


// function Complain() {
//   const [info, setInfo] = useState({
// 		hname: '',
// 		issue: '',
// 		message: '',
// 		room: '',
// 		buttonText: 'Submit',
// 		uploadPhotosbuttonText: 'Upload files',
// 	});

//   const handleChange = name => e => {
//     console.log(name,e.target.value);
// 		setInfo({ ...info, [name]: e.target.value });
// 	};

  
//   const [error, setError] = useState("");
//   // const navigate = useNavigate();

//   const [records, setrecords]= useState([]);
//     const { hname, issue, message,room, buttonText, uploadPhotosbuttonText } = info;
// 	const { REACT_APP_CLOUD_NAME, REACT_APP_UPLOAD_SECRET } = process.env;


//   let name,value;
//   const handleSubmit = async(e) => {
// 		e.preventDefault();
//     try {
// 			const url = "http://localhost:8080/api/complaint";//put url of local server here
// 			const { info: res } = await axios.post(url, info);
// 			localStorage.setItem("token", res.info);
//       // navigate("/status");
// 			console.log(res.message);
// 			window.location = "/";
//     setInfo({		hname: '',
// 		issue: '',
// 		message: '',
// 		room: '',
// 		buttonText: 'Submitted',
// 		uploadPhotosbuttonText: 'Uploaded'})
//     console.log(e);
//     name=e.target.name;
//     value=e.target.value;
//     setInfo({...info,[name]:value});
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
    
// 	};

  
//   // const uploadWidget = () => {
// 	// 	window.cloudinary.openUploadWidget(
// 	// 		{
// 	// 			cloud_name: REACT_APP_CLOUD_NAME,
// 	// 			upload_preset: REACT_APP_UPLOAD_SECRET,
// 	// 			tags: ['images'],
// 	// 		},
// 	// 		function (error, result) {
// 	// 			if (error) console.log(error);
// 	// 			setInfo({ ...info, uploadPhotosbuttonText: 'Uploaded' });
// 	// 		}
// 	// 	);
// 	// };


//  // send the data to the backend
//      const complainForm= async(e)=>{
//       console.log("now we are on the our complain form")
//       e.preventDefault();

//       const {hname,issue,message,room}= info;
//            const res = await fetch("/complain",{
//             method:"POST",
//             headers:{
//               "Context-Type":"application/json"
//             },
//             body:JSON.stringify( {hname,message,issue,room})
          
//            })

//            const data= await res.json(); 
//            if (!data) {
//             console.log("complain not send");
//            }else {
//             console.log("check")
//             alert("message send");
//             setInfo({...info, message:" "})
//            }
           

           
//      }


//   return (
  
//     <div className="login_container">
//       <form onSubmit={handleSubmit} className="login_form_container" method="POST">
//     <div className="form"><h1><center>We are here to help you!</center></h1>
//       <label htmlFor='hname'>Name of hostel</label>
//       <select id='hname' name='hname' value={info.hname} onChange={handleChange('hname')} className="input"> 
//                      <option value="">Select your Hostel</option>
//                      <option value="Brahmaputra">Brahmaputra</option>
//                      <option value="Ganga">Ganga</option>
//                      <option value="Kosi">Kosi</option>
//                      <option value="None">None</option>
//                 </select>	
//       <br/>
//     {/* </div> */}
//     <br/>
//     {/* <div className='form_container'> */}
//       <label>Enterm Complain:</label>
//       <input
//         name="issue"
//         value={info.issue}
//         className="input"
//         onChange={handleChange('issue')}
//         type='text'
//         placeholder='Enter your subject of issue'
//         required
//       />
//     {/* </div> */}
//     <br/>
//     {/* <div className='form_container '> */}
//       <label>Room number:</label>
//       <input
//          name="room"
//         value={info.room}
//         onChange={handleChange('room')}
//         type='text'
//         className="input"
//         placeholder='Enter room number and block'
//         required
//       />
//     {/* </div> */}
//     {/* text area */}<br/>
//     {/* <div className='form_container'> */}
//       <label>Description</label>
//       <input
//         name="message"
//         onChange={handleChange('message')}
//         type='textarea'
//         value={info.message}
//         rows={3}
//         className="input2"
//         placeholder='Enter detailed issue'
//         required
//       />

//     <br/><br/>
//     {error && <div className="error_msg">{error}</div>}<br/><br/>
//             {/* <button onClick={uploadWidget} className='button'>
//     {info.uploadPhotosbuttonText}
//       </button> */}
     
//     <button type='submit' className="green_btn}"  onClick={complainForm}>{buttonText}</button>
//   </div> 
//   </form>
  
//    {/* <div>
//     <Link to="/status">
//       <button type="button">Check your status</button>
//     </Link>
//    </div> */}
  
//   </div>
//   )
// }
// export default Complain;


import React,{useState} from 'react'
import Pic from "../images/signup_pic.jpg"
import "./styles/signup.css"

const Complain = () => {

  const [user,setUser]=useState({
    hostel_name:"",room_no:"",issue:"",message:""});

    let name,value;
    const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
    }


    // send the data to the backend
   const complainForm= async(e)=>{
    e.preventDefault();
    
    const {hostel_name,room_no,issue,message}=user;
   const res= await fetch("/complain",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      hostel_name,room_no,issue,message
    })
   })
  const data=await res.json();
  if(res.status!=201 || !data){
    window.alert("Filled Complain form");
    console.log("Filled Complain form");
  }else{
    window.alert("Complain send Successfully");
    console.log("Complain send Successfully");
    setUser({...user,hostel_name:"",room_no:"",issue:"",message:""})
  }
  }



  return (
   <>
    <div className="body">
  <div className="containerHostel">
      <form className='complain-form' id='complain-form' method='POST'>
        <div className="row">
            <div className="sign_cont col-md-6">
              <div>
                <img className='signupPic' src={Pic} alt="" />
                </div>
            </div>
            <div className=" register col-md-6">
                
                <br/>
                <h3>We are here to help you!</h3>
                <br/>
                <input type="text" placeholder='Your Hostel Name' name='hostel_name' id='hname' autoComplete='off'
                value={user.hostel_name}
                onChange={handleInputs}
                />
                <input type="text" placeholder='Room No.' name='room_no' id='room_no' autoComplete='off'
                value={user.room_no}
                onChange={handleInputs}
                />
                <input type="text" placeholder='Your Issue' name='issue' id='issue' autoComplete='off'
                value={user.issue}
                onChange={handleInputs}
                />
                 <input type="text" placeholder='Description' name='message' id='message' autoComplete='off'
                value={user.message}
                onChange={handleInputs}
                />
                <br/>
                <br/>
                <div className="form-group form-button">
               <input type="submit" name="signup" id="signup" className='form-submit' value='SEND'  onClick={complainForm}/>
               </div>
            </div>
        </div>
      </form>
  </div>
  </div>
  </>
  )
}

export default Complain
