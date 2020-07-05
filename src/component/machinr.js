import React,{Component,Fragment} from 'react'

const url="http://localhost:8900/artists";

class Form extends Component{
    constructor(){
        super()
        this.state={
            NAME:'',
            MACHINENAME:'',
            QUANTITY:'',
            PHONE:'',
            DELEVERYADDRESS:''

        
        }
    }
    handelChangeName=(event)=>{
        this.setState({NAME:event.target.value})
    }
    handelChangeSeeds=(event)=>{
        this.setState({MACHINENAME:event.target.value})
    }
    handelChangeQuantity=(event)=>{
        this.setState({QUANTITY:event.target.value})
    }
    handelChangePhone=(event)=>{
        this.setState({PHONE:event.target.value})
    }
    handelChangeDelivary=(event)=>{
        this.setState({DELEVERYADDRESS:event.target.value})
    }
    handleSubmit=()=>{
        var random = Math.floor(Math.random()*10000)
        var data={
            "id":random,
            "NAME":this.state.NAME,
            "MACHINENAME":this.state.MACHINENAME,
            "QUANTITY":this.state.QUANTITY,
            "PHONE":this.state.PHONE,
            "DELEVERYADDRESS":this.state.DELEVERYADDRESS
        }
        fetch(url,{
            method:'post',
            headers:{
                "Accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/'))
    }

    render(){
        return(
            <Fragment>
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                        MACHINE BUYING
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>NAME</label>
                                <input type="text" className="form-control"
                                value={this.state.NAME}
                                onChange={this.handelChangeName}
                                />
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>MACHINENAME</label>
                                <input type="text" className="form-control"
                                value={this.state.MACHINENAME}
                                onChange={this.handelChangeSeeds}
                                />
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>QUANTITY</label>
                                <input type="text" className="form-control"
                                value={this.state.QUANTITY}
                                onChange={this.handelChangeQuantity}
                                />
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>PHONE</label>
                                <input type="text" className="form-control"
                                value={this.state.PHONE}
                                onChange={this.handelChangePhone}
                                />
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>DELEVERYADDRESS</label>
                                <input type="text" className="form-control"
                                value={this.state.DELEVERYADDRESS}
                                onChange={this.handelChangeDelivary}
                                />
                            </div>
                        </div>
                        <button className="btn btn-success"
                        onClick={this.handleSubmit}>
                            submit
                        </button>
                     
                    </div>
                </div>

            </Fragment>
        )
    }

}
export default Form