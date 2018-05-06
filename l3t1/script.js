"use strict";

function Machine(power) {
    this._power = power;
    this._enabled = false;
    const self = this;
    this.enable = () => { self._enabled = true; };
    this.disable = () => { self._enabled = false; };
}

function Fridge(power) {
    Machine.call(this, power);
    let food = [];
    let capacity = 0;
    this.addFood = function () {
        if (this._enabled) {
            for (let i = 0; i < arguments.length; i++) {
                capacity += arguments[i].amount;
                if (capacity <= (this._power/100)) {
                    food.push(arguments[i]);
                    console.log(`${arguments[i].name} with amount: ${arguments[i].amount} has been put into fridge. Fridge is occupied: ${capacity}/${this._power/100}`)
                } else {
                    capacity -= arguments[i].amount;
                    alert(`Amount should be less than ${this._power/100}. For now empty only ${(this._power/100) - capacity} from ${this._power/100}`);
                }
            }
        } else alert("Please enable the fridge");
    };
    this.getFood = () => ( food );
}

const fridge = new Fridge(1000);
fridge.enable();
fridge.addFood( {name: "meet", amount: 1},
                {name: "burger", amount: 4},
                {name: "potato", amount: 2},
                {name: "apples", amount: 1},
                {name: "tomato", amount: 14});
console.log(fridge.getFood());