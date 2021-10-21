import React, {Component} from 'react';

class Summary extends Component {
    render() {
      const {summary,currentDate} =this.props;

        return (
            <div className="row">
                <div className="NewConfirmed">
                    <h3>New Confirmed</h3>
                    <h1>{summary.NewConfirmed}</h1>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>

                <div className="NewConfirmed">
                    <h3>New Confirmed</h3>
                    <h1>{summary.NewConfirmed}</h1>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>


            </div>
        );
    }
}

export default Summary;