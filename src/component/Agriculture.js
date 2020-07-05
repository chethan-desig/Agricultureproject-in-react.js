import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Agriculture =() => {
    return(
        <Fragment>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2>AGRICULTURE</h2>
                </div>
              
                        <div>
                            <h4>SEEDS</h4>
                            <Link to="/seed">Details</Link>
                        </div>
                        <div>
                            <h4>MACHINE</h4>
                            <Link to="/machine">Details</Link>
                        </div>
                        
                        <div>
                            <h4>PESTISIDES</h4>
                            <Link to="/pestisides">Details</Link>
                        </div>
                        <Link to="/" className="btn btn-success">
                        BACK
                      </Link>
                        
                    </div>
                 
        </Fragment>
    )
}

export default Agriculture;
