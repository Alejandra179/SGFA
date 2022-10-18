const url ="http://localhost:3000/listas/"
export const getListas= async()=>{
    const res = await fetch(`${url}getListas`, {
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

export const getLista =async(id_lista)=>{
    const res = await fetch(`${url}getLista/${id_lista}`, {
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

export const addLista = async (formData) => {
    
    const res = await fetch(`${url}addLista`, {
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

export const updateLista = async (formData) => {
    const {dia, mercaderias, id_lista} = formData
    
    const res = await fetch(`${url}update/${id_lista}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({dia, mercaderias}),
    }).then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
    
    console.log(res);
    return res;
}

export const deleteLista = async (id_lista) => {
    
    const res = await fetch(`${url}delete/${id_lista}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    }).then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
    
    console.log(res);
    return res;
}
