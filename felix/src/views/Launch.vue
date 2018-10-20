<template>
    <div class="container">
        asdasd
    </div>
</template>

<script>
export default {
    name: 'launch',
    data(){
        return {
            id: undefined
        }
    },
    created(){
        console.log(this.$route.params.id)
    }
}
</script>

