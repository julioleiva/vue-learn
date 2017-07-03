new Vue({
	el: '#app',
	data: {
		title: 'Título!',
		htmlLink: '<a href="http://www.google.com">Google</a>',
		x:0,
		y:0,
		counter:0,
	},
	methods:{
		saludar(){
			return 'Hola' + this.title;
		},

       	// Getting Event Data from the Event Object
        updateCoordinates: function (event) {
			this.x = event.clientX;
			this.y = event.clientY;
        },

        // Passing your own Arguments with Events
		increaseCounter(valor, e){
			this.counter += valor
		},

        // Key Modifiers
		lanzarMensaje (v){
			alert(v)
		}
	}
})