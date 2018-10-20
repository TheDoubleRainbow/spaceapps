<template>
    <nav class="nav">
        <div class="container">
            <div class="columns">
                <div class="column is-2 nav__name">
                    Felix in the space
                </div>
                <div class="column is-6 nav__links">
                    <div class="columns">
                        <router-link class="column is-2 nav__link" to="/"><span>Home</span></router-link>
                        <router-link class="column is-2 nav__link" to="/about"><span>About</span></router-link>
                    </div>
                </div>
                <div class="column is-1 nav__separator">
                    
                </div>
                <div class="column is-3 nav__search">
                    <input class="input" type="text" />
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style lang="scss">
    .nav{
        background: #131313;
        height: 4em;
        padding: 0.8em;
        color: white;
    }
    .nav__name{
        font-size: 1.5em;
        font-weight: 300;
    }
    .nav__link{
        color: white;
        text-align: center;
        margin: 0.4em 0 0 0;
    }
    .nav__link.router-link-exact-active span{
        border-bottom: 1px solid white;
    }
    .nav__link:hover span{
        border-bottom: 1px solid white;
    }
    .nav__link:hover{
        color: white;
    }
    .nav__search input{
        border-radius: 25px;
    }
</style>    


