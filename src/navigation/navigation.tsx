import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
// import { makeStyles, createStyles } from '@material-ui/core';
import Home from '../components/home/home';
import Header from '../components/header/header';
import Search from '../components/search/search';
import Order from '../components/order/order';
import { AnimatePresence } from 'framer-motion';


function Navigation() {

    const location = useLocation();

    return (

        <React.Fragment>
            <Header />

            <AnimatePresence >


                <Switch
                    location={location}
                    key={location.pathname}
                >

                    <Route path="/" exact >
                        <Home />
                    </Route>

                    <Route path="/search" >
                        <Search />
                    </Route>

                    <Route path="/order" >
                        <Order />
                    </Route>


                </Switch>
            </AnimatePresence>



            {/* </Router> */}
        </React.Fragment>
    );
}

export default Navigation;