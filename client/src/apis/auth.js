const url ="http://localhost:4000/auth"

export default function signIn({ username, password }) {
    return fetch(`${url}/login`, {
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
  