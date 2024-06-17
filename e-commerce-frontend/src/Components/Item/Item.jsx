import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const itemPriceClass = props.new_price ? "item-price-old" : "" ;
  
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} style={{ textDecoration: 'none' }}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="products" /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        {props.new_price && <div className="item-price-new">${props.new_price}</div>}
        <div className={itemPriceClass}>${props.old_price}</div>
      </div>
    </div>
  )
}

export default Item
