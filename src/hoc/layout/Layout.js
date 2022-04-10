import {Component} from "react";
import cls from './Layout.module.css';
import MenuToggle from "../../components/navigation/menuToggle/menuToggle";
import Drawer from "../../components/navigation/drawer/drawer";

class Layout extends Component {
    state = {
        menu: false,
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={cls.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                />

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;
