"use strict";

function Machine(power) {
    this._power = power;
    this._enabled = false;
    const self = this;
    this.enable = () => { self._enabled = true; };
    this.disable = () => { self._enabled = false; };
}

function Fridge(power) {
    Machine.call(this);
    let food = [];
    let capacity = 0;
    this.addFood = () => {
        if (this._enabled) {
            for (let i = 0; i < arguments.length; i++) {
                capacity += arguments[i].amount;
                if (capacity <= (power/100)) {
                    food.push(arguments[i]);
                } else {
                    capacity -= arguments[i].amount;
                    throw new Error("Amount should be less than " + capacity);
                }
            }
        } else throw new Error("Please enable the fridge");
    };
    this.getFood = () => ( food );
}

let fridge = new Fridge(1000);
fridge.enable();
fridge.addFood({name: "123", amount: 10});