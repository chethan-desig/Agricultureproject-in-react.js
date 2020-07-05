import React from 'react';
import {BrowserRouter,Route}from 'react-router-dom';
import Header from './Header';
import Irrigation from './Irrigation';
import agriculture from './Agriculture';
import Cattle from './Cattle';
import Poultry from './Poultry';
import Siriculture from './Siriculture';
import Drip from './Drip_irigation';
import Sprink from './Sprinkerlar';
import Water from './Watersource';
import seed from './seeds';
import SeedsForm from './SeddsForm';
import machine from './machinr';
import pesti from './pestisides';
import sheep from './sheep.js'

const Routing =()=>{
    return(
        <BrowserRouter>
    <Route exact path = "/" component={Header}></Route>
    <Route exact path = "/irrigation" component={Irrigation}></Route>
    <Route exact path = "/agriculture" component={agriculture}></Route>
    <Route exact path = "/cattle" component={Cattle}></Route>
    <Route exact path = "/poultry" component={Poultry}></Route>
    <Route exact path = "/sericulture" component={Siriculture}></Route>
    <Route exact path = "/drip" component={Drip}></Route>
    <Route exact path = "/sprinklar" component={Sprink}></Route>
    <Route exact path = "/watersource" component={Water}></Route>
        <Route exact path = "/seed" component={seed}></Route>
        <Route exact path = "/seedsbuying" component={SeedsForm}></Route>

        <Route exact path = "/machine" component={machine}></Route>
        <Route exact path = "/pestisides" component={pesti}></Route>
        <Route exact path = "/sheep" component={sheep}></Route>







    
</BrowserRouter>
    )
}

export default Routing