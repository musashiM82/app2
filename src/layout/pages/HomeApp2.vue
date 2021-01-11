<template>
    <h1>HOME 2222222</h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    
})
export default class HomeApp2 extends Vue {
    mounted() {
        console.log('HomeApp2 1')
        console.log(('a.b.c').split('.'))
        console.log('HomeApp2 2')

    }
}
</script>
