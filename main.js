var jsApp = {
    onload: function() {
        if (!me.video.init('jsapp', 640, 480, true, 1.75)) {
            alert("html 5 canvas is not supported by this browser.");
            return;
        }
        me.loader.onload = this.loaded.bind(this);
        me.loader.preload(resources);
        me.state.change(me.state.LOADING);
    },
    loaded: function() { 
        me.entityPool.add("player", PlayerEntity);
        me.entityPool.add("coin", CoinEntity);
        me.entityPool.add("EnemyEntity", EnemyEntity);
        me.entityPool.add("thorn", thornEntity);
        me.state.set(me.state.PLAY, new PlayScreen());
        me.state.set(me.state.MENU, new TitleScreen());
        me.state.transition("fade", "#252525", 250);
        me.state.change(me.state.MENU);
    }
};
window.onReady(function() {
    jsApp.onload();
});
