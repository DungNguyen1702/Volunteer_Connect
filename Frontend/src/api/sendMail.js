import axios from 'axios';

const sendMailAPI = {
    sendVerifyEmail: async (email) => {
        try {
            const response = await axios.get(`http://localhost:8888/api/v1/mail/sendVerifyEmail/${email}`);
            return response.data;
        } catch (error) {
            console.error('Failed to send verification email:', error);
            throw error;
        }
    },
};

export default sendMailAPI;