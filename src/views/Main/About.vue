<template>
    <div id="done-view">
        <h2>
            done view
        </h2>
        <el-button @click="startCountDown">start count down</el-button>
        <div>about.countdownSeconds: {{about.countdownSeconds}}</div>
    </div>
</template>

<script lang="ts">
    import {mapActions, mapMutations, mapState} from "vuex";

    export default {
        computed: mapState(['about']),
        methods: Object.assign(mapMutations(['setDoneView']), mapActions(['startCountDown'])),
    }
</script>

<style lang="scss">

</style>
