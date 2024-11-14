"use strict";

var $ = function (id) {
    return document.getElementById(id);
};

// validate the input and calculate results
var processEntry = function () {
    if (parseInt($('income').value) > 0) {
        $('taxOwed').value = calculateTax(parseInt($('income').value));
        $('income').focus();
    }
    // create alert
    else {
        alert("Income must be greater than 0");
        $('income').focus();
    }
};

var calculateTax = function (p1) {
    if (p1 <= 9275) {
        p1 = ((p1 * 10) / 100).toFixed(2);
        return p1;
    } else if (p1 > 9275 && p1 <= 37650) {
        p1 = (927.50 + ((p1 - 9275) * 15) / 100).toFixed(2);
        return p1;
    } else if (p1 > 37650 && p1 <= 91150) {
        p1 = (5183.75 + ((p1 - 37650) * 25) / 100).toFixed(2);
        return p1;
    } else if (p1 > 91150 && p1 <= 190150) {
        p1 = (18558.75 + ((p1 - 91150) * 28) / 100).toFixed(2);
        return p1;
    } else if (p1 > 190150 && p1 <= 413350) {
        p1 = (46278.75 + ((p1 - 190150) * 33) / 100).toFixed(2);
        return p1;
    } else if (p1 > 413350 && p1 <= 415050) {
        p1 = (119934.75 + ((p1 - 413350) * 35) / 100).toFixed(2);
        return p1;
    } else if (p1 > 415050) {
        p1 = (120529.75 + ((p1 - 415050) * 39.6) / 100).toFixed(2);
        return p1;
    }
};

window.onload = function () {
    $('income').focus();
    $('calculate').onclick = processEntry;
};