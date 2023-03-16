
'use strict';

const e = React.createElement;

class CountButton extends React.Component {
    constructor(props) {
        super(props);
        this.count = 0
    }

    updateButton(){
        this.count = this.count + 1;
        const counter = document.getElementById("buttoncounter");
        counter.innerHTML = `times clicked: ${this.count}`;
    }

    render() {
        return e(
            'button',
            {
                onClick: () => this.updateButton(),
                id: "buttoncounter"
            },
            `times clicked: ${this.count}`
        );

    }
}

const domContainer = document.querySelector('#react_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(CountButton));