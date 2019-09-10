let container = new Vue({
    el: '#app',
    data: {
        searches: [{text: 'Acheter du lait'},
        {text: 'Nourrir le chien'},
        {text: 'Ecouter les beattles'}],
        newSearch : ""
    },
    methods:{
        addTask: function(){
            this.newSearch.push({ text: this.newSearch });
            this.$refs.textbox.focus()
            this.newSearch=""
        },
    }
})