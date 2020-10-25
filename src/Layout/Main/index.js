import React from 'react';
import { Switch, Route } from "react-router-dom";

import ConfigurationsOutlet from '../../modules/configurations/components/Outlet';
import LayoutsOutlet from '../../modules/layouts/components/Outlet';
import Styled from './styled';

const Main = () => {
    return (
        <Styled className="main">
            <Switch>  
                <Route path="/configurations">
                    <ConfigurationsOutlet />
                </Route>         
                <Route path="/">
                    <LayoutsOutlet />
                </Route>           
            </Switch>
        </Styled>
    );
};

export default Main;