import React, {Component, Fragment} from 'react';
import axios from "axios";
import {Spinner} from "react-bootstrap";
import Summary from "./Summary";
class Details extends Component {

    constructor() {
        super();
        this.state={
            countries:[],
            global:[],
            currentDate:null,
            loading:true
        }
    }

    async componentDidMount() {
      const res =  await axios.get("https://api.covid19api.com/summary")
        console.log(res)
        this.setState({countries:res.data.Countries});
        this.setState({global:res.data.Global});
        this.setState({currentDate:res.data.Date});
        this.setState({loading:false});
    }

    render() {

        if (this.state.loading){
            return(
               <div className="spinner ">
                   <Spinner animation="grow" variant="success" />&nbsp;
                   <Spinner animation="grow" variant="danger" />&nbsp;
                   <Spinner animation="grow" variant="warning" />
               </div>
            )
        }

        return (
            <Fragment>

                <Summary summary={this.state.global} currentDate={this.state.currentDate} />

            </Fragment>
        );
    }
}

export default Details;