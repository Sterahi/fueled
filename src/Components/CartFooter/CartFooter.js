import React from "react"

import "./CartFooter.scss"
import PropTypes from "prop-types"

export default class CartFooter extends React.Component{

    render() {
        let { total, checkout, comments } = this.props
        return(
            <div className = "cartFooter row between-xs">
                <div className = "col-xs-4">
                    <div className = "col-xs-12">
                        <p>Additional Comments</p>
                    </div>
                    <textarea value = { comments }  onChange = {this.props.handleComments}/>
                </div>
                <div className = "col-xs-4">
                    <div className = "col-xs-12">
                        Delivery Info
                        <div className = "muted">
                            <p>All orders will be sent by Special Delivery, which will be insured and will need to be signed for. </p>
                            <p>Allow 4-6 weeks for delivery</p>
                        </div>
                    </div>
                </div>
                <div className = "col-xs-3 totals">
                    <div className = "col-xs-12 row">
                        <div className = "col-xs-7">Sub Total</div> <div className = "col-xs-5 end-xs">${total.subtotal.toLocaleString()}</div>
                    </div>
                    <div className = "col-xs-12 row">
                        <div className = "col-xs-7">Tax</div> <div className = "col-xs-5 end-xs">${total.calcTax.toLocaleString()}</div>
                    </div>
                    <div className = "col-xs-12 row total">
                        <div className = "col-xs-7">Total</div> <div className = "col-xs-5 end-xs">${total.total.toLocaleString()}</div>
                    </div>
                    <div className = "col-xs-12 center-xs checkoutCta">
                        <div className = "col-xs-12">
                            <span className = "checkoutButton" onClick = { checkout }>
                                Checkout
                            </span>
                        </div>
                        <div className = "continueShopping">
                            or <a href = '/' title = "This would lead back to the shopping page, but that is out of scope.">Continue Shopping</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CartFooter.propTypes = {
    total: PropTypes.object.isRequired,
    checkout: PropTypes.func.isRequired,
    comments: PropTypes.string.isRequired,
    handleComments: PropTypes.func.isRequired
}
