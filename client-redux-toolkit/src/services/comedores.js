const url ="http://localhost:5000/comedores/"
export const getComedores = async()=>{
 const res = await fetch(`${url}getComedores`,
 {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())
  .catch((error) => {
    console.log(error);
  })
  console.log(res)
  return res
}

export const getComedor = async(id_comedor)=>{
    const res = await fetch(`${url}getComedor/${id_comedor}`,
 {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())
  .catch((error) => {
    console.log(error);
  })
  console.log(res)
  return res
}

export const addComedor =async (formData)=>{
  
  const res = await fetch(`${url}addComedor`, {
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

export const updateComedor = async(formData)=>{
    const {id_comedor, name, neighborhood, responsable } = formData
        const res = await fetch(`${url}updateComedor/${id_comedor}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, neighborhood, responsable}),
      }).then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
      
      console.log(res);
      return res;
}
export const deleteComedor =async(id_comedor)=>{
    const res = await fetch(`${url}deleteComedor/${id_comedor}`,
    {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json",
       },
     }).then((response) => response.json())
     .catch((error) => {
       console.log(error);
     })
     console.log(res)
     return res


}