import React, {Component} from 'react';
import './SideBar.css';
import MenuItem from "./MenuItem";

class SideBar extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (<div className={this.props.classNameMina}>
            <MenuItem className={this.props.classNameItem} classNameImage={this.props.classNameImage} classnameParent={this.props.classNameCollapse} text="Home"
                      image="https://toppng.com/uploads/preview/home-icon-home-page-fill-svg-png-icon-free-download-home-icon-11563093105vmyztldsds.png"/>
            <MenuItem className={this.props.classNameItem} classNameImage={this.props.classNameImage} classnameParent={this.props.classNameCollapse} text="Account"
                      image="https://toppng.com/uploads/preview/black-and-white-stockportable-network-account-icon-11553436383dwuayhjyvo.png"/>
            <MenuItem className={this.props.classNameItem} classNameImage={this.props.classNameImage} classnameParent={this.props.classNameCollapse} text="Sign Out"
                      image="https://www.pikpng.com/pngl/m/519-5199120_logout-icon-png-sign-out-icon-png-clipart.png"/>
        </div>);
    }


}

export default SideBar;