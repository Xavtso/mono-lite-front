export const baseUrl = "http://localhost:5000";

export const AUTH_API_URL = {
  login: "/auth/login",
  signUp: "/auth/signUp",
};

export const API_ENDPOINTS = {
  // Users
  allUsers: `/users`,
  getUserbyId: `/users/`,
  deleteUser: `/users/delete`,

  // Card
  getAllCards: `/cards/all`,
  getCard: `/cards/`,

  // Transaction
  createTransaction: `/transactions/new`,
  getUserTransactions: `/transactions/`,
  getAllTransactions: `/transactions/all`,

  // Cashback
  withdrawCashback: `/cashback/withdraw`,
  getCashbackBalance: `/cashback/balance/`,

  // PiggyJar
  getUserJars: `/piggybank/`,
  getAllJars: `/piggybank/all`,
  createJar: `/piggybank/new`,
  breakJar: `/piggybank/break`,
  depositToJar: `/piggybank/deposit`,
  withdrawFromJar: `/piggybank/withdraw`,
  changeJarCredentials: `/piggybank/credentials`,

  // Loans
  getLoanById: `/loans/`,
  createLoan: `/loans/new`,
  payLoanPart: `/loans/pay/part`,
  payLoanFull: `/loans/pay/full`,

  // Deposits
  createDeposit: `/deposits`,
  getAllDeposits: `/deposits`,
  getUserDeposits: `/deposits/`,
  updateAmountDeposit: `/deposits/update`,
  deleteDeposit: `/deposits/destroy`,

  // Currency
  getCurrencyInfo: `/currency/info`,
  getUserBalance: `/currency/`,
  sellCurrency: `/currency/sell`,
  buyCurrency: `/currency/buy`,
};
