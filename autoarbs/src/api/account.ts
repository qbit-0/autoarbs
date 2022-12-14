import axios from "axios";

const baseUrl = "https://autoarbs.herokuapp.com/api";

const getByUserNameOrEmail = "/auth/GetByUserNameOrEmail";
const registerEndpoint = "/auth/register";
const loginEndpoint = "/auth/login";
const depositEndpoint = "/deposit";
const withdrawEndpoint = "/withdraw";

export const checkUserNameAvailability = async (userName: string) => {
  const url = new URL(`${baseUrl}${getByUserNameOrEmail}`);
  url.searchParams.append("username", userName);
  return await axios.get(url.href);
};

export const register = async (
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

export const login = async (userNameOrEmail: string, password: string) => {
  const url = new URL(`${baseUrl}${loginEndpoint}`);
  return axios.post(url.href, {
    userName: userNameOrEmail,
    password,
  });
};

export const deposit = async (
  userName: string,
  amount: number,
  method: string
) => {
  const url = new URL(`${baseUrl}${depositEndpoint}`);
  return axios.post(url.href, {
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
  const url = new URL(`${baseUrl}${withdrawEndpoint}`);
  return axios.post(url.href, {
    userName,
    amount,
    method,
    account_withdrawn_to: accountWidthdrawnTo,
  });
};
