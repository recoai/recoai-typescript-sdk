// To parse this data:
//
//   import { Convert, AddToCart, AddToList, APISettings, BuilderFn1, BuilderFn2, BuilderVariable, ChangeItemStockState, CheckoutStart, DetailItemView, HomePageView, ImageInteraction, ItemAttributesSelection, ItemRemove, ItemsView, ItemUpsert, ListView, OfflineRecommendationsRemove, OfflineRecommendationsUpsert, OtherInteraction, PageVisit, PlacementRemove, PlacementStatisticsJSONReady, PlacementUpsert, PurchaseComplete, RateItem, RecoACK, RecoRequest, RecoShow, RemoveFromCart, RemoveFromList, SearchItems, CartPageView, SmartSearchRequest, SmartSearchShow, SortItems, StrategyParametersTypes, UnknownEvent, VideoInteraction } from "./file";
//
//   const addToCart = Convert.toAddToCart(json);
//   const addToList = Convert.toAddToList(json);
//   const aPISettings = Convert.toAPISettings(json);
//   const builderFn1 = Convert.toBuilderFn1(json);
//   const builderFn2 = Convert.toBuilderFn2(json);
//   const builderVariable = Convert.toBuilderVariable(json);
//   const changeItemStockState = Convert.toChangeItemStockState(json);
//   const checkoutStart = Convert.toCheckoutStart(json);
//   const common = Convert.toCommon(json);
//   const detailItemView = Convert.toDetailItemView(json);
//   const homePageView = Convert.toHomePageView(json);
//   const imageInteraction = Convert.toImageInteraction(json);
//   const itemAttributesSelection = Convert.toItemAttributesSelection(json);
//   const itemRemove = Convert.toItemRemove(json);
//   const itemsView = Convert.toItemsView(json);
//   const itemUpsert = Convert.toItemUpsert(json);
//   const listView = Convert.toListView(json);
//   const offlineRecommendationsRemove = Convert.toOfflineRecommendationsRemove(json);
//   const offlineRecommendationsUpsert = Convert.toOfflineRecommendationsUpsert(json);
//   const otherInteraction = Convert.toOtherInteraction(json);
//   const pageVisit = Convert.toPageVisit(json);
//   const placementRemove = Convert.toPlacementRemove(json);
//   const placementStatisticsJSONReady = Convert.toPlacementStatisticsJSONReady(json);
//   const placementUpsert = Convert.toPlacementUpsert(json);
//   const purchaseComplete = Convert.toPurchaseComplete(json);
//   const rateItem = Convert.toRateItem(json);
//   const recoACK = Convert.toRecoACK(json);
//   const recoRequest = Convert.toRecoRequest(json);
//   const recoShow = Convert.toRecoShow(json);
//   const removeFromCart = Convert.toRemoveFromCart(json);
//   const removeFromList = Convert.toRemoveFromList(json);
//   const searchItems = Convert.toSearchItems(json);
//   const cartPageView = Convert.toCartPageView(json);
//   const smartSearchRequest = Convert.toSmartSearchRequest(json);
//   const smartSearchShow = Convert.toSmartSearchShow(json);
//   const sortItems = Convert.toSortItems(json);
//   const strategyParametersTypes = Convert.toStrategyParametersTypes(json);
//   const unknownEvent = Convert.toUnknownEvent(json);
//   const videoInteraction = Convert.toVideoInteraction(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface AddToCart {
    cart_id?:      null | string;
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item:          ItemDetails;
    user_info:     UserInfo;
}

export interface EventDetail {
    event_attributes?: { [key: string]: string } | null;
    experiment_ids?:   number | null;
    rec_id?:           null | string;
    url:               string;
}

export enum EventType {
    AddToCart = "AddToCart",
    AddToList = "AddToList",
    CartPageView = "CartPageView",
    ChangeItemStockState = "ChangeItemStockState",
    CheckoutStart = "CheckoutStart",
    DetailItemView = "DetailItemView",
    HomePageView = "HomePageView",
    ImageInteraction = "ImageInteraction",
    ItemRemove = "ItemRemove",
    ItemUpsert = "ItemUpsert",
    ItemsView = "ItemsView",
    ListView = "ListView",
    OfflineRecommendationsRemove = "OfflineRecommendationsRemove",
    OfflineRecommendationsUpsert = "OfflineRecommendationsUpsert",
    OtherInteraction = "OtherInteraction",
    PageVisit = "PageVisit",
    PlacementRemove = "PlacementRemove",
    PlacementUpsert = "PlacementUpsert",
    PurchaseComplete = "PurchaseComplete",
    RateItem = "RateItem",
    RecoACK = "RecoAck",
    RecoRequest = "RecoRequest",
    RecoShow = "RecoShow",
    RemoveFromCart = "RemoveFromCart",
    RemoveFromList = "RemoveFromList",
    SearchItems = "SearchItems",
    SmartSearchRequest = "SmartSearchRequest",
    SmartSearchShow = "SmartSearchShow",
    SortItems = "SortItems",
    UnknownEvent = "UnknownEvent",
    VideoInteraction = "VideoInteraction",
}

export interface ItemDetails {
    attributes?: null | Attributes;
    item:        Item;
}

/**
 * This attribute structure is inspired by ECS dense components also know as table-based
 * component list.
 */
export interface Attributes {
    article?:       null | Article;
    categories?:    null | Categories;
    costs?:         null | Costs;
    description?:   null | Description;
    ecommerce?:     null | ItemEcommerceSpec;
    images?:        null | Images;
    price?:         null | ExactPrice;
    related_items?: Item[] | null;
    stock?:         null | Stock;
    tags?:          null | Tags;
    url:            ItemURL;
    video?:         null | Video;
}

export interface Article {
    author:          string;
    snippet:         string;
    timestamp_added: number;
}

export interface Categories {
    categories: Array<Array<{ [key: string]: string } | string>>;
}

export interface Costs {
    costs: { [key: string]: number };
}

export interface Description {
    content?:       { [key: string]: string } | null | string;
    language_code?: null | string;
    title:          { [key: string]: string } | string;
}

export interface ItemEcommerceSpec {
    item_code?:     null | string;
    item_group_id?: null | string;
}

export interface Images {
    images: Image[];
}

export interface Image {
    height: string;
    uri:    string;
    width:  string;
}

export interface ExactPrice {
    currency_code?: Currency | null;
    display_price:  number;
    original_price: number;
}

export enum Currency {
    AMD = "AMD",
    Aed = "AED",
    Afn = "AFN",
    All = "ALL",
    Ang = "ANG",
    Aoa = "AOA",
    Ars = "ARS",
    Aud = "AUD",
    Awg = "AWG",
    Azn = "AZN",
    BAM = "BAM",
    BSD = "BSD",
    Bbd = "BBD",
    Bdt = "BDT",
    Bgn = "BGN",
    Bhd = "BHD",
    Bif = "BIF",
    Bmd = "BMD",
    Bnd = "BND",
    Bob = "BOB",
    Bov = "BOV",
    Brl = "BRL",
    Btn = "BTN",
    Bwp = "BWP",
    Byn = "BYN",
    Bzd = "BZD",
    CAD = "CAD",
    CRC = "CRC",
    Cdf = "CDF",
    Che = "CHE",
    Chf = "CHF",
    Chw = "CHW",
    Clf = "CLF",
    Clp = "CLP",
    Cny = "CNY",
    Cop = "COP",
    Cou = "COU",
    Cuc = "CUC",
    Cup = "CUP",
    Cve = "CVE",
    Czk = "CZK",
    Djf = "DJF",
    Dkk = "DKK",
    Dop = "DOP",
    Dzd = "DZD",
    EGP = "EGP",
    Ern = "ERN",
    Etb = "ETB",
    Eur = "EUR",
    Fjd = "FJD",
    Fkp = "FKP",
    Gbp = "GBP",
    Gel = "GEL",
    Ghs = "GHS",
    Gip = "GIP",
    Gmd = "GMD",
    Gnf = "GNF",
    Gtq = "GTQ",
    Gyd = "GYD",
    Hkd = "HKD",
    Hnl = "HNL",
    Hrk = "HRK",
    Htg = "HTG",
    Huf = "HUF",
    Idr = "IDR",
    Ils = "ILS",
    Inr = "INR",
    Iqd = "IQD",
    Irr = "IRR",
    Isk = "ISK",
    Jmd = "JMD",
    Jod = "JOD",
    Jpy = "JPY",
    Kes = "KES",
    Kgs = "KGS",
    Khr = "KHR",
    Kmf = "KMF",
    Kpw = "KPW",
    Krw = "KRW",
    Kwd = "KWD",
    Kyd = "KYD",
    Kzt = "KZT",
    Lak = "LAK",
    Lbp = "LBP",
    Lkr = "LKR",
    Lrd = "LRD",
    Lsl = "LSL",
    Lyd = "LYD",
    Mad = "MAD",
    Mdl = "MDL",
    Mga = "MGA",
    Mkd = "MKD",
    Mmk = "MMK",
    Mnt = "MNT",
    Mop = "MOP",
    Mru = "MRU",
    Mur = "MUR",
    Mvr = "MVR",
    Mwk = "MWK",
    Mxn = "MXN",
    Mxv = "MXV",
    Myr = "MYR",
    Mzn = "MZN",
    NIO = "NIO",
    Nad = "NAD",
    Ngn = "NGN",
    Nok = "NOK",
    Npr = "NPR",
    Nzd = "NZD",
    OMR = "OMR",
    PHP = "PHP",
    Pab = "PAB",
    Pen = "PEN",
    Pgk = "PGK",
    Pkr = "PKR",
    Pln = "PLN",
    Pyg = "PYG",
    Qar = "QAR",
    Ron = "RON",
    Rsd = "RSD",
    Rub = "RUB",
    Rwf = "RWF",
    SSP = "SSP",
    SVC = "SVC",
    Sar = "SAR",
    Sbd = "SBD",
    Scr = "SCR",
    Sdg = "SDG",
    Sek = "SEK",
    Sgd = "SGD",
    Shp = "SHP",
    Sll = "SLL",
    Sos = "SOS",
    Srd = "SRD",
    Stn = "STN",
    Syp = "SYP",
    Szl = "SZL",
    Thb = "THB",
    Tjs = "TJS",
    Tmt = "TMT",
    Tnd = "TND",
    Top = "TOP",
    Try = "TRY",
    Ttd = "TTD",
    Twd = "TWD",
    Tzs = "TZS",
    Uah = "UAH",
    Ugx = "UGX",
    Unk = "UNK",
    Usd = "USD",
    Usn = "USN",
    Uyi = "UYI",
    Uyu = "UYU",
    Uzs = "UZS",
    Vef = "VEF",
    Vnd = "VND",
    Vuv = "VUV",
    Wst = "WST",
    Xaf = "XAF",
    Xcd = "XCD",
    Xdr = "XDR",
    Xof = "XOF",
    Xpf = "XPF",
    Xsu = "XSU",
    Xua = "XUA",
    Yer = "YER",
    Zar = "ZAR",
    Zmw = "ZMW",
    Zwl = "ZWL",
}

export interface Item {
    item_id:   string;
    item_type: ItemType;
}

export enum ItemType {
    Article = "Article",
    Ecommerce = "Ecommerce",
    Unknown = "Unknown",
    Video = "Video",
}

export interface Stock {
    available_quantity?: number | null;
    quantity?:           number | null;
    stock_state:         StockState;
}

export enum StockState {
    BackOrder = "BackOrder",
    InStock = "InStock",
    OutOfStock = "OutOfStock",
    PreOrder = "PreOrder",
}

export interface Tags {
    tags: string[];
}

export interface ItemURL {
    canonical_uri:              string;
    canonical_uri_with_params?: null | string;
    url_params?:                null | string;
}

export interface Video {
    duration_secs: number;
    uri?:          null | string;
}

export interface UserInfo {
    additional_info?: null | UserAdditionalInfo;
    privacy_setting?: PrivacySetting | null;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface UserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Other = "Other",
}

export enum PrivacySetting {
    NonPersonalized = "NonPersonalized",
    Personalized = "Personalized",
}

export interface AddToList {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item:          ItemDetails;
    list_id:       string;
    user_info:     UserInfo;
}

export interface APISettings {
    url_api: string;
}

export enum BuilderFn1 {
    ArgMax = "ArgMax",
    ArgMin = "ArgMin",
    ConvertToPlacementItemType = "ConvertToPlacementItemType",
    Invert = "Invert",
    Ranking = "Ranking",
}

export enum BuilderFn2 {
    Expand = "Expand",
    Highest = "Highest",
    Intersect = "Intersect",
    Less = "Less",
    LessEq = "LessEq",
    Lookup = "Lookup",
    Lowest = "Lowest",
    More = "More",
    MoreEq = "MoreEq",
    Remove = "Remove",
    Union = "Union",
}

export enum BuilderVariable {
    AllItems = "AllItems",
    ItemCurrent = "ItemCurrent",
    ItemCurrentType = "ItemCurrentType",
    ItemsAlsoAddedToCartInSession = "ItemsAlsoAddedToCartInSession",
    ItemsAlsoBoughtInSession = "ItemsAlsoBoughtInSession",
    ItemsAlsoSeenInSession = "ItemsAlsoSeenInSession",
    ItemsInCart = "ItemsInCart",
    ItemsRecommendedSessionCounter = "ItemsRecommendedSessionCounter",
    ItemsSeenInSession = "ItemsSeenInSession",
    ItemsVisitedCounter = "ItemsVisitedCounter",
}

export interface ChangeItemStockState {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item:          Item;
    stock_state:   StockState;
    user_info:     UserInfo;
}

export interface CheckoutStart {
    cart_id?:             null | string;
    event_detail?:        null | EventDetail;
    event_time?:          number | null;
    event_type:           EventType;
    items:                ItemDetails[];
    purchase_transaction: PurchaseTransaction;
    user_info:            UserInfo;
}

export interface PurchaseTransaction {
    costs?:        null | Costs;
    currency_code: Currency;
    id?:           null | string;
    revenue:       number;
    taxes?:        null | Taxes;
}

export interface Taxes {
    local?: number | null;
    state?: number | null;
}

export interface DetailItemView {
    event_detail?:    null | EventDetail;
    event_time?:      number | null;
    event_type:       EventType;
    item:             ItemDetails;
    rec_id?:          null | string;
    user_info:        UserInfo;
    view_attributes?: null | DetailItemViewAttributes;
}

export interface DetailItemViewAttributes {
    /**
     * Completed can mean for - video - whether someone watched the whole video - article -
     * whether someone read the whole article
     */
    completed?: boolean | null;
    /**
     * This attribute can be used for different item types. For - Video - means watch time -
     * Article - reading time - Ecommerce - time spend on viewing the product
     */
    view_time_secs?: number | null;
}

export interface HomePageView {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    user_info:     UserInfo;
}

export interface ImageInteraction {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item:          ItemDetails;
    user_info:     UserInfo;
}

export interface ItemAttributesSelectionClass {
    SelectedAttributes: ItemAttributesFieldNames[];
}

export interface ItemAttributesFieldNames {
    Url?:           ItemURLFieldName;
    Price?:         ExactPriceFieldName;
    Description?:   DescriptionFieldName;
    Categories?:    CategoriesFieldName;
    Images?:        ImagesFieldName;
    Video?:         VideoFieldName;
    Tags?:          TagsFieldName;
    Article?:       ArticleFieldName;
    EcommerceSpec?: ItemEcommerceSpecFieldName;
    Stock?:         StockFieldName;
    Costs?:         CostsFieldName;
}

export enum ArticleFieldName {
    Author = "Author",
    Snippet = "Snippet",
    TimestampAdded = "TimestampAdded",
}

export enum CategoriesFieldName {
    Categories = "Categories",
}

export enum CostsFieldName {
    Costs = "Costs",
}

export enum DescriptionFieldName {
    Content = "Content",
    LanguageCode = "LanguageCode",
    Title = "Title",
}

export enum ItemEcommerceSpecFieldName {
    ItemCode = "ItemCode",
    ItemGroupID = "ItemGroupId",
}

export enum ImagesFieldName {
    Images = "Images",
}

export enum ExactPriceFieldName {
    CurrencyCode = "CurrencyCode",
    DisplayPrice = "DisplayPrice",
    OriginalPrice = "OriginalPrice",
}

export enum StockFieldName {
    AvailableQuantity = "AvailableQuantity",
    Quantity = "Quantity",
    StockState = "StockState",
}

export enum TagsFieldName {
    Tags = "Tags",
}

export enum ItemURLFieldName {
    CanonicalURI = "CanonicalUri",
    CanonicalURIWithParams = "CanonicalUriWithParams",
    URLParams = "UrlParams",
}

export enum VideoFieldName {
    DurationSecs = "DurationSecs",
    URI = "Uri",
}

export enum ItemAttributesSelectionEnum {
    AllAttributes = "AllAttributes",
}

export interface ItemRemove {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item:          Item;
    user_info:     UserInfo;
}

export interface ItemsView {
    event_detail?:    null | EventDetail;
    event_time?:      number | null;
    event_type:       EventType;
    items:            ItemDetails[];
    on_screen:        boolean;
    page_categories?: string[] | null;
    user_info:        UserInfo;
}

export interface ItemUpsert {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item_details:  ItemDetails;
    user_info:     UserInfo;
}

export interface ListView {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    items:         ItemDetails[];
    list_id:       string;
    user_info:     UserInfo;
}

export interface OfflineRecommendationsRemove {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    name:          OfflineRecommendationsTypeClass | OfflineRecommendationsTypeEnum;
    user_info:     UserInfo;
}

export interface OfflineRecommendationsTypeClass {
    OtherSimilarity: string;
}

export enum OfflineRecommendationsTypeEnum {
    AttributesSimilarity = "AttributesSimilarity",
    ImageSimilarity = "ImageSimilarity",
    TextSimilarity = "TextSimilarity",
}

export interface OfflineRecommendationsUpsert {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    matrix:        { [key: string]: { [key: string]: number } };
    name:          OfflineRecommendationsTypeClass | OfflineRecommendationsTypeEnum;
    user_info:     UserInfo;
}

export interface OtherInteraction {
    event_detail?:    null | EventDetail;
    event_time?:      number | null;
    event_type:       EventType;
    interaction_name: string;
    item:             ItemDetails;
    user_info:        UserInfo;
}

export interface PageVisit {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    user_info:     UserInfo;
}

export interface PlacementRemove {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    name:          string;
    user_info:     UserInfo;
}

/**
 * Json safe version of PlacementStatistics, unfortunately serde_with doesn't work because
 * of conflicts with JsonSchema
 */
export interface PlacementStatisticsJSONReady {
    loading_times_microseconds: { [key: string]: LIFOVecForUint128 };
    placements_statistics:      { [key: string]: Array<Array<StrategyEnum | DynamicStrategiesObject>> };
}

export interface LIFOVecForUint128 {
    base:     number[];
    capacity: number;
}

export enum StrategyEnum {
    Unknown = "Unknown",
}

/**
 * Parametrized strategies
 *
 * Pre-defined strategies
 *
 * Build your custom strategies
 */
export interface DynamicStrategiesObject {
    Parametrized?:    ParametrizedStrategy;
    Generic?:         GenericStrategy;
    StrategyBuilder?: string;
    n_impressions?:   number;
    n_success?:       number;
}

export enum GenericStrategy {
    BestsellerCategory = "BestsellerCategory",
    SearchMatching = "SearchMatching",
    SeenInSessionCoccurAddedToCart = "SeenInSessionCoccurAddedToCart",
    SeenInSessionCoccurSeen = "SeenInSessionCoccurSeen",
}

/**
 * Symbolic reference to accumulators instances in the context
 */
export interface ParametrizedStrategy {
    VisitorItemCounter?:            EventVisitorItemCounterStaticParams;
    ItemCounter?:                   EventTypeItemCounterStaticParams;
    ItemCooccurences?:              EventItemTypeItemCooccurenceStaticParams;
    ContentItemMatcher?:            ContentItemMatcherStaticParams;
    OfflineRecommendationsStorage?: OfflineRecommendationsStorageStaticParams;
    SessionBasedCooccurence?:       SessionItemsCooccurenceStaticParams;
}

export interface ContentItemMatcherStaticParams {
    item_type?: ItemType | null;
}

export interface EventItemTypeItemCooccurenceStaticParams {
    event_type_a: EventType;
    event_type_b: EventType;
    item_type_a:  ItemType;
    item_type_b:  ItemType;
}

export interface EventTypeItemCounterStaticParams {
    event_type: EventType;
    item_type:  ItemType;
}

export interface OfflineRecommendationsStorageStaticParams {
    rec_type: OfflineRecommendationsTypeClass | OfflineRecommendationsTypeEnum;
}

/**
 * These are strategies that are just using other accumulators to generate candidates. They
 * don't have any internal state
 *
 * The use case is to generate candidates based on the recent user history and event type
 * and item type coocurrences
 */
export interface SessionItemsCooccurenceStaticParams {
    cooccurence:    EventItemTypeItemCooccurenceStaticParams;
    item_generator: EventVisitorItemCounterStaticParams;
}

export interface EventVisitorItemCounterStaticParams {
    event_type:     EventType;
    item_type:      ItemType;
    user_info_type: UserInfoType;
}

export enum UserInfoType {
    Session = "SESSION",
    User = "USER",
    Visitor = "VISITOR",
}

export interface PlacementUpsert {
    enabled?:       boolean;
    event_detail?:  null | EventDetail;
    event_time?:    number | null;
    event_type:     EventType;
    html_template?: null | string;
    item_type:      ItemType;
    location?:      Location | null;
    /**
     * Lowercase no spaces allowed
     */
    name: string;
    /**
     * How the strategies are selected
     */
    ranking:     StrategySelectorStrategyChooseOne;
    strategies:  WeightedGenericCandidateRec[];
    url_params?: { [key: string]: string } | null;
    user_info:   UserInfo;
}

/**
 * Choose location
 */
export enum Location {
    AddToCart = "AddToCart",
    CategoryPage = "CategoryPage",
    CheckoutPage = "CheckoutPage",
    Error404 = "Error404",
    HomePage = "HomePage",
    ItemPage = "ItemPage",
    OtherPage = "OtherPage",
    SearchPage = "SearchPage",
    UnknownPage = "UnknownPage",
}

/**
 * How the strategies are selected
 */
export enum StrategySelectorStrategyChooseOne {
    RankingModel = "RankingModel",
    ThompsonSampling = "ThompsonSampling",
    WeightedSample = "WeightedSample",
}

export interface WeightedGenericCandidateRec {
    strategy: StrategyDynamicStrategies | StrategyEnum;
    weight?:  number | null;
}

/**
 * Parametrized strategies
 *
 * Pre-defined strategies
 *
 * Build your custom strategies
 */
export interface StrategyDynamicStrategies {
    Parametrized?:    ParametrizedStrategy;
    Generic?:         GenericStrategy;
    StrategyBuilder?: string;
}

export interface PurchaseComplete {
    cart_id?:             null | string;
    event_detail?:        null | EventDetail;
    event_time?:          number | null;
    event_type:           EventType;
    items:                ItemDetails[];
    purchase_transaction: PurchaseTransaction;
    user_info:            UserInfo;
}

export interface RateItem {
    comment?:      null | string;
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item:          ItemDetails;
    rating?:       number | null;
    user_info:     UserInfo;
}

export interface RecoACK {
    event_detail?:    null | EventDetail;
    event_time?:      number | null;
    event_type:       EventType;
    items:            ItemDetailsRecoShow[];
    placement_config: PlacementConfig;
    user_info:        UserInfo;
}

/**
 * Note that ItemDetailsRecoShow is already translated
 */
export interface ItemDetailsRecoShow {
    attributes:        Attributes;
    item:              Item;
    rec_id:            string;
    score?:            number | null;
    strategies_used?:  Array<Array<StrategiesUsedDynamicStrategies | number | StrategyEnum>> | null;
    strategy_selected: StrategyDynamicStrategies | StrategyEnum;
}

/**
 * Parametrized strategies
 *
 * Pre-defined strategies
 *
 * Build your custom strategies
 */
export interface StrategiesUsedDynamicStrategies {
    Parametrized?:    ParametrizedStrategy;
    Generic?:         GenericStrategy;
    StrategyBuilder?: string;
}

export interface PlacementConfig {
    html_template?:             null | string;
    item_attributes_selection?: ItemAttributesSelectionItemAttributesSelectionClass | ItemAttributesSelectionEnum | null;
    item_type:                  ItemType;
    location?:                  Location | null;
    name:                       string;
    parameters?:                null | StrategyParametersValues;
}

export interface ItemAttributesSelectionItemAttributesSelectionClass {
    SelectedAttributes: ItemAttributesFieldNames[];
}

export interface StrategyParametersValues {
    additional_int_params?: { [key: string]: number } | null;
    additional_str_params?: { [key: string]: string } | null;
    category_id?:           string[] | null;
    category_ids?:          Array<string[]> | null;
    item?:                  null | Item;
    items?:                 Item[] | null;
    page_info?:             null | PageInfo;
    search_info?:           null | SearchInfo;
}

export interface PageInfo {
    /**
     * Set page content
     */
    content?: null | string;
    /**
     * Item type
     */
    item_type?: ItemType | null;
    /**
     * Set page URL
     */
    url?: null | string;
}

export interface SearchInfo {
    /**
     * Set the search query
     */
    query?: null | string;
}

export interface RecoRequest {
    additional_uri_params?: { [key: string]: string } | null;
    event_detail?:          null | EventDetail;
    event_time?:            number | null;
    event_type:             EventType;
    locale?:                Locale | null;
    location:               Location;
    n_items:                number;
    placement_config:       PlacementConfig;
    user_info:              UserInfo;
}

export enum Locale {
    AFZA = "af_ZA",
    ArAR = "ar_AR",
    AsIN = "as_IN",
    AzAZ = "az_AZ",
    BeBY = "be_BY",
    BgBG = "bg_BG",
    BnIN = "bn_IN",
    BrFR = "br_FR",
    BsBA = "bs_BA",
    CAES = "ca_ES",
    CSCZ = "cs_CZ",
    CbIQ = "cb_IQ",
    CoFR = "co_FR",
    CxPH = "cx_PH",
    CyGB = "cy_GB",
    DaDK = "da_DK",
    DeDE = "de_DE",
    ElGR = "el_GR",
    EnGB = "en_GB",
    EnUD = "en_UD",
    EnUS = "en_US",
    EsES = "es_ES",
    EsLA = "es_LA",
    EtEE = "et_EE",
    EuES = "eu_ES",
    FaIR = "fa_IR",
    FfNG = "ff_NG",
    FiFI = "fi_FI",
    FoFO = "fo_FO",
    FrCA = "fr_CA",
    FrFR = "fr_FR",
    FyNL = "fy_NL",
    GaIE = "ga_IE",
    GlES = "gl_ES",
    GnPY = "gn_PY",
    GuIN = "gu_IN",
    HaNG = "ha_NG",
    HeIL = "he_IL",
    HiIN = "hi_IN",
    HrHR = "hr_HR",
    HuHU = "hu_HU",
    HyAM = "hy_AM",
    IDID = "id_ID",
    IsIS = "is_IS",
    ItIT = "it_IT",
    JaJP = "ja_JP",
    JaKS = "ja_KS",
    JvID = "jv_ID",
    KMKH = "km_KH",
    KaGE = "ka_GE",
    KkKZ = "kk_KZ",
    KnIN = "kn_IN",
    KoKR = "ko_KR",
    KuTR = "ku_TR",
    LVLV = "lv_LV",
    LtLT = "lt_LT",
    MSMY = "ms_MY",
    MTMT = "mt_MT",
    MgMG = "mg_MG",
    MkMK = "mk_MK",
    MlIN = "ml_IN",
    MnMN = "mn_MN",
    MrIN = "mr_IN",
    MyMM = "my_MM",
    NbNO = "nb_NO",
    NeNP = "ne_NP",
    NlBE = "nl_BE",
    NlNL = "nl_NL",
    NnNO = "nn_NO",
    OrIN = "or_IN",
    PSAF = "ps_AF",
    PaIN = "pa_IN",
    PlPL = "pl_PL",
    PtBR = "pt_BR",
    PtPT = "pt_PT",
    QzMM = "qz_MM",
    RoRO = "ro_RO",
    RuRU = "ru_RU",
    RwRW = "rw_RW",
    ScIT = "sc_IT",
    SiLK = "si_LK",
    SkSK = "sk_SK",
    SlSI = "sl_SI",
    SoSO = "so_SO",
    SqAL = "sq_AL",
    SrRS = "sr_RS",
    SvSE = "sv_SE",
    SwKE = "sw_KE",
    SzPL = "sz_PL",
    TaIN = "ta_IN",
    TeIN = "te_IN",
    TgTJ = "tg_TJ",
    ThTH = "th_TH",
    TlPH = "tl_PH",
    TrTR = "tr_TR",
    TzMA = "tz_MA",
    UkUA = "uk_UA",
    UrPK = "ur_PK",
    UzUZ = "uz_UZ",
    ViVN = "vi_VN",
    ZhCN = "zh_CN",
    ZhHK = "zh_HK",
    ZhTW = "zh_TW",
}

export interface RecoShow {
    additional_uri_params?: { [key: string]: string } | null;
    event_detail?:          null | EventDetail;
    event_time?:            number | null;
    event_type:             EventType;
    experiment_id?:         null | string;
    items:                  ItemDetailsRecoShow[];
    placement_config:       PlacementConfig;
    user_info:              UserInfo;
}

export interface RemoveFromCart {
    cart_id?:      null | string;
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item:          ItemDetails;
    user_info:     UserInfo;
}

export interface RemoveFromList {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    items:         ItemDetails[];
    list_id?:      null | string;
    user_info:     UserInfo;
}

export interface SearchItems {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    items:         ItemDetails[];
    query:         string;
    user_info:     UserInfo;
}

export interface CartPageView {
    cart_id?:      null | string;
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    items:         ItemDetails[];
    user_info:     UserInfo;
}

export interface SmartSearchRequest {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    filter:        { [key: string]: string };
    n_items:       number;
    page:          number;
    query:         string;
    search_order:  SearchOrder;
    user_info:     UserInfo;
}

export enum SearchOrder {
    Newest = "Newest",
    Oldest = "Oldest",
    Personalized = "Personalized",
    PopularityAsc = "PopularityAsc",
    PopularityDesc = "PopularityDesc",
    PriceAsc = "PriceAsc",
    PriceDesc = "PriceDesc",
    RatingAsc = "RatingAsc",
    RatingDesc = "RatingDesc",
    RelevanceAsc = "RelevanceAsc",
    RelevanceDesc = "RelevanceDesc",
}

export interface SmartSearchShow {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    items:         ItemDetailsRecoShow[];
    user_info:     UserInfo;
}

export interface SortItems {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    sort_order?:   SortOrder | null;
    user_info:     UserInfo;
}

export enum SortOrder {
    NameAsc = "NameAsc",
    NameDesc = "NameDesc",
    PopularityAsc = "PopularityAsc",
    PopularityDesc = "PopularityDesc",
    PriceAsc = "PriceAsc",
    PriceDesc = "PriceDesc",
    RatingAsc = "RatingAsc",
    RatingDesc = "RatingDesc",
}

export interface StrategyParametersTypes {
    additional_int_params?: string[] | null;
    additional_str_params?: string[] | null;
    category_id:            boolean;
    category_ids:           boolean;
    item:                   boolean;
    items_info:             boolean;
    page_info:              boolean;
    search_info:            boolean;
}

export interface UnknownEvent {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    user_info:     UserInfo;
}

export interface VideoInteraction {
    completed?:    boolean | null;
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    items:         ItemDetails[];
    user_info:     UserInfo;
    video_item?:   null | Item;
    watched_secs?: number | null;
}

// Converts JSON types to/from your types
// and asserts the results at runtime
export class Convert {
    public static toAddToCart(json: any): AddToCart {
        return cast(json, r("AddToCart"));
    }

    public static addToCartToJson(value: AddToCart): any {
        return uncast(value, r("AddToCart"));
    }

    public static toEventDetail(json: any): EventDetail {
        return cast(json, r("EventDetail"));
    }

    public static eventDetailToJson(value: EventDetail): any {
        return uncast(value, r("EventDetail"));
    }

    public static toItemDetails(json: any): ItemDetails {
        return cast(json, r("ItemDetails"));
    }

    public static itemDetailsToJson(value: ItemDetails): any {
        return uncast(value, r("ItemDetails"));
    }

    public static toAttributes(json: any): Attributes {
        return cast(json, r("Attributes"));
    }

    public static attributesToJson(value: Attributes): any {
        return uncast(value, r("Attributes"));
    }

    public static toArticle(json: any): Article {
        return cast(json, r("Article"));
    }

    public static articleToJson(value: Article): any {
        return uncast(value, r("Article"));
    }

    public static toCategories(json: any): Categories {
        return cast(json, r("Categories"));
    }

    public static categoriesToJson(value: Categories): any {
        return uncast(value, r("Categories"));
    }

    public static toCosts(json: any): Costs {
        return cast(json, r("Costs"));
    }

    public static costsToJson(value: Costs): any {
        return uncast(value, r("Costs"));
    }

    public static toDescription(json: any): Description {
        return cast(json, r("Description"));
    }

    public static descriptionToJson(value: Description): any {
        return uncast(value, r("Description"));
    }

    public static toItemEcommerceSpec(json: any): ItemEcommerceSpec {
        return cast(json, r("ItemEcommerceSpec"));
    }

    public static itemEcommerceSpecToJson(value: ItemEcommerceSpec): any {
        return uncast(value, r("ItemEcommerceSpec"));
    }

    public static toImages(json: any): Images {
        return cast(json, r("Images"));
    }

    public static imagesToJson(value: Images): any {
        return uncast(value, r("Images"));
    }

    public static toImage(json: any): Image {
        return cast(json, r("Image"));
    }

    public static imageToJson(value: Image): any {
        return uncast(value, r("Image"));
    }

    public static toExactPrice(json: any): ExactPrice {
        return cast(json, r("ExactPrice"));
    }

    public static exactPriceToJson(value: ExactPrice): any {
        return uncast(value, r("ExactPrice"));
    }

    public static toItem(json: any): Item {
        return cast(json, r("Item"));
    }

    public static itemToJson(value: Item): any {
        return uncast(value, r("Item"));
    }

    public static toStock(json: any): Stock {
        return cast(json, r("Stock"));
    }

    public static stockToJson(value: Stock): any {
        return uncast(value, r("Stock"));
    }

    public static toTags(json: any): Tags {
        return cast(json, r("Tags"));
    }

    public static tagsToJson(value: Tags): any {
        return uncast(value, r("Tags"));
    }

    public static toItemURL(json: any): ItemURL {
        return cast(json, r("ItemURL"));
    }

    public static itemURLToJson(value: ItemURL): any {
        return uncast(value, r("ItemURL"));
    }

    public static toVideo(json: any): Video {
        return cast(json, r("Video"));
    }

    public static videoToJson(value: Video): any {
        return uncast(value, r("Video"));
    }

    public static toUserInfo(json: any): UserInfo {
        return cast(json, r("UserInfo"));
    }

    public static userInfoToJson(value: UserInfo): any {
        return uncast(value, r("UserInfo"));
    }

    public static toUserAdditionalInfo(json: any): UserAdditionalInfo {
        return cast(json, r("UserAdditionalInfo"));
    }

    public static userAdditionalInfoToJson(value: UserAdditionalInfo): any {
        return uncast(value, r("UserAdditionalInfo"));
    }

    public static toAddToList(json: any): AddToList {
        return cast(json, r("AddToList"));
    }

    public static addToListToJson(value: AddToList): any {
        return uncast(value, r("AddToList"));
    }

    public static toAPISettings(json: any): APISettings {
        return cast(json, r("APISettings"));
    }

    public static aPISettingsToJson(value: APISettings): any {
        return uncast(value, r("APISettings"));
    }

    public static toChangeItemStockState(json: any): ChangeItemStockState {
        return cast(json, r("ChangeItemStockState"));
    }

    public static changeItemStockStateToJson(value: ChangeItemStockState): any {
        return uncast(value, r("ChangeItemStockState"));
    }

    public static toCheckoutStart(json: any): CheckoutStart {
        return cast(json, r("CheckoutStart"));
    }

    public static checkoutStartToJson(value: CheckoutStart): any {
        return uncast(value, r("CheckoutStart"));
    }

    public static toPurchaseTransaction(json: any): PurchaseTransaction {
        return cast(json, r("PurchaseTransaction"));
    }

    public static purchaseTransactionToJson(value: PurchaseTransaction): any {
        return uncast(value, r("PurchaseTransaction"));
    }

    public static toTaxes(json: any): Taxes {
        return cast(json, r("Taxes"));
    }

    public static taxesToJson(value: Taxes): any {
        return uncast(value, r("Taxes"));
    }

    public static toDetailItemView(json: any): DetailItemView {
        return cast(json, r("DetailItemView"));
    }

    public static detailItemViewToJson(value: DetailItemView): any {
        return uncast(value, r("DetailItemView"));
    }

    public static toDetailItemViewAttributes(json: any): DetailItemViewAttributes {
        return cast(json, r("DetailItemViewAttributes"));
    }

    public static detailItemViewAttributesToJson(value: DetailItemViewAttributes): any {
        return uncast(value, r("DetailItemViewAttributes"));
    }

    public static toHomePageView(json: any): HomePageView {
        return cast(json, r("HomePageView"));
    }

    public static homePageViewToJson(value: HomePageView): any {
        return uncast(value, r("HomePageView"));
    }

    public static toImageInteraction(json: any): ImageInteraction {
        return cast(json, r("ImageInteraction"));
    }

    public static imageInteractionToJson(value: ImageInteraction): any {
        return uncast(value, r("ImageInteraction"));
    }

    public static toItemAttributesSelectionClass(json: any): ItemAttributesSelectionClass {
        return cast(json, r("ItemAttributesSelectionClass"));
    }

    public static itemAttributesSelectionClassToJson(value: ItemAttributesSelectionClass): any {
        return uncast(value, r("ItemAttributesSelectionClass"));
    }

    public static toItemAttributesFieldNames(json: any): ItemAttributesFieldNames {
        return cast(json, r("ItemAttributesFieldNames"));
    }

    public static itemAttributesFieldNamesToJson(value: ItemAttributesFieldNames): any {
        return uncast(value, r("ItemAttributesFieldNames"));
    }

    public static toItemRemove(json: any): ItemRemove {
        return cast(json, r("ItemRemove"));
    }

    public static itemRemoveToJson(value: ItemRemove): any {
        return uncast(value, r("ItemRemove"));
    }

    public static toItemsView(json: any): ItemsView {
        return cast(json, r("ItemsView"));
    }

    public static itemsViewToJson(value: ItemsView): any {
        return uncast(value, r("ItemsView"));
    }

    public static toItemUpsert(json: any): ItemUpsert {
        return cast(json, r("ItemUpsert"));
    }

    public static itemUpsertToJson(value: ItemUpsert): any {
        return uncast(value, r("ItemUpsert"));
    }

    public static toListView(json: any): ListView {
        return cast(json, r("ListView"));
    }

    public static listViewToJson(value: ListView): any {
        return uncast(value, r("ListView"));
    }

    public static toOfflineRecommendationsRemove(json: any): OfflineRecommendationsRemove {
        return cast(json, r("OfflineRecommendationsRemove"));
    }

    public static offlineRecommendationsRemoveToJson(value: OfflineRecommendationsRemove): any {
        return uncast(value, r("OfflineRecommendationsRemove"));
    }

    public static toOfflineRecommendationsTypeClass(json: any): OfflineRecommendationsTypeClass {
        return cast(json, r("OfflineRecommendationsTypeClass"));
    }

    public static offlineRecommendationsTypeClassToJson(value: OfflineRecommendationsTypeClass): any {
        return uncast(value, r("OfflineRecommendationsTypeClass"));
    }

    public static toOfflineRecommendationsUpsert(json: any): OfflineRecommendationsUpsert {
        return cast(json, r("OfflineRecommendationsUpsert"));
    }

    public static offlineRecommendationsUpsertToJson(value: OfflineRecommendationsUpsert): any {
        return uncast(value, r("OfflineRecommendationsUpsert"));
    }

    public static toOtherInteraction(json: any): OtherInteraction {
        return cast(json, r("OtherInteraction"));
    }

    public static otherInteractionToJson(value: OtherInteraction): any {
        return uncast(value, r("OtherInteraction"));
    }

    public static toPageVisit(json: any): PageVisit {
        return cast(json, r("PageVisit"));
    }

    public static pageVisitToJson(value: PageVisit): any {
        return uncast(value, r("PageVisit"));
    }

    public static toPlacementRemove(json: any): PlacementRemove {
        return cast(json, r("PlacementRemove"));
    }

    public static placementRemoveToJson(value: PlacementRemove): any {
        return uncast(value, r("PlacementRemove"));
    }

    public static toPlacementStatisticsJSONReady(json: any): PlacementStatisticsJSONReady {
        return cast(json, r("PlacementStatisticsJSONReady"));
    }

    public static placementStatisticsJSONReadyToJson(value: PlacementStatisticsJSONReady): any {
        return uncast(value, r("PlacementStatisticsJSONReady"));
    }

    public static toLIFOVecForUint128(json: any): LIFOVecForUint128 {
        return cast(json, r("LIFOVecForUint128"));
    }

    public static lIFOVecForUint128ToJson(value: LIFOVecForUint128): any {
        return uncast(value, r("LIFOVecForUint128"));
    }

    public static toDynamicStrategiesObject(json: any): DynamicStrategiesObject {
        return cast(json, r("DynamicStrategiesObject"));
    }

    public static dynamicStrategiesObjectToJson(value: DynamicStrategiesObject): any {
        return uncast(value, r("DynamicStrategiesObject"));
    }

    public static toParametrizedStrategy(json: any): ParametrizedStrategy {
        return cast(json, r("ParametrizedStrategy"));
    }

    public static parametrizedStrategyToJson(value: ParametrizedStrategy): any {
        return uncast(value, r("ParametrizedStrategy"));
    }

    public static toContentItemMatcherStaticParams(json: any): ContentItemMatcherStaticParams {
        return cast(json, r("ContentItemMatcherStaticParams"));
    }

    public static contentItemMatcherStaticParamsToJson(value: ContentItemMatcherStaticParams): any {
        return uncast(value, r("ContentItemMatcherStaticParams"));
    }

    public static toEventItemTypeItemCooccurenceStaticParams(json: any): EventItemTypeItemCooccurenceStaticParams {
        return cast(json, r("EventItemTypeItemCooccurenceStaticParams"));
    }

    public static eventItemTypeItemCooccurenceStaticParamsToJson(value: EventItemTypeItemCooccurenceStaticParams): any {
        return uncast(value, r("EventItemTypeItemCooccurenceStaticParams"));
    }

    public static toEventTypeItemCounterStaticParams(json: any): EventTypeItemCounterStaticParams {
        return cast(json, r("EventTypeItemCounterStaticParams"));
    }

    public static eventTypeItemCounterStaticParamsToJson(value: EventTypeItemCounterStaticParams): any {
        return uncast(value, r("EventTypeItemCounterStaticParams"));
    }

    public static toOfflineRecommendationsStorageStaticParams(json: any): OfflineRecommendationsStorageStaticParams {
        return cast(json, r("OfflineRecommendationsStorageStaticParams"));
    }

    public static offlineRecommendationsStorageStaticParamsToJson(value: OfflineRecommendationsStorageStaticParams): any {
        return uncast(value, r("OfflineRecommendationsStorageStaticParams"));
    }

    public static toSessionItemsCooccurenceStaticParams(json: any): SessionItemsCooccurenceStaticParams {
        return cast(json, r("SessionItemsCooccurenceStaticParams"));
    }

    public static sessionItemsCooccurenceStaticParamsToJson(value: SessionItemsCooccurenceStaticParams): any {
        return uncast(value, r("SessionItemsCooccurenceStaticParams"));
    }

    public static toEventVisitorItemCounterStaticParams(json: any): EventVisitorItemCounterStaticParams {
        return cast(json, r("EventVisitorItemCounterStaticParams"));
    }

    public static eventVisitorItemCounterStaticParamsToJson(value: EventVisitorItemCounterStaticParams): any {
        return uncast(value, r("EventVisitorItemCounterStaticParams"));
    }

    public static toPlacementUpsert(json: any): PlacementUpsert {
        return cast(json, r("PlacementUpsert"));
    }

    public static placementUpsertToJson(value: PlacementUpsert): any {
        return uncast(value, r("PlacementUpsert"));
    }

    public static toWeightedGenericCandidateRec(json: any): WeightedGenericCandidateRec {
        return cast(json, r("WeightedGenericCandidateRec"));
    }

    public static weightedGenericCandidateRecToJson(value: WeightedGenericCandidateRec): any {
        return uncast(value, r("WeightedGenericCandidateRec"));
    }

    public static toStrategyDynamicStrategies(json: any): StrategyDynamicStrategies {
        return cast(json, r("StrategyDynamicStrategies"));
    }

    public static strategyDynamicStrategiesToJson(value: StrategyDynamicStrategies): any {
        return uncast(value, r("StrategyDynamicStrategies"));
    }

    public static toPurchaseComplete(json: any): PurchaseComplete {
        return cast(json, r("PurchaseComplete"));
    }

    public static purchaseCompleteToJson(value: PurchaseComplete): any {
        return uncast(value, r("PurchaseComplete"));
    }

    public static toRateItem(json: any): RateItem {
        return cast(json, r("RateItem"));
    }

    public static rateItemToJson(value: RateItem): any {
        return uncast(value, r("RateItem"));
    }

    public static toRecoACK(json: any): RecoACK {
        return cast(json, r("RecoACK"));
    }

    public static recoACKToJson(value: RecoACK): any {
        return uncast(value, r("RecoACK"));
    }

    public static toItemDetailsRecoShow(json: any): ItemDetailsRecoShow {
        return cast(json, r("ItemDetailsRecoShow"));
    }

    public static itemDetailsRecoShowToJson(value: ItemDetailsRecoShow): any {
        return uncast(value, r("ItemDetailsRecoShow"));
    }

    public static toStrategiesUsedDynamicStrategies(json: any): StrategiesUsedDynamicStrategies {
        return cast(json, r("StrategiesUsedDynamicStrategies"));
    }

    public static strategiesUsedDynamicStrategiesToJson(value: StrategiesUsedDynamicStrategies): any {
        return uncast(value, r("StrategiesUsedDynamicStrategies"));
    }

    public static toPlacementConfig(json: any): PlacementConfig {
        return cast(json, r("PlacementConfig"));
    }

    public static placementConfigToJson(value: PlacementConfig): any {
        return uncast(value, r("PlacementConfig"));
    }

    public static toItemAttributesSelectionItemAttributesSelectionClass(json: any): ItemAttributesSelectionItemAttributesSelectionClass {
        return cast(json, r("ItemAttributesSelectionItemAttributesSelectionClass"));
    }

    public static itemAttributesSelectionItemAttributesSelectionClassToJson(value: ItemAttributesSelectionItemAttributesSelectionClass): any {
        return uncast(value, r("ItemAttributesSelectionItemAttributesSelectionClass"));
    }

    public static toStrategyParametersValues(json: any): StrategyParametersValues {
        return cast(json, r("StrategyParametersValues"));
    }

    public static strategyParametersValuesToJson(value: StrategyParametersValues): any {
        return uncast(value, r("StrategyParametersValues"));
    }

    public static toPageInfo(json: any): PageInfo {
        return cast(json, r("PageInfo"));
    }

    public static pageInfoToJson(value: PageInfo): any {
        return uncast(value, r("PageInfo"));
    }

    public static toSearchInfo(json: any): SearchInfo {
        return cast(json, r("SearchInfo"));
    }

    public static searchInfoToJson(value: SearchInfo): any {
        return uncast(value, r("SearchInfo"));
    }

    public static toRecoRequest(json: any): RecoRequest {
        return cast(json, r("RecoRequest"));
    }

    public static recoRequestToJson(value: RecoRequest): any {
        return uncast(value, r("RecoRequest"));
    }

    public static toRecoShow(json: any): RecoShow {
        return cast(json, r("RecoShow"));
    }

    public static recoShowToJson(value: RecoShow): any {
        return uncast(value, r("RecoShow"));
    }

    public static toRemoveFromCart(json: any): RemoveFromCart {
        return cast(json, r("RemoveFromCart"));
    }

    public static removeFromCartToJson(value: RemoveFromCart): any {
        return uncast(value, r("RemoveFromCart"));
    }

    public static toRemoveFromList(json: any): RemoveFromList {
        return cast(json, r("RemoveFromList"));
    }

    public static removeFromListToJson(value: RemoveFromList): any {
        return uncast(value, r("RemoveFromList"));
    }

    public static toSearchItems(json: any): SearchItems {
        return cast(json, r("SearchItems"));
    }

    public static searchItemsToJson(value: SearchItems): any {
        return uncast(value, r("SearchItems"));
    }

    public static toCartPageView(json: any): CartPageView {
        return cast(json, r("CartPageView"));
    }

    public static cartPageViewToJson(value: CartPageView): any {
        return uncast(value, r("CartPageView"));
    }

    public static toSmartSearchRequest(json: any): SmartSearchRequest {
        return cast(json, r("SmartSearchRequest"));
    }

    public static smartSearchRequestToJson(value: SmartSearchRequest): any {
        return uncast(value, r("SmartSearchRequest"));
    }

    public static toSmartSearchShow(json: any): SmartSearchShow {
        return cast(json, r("SmartSearchShow"));
    }

    public static smartSearchShowToJson(value: SmartSearchShow): any {
        return uncast(value, r("SmartSearchShow"));
    }

    public static toSortItems(json: any): SortItems {
        return cast(json, r("SortItems"));
    }

    public static sortItemsToJson(value: SortItems): any {
        return uncast(value, r("SortItems"));
    }

    public static toStrategyParametersTypes(json: any): StrategyParametersTypes {
        return cast(json, r("StrategyParametersTypes"));
    }

    public static strategyParametersTypesToJson(value: StrategyParametersTypes): any {
        return uncast(value, r("StrategyParametersTypes"));
    }

    public static toUnknownEvent(json: any): UnknownEvent {
        return cast(json, r("UnknownEvent"));
    }

    public static unknownEventToJson(value: UnknownEvent): any {
        return uncast(value, r("UnknownEvent"));
    }

    public static toVideoInteraction(json: any): VideoInteraction {
        return cast(json, r("VideoInteraction"));
    }

    public static videoInteractionToJson(value: VideoInteraction): any {
        return uncast(value, r("VideoInteraction"));
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "AddToCart": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "EventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "rec_id", js: "rec_id", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "ItemDetails": o([
        { json: "attributes", js: "attributes", typ: u(undefined, u(null, r("Attributes"))) },
        { json: "item", js: "item", typ: r("Item") },
    ], "any"),
    "Attributes": o([
        { json: "article", js: "article", typ: u(undefined, u(null, r("Article"))) },
        { json: "categories", js: "categories", typ: u(undefined, u(null, r("Categories"))) },
        { json: "costs", js: "costs", typ: u(undefined, u(null, r("Costs"))) },
        { json: "description", js: "description", typ: u(undefined, u(null, r("Description"))) },
        { json: "ecommerce", js: "ecommerce", typ: u(undefined, u(null, r("ItemEcommerceSpec"))) },
        { json: "images", js: "images", typ: u(undefined, u(null, r("Images"))) },
        { json: "price", js: "price", typ: u(undefined, u(null, r("ExactPrice"))) },
        { json: "related_items", js: "related_items", typ: u(undefined, u(a(r("Item")), null)) },
        { json: "stock", js: "stock", typ: u(undefined, u(null, r("Stock"))) },
        { json: "tags", js: "tags", typ: u(undefined, u(null, r("Tags"))) },
        { json: "url", js: "url", typ: r("ItemURL") },
        { json: "video", js: "video", typ: u(undefined, u(null, r("Video"))) },
    ], "any"),
    "Article": o([
        { json: "author", js: "author", typ: "" },
        { json: "snippet", js: "snippet", typ: "" },
        { json: "timestamp_added", js: "timestamp_added", typ: 0 },
    ], "any"),
    "Categories": o([
        { json: "categories", js: "categories", typ: a(a(u(m(""), ""))) },
    ], "any"),
    "Costs": o([
        { json: "costs", js: "costs", typ: m(3.14) },
    ], "any"),
    "Description": o([
        { json: "content", js: "content", typ: u(undefined, u(m(""), null, "")) },
        { json: "language_code", js: "language_code", typ: u(undefined, u(null, "")) },
        { json: "title", js: "title", typ: u(m(""), "") },
    ], "any"),
    "ItemEcommerceSpec": o([
        { json: "item_code", js: "item_code", typ: u(undefined, u(null, "")) },
        { json: "item_group_id", js: "item_group_id", typ: u(undefined, u(null, "")) },
    ], "any"),
    "Images": o([
        { json: "images", js: "images", typ: a(r("Image")) },
    ], "any"),
    "Image": o([
        { json: "height", js: "height", typ: "" },
        { json: "uri", js: "uri", typ: "" },
        { json: "width", js: "width", typ: "" },
    ], "any"),
    "ExactPrice": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: 3.14 },
        { json: "original_price", js: "original_price", typ: 3.14 },
    ], "any"),
    "Item": o([
        { json: "item_id", js: "item_id", typ: "" },
        { json: "item_type", js: "item_type", typ: r("ItemType") },
    ], "any"),
    "Stock": o([
        { json: "available_quantity", js: "available_quantity", typ: u(undefined, u(0, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
        { json: "stock_state", js: "stock_state", typ: r("StockState") },
    ], "any"),
    "Tags": o([
        { json: "tags", js: "tags", typ: a("") },
    ], "any"),
    "ItemURL": o([
        { json: "canonical_uri", js: "canonical_uri", typ: "" },
        { json: "canonical_uri_with_params", js: "canonical_uri_with_params", typ: u(undefined, u(null, "")) },
        { json: "url_params", js: "url_params", typ: u(undefined, u(null, "")) },
    ], "any"),
    "Video": o([
        { json: "duration_secs", js: "duration_secs", typ: 0 },
        { json: "uri", js: "uri", typ: u(undefined, u(null, "")) },
    ], "any"),
    "UserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("UserAdditionalInfo"))) },
        { json: "privacy_setting", js: "privacy_setting", typ: u(undefined, u(r("PrivacySetting"), null)) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "UserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "AddToList": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "list_id", js: "list_id", typ: "" },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "APISettings": o([
        { json: "url_api", js: "url_api", typ: "" },
    ], "any"),
    "ChangeItemStockState": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("Item") },
        { json: "stock_state", js: "stock_state", typ: r("StockState") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "CheckoutStart": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "purchase_transaction", js: "purchase_transaction", typ: r("PurchaseTransaction") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "PurchaseTransaction": o([
        { json: "costs", js: "costs", typ: u(undefined, u(null, r("Costs"))) },
        { json: "currency_code", js: "currency_code", typ: r("Currency") },
        { json: "id", js: "id", typ: u(undefined, u(null, "")) },
        { json: "revenue", js: "revenue", typ: 3.14 },
        { json: "taxes", js: "taxes", typ: u(undefined, u(null, r("Taxes"))) },
    ], "any"),
    "Taxes": o([
        { json: "local", js: "local", typ: u(undefined, u(3.14, null)) },
        { json: "state", js: "state", typ: u(undefined, u(3.14, null)) },
    ], "any"),
    "DetailItemView": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "rec_id", js: "rec_id", typ: u(undefined, u(null, "")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
        { json: "view_attributes", js: "view_attributes", typ: u(undefined, u(null, r("DetailItemViewAttributes"))) },
    ], "any"),
    "DetailItemViewAttributes": o([
        { json: "completed", js: "completed", typ: u(undefined, u(true, null)) },
        { json: "view_time_secs", js: "view_time_secs", typ: u(undefined, u(0, null)) },
    ], "any"),
    "HomePageView": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "ImageInteraction": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "ItemAttributesSelectionClass": o([
        { json: "SelectedAttributes", js: "SelectedAttributes", typ: a(r("ItemAttributesFieldNames")) },
    ], false),
    "ItemAttributesFieldNames": o([
        { json: "Url", js: "Url", typ: u(undefined, r("ItemURLFieldName")) },
        { json: "Price", js: "Price", typ: u(undefined, r("ExactPriceFieldName")) },
        { json: "Description", js: "Description", typ: u(undefined, r("DescriptionFieldName")) },
        { json: "Categories", js: "Categories", typ: u(undefined, r("CategoriesFieldName")) },
        { json: "Images", js: "Images", typ: u(undefined, r("ImagesFieldName")) },
        { json: "Video", js: "Video", typ: u(undefined, r("VideoFieldName")) },
        { json: "Tags", js: "Tags", typ: u(undefined, r("TagsFieldName")) },
        { json: "Article", js: "Article", typ: u(undefined, r("ArticleFieldName")) },
        { json: "EcommerceSpec", js: "EcommerceSpec", typ: u(undefined, r("ItemEcommerceSpecFieldName")) },
        { json: "Stock", js: "Stock", typ: u(undefined, r("StockFieldName")) },
        { json: "Costs", js: "Costs", typ: u(undefined, r("CostsFieldName")) },
    ], false),
    "ItemRemove": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("Item") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "ItemsView": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "on_screen", js: "on_screen", typ: true },
        { json: "page_categories", js: "page_categories", typ: u(undefined, u(a(""), null)) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "ItemUpsert": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item_details", js: "item_details", typ: r("ItemDetails") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "ListView": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "list_id", js: "list_id", typ: "" },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "OfflineRecommendationsRemove": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "name", js: "name", typ: u(r("OfflineRecommendationsTypeClass"), r("OfflineRecommendationsTypeEnum")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "OfflineRecommendationsTypeClass": o([
        { json: "OtherSimilarity", js: "OtherSimilarity", typ: "" },
    ], false),
    "OfflineRecommendationsUpsert": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "matrix", js: "matrix", typ: m(m(0)) },
        { json: "name", js: "name", typ: u(r("OfflineRecommendationsTypeClass"), r("OfflineRecommendationsTypeEnum")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "OtherInteraction": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "interaction_name", js: "interaction_name", typ: "" },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "PageVisit": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "PlacementRemove": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "name", js: "name", typ: "" },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "PlacementStatisticsJSONReady": o([
        { json: "loading_times_microseconds", js: "loading_times_microseconds", typ: m(r("LIFOVecForUint128")) },
        { json: "placements_statistics", js: "placements_statistics", typ: m(a(a(u(r("StrategyEnum"), r("DynamicStrategiesObject"))))) },
    ], "any"),
    "LIFOVecForUint128": o([
        { json: "base", js: "base", typ: a(0) },
        { json: "capacity", js: "capacity", typ: 0 },
    ], "any"),
    "DynamicStrategiesObject": o([
        { json: "Parametrized", js: "Parametrized", typ: u(undefined, r("ParametrizedStrategy")) },
        { json: "Generic", js: "Generic", typ: u(undefined, r("GenericStrategy")) },
        { json: "StrategyBuilder", js: "StrategyBuilder", typ: u(undefined, "") },
        { json: "n_impressions", js: "n_impressions", typ: u(undefined, 0) },
        { json: "n_success", js: "n_success", typ: u(undefined, 0) },
    ], "any"),
    "ParametrizedStrategy": o([
        { json: "VisitorItemCounter", js: "VisitorItemCounter", typ: u(undefined, r("EventVisitorItemCounterStaticParams")) },
        { json: "ItemCounter", js: "ItemCounter", typ: u(undefined, r("EventTypeItemCounterStaticParams")) },
        { json: "ItemCooccurences", js: "ItemCooccurences", typ: u(undefined, r("EventItemTypeItemCooccurenceStaticParams")) },
        { json: "ContentItemMatcher", js: "ContentItemMatcher", typ: u(undefined, r("ContentItemMatcherStaticParams")) },
        { json: "OfflineRecommendationsStorage", js: "OfflineRecommendationsStorage", typ: u(undefined, r("OfflineRecommendationsStorageStaticParams")) },
        { json: "SessionBasedCooccurence", js: "SessionBasedCooccurence", typ: u(undefined, r("SessionItemsCooccurenceStaticParams")) },
    ], false),
    "ContentItemMatcherStaticParams": o([
        { json: "item_type", js: "item_type", typ: u(undefined, u(r("ItemType"), null)) },
    ], "any"),
    "EventItemTypeItemCooccurenceStaticParams": o([
        { json: "event_type_a", js: "event_type_a", typ: r("EventType") },
        { json: "event_type_b", js: "event_type_b", typ: r("EventType") },
        { json: "item_type_a", js: "item_type_a", typ: r("ItemType") },
        { json: "item_type_b", js: "item_type_b", typ: r("ItemType") },
    ], "any"),
    "EventTypeItemCounterStaticParams": o([
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item_type", js: "item_type", typ: r("ItemType") },
    ], "any"),
    "OfflineRecommendationsStorageStaticParams": o([
        { json: "rec_type", js: "rec_type", typ: u(r("OfflineRecommendationsTypeClass"), r("OfflineRecommendationsTypeEnum")) },
    ], "any"),
    "SessionItemsCooccurenceStaticParams": o([
        { json: "cooccurence", js: "cooccurence", typ: r("EventItemTypeItemCooccurenceStaticParams") },
        { json: "item_generator", js: "item_generator", typ: r("EventVisitorItemCounterStaticParams") },
    ], "any"),
    "EventVisitorItemCounterStaticParams": o([
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item_type", js: "item_type", typ: r("ItemType") },
        { json: "user_info_type", js: "user_info_type", typ: r("UserInfoType") },
    ], "any"),
    "PlacementUpsert": o([
        { json: "enabled", js: "enabled", typ: u(undefined, true) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "html_template", js: "html_template", typ: u(undefined, u(null, "")) },
        { json: "item_type", js: "item_type", typ: r("ItemType") },
        { json: "location", js: "location", typ: u(undefined, u(r("Location"), null)) },
        { json: "name", js: "name", typ: "" },
        { json: "ranking", js: "ranking", typ: r("StrategySelectorStrategyChooseOne") },
        { json: "strategies", js: "strategies", typ: a(r("WeightedGenericCandidateRec")) },
        { json: "url_params", js: "url_params", typ: u(undefined, u(m(""), null)) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "WeightedGenericCandidateRec": o([
        { json: "strategy", js: "strategy", typ: u(r("StrategyDynamicStrategies"), r("StrategyEnum")) },
        { json: "weight", js: "weight", typ: u(undefined, u(3.14, null)) },
    ], "any"),
    "StrategyDynamicStrategies": o([
        { json: "Parametrized", js: "Parametrized", typ: u(undefined, r("ParametrizedStrategy")) },
        { json: "Generic", js: "Generic", typ: u(undefined, r("GenericStrategy")) },
        { json: "StrategyBuilder", js: "StrategyBuilder", typ: u(undefined, "") },
    ], false),
    "PurchaseComplete": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "purchase_transaction", js: "purchase_transaction", typ: r("PurchaseTransaction") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "RateItem": o([
        { json: "comment", js: "comment", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "rating", js: "rating", typ: u(undefined, u(3.14, null)) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "RecoACK": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetailsRecoShow")) },
        { json: "placement_config", js: "placement_config", typ: r("PlacementConfig") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "ItemDetailsRecoShow": o([
        { json: "attributes", js: "attributes", typ: r("Attributes") },
        { json: "item", js: "item", typ: r("Item") },
        { json: "rec_id", js: "rec_id", typ: "" },
        { json: "score", js: "score", typ: u(undefined, u(3.14, null)) },
        { json: "strategies_used", js: "strategies_used", typ: u(undefined, u(a(a(u(r("StrategiesUsedDynamicStrategies"), 3.14, r("StrategyEnum")))), null)) },
        { json: "strategy_selected", js: "strategy_selected", typ: u(r("StrategyDynamicStrategies"), r("StrategyEnum")) },
    ], "any"),
    "StrategiesUsedDynamicStrategies": o([
        { json: "Parametrized", js: "Parametrized", typ: u(undefined, r("ParametrizedStrategy")) },
        { json: "Generic", js: "Generic", typ: u(undefined, r("GenericStrategy")) },
        { json: "StrategyBuilder", js: "StrategyBuilder", typ: u(undefined, "") },
    ], false),
    "PlacementConfig": o([
        { json: "html_template", js: "html_template", typ: u(undefined, u(null, "")) },
        { json: "item_attributes_selection", js: "item_attributes_selection", typ: u(undefined, u(r("ItemAttributesSelectionItemAttributesSelectionClass"), r("ItemAttributesSelectionEnum"), null)) },
        { json: "item_type", js: "item_type", typ: r("ItemType") },
        { json: "location", js: "location", typ: u(undefined, u(r("Location"), null)) },
        { json: "name", js: "name", typ: "" },
        { json: "parameters", js: "parameters", typ: u(undefined, u(null, r("StrategyParametersValues"))) },
    ], "any"),
    "ItemAttributesSelectionItemAttributesSelectionClass": o([
        { json: "SelectedAttributes", js: "SelectedAttributes", typ: a(r("ItemAttributesFieldNames")) },
    ], false),
    "StrategyParametersValues": o([
        { json: "additional_int_params", js: "additional_int_params", typ: u(undefined, u(m(0), null)) },
        { json: "additional_str_params", js: "additional_str_params", typ: u(undefined, u(m(""), null)) },
        { json: "category_id", js: "category_id", typ: u(undefined, u(a(""), null)) },
        { json: "category_ids", js: "category_ids", typ: u(undefined, u(a(a("")), null)) },
        { json: "item", js: "item", typ: u(undefined, u(null, r("Item"))) },
        { json: "items", js: "items", typ: u(undefined, u(a(r("Item")), null)) },
        { json: "page_info", js: "page_info", typ: u(undefined, u(null, r("PageInfo"))) },
        { json: "search_info", js: "search_info", typ: u(undefined, u(null, r("SearchInfo"))) },
    ], "any"),
    "PageInfo": o([
        { json: "content", js: "content", typ: u(undefined, u(null, "")) },
        { json: "item_type", js: "item_type", typ: u(undefined, u(r("ItemType"), null)) },
        { json: "url", js: "url", typ: u(undefined, u(null, "")) },
    ], "any"),
    "SearchInfo": o([
        { json: "query", js: "query", typ: u(undefined, u(null, "")) },
    ], "any"),
    "RecoRequest": o([
        { json: "additional_uri_params", js: "additional_uri_params", typ: u(undefined, u(m(""), null)) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "locale", js: "locale", typ: u(undefined, u(r("Locale"), null)) },
        { json: "location", js: "location", typ: r("Location") },
        { json: "n_items", js: "n_items", typ: 0 },
        { json: "placement_config", js: "placement_config", typ: r("PlacementConfig") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "RecoShow": o([
        { json: "additional_uri_params", js: "additional_uri_params", typ: u(undefined, u(m(""), null)) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "experiment_id", js: "experiment_id", typ: u(undefined, u(null, "")) },
        { json: "items", js: "items", typ: a(r("ItemDetailsRecoShow")) },
        { json: "placement_config", js: "placement_config", typ: r("PlacementConfig") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "RemoveFromCart": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "RemoveFromList": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "list_id", js: "list_id", typ: u(undefined, u(null, "")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "SearchItems": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "query", js: "query", typ: "" },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "CartPageView": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "SmartSearchRequest": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "filter", js: "filter", typ: m("") },
        { json: "n_items", js: "n_items", typ: 0 },
        { json: "page", js: "page", typ: 0 },
        { json: "query", js: "query", typ: "" },
        { json: "search_order", js: "search_order", typ: r("SearchOrder") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "SmartSearchShow": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetailsRecoShow")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "SortItems": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "sort_order", js: "sort_order", typ: u(undefined, u(r("SortOrder"), null)) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "StrategyParametersTypes": o([
        { json: "additional_int_params", js: "additional_int_params", typ: u(undefined, u(a(""), null)) },
        { json: "additional_str_params", js: "additional_str_params", typ: u(undefined, u(a(""), null)) },
        { json: "category_id", js: "category_id", typ: true },
        { json: "category_ids", js: "category_ids", typ: true },
        { json: "item", js: "item", typ: true },
        { json: "items_info", js: "items_info", typ: true },
        { json: "page_info", js: "page_info", typ: true },
        { json: "search_info", js: "search_info", typ: true },
    ], "any"),
    "UnknownEvent": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "VideoInteraction": o([
        { json: "completed", js: "completed", typ: u(undefined, u(true, null)) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
        { json: "video_item", js: "video_item", typ: u(undefined, u(null, r("Item"))) },
        { json: "watched_secs", js: "watched_secs", typ: u(undefined, u(0, null)) },
    ], "any"),
    "EventType": [
        "AddToCart",
        "AddToList",
        "CartPageView",
        "ChangeItemStockState",
        "CheckoutStart",
        "DetailItemView",
        "HomePageView",
        "ImageInteraction",
        "ItemRemove",
        "ItemUpsert",
        "ItemsView",
        "ListView",
        "OfflineRecommendationsRemove",
        "OfflineRecommendationsUpsert",
        "OtherInteraction",
        "PageVisit",
        "PlacementRemove",
        "PlacementUpsert",
        "PurchaseComplete",
        "RateItem",
        "RecoAck",
        "RecoRequest",
        "RecoShow",
        "RemoveFromCart",
        "RemoveFromList",
        "SearchItems",
        "SmartSearchRequest",
        "SmartSearchShow",
        "SortItems",
        "UnknownEvent",
        "VideoInteraction",
    ],
    "Currency": [
        "AMD",
        "AED",
        "AFN",
        "ALL",
        "ANG",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BSD",
        "BBD",
        "BDT",
        "BGN",
        "BHD",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BOV",
        "BRL",
        "BTN",
        "BWP",
        "BYN",
        "BZD",
        "CAD",
        "CRC",
        "CDF",
        "CHE",
        "CHF",
        "CHW",
        "CLF",
        "CLP",
        "CNY",
        "COP",
        "COU",
        "CUC",
        "CUP",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EGP",
        "ERN",
        "ETB",
        "EUR",
        "FJD",
        "FKP",
        "GBP",
        "GEL",
        "GHS",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        "HKD",
        "HNL",
        "HRK",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "IQD",
        "IRR",
        "ISK",
        "JMD",
        "JOD",
        "JPY",
        "KES",
        "KGS",
        "KHR",
        "KMF",
        "KPW",
        "KRW",
        "KWD",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "LYD",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MMK",
        "MNT",
        "MOP",
        "MRU",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        "MXV",
        "MYR",
        "MZN",
        "NIO",
        "NAD",
        "NGN",
        "NOK",
        "NPR",
        "NZD",
        "OMR",
        "PHP",
        "PAB",
        "PEN",
        "PGK",
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SSP",
        "SVC",
        "SAR",
        "SBD",
        "SCR",
        "SDG",
        "SEK",
        "SGD",
        "SHP",
        "SLL",
        "SOS",
        "SRD",
        "STN",
        "SYP",
        "SZL",
        "THB",
        "TJS",
        "TMT",
        "TND",
        "TOP",
        "TRY",
        "TTD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "UNK",
        "USD",
        "USN",
        "UYI",
        "UYU",
        "UZS",
        "VEF",
        "VND",
        "VUV",
        "WST",
        "XAF",
        "XCD",
        "XDR",
        "XOF",
        "XPF",
        "XSU",
        "XUA",
        "YER",
        "ZAR",
        "ZMW",
        "ZWL",
    ],
    "ItemType": [
        "Article",
        "Ecommerce",
        "Unknown",
        "Video",
    ],
    "StockState": [
        "BackOrder",
        "InStock",
        "OutOfStock",
        "PreOrder",
    ],
    "Gender": [
        "Female",
        "Male",
        "Other",
    ],
    "PrivacySetting": [
        "NonPersonalized",
        "Personalized",
    ],
    "BuilderFn1": [
        "ArgMax",
        "ArgMin",
        "ConvertToPlacementItemType",
        "Invert",
        "Ranking",
    ],
    "BuilderFn2": [
        "Expand",
        "Highest",
        "Intersect",
        "Less",
        "LessEq",
        "Lookup",
        "Lowest",
        "More",
        "MoreEq",
        "Remove",
        "Union",
    ],
    "BuilderVariable": [
        "AllItems",
        "ItemCurrent",
        "ItemCurrentType",
        "ItemsAlsoAddedToCartInSession",
        "ItemsAlsoBoughtInSession",
        "ItemsAlsoSeenInSession",
        "ItemsInCart",
        "ItemsRecommendedSessionCounter",
        "ItemsSeenInSession",
        "ItemsVisitedCounter",
    ],
    "ArticleFieldName": [
        "Author",
        "Snippet",
        "TimestampAdded",
    ],
    "CategoriesFieldName": [
        "Categories",
    ],
    "CostsFieldName": [
        "Costs",
    ],
    "DescriptionFieldName": [
        "Content",
        "LanguageCode",
        "Title",
    ],
    "ItemEcommerceSpecFieldName": [
        "ItemCode",
        "ItemGroupId",
    ],
    "ImagesFieldName": [
        "Images",
    ],
    "ExactPriceFieldName": [
        "CurrencyCode",
        "DisplayPrice",
        "OriginalPrice",
    ],
    "StockFieldName": [
        "AvailableQuantity",
        "Quantity",
        "StockState",
    ],
    "TagsFieldName": [
        "Tags",
    ],
    "ItemURLFieldName": [
        "CanonicalUri",
        "CanonicalUriWithParams",
        "UrlParams",
    ],
    "VideoFieldName": [
        "DurationSecs",
        "Uri",
    ],
    "ItemAttributesSelectionEnum": [
        "AllAttributes",
    ],
    "OfflineRecommendationsTypeEnum": [
        "AttributesSimilarity",
        "ImageSimilarity",
        "TextSimilarity",
    ],
    "StrategyEnum": [
        "Unknown",
    ],
    "GenericStrategy": [
        "BestsellerCategory",
        "SearchMatching",
        "SeenInSessionCoccurAddedToCart",
        "SeenInSessionCoccurSeen",
    ],
    "UserInfoType": [
        "SESSION",
        "USER",
        "VISITOR",
    ],
    "Location": [
        "AddToCart",
        "CategoryPage",
        "CheckoutPage",
        "Error404",
        "HomePage",
        "ItemPage",
        "OtherPage",
        "SearchPage",
        "UnknownPage",
    ],
    "StrategySelectorStrategyChooseOne": [
        "RankingModel",
        "ThompsonSampling",
        "WeightedSample",
    ],
    "Locale": [
        "af_ZA",
        "ar_AR",
        "as_IN",
        "az_AZ",
        "be_BY",
        "bg_BG",
        "bn_IN",
        "br_FR",
        "bs_BA",
        "ca_ES",
        "cs_CZ",
        "cb_IQ",
        "co_FR",
        "cx_PH",
        "cy_GB",
        "da_DK",
        "de_DE",
        "el_GR",
        "en_GB",
        "en_UD",
        "en_US",
        "es_ES",
        "es_LA",
        "et_EE",
        "eu_ES",
        "fa_IR",
        "ff_NG",
        "fi_FI",
        "fo_FO",
        "fr_CA",
        "fr_FR",
        "fy_NL",
        "ga_IE",
        "gl_ES",
        "gn_PY",
        "gu_IN",
        "ha_NG",
        "he_IL",
        "hi_IN",
        "hr_HR",
        "hu_HU",
        "hy_AM",
        "id_ID",
        "is_IS",
        "it_IT",
        "ja_JP",
        "ja_KS",
        "jv_ID",
        "km_KH",
        "ka_GE",
        "kk_KZ",
        "kn_IN",
        "ko_KR",
        "ku_TR",
        "lv_LV",
        "lt_LT",
        "ms_MY",
        "mt_MT",
        "mg_MG",
        "mk_MK",
        "ml_IN",
        "mn_MN",
        "mr_IN",
        "my_MM",
        "nb_NO",
        "ne_NP",
        "nl_BE",
        "nl_NL",
        "nn_NO",
        "or_IN",
        "ps_AF",
        "pa_IN",
        "pl_PL",
        "pt_BR",
        "pt_PT",
        "qz_MM",
        "ro_RO",
        "ru_RU",
        "rw_RW",
        "sc_IT",
        "si_LK",
        "sk_SK",
        "sl_SI",
        "so_SO",
        "sq_AL",
        "sr_RS",
        "sv_SE",
        "sw_KE",
        "sz_PL",
        "ta_IN",
        "te_IN",
        "tg_TJ",
        "th_TH",
        "tl_PH",
        "tr_TR",
        "tz_MA",
        "uk_UA",
        "ur_PK",
        "uz_UZ",
        "vi_VN",
        "zh_CN",
        "zh_HK",
        "zh_TW",
    ],
    "SearchOrder": [
        "Newest",
        "Oldest",
        "Personalized",
        "PopularityAsc",
        "PopularityDesc",
        "PriceAsc",
        "PriceDesc",
        "RatingAsc",
        "RatingDesc",
        "RelevanceAsc",
        "RelevanceDesc",
    ],
    "SortOrder": [
        "NameAsc",
        "NameDesc",
        "PopularityAsc",
        "PopularityDesc",
        "PriceAsc",
        "PriceDesc",
        "RatingAsc",
        "RatingDesc",
    ],
};
