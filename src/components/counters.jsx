import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {
        const {onReset , onIncreament , onDelete , counters} = this.props //destructuring
        return ( 
            <div>
                <button className='btn btn-primary m-4' onClick={onReset}>Reset</button>
                {counters.map(c => <Counter key={c.id} counter={c} onDelete={onDelete} onCreament={onIncreament}/>)}
            </div>);
    }
}
export default Counters;