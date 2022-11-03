import React, {useState} from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from 'src/components/styles/styles.module.css'
//import status from './status'


function Complain() {
  const [info, setInfo] = useState({
		hname: '',
		issue: '',
		message: '',
		room: '',
		buttonText: 'Submit',
		uploadPhotosbuttonText: 'Upload files',
	});
  const [error, setError] = useState("");
  // const navigate = useNavigate();

  const [records, setrecords]= useState([]);
    const { hname, issue, message,room, buttonText, uploadPhotosbuttonText } = info;
	const { REACT_APP_CLOUD_NAME, REACT_APP_UPLOAD_SECRET } = process.env;

  const handleSubmit = async(e) => {
		e.preventDefault();
    try {
			const url = "http://localhost:8080/api/complaint";//put url of local server here
			const { info: res } = await axios.post(url, info);
			localStorage.setItem("token", res.info);
      // navigate("/status");
			console.log(res.message);
			window.location = "/";
    setInfo({		hname: '',
		issue: '',
		message: '',
		room: '',
		buttonText: 'Submitted',
		uploadPhotosbuttonText: 'Uploaded'})
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
    
	};

  const handleChange = name => e => {
    console.log(name,e.target.value);
		setInfo({ ...info, [name]: e.target.value });
	};
  // const uploadWidget = () => {
	// 	window.cloudinary.openUploadWidget(
	// 		{
	// 			cloud_name: REACT_APP_CLOUD_NAME,
	// 			upload_preset: REACT_APP_UPLOAD_SECRET,
	// 			tags: ['images'],
	// 		},
	// 		function (error, result) {
	// 			if (error) console.log(error);
	// 			setInfo({ ...info, uploadPhotosbuttonText: 'Uploaded' });
	// 		}
	// 	);
	// };
  return (
  
    <div className={styles.login_container}>
      <form onSubmit={handleSubmit} className={styles.login_form_container}>
    <div className={styles.form}><h1><center>We are here to help you!</center></h1>
      <label htmlFor='hname'>Name of hostel</label>
      <select id='hname' name='hname' value={info.hname} onChange={handleChange('hname')} className={styles.input}> 
                     <option value="">Select your Hostel</option>
                     <option value="Brahmaputra">Brahmaputra</option>
                     <option value="Ganga">Ganga</option>
                     <option value="Kosi">Kosi</option>
                     <option value="None">None</option>
                </select>	
      <br/>
    {/* </div> */}
    <br/>
    {/* <div className='form_container'> */}
      <label>Subject of issue</label>
      <input
        value={info.issue}
        className={styles.input}
        onChange={handleChange('issue')}
        type='text'
        placeholder='Enter your subject of issue'
        required
      />
    {/* </div> */}
    <br/>
    {/* <div className='form_container '> */}
      <label>Room number</label>
      <input
        value={info.room}
        onChange={handleChange('room')}
        type='text'
        className={styles.input}
        placeholder='Enter room number and block'
        required
      />
    {/* </div> */}
    {/* text area */}<br/>
    {/* <div className='form_container'> */}
      <label>Description</label>
      <input
        onChange={handleChange('message')}
        type='textarea'
        value={info.message}
        rows={3}
        className={styles.input2}
        placeholder='Enter detailed issue'
        required
      />

    <br/><br/>
    {error && <div className={styles.error_msg}>{error}</div>}<br/><br/>
            {/* <button onClick={uploadWidget} className='button'>
    {info.uploadPhotosbuttonText}
      </button> */}
     
    <button type='submit' className={styles.green_btn}>{buttonText}</button>
  </div> </form>
  
   {/* <div>
    <Link to="/status">
      <button type="button">Check your status</button>
    </Link>
   </div> */}
  
  </div>
  )
}
export default Complain;