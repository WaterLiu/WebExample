import React from 'react';
import {observable, computed} from 'mobx';

class Water extends React.Component
{
    @observable price = 0;
    @observable amount = 1;

    constructor(price)
    {
        super();
        this.price = price;
        this.price1 = 20;
        // alert("constructor");
    }

    @computed get total()
    {
        alert("total" + this.price);
        return this.price * this.amount;
    }

    test() {
        console.log(this.price);

        this.show = 100;
        // this.price = 20;
    }

    test1()
    {
        console.log(this.price);
        // console.log(this)
    }

    render()
    {
        return <button onClick={this.test.bind(this)}>点击我</button>;
    }
}


export default Water;