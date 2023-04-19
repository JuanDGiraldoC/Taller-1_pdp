import React, { useContext } from 'react'
import './product.css'
import { CartContext } from '../../context/cart.context'

const Product = ({item, index}) => {
  const { AddToCart } = useContext(CartContext)
  
  return (
    <div className="product">
        <img src={item.url_imagen} className="product_image" alt="" />
        <div className='product_info'>
            <p className='product_info_name'>{item.Nombre}</p>
            <p>$ {item.Precio}</p>
            <button onClick={() => AddToCart(item)}>
                {item.canBuy === true || item.canBuy === undefined ? 'Add To Cart' : 'Agotado'}
            </button>
        </div>
    </div>
  )
}

export default Product
