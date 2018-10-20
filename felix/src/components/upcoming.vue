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
                        <div class="upcoming__block_name">
                            <p>Name</p>
                            <p>date</p>
                        </div>
                        <div class="upcoming__block__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolorum beatae nobis fugiat error itaque fuga facilis eos perspiciatis reprehenderit? Fugiat accusamus adipisci dicta numquam odit aliquid itaque inventore tempora!
                        </div>
                        <div class="upcoming__block__time">
                            <p>time</p>
                            <p>More info</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .upcoming{
        color: white;
        margin: calc(50vh - 8em) 0 3em 0;
    }
    .upcoming__label{
        font-weight: 300;
        font-size: 1.8em;
    }
    .upcoming__block__time, .upcoming__block_name{
        display: flex;
        justify-content: space-between;
    }
    .upcoming__block__img{
        width: 18.75em;
    }
    .upcoming__block__img img{
        width: 12.5em;
        height: 12.5em;
        object-fit: cover;
        margin: 0 2.5em 0 0;
    }
    .upcoming__block__content{
        width: calc(100% - 18.75em);
    }
    .upcoming__block{
        background: #131313;
        padding: 3.125em 2.5em;
        border-radius: 10px;
    }

</style>

