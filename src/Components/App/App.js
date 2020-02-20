import React from "react"
import "./App.scss"

import Nav from "../Nav/Nav"
import Table from "../Table/Table"
import CartFooter from "../CartFooter/CartFooter"

// traditionally I'd use a URL from the backend to handle images, for the moment this will do.
import jetski from "./images/jetski.png"
import crockpot from "./images/crockpot.png"
import bubblewrap from "./images/bubblewrap.png"
export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            items: [
                {name: "Jet Ski", price: "1500", quantity: 1, image: jetski, sku: 434556256},
                {name: "Bubble Wrap", price: "440", quantity: 1, image: bubblewrap, sku: 345245865},
                {name: "Crock pot", price: "55", quantity: 1, image: crockpot, sku: 987123654}
            ],
            totals: {
                subtotal:0,
                total:0,
                baseTax: 0.0, // Taxes are here for theoretical calculations.
                calcTax: 0
            },
            checkout: false,
            comments: ""
        }

        this.checkout = this.checkout.bind(this)
        this.handleComments = this.handleComments.bind(this)
        this.editItem = this.editItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }

    total() {
        let { items, totals } = this.state,
            subtotal = 0,
            tax = totals.baseTax

        items.forEach((item) => {
            subtotal += parseInt(item.price) * item.quantity
        })

        totals.subtotal = parseInt(subtotal)
        totals.total = subtotal * tax + subtotal
        totals.calcTax =  subtotal * tax

        this.setState({
            totals: totals
        })
    }

    componentDidMount() {
        this.total()
    }

    handleComments(event) {
        this.setState({
            comments: event.target.value
        })
    }

    editItem(updatedItem) {
        let items = this.state.items

        items.forEach((item, index) => {
            if(item.sku === updatedItem.sku) {
                items[index] = updatedItem
            }
        })

        this.setState({
            items
        },() => {
            this.total()
        })
    }
    removeItem(removedItem) {
        let items = this.state.items

        items.forEach((item, index) => {
            if(item.sku === removedItem.sku) {
                items.splice(index, 1)
            }
        })

        this.setState({
            items
        }, () => {
            this.total()
        })
    }

    checkout() {
        /**
         * This would be where we'd post this to a server for the full checkout, however this is just a mock.
         */
        // let { items } = this.state
        // fetch("https://example.com/api/order", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(items)
        // }).then((response) => {
        //     return response.json()
        // }).then((data) => {
        //     console.log(data)
        // }).catch((error) => {
        //     console.error("Error", error)
        // })
        this.setState({
            checkout: true
        })
    }

    render() {
        let { totals, items, checkout, comments } = this.state
        return (
            <div className = "App">
                <Nav cart = {this.state.items.length} />
                {checkout &&
                    <div className = "toast">
                        Thank you for your purchase! <br /> You&apos;ll recieve an email shortly.
                    </div>
                }
                <div className = "container">
                    <div className = "header row">
                        <div className = "col-xs-6">
                            <h1>Your Cart</h1>
                        </div>
                        <div className = "col-xs-6 end-xs">
                            <span className = "breadcrumb">
                                Home <span>→</span> Checkout
                            </span>
                        </div>
                    </div>
                    <Table
                        table = { items }
                        update = { this.editItem }
                        remove = { this.removeItem }
                    />
                    <CartFooter
                        total = { totals }
                        comments = { comments }
                        handleComments = {this.handleComments}
                        checkout = { this.checkout }
                    />
                </div>
            </div>
        )
    }
}
