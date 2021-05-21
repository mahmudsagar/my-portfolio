import React, {Component} from "react";
import Navitem from "./NavItem";
import Social from "./Social";

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <Navitem
                        item="Home"
                        tolink="/"
                        // activec={this.activeitem}
                    />
                    <Navitem
                        item="About"
                        tolink="/about"
                        // activec={this.activeitem}
                    />
                    <Navitem
                        item="Education"
                        tolink="/education"
                        // activec={this.activeitem}
                    />
                    <Navitem
                        item="Skills"
                        tolink="/skills"
                        // activec={this.activeitem}
                    />
                    <Navitem
                        item="Portfolio"
                        tolink="/portfolio"
                        // activec={this.activeitem}
                    ></Navitem>
                    <Navitem
                        item="Contact"
                        tolink="/contact"
                        // activec={this.activeitem}
                    />
                </ul>
                < Social/>
            </nav>
        );
    }
}

export default Navbar;
