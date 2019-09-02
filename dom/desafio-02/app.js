new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlert() {
            alert('Alerta On')
        },
        atualizarValor(event) {
            this.valor = event.target.value;
        }
    }
})