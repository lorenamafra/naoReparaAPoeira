const mockCart = [
	{ id: 1, nome: "randomName", qtd: 5 },
	{ id: 2, nome: "randomName2", qtd: 1 },
	{ id: 3, nome: "randomName", qtd: 3 },
	{ id: 4, nome: "randomName4", qtd: 3 },
];

const mockProduct1 = { id: 1, nome: "randomName", qtd: 5 };
const mockProduct2 = { id: 10, nome: "ProdutoNovo" };

const setMockCart = (item) => {
	console.log(item);
	console.log("old cart", mockCart);
	mockCart.push(item);
	console.log("new cart", mockCart);
};

export default function AddToCart(item, cart, setCart) {
	let resultado = cart.find((cartItem) => cartItem.id == item.id);

	if (resultado) {
		console.log(...cart);
	}
}

AddToCart(mockProduct1, mockCart, setMockCart);
