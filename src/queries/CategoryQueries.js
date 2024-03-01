import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import apiUrl from '../config'
import { toast } from 'react-toastify';

const useGetCategories = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/categories`);
        return data;
      } catch (error) {        
        toast.error(`Помилка при отриманні категорій: ${error.message}`);
        queryClient.setQueriesData(['categories'], null);
      }
    },
  });
};

const useGetCategory = (categoryId) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['category', categoryId],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/categories/${categoryId}`);
        return data;
      } catch (error) {        
        toast.error(`Помилка при отриманні категорії: ${error.message}`);
        queryClient.setQueriesData(['category', categoryId], null);
      }
    },
  });
};

const useAddCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
        try {
          const { name, imageUrl } = data;
            return await axios.post(`${apiUrl}/categories`, { name, imageUrl });
        } catch (error) {        
            toast.error(`Помилка при додавані категорії: ${error.message}`);
            throw Error;
        }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['categories'] }),
  });
};

const useEditCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
        try {
            const { id, name, imageUrl } = data;
            return await axios.put(`${apiUrl}/categories/${id}`, {name, imageUrl});
        } catch (error) {        
            toast.error(`Помилка при редагувані категорії: ${error.message}`);
            throw Error;
        }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['categories'] }),
  });
};

const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
        try {
            return await axios.delete(`${apiUrl}/categories/${id}`);
        } catch (error) {        
            toast.error(`Помилка при видалені категорії: ${error.message}`);
            throw Error;
        }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['categories'] }),
  });
};
const useVisibilityCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
        try {
            return await axios.put(`${apiUrl}/categories/${id}/visibility`);
        } catch (error) {        
            toast.error(`Помилка при корегувані видимості категорії: ${error.message}`);
            throw Error;
        }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['categories'] }),
  });
};

export { useGetCategories, useGetCategory, useAddCategory, useEditCategory, useDeleteCategory, useVisibilityCategory };




