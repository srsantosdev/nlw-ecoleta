import { store, ReactNotificationOptions } from "react-notifications-component";

const options: ReactNotificationOptions = {
  insert: "top",
  container: "top-right",
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"],
  dismiss: {
    duration: 3000,
    pauseOnHover: true,
    showIcon: true,
  },
};

export const success = () => {
  return store.addNotification({
    title: "Concluído!",
    message: "Ponto de Coleta cadastrado com sucesso.",
    type: "success",
    ...options,
  });
};

export const error = () => {
  return store.addNotification({
    title: "Vish...",
    message: "Erro ao cadastrar o ponto de coleta.",
    type: "danger",
    ...options,
  });
};
