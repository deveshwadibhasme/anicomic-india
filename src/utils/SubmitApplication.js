import axios from 'axios'; // Import Axios

const API_BASE_URL = 'https://anicomic-india-production.up.railway.app'; // Define base URL

const submitApplication = async (formData) => { //  Explicitly type formData
  try {
    console.log('📤 Submitting application data...');
    console.log('formData:', formData); // Log the form data

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

    console.log('✅ Application submitted successfully!');
    console.log('Response:', response); // Log the entire response

    return response.data; // Return the data from the response

  } catch (error) { // Type the error as any or AxiosError
    console.error('❌ Error submitting application:', error);

    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      console.error('   Axios error details:');
      console.error('     -  URL:', error.config?.url);
      console.error('     -  Method:', error.config?.method);
      console.error('     -  Status:', error.response?.status);
      console.error('     -  Status Text:', error.response?.statusText);
      console.error('     -  Response Data:', error.response?.data);
      console.error('     -  Request Headers:', error.config?.headers);
      console.error('     -  Error Code:', error.code); //  The error code
      console.error('     -  Message:', error.message);

      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timed out. Please check your network connection.');
      } else if (error.code === 'ERR_NETWORK') {  //  Handle Network error
         throw new Error('Network error. Please check your internet connection.');
      }
       else if (error.response?.status === 403) {
        throw new Error('Forbidden. You do not have permission to access this resource.');
      }
      else if (error.response?.status === 404) {
        throw new Error('Resource not found. The server may be unavailable.');
      }
       else {
        throw new Error(`Failed to submit application: ${error.message}`);
      }
    } else {
      // Handle generic errors (non-Axios errors)
      throw new Error(`An unexpected error occurred: ${error.message}`);
    }
  }
};

export default submitApplication;  //  Export the function
