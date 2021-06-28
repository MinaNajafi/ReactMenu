import React, {Component} from 'react';
import './MenuItem.css';


class MenuItem extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className={this.props.classnameParent }>

                <img className={"image child " }
                     src={this.props.image}>

                </img>

                <span className={"txt child "+ this.props.className}>
                    {this.props.text}
                </span>


            </div>

        );


    }


}

export default MenuItem;