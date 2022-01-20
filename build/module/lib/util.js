import { PrivacySetting } from './models';
import { Cookie } from './cookie';
const RECID_LAST_CLICKED_COOKIE_NAME = "recoAILastClicked";
export function shuffle(array) {
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
function _generateCustomerIdentifier() {
    let customer = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        customer += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return customer;
}
export function getCustomerIdentifier() {
    let customer = localStorage.getItem('recoaiCustomerIdentifier');
    if (!customer) {
        customer = _generateCustomerIdentifier();
        localStorage.setItem('recoaiCustomerIdentifier', customer);
    }
    return customer;
}
export function getCustomerPrivacySetting() {
    let customerPrivacySetting = localStorage.getItem("recoaiCustomerPrivacySetting");
    if (!customerPrivacySetting) {
        customerPrivacySetting = PrivacySetting.Personalized;
        localStorage.setItem("recoaiCustomerPrivacySetting", customerPrivacySetting);
    }
    return customerPrivacySetting;
}
export function setCustomerPrivacySetting(setting) {
    localStorage.setItem("recoaiCustomerPrivacySetting", setting);
}
export function extractCategory() {
    return $('.breadcrumb')
        .find("span[itemprop='name']")
        .map(function () {
        return $(this).text();
    })
        .get()
        .join(' > ');
}
export function sendTrackingEvent(params, apiSettings) {
    $.ajax({
        type: 'POST',
        url: apiSettings.url_api + '/event',
        data: JSON.stringify(params),
        timeout: 1000,
        error: function () { },
        success: function () { },
    });
}
function extractRecoIDFromString(s) {
    var match = s.match(/rec=([A-Z0-9a-z]+)/);
    if (match && match.length == 2) {
        return match[1];
    }
    else {
        return null;
    }
}
export function extractRecoID() {
    let hrefrecid = Cookie.Read(RECID_LAST_CLICKED_COOKIE_NAME);
    if (hrefrecid) {
        let href = hrefrecid.split("@")[0];
        let recid = hrefrecid.split("@")[1];
        if (window.location.href === href) {
            return recid;
        }
    }
    return extractRecoIDFromString(window.location.search);
}
export function setupLinkTracking() {
    if ($("a[rec]").hasOwnProperty("live")) {
        $("a[rec]").live("mouseover", function () {
            let recid = $(this).attr("rec");
            let href = $(this).attr("href");
            Cookie.Create(RECID_LAST_CLICKED_COOKIE_NAME, href + "@" + recid, 1);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEMsTUFBTSw4QkFBOEIsR0FBRyxtQkFBbUIsQ0FBQztBQUUzRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQUs7SUFDM0IsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFDN0IsY0FBYyxFQUNkLFdBQVcsQ0FBQztJQUVkLDRDQUE0QztJQUM1QyxPQUFPLENBQUMsS0FBSyxZQUFZLEVBQUU7UUFDekIsOEJBQThCO1FBQzlCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN2RCxZQUFZLElBQUksQ0FBQyxDQUFDO1FBRWxCLHdDQUF3QztRQUN4QyxjQUFjLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLGNBQWMsQ0FBQztLQUNyQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELFNBQVMsMkJBQTJCO0lBQ2xDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNsQixNQUFNLFFBQVEsR0FDWixnRUFBZ0UsQ0FBQztJQUNuRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNCLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFFBQVEs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