const url ="http://localhost:4000/comedores/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2ZiNmM1ZWQwOTY3YjE5YzUzNWJlMGIiLCJpYXQiOjE2Nzg2MjUxNTcsImV4cCI6MTY3ODYyODc1N30.ZFcavRpQH-IxunI98-AP4XyNve93LZ2GkYY_O1V2XSs";
export const getComedores = async()=>{
 const res = await fetch(`${url}getComedores`,
 {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization":token
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