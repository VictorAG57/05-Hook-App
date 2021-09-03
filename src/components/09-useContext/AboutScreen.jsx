import React, { useContext } from 'react'
import { UserContext } from './UserContex';

const AboutScreen = () => {

    const { user, setUser } = useContext( UserContext )

    return (
        <div>
            <h1>Abot Screen</h1>
        </div>
    );
};

export default AboutScreen;
