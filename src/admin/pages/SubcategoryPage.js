// import { useState } from 'react';
import { Container } from 'react-bootstrap';
// import { useNavigate, useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import ModalAddSubcategory from '../Modal/ModalAddSubcategory'
// import ModalEditSubcategory from '../Modal/ModalEditSubcategory'
// import Loader from '../../Components/Loader/Loader';
// import apiUrl from '../../config'
// import Search from '../../Components/Search/Search';
// import MyCard from '../../Components/MyCard/MyCard';
import { useGetSubcategory } from '../../queries/SubcategoryQueries';
import { ToastContainer } from 'react-toastify';
import './page.scss'
const SubcategoryPage = () => {
  const { subcategoryID } = useParams();

  const { data: subcategoryData } = useGetSubcategory(subcategoryID);

    
  return (
    <Container className='conteiner'>
      <ToastContainer />
      <h1 className='title'>Підкатегорія {subcategoryData && subcategoryData.name}</h1>
      {/* {loading && <Loader />} */}
      {<div>
        <h1>tovaru</h1>
        {/* <Search searchTerm={searchTerm} handleSearch={(e) => setSearchTerm(e.target.value)} /> */}
      </div>}
      
      
      
    </Container>
  );
};

export default SubcategoryPage;