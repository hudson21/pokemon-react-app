import React from 'react';

//Components
import Auxiliar from '../Auxiliar/Auxiliar';
import Logo from '../../components/UI/Logo/Logo';

const Layout = (props) => {
    return (
        <Auxiliar>
            <Logo />
                {props.children}
        </Auxiliar>
    );
};

export default Layout;