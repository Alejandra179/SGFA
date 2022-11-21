const url ="http://localhost:3000/productos/"

export const getProductos = async () => {
    
    const res = await fetch(`${url}productosList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
    
    console.log(res);
    return res;
}

export const getProducto= async (id_producto) => {
    
    const res = await fetch(`${url}productosList/${id_producto}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
    
    console.log(res);
    return res;
}

export const addProducto = async (formData) => {
    
    const res = await fetch(`${url}addProducto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
    
    console.log(res);
    return res;
}

export const updateProducto = async (formData) => {
    const {description, id_producto} = formData
    const res = await fetch(`${url}update/${id_producto}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({description}),
    }).then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
    
    console.log(res);
    return res;
}

export const deleteProducto = async (id_producto) => {
    
    const res = await fetch(`${url}delete/${id_producto}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
    
    console.log(res);
    return res;
}


