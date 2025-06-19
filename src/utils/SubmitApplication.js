import axios from 'axios'; 

const API_BASE_URL = 'https://anicomic-india.onrender.com'; 
const API_LOCAL_URL = 'http://localhost:4000'; 

const submitApplication = async (formData) => { //  Explicitly type formData
  try {
    const response = await axios.post(
      `${API_BASE_URL}/add-applicants`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
        timeout: 10000,  
      }
    );
    return response.data; 
  } catch (error) { // Type the error as any or AxiosError
    console.error('❌ Error submitting application:', error);
  }
}

export default submitApplication;  //  Export the function
