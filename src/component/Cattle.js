import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Catlles =() => {
    return(
        <Fragment>
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h2>CATTLES</h2>
                </div>
              
                        <div>
                            <h4>COWS</h4>
                            <Link to="/post/cows">Details</Link>
                        </div>
                        <div>
                            <h4>SHEEPS</h4>
                            <Link to="/sheep">Details</Link>
                        </div>
                        
                        <div>
                            <h4>GOATS</h4>
                            <Link to="/post/goats">Details</Link>
                        </div>
                        <Link to="/" className="btn btn-primary">
                        BACK
                      </Link>
                        
                    </div>
                 
        </Fragment>
    )
}

export default Catlles;
