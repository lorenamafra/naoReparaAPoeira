const request = require("supertest");
const app = require("../index");

describe("Testes da Rota de Login", () => {
	it("Deve retornar status 200 ao fornecer credenciais corretas", async () => {
		const response = await request(app).post("/cliente/login").send({
			email: "denisls02@outlook.com",
			senha: "123",
		});

		expect(response.statusCode).toBe(200);
	});
});

describe("Testes das Rotas de Pedidos", () => {
	it("Deve criar um novo pedido com sucesso", async () => {
		const response = await request(app)
			.post("/pedido/criar")
			.send({
				items: [
					{
						nome_disco: "Graduation",
						artista: "Kanye West",
						id_produto: 6,
						qtd: 1,
						valor: 150,
						imagem: "/KWGraduation20071.jpg",
					},
					{
						nome_disco: "Dois",
						artista: "Legião Urbana",
						id_produto: 7,
						qtd: 1,
						valor: 20,
						imagem: "/LUDois19860.jpg",
					},
				],
				valor: {
					subTotal: 170,
					valorFrete: 20,
					total: 190,
				},
				cliente: {
					cpf: "51501128876",
					email: "denisls02@outlook.com",
					nome_completo: "Denis Lima",
					data_nascimento: "2002-11-15T02:00:00.000Z",
					genero: "Outros",
				},
				envio: {
					tipoFrete: "Nuvem Voadora",
					valorFrete: 20,
					endereco: {
						cep: "03243080",
						numero: "191",
						complemento: "Casa",
						logradouro: "Rua Vitória do Mearim",
						id_endereco: 1,
					},
				},
				pagamento: {
					formaPagamento: "Boleto",
				},
			});

		expect(response.statusCode).toBe(200);
		expect(response.text).toBe("Pedido criado");
	});
});
describe("Testes das Rotas de Verificação de CPF e E-mail", () => {
	it("Deve retornar verdadeiro para um CPF existente", async () => {
		const response = await request(app).post("/check/cpf").send({
			cpf: "51501128876",
		});

		expect(response.statusCode).toBe(200);
		expect(response.body).toBe(true);
	});

	it("Deve retornar verdadeiro para um e-mail existente", async () => {
		const response = await request(app).post("/check/email").send({
			email: "denisls02@outlook.com",
		});

		expect(response.statusCode).toBe(200);
		expect(response.body).toBe(true);
	});

	it("Deve retornar falso para um CPF inexistente", async () => {
		const response = await request(app).post("/check/cpf").send({
			cpf: "99999999999",
		});

		expect(response.statusCode).toBe(200);
		expect(response.body).toBe(false);
	});


	it("Deve retornar falso para um e-mail inexistente", async () => {
		const response = await request(app).post("/check/email").send({
			email: "email_inexistente@example.com",
		});

		expect(response.statusCode).toBe(200);
		expect(response.body).toBe(false);
	});
});
