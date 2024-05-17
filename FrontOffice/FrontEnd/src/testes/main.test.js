import testeCartao from "../TesteCartao.js";

describe("Testes de Cartão Crédito", () => {
	const Cartao = { NumeroCartao: 4222222222222, CVV: 123, nome: "Denis Lima" };
	it("Deve retornar true ao fornecer credenciais corretas", async () => {
		const respose = testeCartao(Cartao);

		expect(response).toBe(true);
	});
});
