"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sqrl = __importStar(require("squirrelly"));
const util_1 = require("./util");
const models_1 = require("./models");
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
        visitor_id: util_1.getCustomerIdentifier(),
        privacy_setting: util_1.getCustomerPrivacySetting(),
    };
    var placement_config = {
        item_type: config.item_type,
        name: config.name
    };
    var reco_request = {
        event_type: models_1.EventType.RecoRequest,
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
                let recoShow = models_1.Convert.toRecoShow(data);
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
function runRecommendations(apiSettings, placementConfigs) {
    placementConfigs.forEach((config) => {
        handlePlacement(apiSettings, config);
    });
}
exports.default = runRecommendations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9wbGFjZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQW1DO0FBQ25DLGlDQUEwRTtBQUMxRSxxQ0FXa0I7QUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFVBQVUsTUFBTTtJQUNsRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQy9FLENBQUMsQ0FBQyxDQUFDO0FBaUJILFNBQVMsMEJBQTBCLENBQ2pDLE1BQXlCO0lBRXpCLElBQUksT0FBTyxNQUFNLENBQUMsZ0JBQWdCLEtBQUssVUFBVSxFQUFFO1FBQ2pELE9BQU8sTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDbEM7U0FBTTtRQUNMLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ25DO0FBQ0gsQ0FBQztBQUVELFNBQVMscUJBQXFCLENBQzVCLE9BQTRCLEVBQzVCLE1BQXlCLEVBQ3pCLElBQWM7SUFFZCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEQsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLE9BQU8sRUFBRTtRQUNuQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQzdCO1NBQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxJQUFJLFFBQVEsRUFBRTtRQUMxQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQzlCO1NBQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxJQUFJLFFBQVEsRUFBRTtRQUMxQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQzlCO0FBQ0gsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLFdBQXdCLEVBQUUsTUFBeUI7SUFDMUUsMkNBQTJDO0lBQzNDLElBQ0UsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNuRCxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFDbkI7UUFDQSxPQUFPO0tBQ1I7SUFFRCxJQUFJLFNBQVMsR0FBYTtRQUN4QixVQUFVLEVBQUUsNEJBQXFCLEVBQUU7UUFDbkMsZUFBZSxFQUFrQixnQ0FBeUIsRUFBRTtLQUM3RCxDQUFDO0lBRUYsSUFBSSxnQkFBZ0IsR0FBb0I7UUFDdEMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1FBQzNCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtLQUNsQixDQUFDO0lBRUYsSUFBSSxZQUFZLEdBQWdCO1FBQzlCLFVBQVUsRUFBRSxrQkFBUyxDQUFDLFdBQVc7UUFDakMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFDM0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1FBQ3ZCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLGdCQUFnQixFQUFFLGdCQUFnQjtLQUNuQyxDQUFDO0lBQ0YsSUFBSSxlQUFlLEdBQUcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFekQsSUFBSSxlQUFlLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixHQUFHLEVBQUUsV0FBVyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsWUFBWTtZQUM5QyxXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUNsQyxPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxjQUFhLENBQUM7WUFDckIsT0FBTyxFQUFFLFVBQVUsSUFBSTtnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLElBQUksUUFBUSxHQUFHLGdCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzdCLG9EQUFvRDtvQkFDcEQsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN6RCxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUMxRDtZQUNILENBQUM7U0FDRixDQUFDLENBQUM7S0FDSjtBQUNILENBQUM7QUFFRCxTQUF3QixrQkFBa0IsQ0FDeEMsV0FBd0IsRUFDeEIsZ0JBQTBDO0lBRTFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2xDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBUEQscUNBT0MifQ==