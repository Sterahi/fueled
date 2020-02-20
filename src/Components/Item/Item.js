import React from "react"
import PropTypes from "prop-types"

export default class Item extends React.Component {
    constructor() {
        super()

        this.state = {
            quantity: 1
        }

        this.handleUpdate = this.handleUpdate.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }

    componentDidMount() {
        this.setState({
            quantity: this.props.item.quantity
        })
    }

    componentDidUpdate() {
        if(this.props.item.quantity !== this.state.quantity) {
            this.setState({
                quantity: this.props.item.quantity
            })
        }
    }

    handleUpdate(event) {
        let item = this.props.item,
            value = event.target.value
        // Max value
        if(event.target.value > 9) {
            value = 9
        }
        this.setState({
            quantity: value
        }, () => {
            item["quantity"] = this.state.quantity
            this.props.update(item)
        })
    }
    removeItem() {
        let item = this.props.item

        // Accessing our function in App.js
        this.props.remove(item)
    }

    render() {
        let { item } = this.props,
            { quantity } = this.state
        return (
            <div className = "row cartBody" key = { item.sku }>
                <img src = {item.image} alt = { item.name }/>
                <div className = "col-xs-4">
                    { item.name }
                    <div className = "sku">{ item.sku }</div>
                </div>
                <div className = "col-xs-3">
                    { `$${parseInt(item.price).toLocaleString()}` }
                </div>
                <div className = "col-xs-2">
                    <input value = { quantity } onChange = {this.handleUpdate} min = "0" max = "9" type = "number" className = "quantity" />
                    <span className = "update">Update</span>
                </div>
                <div className = "col-xs-1 forceCenter button" onClick = {this.removeItem}>
                    <div className = "remove"></div>
                    <div className = "remove2"></div>
                </div>
            </div>
        )
    }
}

Item.propTypes = {
    item: PropTypes.object,
    update: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}
