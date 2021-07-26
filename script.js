var regex = /^[0-9]+$/;

// Instanciando o VueJS
const app = new Vue({
	el: "#app",
	data: {
		// Definindo variáveis reativas
		response: {},
		history: {},
		show_history: false,
		current_cnpj: null
	},
	methods: {
		// Função para utlizar a API pública
		sendCnpj: () => {
			// Pegar valor do cnpj e guardar na variável
			// O parâmetro c é usado caso queira passar o cnpj como argumento
			let cnpj = app.current_cnpj ?? document.getElementById('cnpj').value
			cnpj = app.inputFilter(cnpj)

			if (!cnpj.match(regex)) {
				alert('Somente números!')
				return false
			}

			// Fazer requisição
			fetch(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`, {
				method: "GET",
			})
			.then(resp => resp.json())
			.then(data => {
				app.response = data
				app.current_cnpj = null

				// Caso não houver erros
				if (!data.error) {
					let current_data
					// Salva o CNPJ no localStorage
					if (!localStorage.history) {
						localStorage.history = ""
					} else {
						current_data = JSON.parse(localStorage.history)
					}
					
					current_data[cnpj] = data["NOME FANTASIA"]
					app.history = current_data

					localStorage.history = JSON.stringify(current_data)
				}
			})
		},

		// Função para fazer filtro nas chaves do objeto do CNPJ
		filter: string => {
			let newstr = string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
			return newstr
		},

		// Pegar dados do localStorage
		getHistory: () => {
			this.show_history = !this.show_history
			if (this.show_history) {
				let current_data = JSON.parse(localStorage.history)
				app.history = current_data
			} else {
				app.history = {}
			}
		},

		// Carregar informações do localStorage
		loadFromHistory: item => {
			app.current_cnpj = item
			app.sendCnpj()
		},

		// Função para filtrar input do cnpj
		inputFilter: (value) => {
			return value.split(".").join('').split('/').join('').split('-').join('')
		}
	}
})