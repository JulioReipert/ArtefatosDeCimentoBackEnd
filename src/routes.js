import login from "./controller/loginController.js";
import cliente from "./controller/clienteController.js"
import produto from "./controller/produtoController.js"
import materia_prima from "./controller/materia_primaController.js"
import pedido from "./controller/pedidoController.js"
import item_pedido from "./controller/item_pedidoController.js"

export default function addRotas(servidor) {
  servidor.use(login);
  servidor.use(cliente);
  servidor.use(produto);
  servidor.use(materia_prima);
  servidor.use(pedido);
  servidor.use(item_pedido);
}
