import create from 'zustand';



const useFormData = create((set, get) => ({
    formData: {},
    setFormData: (data) => {
        const oldData = get().formData;
        const newData = {...oldData, ...data};

        return set({
            formData: newData
        })
    }
}));

export default useFormData;
