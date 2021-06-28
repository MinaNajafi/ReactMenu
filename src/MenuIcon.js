import React, {Component} from 'react';
import './MenuIcon.css';
import SideBar from "./SideBar";

class MenuIcon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            a: true
        };
    }


    handleToggle = () => {
        this.setState({ a: !this.state.a });
    };
    render() {

        return (

            <div className="container" onClick={this.handleToggle}>
                <SideBar classNameMina={this.state.a ?  "hidden" :"show" } classNameItem = {this.state.a ?  "hiddenVisible" :""} classNameCollapse = {this.state.a ?  "parentCollapse" :"parent"}/>
                <div className={this.state.a ? "bar1" : "changebar1"}></div>
                <div className={this.state.a ? "bar2" : "changebar2"}></div>
                <div className={this.state.a ? "bar3" : "changebar3"}></div>


            </div>

        );
    }
}

export default MenuIcon;