import axios from "axios";

const baseURL = "https://autoarbs.herokuapp.com/api";

const AxiosClient = axios.create({ baseURL });

// User
const userEndpoint = "/user";
export const readUserByEmail = async (body: { email: string }) => {
  return await AxiosClient.post(userEndpoint, { ...body, token: "" });
};
export const readUserByToken = async (body: {
  email: string;
  token: string;
}) => {
  return await AxiosClient.post(userEndpoint, body);
};

// Auth
const registerEndpoint = "/auth/register";
export const createUser = async (body: {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}) => {
  return await AxiosClient.post(registerEndpoint, body);
};

const loginEndpoint = "/auth/login";
export const createLogin = async (body: {
  email: string;
  password: string;
}) => {
  return AxiosClient.post(loginEndpoint, body);
};

// Deposit
const createDepositEndpoint = "/deposit/create";
export const createDeposit = async (body: {
  token: string;
  email: string;
  amount: number;
  method: string;
}) => {
  return AxiosClient.post(createDepositEndpoint, body);
};

const getDepositEndpoint = "/deposit/get";
export const readDeposit = async (body: { token: string; email: string }) => {
  const url = new URL(`${baseURL}${getDepositEndpoint}`);
  return AxiosClient.post(url.href, body);
};

const createDepositBonusEndpoint = "/deposit/bonus";
export const createDepositBonus = async (body: {
  token: string;
  userList: string[];
  amount: number;
}) => {
  return AxiosClient.post(createDepositBonusEndpoint, body);
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
  return AxiosClient.post(createWithdrawalEndpoint, {
    token: body.token,
    email: body.email,
    amount: body.amount,
    method: body.method,
    account_withdrawn_to: body.accountWithdrawnTo,
  });
};

const getWithdrawalEndpoint = "/withdraw/get";
export const readWithdrawal = async (body: {
  token: string;
  email: string;
}) => {
  return AxiosClient.post(getWithdrawalEndpoint, body);
};

// Verify
const sendOtpEndpoint = "/verify/sendotp";
export const createSendOtp = async (body: {
  token: string;
  email: string;
  transactionId: string;
  action: string;
}) => {
  return AxiosClient.post(sendOtpEndpoint, body);
};

const validateEndpoint = "/verify/validate";
export const createVerification = async (body: {
  token: string;
  email: string;
  referenceId: string;
  action: string;
  code: string;
}) => {
  return AxiosClient.post(validateEndpoint, body);
};

// Admin
const adminUpdateDepositEndpoint = "/admin/updatedeposit";
export const createAdminUpdateDeposit = async (body: {
  token: string;
  transactionId: string;
  status: string;
}) => {
  return AxiosClient.post(adminUpdateDepositEndpoint, body);
};

const adminUpdateWithdrawalEndpoint = "/admin/updatewithdrawal";
export const createAdminUpdateWithdrawal = async (body: {
  token: string;
  transactionId: string;
  status: string;
}) => {
  return AxiosClient.post(adminUpdateWithdrawalEndpoint, body);
};

const adminGetAdminEndpoint = "/admin/getadmin";
export const adminReadAdmin = async (request: string) => {
  const url = new URL(adminGetAdminEndpoint);
  url.searchParams.append("request", request);
  return AxiosClient.get(url.href);
};

const adminGetUsersEndpoint = "/admin/getusers";
export const adminReadUsers = async (token: string) => {
  const url = new URL(adminGetUsersEndpoint);
  url.searchParams.append("token", token);
  return AxiosClient.get(url.href);
};

const adminGetDepositsEndpoint = "/admin/getdeposits";
export const adminReadDeposits = async (token: string) => {
  const url = new URL(adminGetDepositsEndpoint);
  url.searchParams.append("token", token);
  return AxiosClient.get(url.href);
};

const adminGetWithdrawalsEndpoint = "/admin/getwithdraws";
export const adminReadWithdraws = async (token: string) => {
  const url = new URL(adminGetWithdrawalsEndpoint);
  url.searchParams.append("token", token);
  return AxiosClient.get(url.href);
};

const adminGetTransactionsEndpoint = "/admin/getalltransactions";
export const adminReadTransactions = async (token: string) => {
  const url = new URL(adminGetTransactionsEndpoint);
  url.searchParams.append("token", token);
  return AxiosClient.get(url.href);
};

const adminRegisterEndpoint = "/admin/auth/register";
export const adminCreateAdmin = async (body: {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}) => {
  const url = new URL(adminRegisterEndpoint);
  return AxiosClient.post(url.href, body);
};

const adminLoginEndpoint = "/admin/auth/login";
export const adminCreateLogin = async (body: {
  email: string;
  password: string;
}) => {
  const url = new URL(adminLoginEndpoint);
  return AxiosClient.post(url.href, body);
};
