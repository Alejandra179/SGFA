import { getAll, setError } from "./comedorSlice";

export const getComedoresList = (token) => {
  return async (dispatch) => {
    const resp = await fetch("http://localhost:4000/comedores/getComedores", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    });
    await resp.json().then((rf) => {
      rf.msg ? dispatch(setError({ error: rf.msg })) : dispatch(getAll(rf));
    });
  };
};
