import React, {createContext, useState, useEffect} from 'react'

// Creamos el contexto
export const CartContext = createContext();

const CartProvider = ({children}) => {
  // Estado de Carro
  const [cart, setCart] = useState([]);

  // Estado del item amount
  const [itemAmount, setItemAmount] = useState(0);

  // Estado de precio total
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.precio * currentItem.amount;
    }, 0);
    setTotal(total)
  });

  // Actualizar item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => 
      {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart])

  // Agregar al carrito
  const addToCart = (product,id) => {
    const newItem = {...product, amount: 1}
    // Comprobar si el artículo ya está en el carrito
    const cartItem = cart.find((item) => {
      return item.idProducto === id;
    });
    // si el artículo del carrito ya está en el carrito
    if(cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.idProducto === id) {
          return {...item, amount: cartItem.amount + 1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem])
    }
  };

  // Quitar del carrito
  const removeCart = (id) => {
    const newCart = cart.filter(item => {
      return item.idProducto !== id;
    })
    setCart(newCart);
  }

  // Limpiar carrito
  const clearCart = () => {
    setCart([])
  }

  // Incrementar icono en carrito
  const increaseCart = (id) => {
    const cartItem = cart.find((item) => item.idProducto === id);
    addToCart(cartItem, id)
  }

  // Disminuir icono en carrito
  const descreaseCart = (id) => {
    const cartItem = cart.find((item) => {
      return item.idProducto === id;
    });
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.idProducto === id) {
          return {...item, amount: cartItem.amount -1}
        }
        else{
          return item;
        }
      });
      setCart(newCart);
    }
    if(cartItem.amount < 2){
      removeCart(id);
    }
    
  }

  useEffect(() => {
    // Cargar los elementos del carrito desde el almacenamiento local al iniciar la aplicación
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    // Guardar los elementos del carrito en el almacenamiento local cada vez que se actualice el estado del carrito
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  return (
    <CartContext.Provider value={{cart, addToCart, removeCart, clearCart, increaseCart, descreaseCart, itemAmount, total}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider