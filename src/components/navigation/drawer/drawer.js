import s from './drawer.module.css';
import React, {Component} from "react";
import Backdrop from "../../ui/backdrop/backdrop";

const links = [
    1, 2, 2
];

class Drawer extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a href=' '>Link {link}</a>
                </li>
            )
        })
    }

    render() {
        const cls = [s.Drawer]

        if (!this.props.isOpen) {
            cls.push(s.close)
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}

export default Drawer;
