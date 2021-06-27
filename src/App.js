import React, {useEffect, useState}from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import ImageGallary from "./component/imageGallary";
import Search from "./component/search";
import { CircularProgress } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
const App = () =>{
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true);
  const [formData, setFormData]= useState('');
  const [page, setPage] =useState();

  const fetchData = async(input, page) =>{
    setLoading(true)
    const response= await axios.get(
      'https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=SPInJO4rdl9Rv1lTehjZX-m6Wg8A5VaBnSFvwKJ7Y-I&per_page=16'
      );
    const data = await response.data
    setPhotos(data);
    console.log(photos);
    setLoading(false);
  };
  const handleChange =(event)=>{
    setFormData(event.target.value)
  };
  const handleSubmit =(event)=>{
    event.preventDefault();
    fetchData(formData);
    console.log(formData);
  };
  const pageChange = (event,value) =>{
    setPage(value);
    fetchData(formData,value);
  };

  useEffect(() =>{
    fetchData();
  },[]);

  if(loading)
   return <div style={
    {
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    }
  }
  ><CircularProgress size={150}/>
  </div>

  return(
    <Container>
      <Search change={handleChange} submit={handleSubmit}/>
      <ImageGallary photos={photos.results}/>
      <div style={{
        margin:'1rem 0',
        display:'flex',
        justifyContent:'center',
      }}>
        <Pagination onChange={pageChange} page={page} count={16} variant='outlined' color='secondary'/>
      </div>
    </Container>
  )
}



export default App