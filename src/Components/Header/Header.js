import React from "react"
import PropTypes from "prop-types"

const Header = ({ title, breadcrumbs }) => (
    <div className = "header row">
        <div className = "col-xs-6">
            <h1>{ title }</h1>
        </div>
        <div className = "col-xs-6 end-xs">
            <span className = "breadcrumb">{ breadcrumbs }</span>
        </div>
    </div>
)

export default Header

Header.propTypes = {
    title: PropTypes.string.isRequired,
    breadcrumbs: PropTypes.string.isRequired
}
