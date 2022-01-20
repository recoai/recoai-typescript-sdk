/// <reference types="jquery" />
import { APISettings, Location, ItemType } from './models';
export interface PlacementConfigUI {
    element_selector: (() => JQuery<HTMLElement>) | string;
    inject_where: string;
    location: () => Location;
    condition: () => boolean;
    item_type: ItemType;
    n_items: number;
    name?: null | string;
    template: string;
    api_endpoint: string;
    url_prefix: string;
}
export default function runRecommendations(apiSettings: APISettings, placementConfigs: Array<PlacementConfigUI>): void;
