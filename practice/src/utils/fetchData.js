const API = process.env.API


const fetchData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  let nid = Math.floor(Math.random()*9)
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data.results[nid];
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default fetchData;