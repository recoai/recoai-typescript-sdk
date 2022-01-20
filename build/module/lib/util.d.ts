import { APISettings } from './models';
export declare function shuffle(array: any): any;
export declare function getCustomerIdentifier(): string;
export declare function getCustomerPrivacySetting(): string;
export declare function setCustomerPrivacySetting(setting: any): void;
export declare function extractCategory(): string;
export declare function sendTrackingEvent(params: any, apiSettings: APISettings): void;
export declare function extractRecoID(): string | null;
export declare function setupLinkTracking(): void;
