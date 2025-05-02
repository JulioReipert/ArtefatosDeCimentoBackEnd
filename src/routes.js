import login from "./controller/loginController.js";

export default function addRotas(servidor) {
  servidor.use(login);
}
