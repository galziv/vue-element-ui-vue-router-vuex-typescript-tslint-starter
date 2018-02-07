<template>
    <div id="main">
        Main
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import {mapState} from 'vuex';

    export default {
    }
</script>

<style lang="scss">

    #main {

        position: relative;

        #hello-user {
            margin-bottom: 10px;
        }

        .el-dropdown {
            position: absolute;
            top: 0;
            right: 0;
            direction: ltr;
        }

        .el-dropdown-link {
            display: inline-block;
            width: 200px;
            height: 20px;
        }
    }
</style>
