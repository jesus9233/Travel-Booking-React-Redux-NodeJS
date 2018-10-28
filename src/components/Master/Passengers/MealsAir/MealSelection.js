import React, {Component} from 'react';

class MealSelection extends Component {
    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev)
    {
        console.log('meal selection for ' + this.props.legId + ' ' + this.props.paxId );
        console.log(ev.target.value);

        this.props.addMealHandler(
            {
                paxId: this.props.paxId,
                mealId: ev.target.value,
                legId: this.props.legId
            }
        )
    }


    render() {
        console.log('Meal selection');
        console.log(this.props.paxData);
        console.log(this.props.mealData);

        return (
            <select className="form-control" onChange={this.handleClick}>
                <option key="" value=""></option>
                {this.props.mealData.map(ml => {
                    if (ml.classes.indexOf(this.props.paxData.cabinClass) > -1) {
                        return (<option key={ml.key}
                                        value={ml.id}>{ml.title} {ml.price.toFixed(2)} {this.props.currency.code}</option>)
                    }
                })}
            </select>
        );
    }
}

export default MealSelection;


