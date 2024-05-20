export const formatCardNumber = (number) => {
  if (number) {
    const cleanedNumber = number.replace(/\D/g, "");
    const formattedNumber = cleanedNumber.match(/.{1,4}/g).join(" ");
    return formattedNumber;
  }
  return "";
};

export const formatDate = function (date) {
  const now = new Date();
  const diff = now - date;

  if (diff < 60000) {
    // менше 1 хвилини
    return "now";
  } else if (diff < 1800000) {
    // менше 30 хвилин
    const minutesAgo = Math.floor(diff / 60000);
    return `${minutesAgo} m. ago`;
  } else if (diff < 3600000) {
    // менше 1 години
    const minutesAgo = Math.floor(diff / 60000);
    return `${minutesAgo} m. ago`;
  } else if (now.toDateString() === date.toDateString()) {
    // в той же день
    return "today";
  } else if (diff < 86400000) {
    // менше 1 доби
    return "yesterday";
  } else {
    // більше 1 доби
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
};

export const alphabeticalSort = function (data) {
  const sorted = data.sort((a, b) => {
    let nameA = a.first_name.toUpperCase();
    let nameB = b.first_name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sorted;
};

export const calcCashbackRemain = (balance) => {
  if (balance < 100) {
    const remain = balance - 100;

    return `Remain to collect - ${-remain} ₴`;
  }
  return `Ready to withdraw!🥳`;
};
