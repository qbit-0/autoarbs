import axios from "axios";

const baseUrl = "https://autoarbs.herokuapp.com/api";

const getUserEndpoint = "/user";
const registerEndpoint = "/auth/register";
const loginEndpoint = "/auth/login";
const createDepositEndpoint = "/deposit/create";
const getDepositEndpoint = "/deposit/get";
const createWithdrawalEndpoint = "/withdraw/create";
const getWithdrawalEndpoint = "/withdraw/get";

export const readUserByEmail = async (email: string) => {
  const url = new URL(`${baseUrl}${getUserEndpoint}`);
  return await axios.post(url.href, { email });
};

export const readUserByToken = async (email: string, token: string) => {
  const url = new URL(`${baseUrl}${getUserEndpoint}`);
  return await axios.post(url.href, { email, token });
};

export const createUser = async (
  email: string,
  firstName: string,
  lastName: string,
  password: string
) => {
  const url = new URL(`${baseUrl}${registerEndpoint}`);
  return await axios.post(url.href, {
    firstName,
    lastName,
    email,
    password,
  });
};

export const createLogin = async (email: string, password: string) => {
  const url = new URL(`${baseUrl}${loginEndpoint}`);
  return axios.post(url.href, {
    email,
    password,
  });
};

export const createDeposit = async (
  token: string,
  email: string,
  amount: number,
  method: string
) => {
  const url = new URL(`${baseUrl}${createDepositEndpoint}`);
  return axios.post(url.href, {
    token,
    email,
    amount,
    method,
  });
};

export const readDeposit = async (token: string, email: string) => {
  const url = new URL(`${baseUrl}${getDepositEndpoint}`);
  return axios.post(url.href, { token, email });
};

export const createWithdrawal = async (
  token: string,
  email: string,
  amount: number,
  method: string,
  accountWidthdrawnTo: string
) => {
  const url = new URL(`${baseUrl}${createWithdrawalEndpoint}`);
  return axios.post(url.href, {
    token,
    email,
    amount,
    method,
    account_withdrawn_to: accountWidthdrawnTo,
  });
};

export const readWithdrawal = async (token: string, email: string) => {
  const url = new URL(`${baseUrl}${getWithdrawalEndpoint}`);
  return axios.post(url.href, { token, email });
};
