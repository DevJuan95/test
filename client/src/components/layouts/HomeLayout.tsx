import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

const HomeLayout: React.FC = ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Card className="w-100 bg-light">
                        <CardHeader
                            className="font-weight-bold bg-dark text-white">
                                Buscar canciones en Spotify:
                        </CardHeader>
                        <CardBody>{children}</CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default HomeLayout;