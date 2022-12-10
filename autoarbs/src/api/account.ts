import axios from "axios";

const url = "https://autoarbs.herokuapp.com/api";

const registerEndpoint = "/auth/register";
const loginEndpoint = "/auth/login";
const depositEndpoint = "/deposit";
const withdrawEndpoint = "/withdraw";

export const register = async (
  firstname: string,
  lastname: string,
  username: string,
  email: string,
  password: string
) => {
  return await axios.post(`${url}${registerEndpoint}`, {
    firstName: firstname,
    lastName: lastname,
    userName: username,
    email,
    password,
  });
};

export const login = async (usernameOrEmail: string, password: string) => {
  // return axios.post(`${url}${loginEndpoint}`, {
  //   userName: usernameOrEmail,
  //   password,
  // });

  return fetch(`https://autoarbs.herokuapp.com/api/auth/login`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userName: "qbit", password: "asdfasdf" }),
  });
};

export const deposit = async (
  username: string,
  amount: number,
  method: string
) => {
  return axios.post(`${url}${depositEndpoint}`, {
    userName: username,
    amount,
    method,
  });
};

export const getDeposit = async () => {
  return await axios.get(`${url}${depositEndpoint}`);
};

export const withdraw = async (
  username: string,
  amount: number,
  method: string,
  accountWidthdrawnTo: string
) => {
  return axios.post(`${url}${withdrawEndpoint}`, {
    userName: username,
    amount,
    method,
    account_withdrawn_to: accountWidthdrawnTo,
  });
};
