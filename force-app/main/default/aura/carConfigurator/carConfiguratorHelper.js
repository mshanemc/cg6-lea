({
    hpTokW : function(low, high) {
        const lowOut = Math.round(low * 0.745699872);
        const highOut = Math.round(high * 0.745699872);
        return lowOut + '-' + highOut;
    },

    mpgToL100km: function (mpg) {
        return Math.round( ( 1 / mpg ) * ( 1 / 0.264172 ) * ( 0.621371 / 1 )   * 1000 ) / 10;
    }
})
