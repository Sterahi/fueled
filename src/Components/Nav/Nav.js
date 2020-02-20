import React from "react"
import PropTypes from "prop-types"

import "./Nav.scss"

const Nav = ({ cart }) => (
    <nav className = "nav">
        <div className = "container">
            <div className = "row">
                <div className = "col-xs-2 brand">Order<strong>form</strong></div>
                <div className = "cart col-xs-2 col-xs-offset-8 end-xs">
                    Cart <span className = "badge">{ cart }</span>
                </div>
            </div>
        </div>
    </nav>
)

export default Nav

Nav.propTypes = {
    cart: PropTypes.number.isRequired
}
