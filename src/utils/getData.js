const API = 'http://localhost:8000/api/products';

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;

    try {
        const response = await fetch(apiURL);
        
        const data = await response.json();
       
        return data.products;
    }catch(error){
        console.log('Fetch Error', error)
    }
}

export default getData;