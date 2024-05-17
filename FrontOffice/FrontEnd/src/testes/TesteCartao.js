import { toast } from "sonner";
export default function testeCartao(cartao) {
	let nome = cartao.NomeTitular.split(" ");
	console.log(nome);
	console.log(cartao.NumeroCartao.length);

	if (cartao.NumeroCartao.length != 16) {
		toast.warning("Número cartão está invalido");
		return false;
	}

	if (cartao.CVV.length != 3) {
		toast.warning("CVV está inválido");
		return false;
	}

	if (nome.length < 2) {
		toast.warning("Nome está inválido");
		return false;
	}

	return true;
}
