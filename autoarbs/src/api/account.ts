import axios from "axios";

const baseUrl = "https://autoarbs.herokuapp.com/api";

const getByEmail = "/auth/GetByEmail";
const registerEndpoint = "/auth/register";
const loginEndpoint = "/auth/login";
const depositEndpoint = "/deposit";
const withdrawEndpoint = "/withdraw";

export const checkEmailAvailability = async (email: string) => {
  const url = new URL(`${baseUrl}${getByEmail}`);
  url.searchParams.append("email", email);
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

export const login = async (email: string, password: string) => {
  const url = new URL(`${baseUrl}${loginEndpoint}`);
  return axios.post(url.href, {
    email,
    password,
  });
};

export const deposit = async (
  email: string,
  amount: number,
  method: string
) => {
  const url = new URL(`${baseUrl}${depositEndpoint}`);
  return axios.post(url.href, {
    email,
    amount,
    method,
  });
};

export const withdraw = async (
  email: string,
  amount: number,
  method: string,
  accountWidthdrawnTo: string
) => {
  const url = new URL(`${baseUrl}${withdrawEndpoint}`);
  return axios.post(url.href, {
    email,
    amount,
    method,
    account_withdrawn_to: accountWidthdrawnTo,
  });
};
