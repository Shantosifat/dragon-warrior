import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <Latest></Latest>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                {/* Left */}
                <section className='left-side'>

                </section>
                {/* Main */}
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                {/* Right */}
                <section className='right-side'>

                </section>
            </main>
        </div>
    );
};

export default HomeLayout;