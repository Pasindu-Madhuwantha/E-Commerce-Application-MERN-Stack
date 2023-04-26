import React, { Fragment } from 'react'


import '../../App.css'

const Header = () => {
    

    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        
                            <img src="" />
                        
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    
                        <span id="cart" className="ml-3">Cart</span>
                        <span className="ml-1" id="cart_count"></span>
                    


                </div>
            </nav>
        </Fragment>
    )
}

export default Header
