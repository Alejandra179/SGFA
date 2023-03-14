const url ="http://localhost:4000/auth"


export const signIn = async ({ username, password })=> {
    return await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response is not ok");
        return res.json();
      })
      .then((response) => {
        if (response.message) {
          return response;
        } else {
          const { token } = response;
          return token;
        }
      });
  }
  

export const signUp = ({ name, username, password,role })=>{
  fetch(`${url}/register`, {
  method: "POST",
  body: JSON.stringify({name,username,password,role}),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => json)
.catch(err => err);
  
}
  