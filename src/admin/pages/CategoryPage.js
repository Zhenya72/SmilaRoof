import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import ModalAddItem from '../Modal/ModalAddItem';
import ModalEditItem from '../Modal/ModalEditItem';
import Loader from '../../Components/Loader/Loader';
import MyCard from '../../Components/MyCard/MyCard';
import Search from '../../Components/Search/Search';
import { useGetCategory } from '../../queries/CategoryQueries';
import { useGetSubcategories, useDeleteSubcategory, useVisibilitySubcategory, useEditSubcategory, useAddSubcategory } from '../../queries/SubcategoryQueries';
import { ToastContainer } from 'react-toastify';
import './page.scss'
const CategoryPage = () => {
  const navigate = useNavigate();
  const { categoryID } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [subcategoryId, setSubcategoryId] = useState(null);
  const [subcategoryName, setSubcategoryName] = useState('');
  const [subcategoryImageUrl, setSubcategoryImageUrl] = useState('');
  const [modalEditShow, setModalEdiShow] = useState(false);
  
  const { data: categoryData } = useGetCategory(categoryID);
  const { data: subcategories, isLoading } = useGetSubcategories(categoryID); 
  const deleteSubcategoryMutation = useDeleteSubcategory();
  const visibilitySubcategoryMutation = useVisibilitySubcategory();
  const addSubcategoryMutation = useAddSubcategory();
  const editSubcategoryMutation = useEditSubcategory();

  const TransitionSubcategory = (categoryID, id) => {
    navigate(`/admin/categories/${categoryID}/subcategory/${id}`);
  }

  const filteredSubcategories = subcategories?.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditSubcategory = (id, name, imageUrl) => {
    setSubcategoryId(id);  
    setSubcategoryName(name); 
    setSubcategoryImageUrl(imageUrl); 
    setModalEdiShow(true); 
  };

  const handleEditCloseModal = () => {
    setModalEdiShow(false);
  };
    
  return (
    <Container className='conteiner'>
      <ToastContainer />
      <h1 className='title'>Категорія {categoryData && categoryData.name}</h1>
      {isLoading && <Loader />}
      {filteredSubcategories && !filteredSubcategories.length && <p className='notData'>Підкатегорій за заданим запитом не знайдено або не створено</p>}
      <div>
        <Search searchTerm={searchTerm} handleSearch={(e) => setSearchTerm(e.target.value)} isDisabled={!subcategories || !subcategories.length} />
        <div className='conteiner__card'>
          {filteredSubcategories && filteredSubcategories.length>0 &&
            filteredSubcategories.sort((a, b) => a.name.localeCompare(b.name))
              .map((cat) => (
                <MyCard
                  key={cat._id}
                  id={cat._id}
                  title={cat.name}
                  imageUrl={cat.imageUrl}
                  visibility={cat.visibility}
                  onDelete={() => deleteSubcategoryMutation.mutate(cat._id)}
                  onVisibility={() => visibilitySubcategoryMutation.mutate(cat._id)}
                  onEdit={() => handleEditSubcategory(cat._id, cat.name, cat.imageUrl)}
                  onTransition={() => TransitionSubcategory(categoryID, cat._id)}
                />
              ))}
        </div>
      </div>      
      
      <ModalAddItem
        type="subcategory"
        onSubmit={(name, imageUrl, categoryID) => addSubcategoryMutation.mutate(name, imageUrl, categoryID)}
      />
      <ModalEditItem
        modalEditShow={modalEditShow}
        id={subcategoryId}
        type="subcategory"
        initialName={subcategoryName}
        initialImageUrl={subcategoryImageUrl}
        handleEditCloseModal={handleEditCloseModal}
        onSubmit={(id, name, imageUrl) => editSubcategoryMutation.mutate(id, name, imageUrl)}
      />
    </Container>
  );
};

export default CategoryPage;