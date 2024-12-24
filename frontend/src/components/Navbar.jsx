import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    };

    return (
        <div className='sticky top-0 left-0 right-0 w-full z-50 bg-white shadow-md'>
            <div className='flex items-center justify-between py-5 px-4 sm:px-8 font-medium'>
                <Link to='/'><img src={assets.logo} className='w-36' alt="โลโก้" /></Link>

                <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                    <NavLink to='/' className='flex flex-col items-center gap-1'>
                        <p>หน้าแรก</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                    <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                        <p>สินค้า</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                    <NavLink to='/about' className='flex flex-col items-center gap-1'>
                        <p>เกี่ยวกับเรา</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                    <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                        <p>ติดต่อเรา</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                </ul>

                <div className='flex items-center gap-6'>
                    <img onClick={() => { setShowSearch(true); navigate('/collection'); }} src={assets.search_icon} className='w-5 cursor-pointer' alt="ค้นหา" />

                    <div className='group relative'>
                        <img onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="โปรไฟล์" />
                        {token &&
                            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 bg-white'>
                                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-500 rounded'>
                                    <p className='cursor-pointer hover:text-black'>โปรไฟล์ของฉัน</p>
                                    <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>คำสั่งซื้อ</p>
                                    <p onClick={logout} className='cursor-pointer hover:text-black'>ออกจากระบบ</p>
                                </div>
                            </div>}
                    </div>
                    <Link to='/cart' className='relative'>
                        <img src={assets.cart_icon} className='w-5 min-w-5' alt="ตะกร้าสินค้า" />
                        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                    </Link>
                    <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="เมนู" />
                </div>
            </div>

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="กลับ" />
                        <p>กลับ</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>หน้าแรก</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>คอลเลคชัน</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>เกี่ยวกับเรา</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>ติดต่อเรา</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;