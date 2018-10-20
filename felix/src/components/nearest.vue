<template>
    <div class="container">
        <div class="columns">
            <div class="column is-6 is-offset-2 nearest">
                <div class="nearest__label">Nearest launch</div>
                <div class="nearest__time">
                    <div class="nearest__time__timer">5d 22h 58m 69s</div>
                    <div class="nearest__time__date">T-0: October 26, 2018 08:05:00 UTC</div>
                </div>
                <div class="nearest__name">
                    Pegasus XL | Ionospheric Connection Explorer (ICON)
                </div>
                <a href="#" class="nearest__more-info">More info</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .nearest{
        margin: 13.2em 0 0 0;
        color: white;
        font-weight: lighter;
    }
    .nearest__label{
        font-size: 1.6em;
    }
    .nearest__time{
        margin: 1.3em 0 0 0;
    }
    .nearest__time__timer{
        font-size: 3em;
        line-height: 1.2em;
        position: relative;
        left: -3px;
    }
    .nearest__time__date{
        font-size: 1.2em;
    }
    .nearest__name{
        font-size: 3em;
        font-weight: normal;
        line-height: 1.2em;
        margin: 0.3em 0 0 0;
    }
    .nearest__more-info{
        display: inline-block;
        border: 1px solid white;
        padding: 0.6em;
        width: 9.37em;
        text-align: center;
        color: white;
        margin: 1.6em 0 0 0;
    }
    .nearest__more-info:hover{
        font-weight: 300;
        color: white;
        
    }
</style>

