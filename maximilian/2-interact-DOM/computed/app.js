new Vue({
	el: '#app',
	data: {
		counter:0,

		// en la segunda aproximación, result ya no es una propiedad sino un método
		// result:'',

		//las propiedades del data no son reactivas per-se
		// Esto no se puede hacer:
		// result: this.result < 5 ? 'Menor' : 'Mayor'
		visible: false

	},
	methods:{

        // 1: Aproximación con 2 métodos y data en la instancia

        // increase(){
			// this.counter++;
			// this.result = this.counter > 5 ? 'Mayor que 5' : 'Menor que 5'
        // },
        //
        // decrease(){
        //     this.counter--;
        //     this.result = this.counter > 5 ? 'Mayor que 5' : 'Menor que 5'
        // },

		// ++++++++++++++++++++++++++++++++++++++++

        // 2: Aproximación con lógica en template y un solo método en la instancia,
        // "result" ya no es una propiedad sino un método

		result(){
        	return this.counter < 5 ? 'Menor que cinco' : 'Mayor que cinco'
		}

	},
	computed: {
		output(){
			return this.counter < 5 ? 'Menor' : 'Mayor';
		},
		mostrar(){
			return this.counter < 5 ? true : false;
		}
	}
})