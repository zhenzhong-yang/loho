<template>
    <div id="box">
        <div class="header">
            <jheader></jheader>
        </div>
        <div class="body">
            <div class="nav">
                <jnav></jnav>
            </div>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
    import './home.scss';
    import jheader from './header/header.vue';
    import jnav from './nav/nav.vue';

    export default {
        components: {
            jheader,
            jnav
        }
    }
</script>