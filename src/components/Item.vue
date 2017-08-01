<template>
    <li>
        <input type="checkbox" :checked="data.hasdone" v-on:click="click"/>
        {{ data.thing }}
    </li>
</template>

<script>
    module.exports = {
        name: 'item',
        props: ['data', 'click']
    };
</script>