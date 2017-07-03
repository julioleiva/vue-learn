new Vue({
	el: '#app',
	data: {
		counter:0,

	},
	methods:{
        result(){
        	return this.counter < 5 ? 'Menor que cinco' : 'Mayor que cinco'
		}
	},
	watch:{
		counter: function(){
			var vm = this;
			setTimeout(function(){
				vm.counter = 0;
			},2000)
		}

	},
	computed: {
		output(){
			return this.counter < 5 ? 'Menor' : 'Mayor';
		},

	}
})