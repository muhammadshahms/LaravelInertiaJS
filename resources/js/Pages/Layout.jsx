import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react'
import Index from './Users'
import Header from './Components/Header'
import { Link } from '@inertiajs/react';
import Footer from './Components/Footer';


const Layout = ({ children }) => {
    return (
      <div>
        <Header />
        <main>
          {children}
        </main>
        <Footer/>
      </div>
    )
}

export default Layout