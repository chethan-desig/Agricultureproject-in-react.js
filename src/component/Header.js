import React from 'react';
import {Link} from 'react-router-dom';

const Header =()=>{
    return(
    
        <div className="body">
            <marquee behaviour="slide" scrolldelay="10" bgcolor="green" direction="right">
            <img src="../images/images.jpg" width="600" height="100" align="middle"
			alt="doesnot support" />
	
            </marquee>
            <header  >
            <nav className="navbar navbar-primary"  className="container">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      
                    </button>
                   
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/irrigation">IRRIGATION</Link></li>
                      

                        <li><Link to="/agriculture">AGRICULTURE</Link></li>
                        <li><Link to="/cattle">CATTLE</Link></li>
                        <li><Link to="/poultry">POULTRY</Link></li>
                        <li><Link to="/sericulture">SIRICULTURE</Link></li>
                        <li><Link to="/">FEEDBACK</Link></li>
                        <li><Link to="/">CONTACT US</Link></li>
                        <li><Link to="/">ABOUT US</Link></li>
                        <li><Link to="/">LOGOUT</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        <h3 align="center" >
		 <u>AGRICULTURE MANAGMENT SYSTEM </u>
        	</h3>
            <img src="../images/far.jpg" width="200" height="200" align="left"
		alt="doesnot support" />
        <img src="../images/download.jpg" width="200" height="200" align="right"
		alt="doesnot support" />
        
        <b><p>Agriculture is the back bone of indian
			economy so our first step twords agriculture development .this
			project helps farmers to know about different seeds
			,machines,fertilizers and how to make use of it it leads to the
			better development of the agriculture Agriculture is the cultivation
			and breeding of animals, plants and fungi for food, fiber, biofuel,
			medicinal plants and other products used to sustain and enhance human
			life.[1] Agriculture was the key development in the rise of sedentary
			human civilization, whereby farming of domesticated species created
			food surpluses that nurtured the development of civilization. The
			study of agriculture is known as agricultural science. The history of
			agriculture dates back thousands of years, and its development has
			been driven and defined by greatly different climates, cultures, and
			technologies. Industrial agriculture based on large-scale monoculture
			farming has become the dominant agricultural methodology.Freshwater is a (very) limited resource in the world. Most of the water available for irrigation comes from aquifers (groundwater) and lakes.
The total amount of fresh water from these two resources only accounts for less than 1% of the total water supply.
Traditional farming techniques use fresh water for irrigation, putting a heavy demand on the world’s already scarce fresh water supplies.  In fact, of all the water in the world, only 1% is fresh water, of which 70% is used for agriculture!

In the table below, it is shown that the amount of saline water is almost equal to the amount of fresh water in both lakes as well as aquifers.Saline Agriculture – the scientific approach
The four pillars of (saline) agriculture
Because of the generally negative effects of salinity on crop yields, salinization threatens food production and food security in many areas in the world.

Saline agriculture is a possible solution: food is produced on salt-affected soils and/or using salt or brackish water for irrigation water.
The latter strategy also saves fresh water, which is a scarce resource on this planet, and even more so in those areas generally affected by salinization.
To make saline agriculture possible, conventional farming techniques would need to be adapted.  We have identified four pillars of agriculture, all of which would need to be adapted to make saline agriculture possible:

crop and cultivar choice
irrigation
fertilization
soil management</p></b>

           
            
        </div>
    )
}
export default Header