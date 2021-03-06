import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';

import * as actsUpsales from '../../actions/master/actionsUpsales';


class AirHelp extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        if (ev.target.value == 1) {
          this.props.addAirHelpHandler();
        }
        else {
           this.props.removeAirHelpHandler();
        }
    }

    render() {
        let  price = (this.props.fastTrackPrice  *  this.props.currency.rate);
        price = price.toFixed(2);

        return (
            <section>

                <div className="row contactDetails">
                    <div className="col-8">

                        <div className="card">
                            <div className="card-header bg-light">

                                <div className="row">

                                    <div className="col-9">

                                       Flight Delays recompansation
                                    </div>

                                    <div className="col-2">
                                        <button
                                            className="btn btn-sm btn-dark btn-block btnToggle"
                                            data-toggle="collapse"
                                            data-target="#fastTrackCollapse"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                        >

                                            <Translate value="general.Toggle"/>
                                        </button>
                                    </div>

                                </div>
                            </div>


                            <div className="card-body collapse show" id="fastTrackCollapse">

                                <div className="row">
                                    <div className="col-8">

                                        Pay
                                        {' '}
                                        {price}
                                        {' '}
                                        {this.props.currency.code}
                                        {' '}
                                        and you may get
                                        compensation for every delayed flight
                                    </div>

                                    <div className="col-3">

                                        <select className="form-control" onChange={this.handleClick}>
                                            <option key="no" value="0">No thanks</option>
                                            <option key="yes" value="1">Yes please</option>
                                        </select>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </section>
        );
    }
}


function mapStateToProps(state) {
    return {
        passengers: state.passengersMasterReducer,
        currency: state.currentCurrencyReducer,
        fastTrackPrice: state.getPurchasedCostAirHelpReducer,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addAirHelpHandler: actsUpsales.addAirHelpAction,
        removeAirHelpHandler : actsUpsales.removeAirHelpAction,
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(AirHelp);

