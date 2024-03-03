import { create } from 'zustand'

export const useCategories = create((set) => ({
    categories: [],
    setCategories: (newCategories) => set({ categories: newCategories }),
}))

export const useSubcategories = create((set) => ({
    subcategories: [],
    setSubcategories: (newSubcategories) => set({ subcategories: newSubcategories }),
}))