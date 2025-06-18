import axios from 'axios'; // Import Axios

const API_BASE_URL = 'https://anicomic-india.onrender.com'; // Define base URL

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
        timeout: 10000, // 10 seconds (adjust as needed)    
      }
    );
    return response.data; 
  } catch (error) { // Type the error as any or AxiosError
    console.error('❌ Error submitting application:', error);
  }
}

export default submitApplication;  //  Export the function
