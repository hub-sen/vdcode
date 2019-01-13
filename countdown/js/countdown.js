// Create Countdown
var Countdown = {

    // Backbone-like structure
    jqel: jQuery('.countdown'),

    // Params
    countdown_interval: null,
    total_seconds: 0,

    // Initialize the countdown
    init: function () {

        // DOM
        this.jq = {
            hours: this.jqel.find('.bloc-time.hours .figure'),
            minutes: this.jqel.find('.bloc-time.min .figure'),
            seconds: this.jqel.find('.bloc-time.sec .figure'),
            liveStartBtn: this.jqel.parents('.live_thread_banner').find('.live_thread_banner_title'),
            setIntervalCon: this.jqel.parents('.live_thread_banner_timer')
        };

        // Init countdown values
        this.values = {
            hours: this.jq.hours.parent().data('init-value'),
            minutes: this.jq.minutes.parent().data('init-value'),
            seconds: this.jq.seconds.parent().data('init-value'),
        };

        // Initialize total seconds
        this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;
        
        // Animate countdown to the end
        this.count();
    },

    count: function () {

        var that = this,
            jqhour_1 = this.jq.hours.eq(0),
            jqhour_2 = this.jq.hours.eq(1),
            jqmin_1 = this.jq.minutes.eq(0),
            jqmin_2 = this.jq.minutes.eq(1),
            jqsec_1 = this.jq.seconds.eq(0),
            jqsec_2 = this.jq.seconds.eq(1);

        this.countdown_interval = setInterval(function () {

            if (that.total_seconds > 0) {

                --that.values.seconds;

                if (that.values.minutes >= 0 && that.values.seconds < 0) {

                    that.values.seconds = 59;
                    --that.values.minutes;
                }

                if (that.values.hours >= 0 && that.values.minutes < 0) {

                    that.values.minutes = 59;
                    --that.values.hours;
                }

                // Update DOM values
                // Hours
                that.checkHour(that.values.hours, jqhour_1, jqhour_2);

                // Minutes
                that.checkHour(that.values.minutes, jqmin_1, jqmin_2);

                // Seconds
                that.checkHour(that.values.seconds, jqsec_1, jqsec_2);

                --that.total_seconds;
            } else {
                clearInterval(that.countdown_interval);
                that.jq.setIntervalCon.css('display', 'none');
                that.jq.liveStartBtn.css('display', 'block');
            }
        }, 1000);
    },

    animateFigure: function (jqel, value) {

        var that = this,
            jqtop = jqel.find('.top'),
            jqbottom = jqel.find('.bottom'),
            jqback_top = jqel.find('.top-back'),
            jqback_bottom = jqel.find('.bottom-back');

        // Before we begin, change the back value
        jqback_top.find('span').html(value);

        // Also change the back bottom value
        jqback_bottom.find('span').html(value);

        // Then animate
        TweenMax.to(jqtop, 0.8, {
            rotationX: '-180deg',
            transformPerspective: 300,
            ease: Quart.easeOut,
            onComplete: function () {

                jqtop.html(value);

                jqbottom.html(value);

                TweenMax.set(jqtop, {
                    rotationX: 0
                });
            }
        });

        TweenMax.to(jqback_top, 0.8, {
            rotationX: 0,
            transformPerspective: 300,
            ease: Quart.easeOut,
            clearProps: 'all'
        });
    },

    checkHour: function (value, jqel_1, jqel_2) {

        var val_1 = value.toString().charAt(0),
            val_2 = value.toString().charAt(1),
            fig_1_value = jqel_1.find('.top').html(),
            fig_2_value = jqel_2.find('.top').html();

        if (value >= 10) {

            // Animate only if the figure has changed
            if (fig_1_value !== val_1) this.animateFigure(jqel_1, val_1);
            if (fig_2_value !== val_2) this.animateFigure(jqel_2, val_2);
        } else {

            // If we are under 10, replace first figure with 0
            if (fig_1_value !== '0') this.animateFigure(jqel_1, 0);
            if (fig_2_value !== val_1) this.animateFigure(jqel_2, val_1);
        }
    }
};