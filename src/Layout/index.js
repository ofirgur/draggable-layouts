import React from 'react';

import Header from './Header';
import Main from './Main';

import Styled from './styled';

const Layout = () => {
    return (
        <Styled>
            {/** contains app header */}
            <Header />

            {/** contains app modules & router */}
            <Main /> 
        </Styled>
    );
};

export default Layout;