// Instanciando o VueJS
const app = new Vue({
	el: "#app",
	data: {
		response: {}
	},
	methods: {
		// Função para utlizar a API pública
		sendCnpj: () => {
			// Pegar valor do cnpj e guardar na variável
			let cnpj = document.getElementById('cnpj').value
			let regex = /^[0-9]$/

			app.response = {
			    "atividade_principal": [
			        {
			            "text": "Comércio varejista especializado de equipamentos e suprimentos de informática",
			            "code": "47.51-2-01"
			        }
			    ],
			    "data_situacao": "03/11/2005",
			    "complemento": "A",
			    "tipo": "MATRIZ",
			    "nome": "DT NETWORK INFORMATICA LTDA",
			    "uf": "SP",
			    "telefone": "(18) 3623-2801/ (18) 3623-2873",
			    "email": "escmercantil@terra.com.br",
			    "atividades_secundarias": [
			        {
			            "text": "Reparação e manutenção de computadores e de equipamentos periféricos",
			            "code": "95.11-8-00"
			        }
			    ],
			    "qsa": [
			        {
			            "qual": "49-Sócio-Administrador",
			            "nome": "VINICIUS VICENTE ALVES TERCARIOL"
			        },
			        {
			            "qual": "49-Sócio-Administrador",
			            "nome": "PAULO HENRIQUE DE LIMA DARE"
			        }
			    ],
			    "situacao": "ATIVA",
			    "bairro": "VILA NOVA",
			    "logradouro": "R CUSSY DE ALMEIDA JUNIOR",
			    "numero": "2761",
			    "cep": "16.025-333",
			    "municipio": "ARACATUBA",
			    "porte": "MICRO EMPRESA",
			    "abertura": "25/11/1986",
			    "natureza_juridica": "206-2 - Sociedade Empresária Limitada",
			    "fantasia": "DT NETWORK",
			    "cnpj": "56.764.319/0001-48",
			    "ultima_atualizacao": "2021-04-22T21:09:12.797Z",
			    "status": "OK",
			    "efr": "",
			    "motivo_situacao": "",
			    "situacao_especial": "",
			    "data_situacao_especial": "",
			    "capital_social": "32000.00",
			    "extra": {},
			    "billing": {
			        "free": true,
			        "database": true
			    }
			}
		},

		filter: string => {
			let newstr = string.charAt(0).toUpperCase() + string.substring(1)
			return newstr.split('_').join(' ')
		}
	}
})