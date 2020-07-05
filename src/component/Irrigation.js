import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Irrigation =() => {
    return(
        <Fragment>
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h2>IRRIGATION</h2>
                </div>
              
                        <div>
                            <h4>DRIP Irrigation</h4>
                            <Link to="/drip">Details</Link>
                        </div>
                        <div>
                            <h4>SPRINKLER Irrigation</h4>
                            <Link to="/sprinklar">Details</Link>
                        </div>
                        <div>
                            <h4>WATER SOURCE</h4>
                            <Link to="/watersource">Details</Link>
                        </div>
                        <Link to="/" className="btn btn-danger">
                        BACK
                      </Link>
                        
                  
                        
                    </div>
                 
        </Fragment>
    )
}

export default Irrigation;
