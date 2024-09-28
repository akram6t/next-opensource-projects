// import useApi from '@/hooks/useApi';

// export const MyComponent = () => {
//   const { data, loading, error, fetchData, createData, updateData, deleteData } = useApi<Object[]>();

//   // Create new data
//   const handleCreate = async (newData: any) => {
//     const result = await createData('/api/your-endpoint', newData);
//     if (result) {
//       // Handle successful creation
//     } else {
//       // Handle error
//     }
//   };

//   // Update existing data
//   const handleUpdate = async (id: string, updatedData: any) => {
//     const result = await updateData(`/api/your-endpoint/${id}`, updatedData);
//     if (result) {
//       // Handle successful update
//     } else {
//       // Handle error
//     }
//   };

//   // Delete data
//   const handleDelete = async (id: string) => {
//     const result = await deleteData(`/api/your-endpoint/${id}`);
//     if (result) {
//       // Handle successful deletion
//     } else {
//       // Handle error
//     }
//   };

//   // ... rest of your component logic
// };