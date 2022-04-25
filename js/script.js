const lista =new Vue({
    el: "#lista",
    data:{
        tiramisu:[
            {
                check: false,
                nomeIngrediente: "zucchero",
                quantita: 120,
            },
            {
                check: false,
                nomeIngrediente: "mascarpone",
                quantita: 750,
            },
            {
                check: false,
                nomeIngrediente: "caffe",
                quantita: 300,
            },
            {
                check: false,
                nomeIngrediente: "uova",
                quantita: 5,
            },
            {
                check: false,
                nomeIngrediente: "savoiardi",
                quantita: 500,
            },
            {
                check: false,
                nomeIngrediente: "cacao",
                quantita: 50,
            },
            {
                check: false,
                nomeIngrediente: "marsala",
                quantita: 200,
            },
        ],
        nuovoIngrediente: "",
    },
    methods:{
        aggiungi(){
            const ingrediente = {
                check: false,
                nomeIngrediente: this.nuovoIngrediente,
            }
            this.tiramisu.push(ingrediente)
            this.nuovoIngrediente= ""
        },
        rimuovi(i){
            this.tiramisu.splice(i, 1)
        }
    }
})