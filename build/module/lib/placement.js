import * as Sqrl from 'squirrelly';
import { getCustomerIdentifier, getCustomerPrivacySetting } from './util';
import { EventType, Convert } from './models';
Sqrl.filters.define('pln_currency', function (amount) {
    return (Math.round(amount * 100) / 100).toFixed(2).replace('.', ',') + ' zł';
});
function getJQueryElementFromConfig(config) {
    if (typeof config.element_selector === 'function') {
        return config.element_selector();
    }
    else {
        return $(config.element_selector);
    }
}
function injectRecommendations(element, config, data) {
    var renderedHTML = Sqrl.render(config.template, data);
    if (config.inject_where === 'after') {
        element.after(renderedHTML);
    }
    else if (config.inject_where == 'append') {
        element.append(renderedHTML);
    }
    else if (config.inject_where == 'before') {
        element.before(renderedHTML);
    }
}
function handlePlacement(apiSettings, config) {
    // make sure we are on the requested domain
    if (!window.location.href.startsWith(config.url_prefix) ||
        !config.condition()) {
        return;
    }
    var user_info = {
        visitor_id: getCustomerIdentifier(),
        privacy_setting: getCustomerPrivacySetting(),
    };
    var placement_config = {
        item_type: config.item_type,
        name: config.name
    };
    var reco_request = {
        event_type: EventType.RecoRequest,
        location: config.location(),
        n_items: config.n_items,
        user_info: user_info,
        placement_config: placement_config
    };
    var elementToInject = getJQueryElementFromConfig(config);
    if (elementToInject.length == 1) {
        $.ajax({
            type: 'POST',
            url: apiSettings.url_api + config.api_endpoint,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(reco_request),
            timeout: 1000,
            error: function () { },
            success: function (data) {
                console.log('Response', data);
                let recoShow = Convert.toRecoShow(data);
                console.log('recoShow', recoShow);
                if (recoShow.items.length > 0) {
                    // make sure that we only show not more than n_items
                    recoShow.items = recoShow.items.slice(0, config.n_items);
                    injectRecommendations(elementToInject, config, recoShow);
                }
            },
        });
    }
}
export default function runRecommendations(apiSettings, placementConfigs) {
    placementConfigs.forEach((config) => {
        handlePlacement(apiSettings, config);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9wbGFjZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzFFLE9BQU8sRUFHTCxTQUFTLEVBR1QsT0FBTyxFQUtSLE1BQU0sVUFBVSxDQUFDO0FBRWxCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxVQUFVLE1BQU07SUFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUMvRSxDQUFDLENBQUMsQ0FBQztBQWlCSCxTQUFTLDBCQUEwQixDQUNqQyxNQUF5QjtJQUV6QixJQUFJLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixLQUFLLFVBQVUsRUFBRTtRQUNqRCxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ2xDO1NBQU07UUFDTCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUNuQztBQUNILENBQUM7QUFFRCxTQUFTLHFCQUFxQixDQUM1QixPQUE0QixFQUM1QixNQUF5QixFQUN6QixJQUFjO0lBRWQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxPQUFPLEVBQUU7UUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUM3QjtTQUFNLElBQUksTUFB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