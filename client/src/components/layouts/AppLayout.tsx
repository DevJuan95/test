import React from 'react';
import Header from '../common/Header'

const Layout: React.FC<any> = ({ children }) => {
    return (
        <React.Fragment >
            <Header />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        {children}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;