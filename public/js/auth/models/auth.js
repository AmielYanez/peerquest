/**
 * Created by ayanez on 2/21/16.
 */
/*global $ */
/*jshint unused:false */
var Auth = Auth || {};

(function () {
    'use strict';

    // kick things off by creating the `App`
    Auth.Model = BB.Model.extend({
        defaults: {
            token:''
        }
    });
})();