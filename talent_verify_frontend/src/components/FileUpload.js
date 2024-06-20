import React from 'react';
import axios from './axiosInstance';

const FileUpload = () => {
    const handleUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('bulk_upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('File uploaded successfully:', response.data);
            // Handle success, redirect or show success message
        } catch (error) {
            console.error('Error uploading file:', error);
            // Handle error, show error message
        }
    };

    return (
        <input type="file" accept=".csv,.xls,.xlsx" onChange={handleUpload} />
    );
};

export default FileUpload;
