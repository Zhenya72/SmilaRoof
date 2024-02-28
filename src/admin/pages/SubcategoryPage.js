import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
// import { useNavigate, useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import ModalAddSubcategory from '../Modal/ModalAddSubcategory'
// import ModalEditSubcategory from '../Modal/ModalEditSubcategory'
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import apiUrl from '../../config'
import ErrorAlert from '../../Components/ErrorAlert/ErrorAlert';
// import Search from '../../Components/Search/Search';
// import MyCard from '../../Components/MyCard/MyCard';
import './page.scss'
const SubcategoryPage = () => {
  const { subcategoryID } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [subcategoryName, setSubcategoryName] = useState('');


  const fetchSubcategory = async (subcategoryID) => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.get(`${apiUrl}/subcategories/${subcategoryID}`);
      setSubcategoryName(response.data.name);
      setError(null); 
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('Помилка: неможливо встановити зв\'язок з сервером.');
      } else {
        setError('Помилка отримання підкатегорій');
      }
    } finally {
      setLoading(false);
    }
  };

  // const filteredCategories = subcategory.filter((cat) =>
  //   cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  useEffect(() => {
    if (subcategoryID !== undefined) {
      fetchSubcategory(subcategoryID);
    }
  }, [subcategoryID]);
    
  return (
    <Container className='conteiner'>
      <h1 className='title'>Підкатегорія {subcategoryName}</h1>
      {loading && <Loader />}
      {error ? <ErrorAlert error={error} /> : <div>
        <h1>tovaru</h1>
        {/* <Search searchTerm={searchTerm} handleSearch={(e) => setSearchTerm(e.target.value)} /> */}
      </div>}
      
      
      
    </Container>
  );
};

export default SubcategoryPage;