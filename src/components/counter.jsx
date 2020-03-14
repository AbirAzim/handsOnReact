import React, { Component } from 'react';

class Counter extends Component {
    // state  = { 
    //     count : this.props.counter.value,
    //     tags: ['tag1','tag2','tag3']
    // };

    // constructor() {
    //     super();
    //     this.handelIncreament = this.handelIncreament.bind(this);
    // }


    // renderTags(){
    //     if(this.state.tags.length === 0) return <p>There is no tag to render</p>;
    //     return (<ul>{this.state.tags.map(tag => <li key={tag}> {tag}</li>)}</ul>); 
    // }

    // handelIncreament = (product) =>{
    //     console.log(product);
    //     this.setState({ count : this.state.count + 1})
    // }

    render() {
        console.log('props', this.props);
        return (<div>
            <h1>Counter #{this.props.counter.id}</h1>
            <span style={{fontSize:19 , fontWeight:'bold'}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className='btn btn-secondary' onClick={()=> { this.props.onCreament(this.props.counter)}}>Increament</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className='btn btn-danger m-2'>Delete</button>
            </div>);
    }
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value) === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        let {value} = this.props.counter;
        return value === 0 ? 'Zero' : value
    }
}
export default Counter;