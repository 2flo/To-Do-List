let container = new Vue({
    el: '#app',
    data: {
        searches: [{text: 'Acheter du lait'},
        {text: 'Nourrir le chien'},
        {text: 'Ecouter les beattles'}],
    },
    methods:{
        addTask: function(){
            this.searches.push({ text: this.newSearch });
            this.newSearch= ""
        },
    }
})