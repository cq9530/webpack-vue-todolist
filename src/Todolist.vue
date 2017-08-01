<template>
    <div>
        <input v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo" />
        <ul>
            <item v-for="(item, index) in todos" :key="index" v-bind:data="item" v-bind:click="function(){togger(item)}"></item>
        </ul>
        <div v-if="dones.length!==0" @click="toggerDones">{{dones.length}}件已完成</div>
        <ul v-show="seen" class="done-ul">
            <item v-for="(item, index) in dones" :key="index" v-bind:data="item" v-bind:click="function(){togger(item)}"></item>
        </ul>
    </div>
</template>
<script>
    var item = require('./components/Item');
    module.exports = {
        name: 'todolist',
        components: {
            item: item
        },
        data: function() {
            return {
                newTodoText: '',
                seen: true,
                things: [{
                    thing: 'Do the dishes4',
                    hasdone: false
                }, {
                    thing: 'Take out the trash',
                    hasdone: false
                }, {
                    thing: 'Mow the lawn',
                    hasdone: false
                }]
            }
        },
        computed: {
            todos: function() {
                var todos = []
                for (var i = 0; i < this.things.length; i++) {
                    if (this.things[i].hasdone !== true) {
                        todos.push(this.things[i])
                    }
                }
                return todos
            },
            dones: function() {
                var dones = []
                for (var i = 0; i < this.things.length; i++) {
                    if (this.things[i].hasdone === true) {
                        dones.push(this.things[i])
                    }
                }
                return dones
            }
        },
        methods: {
            addNewTodo: function() {
                this.things.push({
                    hasdone: false,
                    thing: this.newTodoText
                });
                this.newTodoText = '';
            },
            togger: function(item) {
                item.hasdone = !item.hasdone;
            },
            toggerDones: function() {
                this.seen = !this.seen;
            }
        }
    };
</script>