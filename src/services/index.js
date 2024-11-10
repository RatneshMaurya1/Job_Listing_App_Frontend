// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

// export const register = async (data) => {
//     const response = await fetch(`${BACKEND_URL}/api/signup`,{
//         method:"POST",
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     if(response.status === 200 || response.status === 400){
//         return response.json()
//     }else{
//         throw new Error("something went wrong")
//     }
// }
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const register = async (data) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/signup`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return await response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Something went wrong');
    }
  } catch (error) {
    throw new Error(error.message || 'An unexpected error occurred');
  }
};
