const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api';

async function testAuth() {
    try {
        // Generate unique username/email each time
        const timestamp = Date.now();
        const username = `user${timestamp}`;
        const email = `user${timestamp}@example.com`;

        // 1. Register a new user
        console.log('1. Registering user...');
        const registerResponse = await axios.post(`${BASE_URL}/auth/register`, {
            username: username,
            email: email,
            password: '123456'
        });

        const token = registerResponse.data.token;
        console.log('✅ User registered, token received');

        // 2. Test getting tasks with token
        console.log('2. Testing tasks endpoint...');
        const tasksResponse = await axios.get(`${BASE_URL}/tasks`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('✅ Tasks retrieved:', tasksResponse.data);

        // 3. Test creating a task
        console.log('3. Creating a task...');
        const createResponse = await axios.post(`${BASE_URL}/tasks`,
            {
                title: 'My First Task',
                description: 'This is a test task'
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );
        console.log('✅ Task created:', createResponse.data);

        console.log('\n🎉 ALL TESTS PASSED! Your authentication system is working perfectly!');

    } catch (error) {
        console.log('❌ Error:', error.response?.data || error.message);
    }
}

testAuth();