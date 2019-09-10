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
            newSearch.push({ searches: text });
        }
    }
})