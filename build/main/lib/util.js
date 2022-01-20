"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupLinkTracking = exports.extractRecoID = exports.sendTrackingEvent = exports.extractCategory = exports.setCustomerPrivacySetting = exports.getCustomerPrivacySetting = exports.getCustomerIdentifier = exports.shuffle = void 0;
const models_1 = require("./models");
const cookie_1 = require("./cookie");
const RECID_LAST_CLICKED_COOKIE_NAME = "recoAILastClicked";
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
exports.shuffle = shuffle;
function _generateCustomerIdentifier() {
    let customer = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        customer += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return customer;
}
function getCustomerIdentifier() {
    let customer = localStorage.getItem('recoaiCustomerIdentifier');
    if (!customer) {
        customer = _generateCustomerIdentifier();
        localStorage.setItem('recoaiCustomerIdentifier', customer);
    }
    return customer;
}
exports.getCustomerIdentifier = getCustomerIdentifier;
function getCustomerPrivacySetting() {
    let customerPrivacySetting = localStorage.getItem("recoaiCustomerPrivacySetting");
    if (!customerPrivacySetting) {
        customerPrivacySetting = models_1.PrivacySetting.Personalized;
        localStorage.setItem("recoaiCustomerPrivacySetting", customerPrivacySetting);
    }
    return customerPrivacySetting;
}
exports.getCustomerPrivacySetting = getCustomerPrivacySetting;
function setCustomerPrivacySetting(setting) {
    localStorage.setItem("recoaiCustomerPrivacySetting", setting);
}
exports.setCustomerPrivacySetting = setCustomerPrivacySetting;
function extractCategory() {
    return $('.breadcrumb')
        .find("span[itemprop='name']")
        .map(function () {
        return $(this).text();
    })
        .get()
        .join(' > ');
}
exports.extractCategory = extractCategory;
function sendTrackingEvent(params, apiSettings) {
    $.ajax({
        type: 'POST',
        url: apiSettings.url_api + '/event',
        data: JSON.stringify(params),
        timeout: 1000,
        error: function () { },
        success: function () { },
    });
}
exports.sendTrackingEvent = sendTrackingEvent;
function extractRecoIDFromString(s) {
    var match = s.match(/rec=([A-Z0-9a-z]+)/);
    if (match && match.length == 2) {
        return match[1];
    }
    else {
        return null;
    }
}
function extractRecoID() {
    let hrefrecid = cookie_1.Cookie.Read(RECID_LAST_CLICKED_COOKIE_NAME);
    if (hrefrecid) {
        let href = hrefrecid.split("@")[0];
        let recid = hrefrecid.split("@")[1];
        if (window.location.href === href) {
            return recid;
        }
    }
    return extractRecoIDFromString(window.location.search);
}
exports.extractRecoID = extractRecoID;
function setupLinkTracking() {
    if ($("a[rec]").hasOwnProperty("live")) {
        $("a[rec]").live("mouseover", function () {
            let recid = $(this).attr("rec");
            let href = $(this).attr("href");
            cookie_1.Cookie.Create(RECID_LAST_CLICKED_COOKIE_NAME, href + "@" + recid, 1);
        });
    }
}
exports.setupLinkTracking = setupLinkTracking;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBdUQ7QUFDdkQscUNBQWtDO0FBRWxDLE1BQU0sOEJBQThCLEdBQUcsbUJBQW1CLENBQUM7QUFFM0QsU0FBZ0IsT0FBTyxDQUFDLEtBQUs7SUFDM0IsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFDN0IsY0FBYyxFQUNkLFdBQVcsQ0FBQztJQUVkLDRDQUE0QztJQUM1QyxPQUFPLENBQUMsS0FBSyxZQUFZLEVBQUU7UUFDekIsOEJBQThCO1FBQzlCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN2RCxZQUFZLElBQUksQ0FBQyxDQUFDO1FBRWxCLHdDQUF3QztRQUN4QyxjQUFjLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLGNBQWMsQ0FBQztLQUNyQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQWxCRCwwQkFrQkM7QUFFRCxTQUFTLDJCQUEyQjtJQUNsQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDbEIsTUFBTSxRQUFRLEdBQ1osZ0VBQWdFLENBQUM7SUFDbkUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQixRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUMxRTtJQUNELE9BQU8sUUFB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