<template>
    <div class="upcoming">
        <div class="columns is-centered">
            <div class="column is-8">
                <div class="upcoming__label">
                    Upcoming Launches
                </div>
            </div>
        </div>
        <div class="columns is-centered">
            <div class="column is-8">
                <div class="upcoming__block columns">
                    <div class="upcoming__block__img">
                        <img src="https://s3.amazonaws.com/launchlibrary/RocketImages/H-IIA_2560.jpg" alt="rocket">
                    </div>
                    <div class="upcoming__block__content">
                        <div class="upcoming__block_top">
                            <p class="upcoming__block_name">Name</p>
                            <p class="upcoming__block_date">date</p>
                        </div>
                        <div class="upcoming__block__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolorum beatae nobis fugiat error itaque fuga facilis eos perspiciatis reprehenderit? Fugiat accusamus adipisci dicta numquam odit aliquid itaque inventore tempora!
                        </div>
                        <div class="upcoming__block__footer">
                            <p class="upcoming__block__time">5d 23h 40m</p>
                            <a class="upcoming__block__more-info">More info</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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
    .upcoming__block__footer, .upcoming__block_top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .upcoming__block__img{
        width: 18.75em;
        margin: 2.5em 0 2.5em 0;
    }
    .upcoming__block__img img{
        border-radius: 50%;
        width: 12.5em;
        height: 12.5em;
        object-fit: cover;
    }
    .upcoming__block__content{
        width: calc(100% - 10em);
    }
    .upcoming__block{
        background: #131313;
        padding: 0 2.5em;
        border-radius: 10px;
    }
    .nav__img{
        height: 1.6em;
        width: 1.6em;
    }
    .nav__name span{
        position: relative;
        top: -0.35em;
        left: 0.6em;
    }
    .upcoming__block_date{
        font-size: 0.85em;
        font-weight: 300;
        padding-right: 1em;
    }
    .upcoming__block__description{
        font-size: 0.875em;
        font-weight: 300;
        margin-top: 1.2em;
    }
    .upcoming__block__time{
        font-size: 1.875em;
        font-weight: 300;
        margin-top: 1em;
    }
    .upcoming__block__more-info{
        padding: 1em;
        transition-duration: .3s;
        color: white;
        margin-top: 0.5em;
    }
    .upcoming__block__more-info:hover{
        color: white;
        background: #232323;
        border-radius: 8px;
    }


</style>

