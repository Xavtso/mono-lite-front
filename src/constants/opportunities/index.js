import {
  faMoneyBillTrendUp,
  faSackDollar,
  faWallet,
  faPiggyBank,
  faMoneyBillTransfer,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export const optionData = [
  {
    id: "loan",
    class: "loan",
    title: "Loan",
    icon: faWallet,
    color: "#4141ff",
  },
  {
    id: "deposit",
    class: "deposit",
    title: "Deposit",
    icon: faMoneyBillTrendUp,
    color: "lightgreen",
  },
  {
    id: "transfer",
    class: "transfer",
    title: "Transfer",
    icon: faMoneyBillTransfer,
    color: "lightgreen",
  },
  {
    id: "cashback",
    class: "cashback",
    title: "Cash Back",
    icon: faSackDollar,
    color: "rgb(246, 209, 161)",
  },
  {
    id: "jar",
    class: "piggy-bank",
    title: "Jar",
    icon: faPiggyBank,
    color: "pink",
  },
  {
    id: "closeAccount",
    class: "close-account",
    title: "Account",
    icon: faTrashCan,
    color: "#ff0000",
  },
  {
    id: "currency",
    class: "info",
    title: "Currency",
    icon: faDollar,
    color: "green",
  },
];
