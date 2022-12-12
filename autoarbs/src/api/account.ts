import axios from "axios";

const url = "https://autoarbs.herokuapp.com/api";

const registerEndpoint = "/auth/register";
const loginEndpoint = "/auth/login";
const depositEndpoint = "/deposit";
const withdrawEndpoint = "/withdraw";

export const register = async (
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  password: string
) => {
  return await axios.post(`${url}${registerEndpoint}`, {
    firstName,
    lastName,
    userName,
    email,
    password,
  });
};

export const login = async (userNameOrEmail: string, password: string) => {
  return axios.post(`${url}${loginEndpoint}`, {
    userName: userNameOrEmail,
    password,
  });
};

export const deposit = async (
  userName: string,
  amount: number,
  method: string
) => {
  return axios.post(`${url}${depositEndpoint}`, {
    userName,
    amount,
    method,
  });
};

export const withdraw = async (
  userName: string,
  amount: number,
  method: string,
  accountWidthdrawnTo: string
) => {
  return axios.post(`${url}${withdrawEndpoint}`, {
    userName,
    amount,
    method,
    account_withdrawn_to: accountWidthdrawnTo,
  });
};
