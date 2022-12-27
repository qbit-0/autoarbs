import axios from "axios";

const baseUrl = "https://autoarbs.herokuapp.com/api";

// User
const readUserEndpoint = "/user";
export const readUserByEmail = async (body: { email: string }) => {
  const url = new URL(`${baseUrl}${readUserEndpoint}`);
  return await axios.post(url.href, { ...body, token: "" });
};
export const readUserByToken = async (body: {
  email: string;
  token: string;
}) => {
  const url = new URL(`${baseUrl}${readUserEndpoint}`);
  return await axios.post(url.href, body);
};

// Auth
const createRegisterEndpoint = "/auth/register";
export const createUser = async (body: {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}) => {
  const url = new URL(`${baseUrl}${createRegisterEndpoint}`);
  return await axios.post(url.href, body);
};

const createLoginEndpoint = "/auth/login";
export const createLogin = async (body: {
  email: string;
  password: string;
}) => {
  const url = new URL(`${baseUrl}${createLoginEndpoint}`);
  return axios.post(url.href, body);
};

// Deposit
const createDepositEndpoint = "/deposit/create";
export const createDeposit = async (body: {
  token: string;
  email: string;
  amount: number;
  method: string;
}) => {
  const url = new URL(`${baseUrl}${createDepositEndpoint}`);
  return axios.post(url.href, body);
};

const readDepositEndpoint = "/deposit/get";
export const readDeposit = async (body: { token: string; email: string }) => {
  const url = new URL(`${baseUrl}${readDepositEndpoint}`);
  return axios.post(url.href, body);
};

const createDepositBonusEndpoint = "/deposit/bonus";
export const createDepositBonus = async (body: {
  token: string;
  userList: string[];
  amount: number;
}) => {
  const url = new URL(`${baseUrl}${createDepositBonusEndpoint}`);
  return axios.post(url.href, body);
};

// Withdrawal
const createWithdrawalEndpoint = "/withdraw/create";
export const createWithdrawal = async (body: {
  token: string;
  email: string;
  amount: number;
  method: string;
  accountWithdrawnTo: string;
}) => {
  const url = new URL(`${baseUrl}${createWithdrawalEndpoint}`);
  return axios.post(url.href, {
    token: body.token,
    email: body.email,
    amount: body.amount,
    method: body.method,
    account_withdrawn_to: body.accountWithdrawnTo,
  });
};

const readWithdrawalEndpoint = "/withdraw/get";
export const readWithdrawal = async (body: {
  token: string;
  email: string;
}) => {
  const url = new URL(`${baseUrl}${readWithdrawalEndpoint}`);
  return axios.post(url.href, body);
};

// Verify
const sendOtpEndpoint = "/verify/sendotp";
export const createSendOtp = async (body: {
  token: string;
  email: string;
  transactionId: string;
  action: string;
}) => {
  const url = new URL(`${baseUrl}${sendOtpEndpoint}`);
  return axios.post(url.href, body);
};

const validateEndpoint = "/verify/validate";
export const createVerification = async (body: {
  token: string;
  email: string;
  referenceId: string;
  action: string;
  code: string;
}) => {
  const url = new URL(`${baseUrl}${validateEndpoint}`);
  return axios.post(url.href, body);
};

// Admin
const updateDepositEndpoint = "/admin/updatedeposit";
export const createAdminUpdateDeposit = async (body: {
  token: string;
  transactionId: string;
  status: string;
}) => {
  const url = new URL(`${baseUrl}${updateDepositEndpoint}`);
  return axios.post(url.href, body);
};

const updateWithdrawalEndpoint = "/admin/updatewithdrawal";
export const createAdminUpdateWithdrawal = async (body: {
  token: string;
  transactionId: string;
  status: string;
}) => {
  const url = new URL(`${baseUrl}${updateWithdrawalEndpoint}`);
  return axios.post(url.href, body);
};
