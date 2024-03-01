import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import apiUrl from '../config'
import { toast } from 'react-toastify';

let isToastShown = false;
const useGetSubcategories = (categoryID) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['subcategories'],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/subcategories/category/${categoryID}`);
        return data;
      } catch (error) {        
        if (!isToastShown) {
          toast.error(`Помилка при отриманні підкатегорій: ${error.message}`);
          isToastShown = true;
        }
        queryClient.setQueriesData(['subcategories'], null);
      }
    },
  });
};

const useGetSubcategory = (categoryId) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['subcategory', categoryId],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/subcategories/${categoryId}`);
        return data;
      } catch (error) {        
        toast.error(`Помилка при отриманні підкатегорії: ${error.message}`);
        queryClient.setQueriesData(['subcategory', categoryId], null);
      }
    },
  });
};
const useAddSubcategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
        try {
          const { name, imageUrl, categoryID } = data;
          console.log(name)
          return await axios.post(`${apiUrl}/subcategories`, {
            name: name,
            imageUrl: imageUrl,
            category: categoryID
          });
        } catch (error) {        
            toast.error(`Помилка при додавані підкатегорії: ${error.message}`);
            throw Error;
        }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['subcategories'] }),
  });
};

const useEditSubcategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
        try {
            const { id, name, imageUrl } = data;
            return await axios.put(`${apiUrl}/subcategories/${id}`, {name, imageUrl});
        } catch (error) {        
            toast.error(`Помилка при редагувані підкатегорії: ${error.message}`);
            throw Error;
        }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['subcategories'] }),
  });
};

const useDeleteSubcategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
        try {
            return await axios.delete(`${apiUrl}/subcategories/${id}`);
        } catch (error) {        
            toast.error(`Помилка при видалені підкатегорії: ${error.message}`);
            throw Error;
        }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['subcategories'] }),
  });
};
const useVisibilitySubcategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
        try {
            return await axios.put(`${apiUrl}/subcategories/${id}/visibility`);
        } catch (error) {        
            toast.error(`Помилка при корегувані видимості підкатегорії: ${error.message}`);
            throw Error;
        }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['subcategories'] }),
  });
};

export { useGetSubcategories, useGetSubcategory, useAddSubcategory, useEditSubcategory, useDeleteSubcategory, useVisibilitySubcategory };




