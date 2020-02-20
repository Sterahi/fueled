import React from "react"
import PropTypes from "prop-types"

import "./Table.scss"

import Item from "../Item/Item"

const Table = ({ table, update, remove }) => (
    <div className = "cart container">
        <div className = "row cartHeader">
            <div className = "col-xs-4 imageHeader">
                Product Name
            </div>
            <div className = "col-xs-3">
                Price
            </div>
            <div className = "col-xs-2">
                Quantity
            </div>
            <div className = "col-xs-1 center-xs removeHeader">
                Remove
            </div>
        </div>
        {
            (table||[]).map((item,id) => {
                return(
                    <Item item = {item} key = {id} update = {update} remove = { remove }/>
                )
            })
        }
    </div>
)

export default Table

Table.propTypes = {
    table: PropTypes.array,
    update: PropTypes.func,
    remove: PropTypes.func
}
