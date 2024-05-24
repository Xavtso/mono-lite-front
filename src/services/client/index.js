import axios from "axios";
import { createPortal } from "react-dom";
import Notification from "../../components/Notification";

const init = () => {
  const client = axios.create({
    baseURL: "http://localhost:5000",
  });

  // Додаємо перехоплення помилок для кожного запиту
  client.interceptors.response.use(
    (response) => {
      // Якщо запит успішний, просто повертаємо відповідь
      return response;
    },
    (error) => {
      alert(error.response.data.message);
      return Promise.reject(error);
    },
  );

  return client;
};

export const client = init();
