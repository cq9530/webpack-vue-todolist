var Vue = require('vue/dist/vue');
var Todolist = require('./Todolist');


new Vue({
    el: '#todolist',
    template: '<Todolist/>',
    components: { Todolist },
});