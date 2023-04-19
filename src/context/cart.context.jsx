import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState([]);

  const AddToCart = (item) => {
    const tempInfoCart = [...cartData];

    if (tempInfoCart.find((temp) => item.Id === temp.Id)) {
      const filteredData = tempInfoCart.filter(
        (finder) => item.Id === finder.Id
      );

      if (filteredData[0].productQuantity < item.Cantidad_disponible - 1) {
        tempInfoCart.filter((filterData) => {
          if (filterData.Id === item.Id) filterData.productQuantity += 1;
        });
        item.canBuy = true;
      } else {
        item.canBuy = false;
      }
      console.log(filteredData[0].productQuantity, item.Cantidad_disponible);
    } else {
        const body = {
            Id: item.Id,
            Nombre: item.Nombre,
            Precio: item.Precio ,
            Cantidad_disponible: item.Cantidad_disponible,
            Descripcion: item.Descripcion,
            url_imagen: item.url_imagen,
            productQuantity : 1,
            canBuy : true
          };
          tempInfoCart.push(body);
    }
    
    setCartData(tempInfoCart);
  };


  const RemoveToCart = (index) => {
    const tempInfoCart = [...cartData];
    tempInfoCart.splice(index, 1);

    setCartData(tempInfoCart);
  };

  //Se edita la cantidad de productos por cada item
  const editarCantidad = (item, flag) => {
    console.log(item, flag);
    if(flag){
        item.productQuantity ++;
    } else {
        item.productQuantity --;
    }
  }

  //retorna el contexto
  return (
    <CartContext.Provider
      value={{ cartData, total, setTotal, AddToCart, RemoveToCart, editarCantidad }}
    >
      {children}
    </CartContext.Provider>
  );
};
