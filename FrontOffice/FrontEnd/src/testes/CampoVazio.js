const infoStyles = {
	backgroundColor: "white",
	color: "red",
};

import { toast } from "sonner";

export default function CampoVazio(campo, campoNome) {
	if (!campo || campo.trim() == "") {
		toast.warning(`${campoNome} está vazio!`, { style: infoStyles });

		return false;
	}
	return true;
}
