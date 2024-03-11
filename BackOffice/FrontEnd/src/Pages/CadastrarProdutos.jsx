function CadastrarProdutos() {
	const user = JSON.parse(sessionStorage.getItem("User"));

	return <div>{user.nome}</div>;
}

export default CadastrarProdutos;
