import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('เข้าสู่ระบบ');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'สมัครสมาชิก') {
        const response = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="w-full flex justify-center mt-10">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 bg-white p-6 border border-gray-200 rounded-md shadow-md"
      >
        <div className="inline-flex items-center gap-2 mb-2">
          <p className="prata-regular text-3xl text-gray-800">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState === 'เข้าสู่ระบบ' ? (
          ''
        ) : (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200 bg-white"
            placeholder="ชื่อ"
            required
          />
        )}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200 bg-white"
          placeholder="อีเมล"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200 bg-white"
          placeholder="รหัสผ่าน"
          required
        />
        <div className="w-full flex justify-between text-sm mt-2">
          <p className="cursor-pointer text-gray-500 hover:text-gray-700">
            ลืมรหัสผ่าน?
          </p>
          {currentState === 'เข้าสู่ระบบ' ? (
            <p
              onClick={() => setCurrentState('สมัครสมาชิก')}
              className="cursor-pointer text-gray-500 hover:text-gray-700"
            >
              สร้างบัญชีใหม่
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('เข้าสู่ระบบ')}
              className="cursor-pointer text-gray-500 hover:text-gray-700"
            >
              เข้าสู่ระบบที่นี่
            </p>
          )}
        </div>
        <button className="bg-black text-white font-light px-8 py-2 mt-4 rounded-md">
          {currentState === 'เข้าสู่ระบบ' ? 'ลงชื่อเข้าใช้' : 'สมัครสมาชิก'}
        </button>
      </form>
    </div>
  );
};

export default Login;