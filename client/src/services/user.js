const url = "http://localhost:3000/users/";

export const updateUser = async (formData) => {
    const {name, password, id_user} = formData
    
    const res = await fetch(`${url}update/${id_user}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, password}),
    }).then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
    
    console.log(res);
    return res;
}

export const deleteUser = async (id_user) => {
    
    const res = await fetch(`${url}delete/${id_user}`, {
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
