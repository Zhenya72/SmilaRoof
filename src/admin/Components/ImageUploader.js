import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import apiUrl from '../../config';
import Loader from '../../Components/Loader/Loader';
import ErrorAlert from '../../Components/ErrorAlert/ErrorAlert';

const ImageUploader = ({ imageUrl, setImageUrl }) => {
  const inputFileRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChangeFile = async (e) => {
    setLoading(true);
    setError(null); 
    try {
      const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
      const formData = new FormData();
      const file = e.target.files[0];

      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (!allowedExtensions.includes(fileExtension)) {
        alert(`Неправильний тип файлу. Допустимі типи: ${allowedExtensions.join(", ")}`);
        return;
      }

      formData.append('image', file)
      const { data } = await axios.post(`${apiUrl}/upload`, formData)
      setImageUrl(data.url);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('Помилка: неможливо встановити зв\'язок з сервером.');
      } else {
        setError('Помилка при загрузці файлу!');
      }
    } finally {
      setLoading(false);
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl('');
  };

  return (
    <div>
      <input
        type='file'
        ref={inputFileRef}
        onChange={handleChangeFile}
        hidden
      />
      <Button onClick={() => inputFileRef.current.click()}>Завантажити зображення</Button>
      {loading && <Loader />}
      <ErrorAlert error={error} /> 
      {imageUrl && (
        <Button className='btn-danger' onClick={onClickRemoveImage}>
          Видалити
        </Button>
      )}
    </div>
  );
};

export default ImageUploader;
