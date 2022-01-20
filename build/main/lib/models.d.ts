export interface AddToCart {
    cart_id?: null | string;
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    item: ItemDetails;
    user_info: UserInfo;
}
export interface EventDetail {
    event_attributes?: {
        [key: string]: string;
    } | null;
    experiment_ids?: number | null;
    rec_id?: null | string;
    url: string;
}
export declare enum EventType {
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
    VideoInteraction = "VideoInteraction"
}
export interface ItemDetails {
    attributes?: null | Attributes;
    item_id: string;
    item_type: ItemType;
}
/**
 * This attribute structure is inspired by ECS dense components also know as table-based
 * component list.
 */
export interface Attributes {
    article?: null | Article;
    categories?: null | Categories;
    costs?: null | Costs;
    description?: null | Description;
    ecommerce?: null | ItemEcommerceSpec;
    images?: null | Images;
    price?: null | ExactPrice;
    stock?: null | Stock;
    tags?: null | Tags;
    url: ItemURL;
    video?: null | Video;
}
export interface Article {
    author: string;
    snippet: string;
    timestamp_added: number;
}
export interface Categories {
    categories: Array<Array<{
        [key: string]: string;
    } | string>>;
}
export interface Costs {
    costs: {
        [key: string]: number;
    };
}
export interface Description {
    content?: {
        [key: string]: string;
    } | null | string;
    language_code?: null | string;
    title: {
        [key: string]: string;
    } | string;
}
export interface ItemEcommerceSpec {
    item_code?: null | string;
    item_group_id?: null | string;
}
export interface Images {
    images: Image[];
}
export interface Image {
    height: string;
    uri: string;
    width: string;
}
export interface ExactPrice {
    currency_code?: Currency | null;
    display_price: number;
    original_price: number;
}
export declare enum Currency {
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
    Zwl = "ZWL"
}
export interface Stock {
    available_quantity?: number | null;
    quantity?: number | null;
    stock_state: StockState;
}
export declare enum StockState {
    BackOrder = "BackOrder",
    InStock = "InStock",
    OutOfStock = "OutOfStock",
    PreOrder = "PreOrder"
}
export interface Tags {
    tags: string[];
}
export interface ItemURL {
    canonical_uri: string;
    canonical_uri_with_params?: null | string;
    url_params?: null | string;
}
export interface Video {
    duration_secs: number;
    uri?: null | string;
}
export declare enum ItemType {
    Article = "Article",
    Ecommerce = "Ecommerce",
    Unknown = "Unknown",
    Video = "Video"
}
export interface UserInfo {
    additional_info?: null | UserAdditionalInfo;
    privacy_setting?: PrivacySetting | null;
    session_id?: null | string;
    user_id?: null | string;
    visitor_id: string;
}
export interface UserAdditionalInfo {
    birth_year?: number | null;
    gender?: Gender | null;
    ip?: null | string;
    location?: null | string;
    session_id?: null | string;
    user_agent?: null | string;
}
export declare enum Gender {
    Female = "Female",
    Male = "Male",
    Other = "Other"
}
export declare enum PrivacySetting {
    NonPersonalized = "NonPersonalized",
    Personalized = "Personalized"
}
export interface AddToList {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    item: ItemDetails;
    list_id: string;
    user_info: UserInfo;
}
export interface APISettings {
    url_api: string;
}
export declare enum BuilderFn1 {
    ArgMax = "ArgMax",
    ArgMin = "ArgMin",
    ConvertToPlacementItemType = "ConvertToPlacementItemType",
    Invert = "Invert",
    Ranking = "Ranking"
}
export declare enum BuilderFn2 {
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
    Union = "Union"
}
export declare enum BuilderVariable {
    AllItems = "AllItems",
    ItemCurrent = "ItemCurrent",
    ItemCurrentType = "ItemCurrentType",
    ItemsAlsoAddedToCartInSession = "ItemsAlsoAddedToCartInSession",
    ItemsAlsoBoughtInSession = "ItemsAlsoBoughtInSession",
    ItemsAlsoSeenInSession = "ItemsAlsoSeenInSession",
    ItemsInCart = "ItemsInCart",
    ItemsRecommendedSessionCounter = "ItemsRecommendedSessionCounter",
    ItemsSeenInSession = "ItemsSeenInSession",
    ItemsVisitedCounter = "ItemsVisitedCounter"
}
export interface CategoryPageView {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    items: ItemDetails[];
    on_screen: boolean;
    page_categories?: string[] | null;
    user_info: UserInfo;
}
export interface ChangeItemStockState {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    item: Item;
    stock_state: StockState;
    user_info: UserInfo;
}
export interface Item {
    item_id: string;
    item_type: ItemType;
}
export interface CheckoutStart {
    cart_id?: null | string;
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    items: ItemDetails[];
    purchase_transaction: PurchaseTransaction;
    user_info: UserInfo;
}
export interface PurchaseTransaction {
    costs?: null | Costs;
    currency_code: Currency;
    id?: null | string;
    revenue: number;
    taxes?: null | Taxes;
}
export interface Taxes {
    local?: number | null;
    state?: number | null;
}
export interface DetailItemView {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    item: ItemDetails;
    rec_id?: null | string;
    user_info: UserInfo;
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
    event_time?: number | null;
    event_type: EventType;
    user_info: UserInfo;
}
export interface ImageInteraction {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    item: ItemDetails;
    user_info: UserInfo;
}
export interface ItemAttributesSelectionClass {
    SelectedAttributes: ItemAttributesFieldNames[];
}
export interface ItemAttributesFieldNames {
    Url?: ItemURLFieldName;
    Price?: ExactPriceFieldName;
    Description?: DescriptionFieldName;
    Categories?: CategoriesFieldName;
    Images?: ImagesFieldName;
    Video?: VideoFieldName;
    Tags?: TagsFieldName;
    Article?: ArticleFieldName;
    EcommerceSpec?: ItemEcommerceSpecFieldName;
    Stock?: StockFieldName;
    Costs?: CostsFieldName;
}
export declare enum ArticleFieldName {
    Author = "Author",
    Snippet = "Snippet",
    TimestampAdded = "TimestampAdded"
}
export declare enum CategoriesFieldName {
    Categories = "Categories"
}
export declare enum CostsFieldName {
    Costs = "Costs"
}
export declare enum DescriptionFieldName {
    Content = "Content",
    LanguageCode = "LanguageCode",
    Title = "Title"
}
export declare enum ItemEcommerceSpecFieldName {
    ItemCode = "ItemCode",
    ItemGroupID = "ItemGroupId"
}
export declare enum ImagesFieldName {
    Images = "Images"
}
export declare enum ExactPriceFieldName {
    CurrencyCode = "CurrencyCode",
    DisplayPrice = "DisplayPrice",
    OriginalPrice = "OriginalPrice"
}
export declare enum StockFieldName {
    AvailableQuantity = "AvailableQuantity",
    Quantity = "Quantity",
    StockState = "StockState"
}
export declare enum TagsFieldName {
    Tags = "Tags"
}
export declare enum ItemURLFieldName {
    CanonicalURI = "CanonicalUri",
    CanonicalURIWithParams = "CanonicalUriWithParams",
    URLParams = "UrlParams"
}
export declare enum VideoFieldName {
    DurationSecs = "DurationSecs",
    URI = "Uri"
}
export declare enum ItemAttributesSelectionEnum {
    AllAttributes = "AllAttributes"
}
export interface ItemRemove {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    item: Item;
    user_info: UserInfo;
}
export interface ItemsImpression {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    items: ItemDetails[];
    on_screen: boolean;
    page_categories?: string[] | null;
    user_info: UserInfo;
}
export interface ItemsView {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    items: ItemDetails[];
    on_screen: boolean;
    page_categories?: string[] | null;
    user_info: UserInfo;
}
export interface ItemUpsert {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    item_details: ItemDetails;
    user_info: UserInfo;
}
export interface ListView {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    items: ItemDetails[];
    list_id: string;
    user_info: UserInfo;
}
export interface OfflineRecommendationsRemove {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    name: OfflineRecommendationsTypeClass | OfflineRecommendationsTypeEnum;
    user_info: UserInfo;
}
export interface OfflineRecommendationsTypeClass {
    OtherSimilarity: string;
}
export declare enum OfflineRecommendationsTypeEnum {
    AttributesSimilarity = "AttributesSimilarity",
    ImageSimilarity = "ImageSimilarity",
    TextSimilarity = "TextSimilarity"
}
export interface OfflineRecommendationsUpsert {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    matrix: {
        [key: string]: {
            [key: string]: number;
        };
    };
    name: OfflineRecommendationsTypeClass | OfflineRecommendationsTypeEnum;
    user_info: UserInfo;
}
export interface OtherInteraction {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    interaction_name: string;
    item: ItemDetails;
    user_info: UserInfo;
}
export interface PageVisit {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    user_info: UserInfo;
}
export interface PlacementRemove {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    name: string;
    user_info: UserInfo;
}
/**
 * Json safe version of PlacementStatistics, unfortunately serde_with doesn't work because
 * of conflicts with JsonSchema
 */
export interface PlacementStatisticsJSONReady {
    loading_times_microseconds: {
        [key: string]: LIFOVecForUint128;
    };
    placements_statistics: {
        [key: string]: Array<Array<StrategyEnum | GenericStrategiesObject>>;
    };
}
export interface LIFOVecForUint128 {
    base: number[];
    capacity: number;
}
export declare enum StrategyEnum {
    Unknown = "Unknown"
}
/**
 * Pre-defined strategies
 *
 * Build your custom strategies
 *
 * Similar description, image or other defined by you
 */
export interface GenericStrategiesObject {
    Generic?: GenericStrategy;
    StrategyBuilder?: string;
    Similarities?: OfflineRecommendationsTypeClass | OfflineRecommendationsTypeEnum;
    n_impressions?: number;
    n_success?: number;
}
export declare enum GenericStrategy {
    AlsoAddedToCart = "AlsoAddedToCart",
    AlsoPurchased = "AlsoPurchased",
    AlsoSeen = "AlsoSeen",
    BestsellerCategory = "BestsellerCategory",
    BestsellerGlobal = "BestsellerGlobal",
    ContentMatching = "ContentMatching",
    MostPurchases = "MostPurchases",
    MostViews = "MostViews",
    SearchMatching = "SearchMatching",
    SeenInSession = "SeenInSession",
    SeenInSessionCoccurAddedToCart = "SeenInSessionCoccurAddedToCart",
    SeenInSessionCoccurSeen = "SeenInSessionCoccurSeen"
}
export interface PlacementUpsert {
    enabled?: boolean;
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    html_template?: null | string;
    item_type: ItemType;
    location?: Location | null;
    /**
     * Lowercase no spaces allowed
     */
    name: string;
    /**
     * How the strategies are selected
     */
    ranking: StrategySelectorStrategyChooseOne;
    strategies: WeightedGenericCandidateRec[];
    url_params?: {
        [key: string]: string;
    } | null;
    user_info: UserInfo;
}
/**
 * Choose location
 */
export declare enum Location {
    AddToCart = "AddToCart",
    CategoryPage = "CategoryPage",
    CheckoutPage = "CheckoutPage",
    Error404 = "Error404",
    HomePage = "HomePage",
    ItemPage = "ItemPage",
    OtherPage = "OtherPage",
    SearchPage = "SearchPage",
    UnknownPage = "UnknownPage"
}
/**
 * How the strategies are selected
 */
export declare enum StrategySelectorStrategyChooseOne {
    RankingModel = "RankingModel",
    ThompsonSampling = "ThompsonSampling",
    WeightedSample = "WeightedSample"
}
export interface WeightedGenericCandidateRec {
    strategy: StrategyGenericStrategies | StrategyEnum;
    weight?: number | null;
}
/**
 * Pre-defined strategies
 *
 * Build your custom strategies
 *
 * Similar description, image or other defined by you
 */
export interface StrategyGenericStrategies {
    Generic?: GenericStrategy;
    StrategyBuilder?: string;
    Similarities?: OfflineRecommendationsTypeClass | OfflineRecommendationsTypeEnum;
}
export interface PurchaseComplete {
    cart_id?: null | string;
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    items: ItemDetails[];
    purchase_transaction: PurchaseTransaction;
    user_info: UserInfo;
}
export interface RateItem {
    comment?: null | string;
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    item: ItemDetails;
    rating?: number | null;
    user_info: UserInfo;
}
export interface RecoACK {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    items: ItemDetailsRecoShow[];
    placement_config: PlacementConfig;
    user_info: UserInfo;
}
/**
 * Note that ItemDetailsRecoShow is already translated
 */
export interface ItemDetailsRecoShow {
    attributes: Attributes;
    item: Item;
    rec_id: string;
    score?: number | null;
    strategies_used?: Array<Array<StrategiesUsedGenericStrategies | number | StrategyEnum>> | null;
    strategy_selected: StrategyGenericStrategies | StrategyEnum;
}
/**
 * Pre-defined strategies
 *
 * Build your custom strategies
 *
 * Similar description, image or other defined by you
 */
export interface StrategiesUsedGenericStrategies {
    Generic?: GenericStrategy;
    StrategyBuilder?: string;
    Similarities?: OfflineRecommendationsTypeClass | OfflineRecommendationsTypeEnum;
}
export interface PlacementConfig {
    html_template?: null | string;
    item_attributes_selection?: ItemAttributesSelectionItemAttributesSelectionClass | ItemAttributesSelectionEnum | null;
    item_type: ItemType;
    location?: Location | null;
    name: string;
    parameters?: null | StrategyParametersValues;
}
export interface ItemAttributesSelectionItemAttributesSelectionClass {
    SelectedAttributes: ItemAttributesFieldNames[];
}
export interface StrategyParametersValues {
    additional_int_params?: {
        [key: string]: number;
    } | null;
    additional_str_params?: {
        [key: string]: string;
    } | null;
    category_id?: string[] | null;
    category_ids?: Array<string[]> | null;
    item?: null | Item;
    items?: Item[] | null;
    page_info?: null | PageInfo;
    search_info?: null | SearchInfo;
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
    additional_uri_params?: {
        [key: string]: string;
    } | null;
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    locale?: Locale | null;
    location: Location;
    n_items: number;
    placement_config: PlacementConfig;
    user_info: UserInfo;
}
export declare enum Locale {
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
    ZhTW = "zh_TW"
}
export interface RecoShow {
    additional_uri_params?: {
        [key: string]: string;
    } | null;
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    experiment_id?: null | string;
    items: ItemDetailsRecoShow[];
    placement_config: PlacementConfig;
    user_info: UserInfo;
}
export interface RemoveFromCart {
    cart_id?: null | string;
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    item: ItemDetails;
    user_info: UserInfo;
}
export interface RemoveFromList {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    items: ItemDetails[];
    list_id?: null | string;
    user_info: UserInfo;
}
export interface SearchItems {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    items: ItemDetails[];
    query: string;
    user_info: UserInfo;
}
export interface CartPageView {
    cart_id?: null | string;
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    items: ItemDetails[];
    user_info: UserInfo;
}
export interface SmartSearchRequest {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    filter: {
        [key: string]: string;
    };
    n_items: number;
    page: number;
    query: string;
    search_order: SearchOrder;
    user_info: UserInfo;
}
export declare enum SearchOrder {
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
    RelevanceDesc = "RelevanceDesc"
}
export interface SmartSearchShow {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    items: ItemDetailsRecoShow[];
    user_info: UserInfo;
}
export interface SortItems {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    sort_order?: SortOrder | null;
    user_info: UserInfo;
}
export declare enum SortOrder {
    NameAsc = "NameAsc",
    NameDesc = "NameDesc",
    PopularityAsc = "PopularityAsc",
    PopularityDesc = "PopularityDesc",
    PriceAsc = "PriceAsc",
    PriceDesc = "PriceDesc",
    RatingAsc = "RatingAsc",
    RatingDesc = "RatingDesc"
}
export interface StrategyParametersTypes {
    additional_int_params?: string[] | null;
    additional_str_params?: string[] | null;
    category_id: boolean;
    category_ids: boolean;
    item: boolean;
    items_info: boolean;
    page_info: boolean;
    search_info: boolean;
}
export interface UnknownEvent {
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    user_info: UserInfo;
}
export interface VideoInteraction {
    completed?: boolean | null;
    event_detail?: null | EventDetail;
    event_time?: number | null;
    event_type: EventType;
    items: ItemDetails[];
    user_info: UserInfo;
    video_item?: null | Item;
    watched_secs?: number | null;
}
export declare class Convert {
    static toAddToCart(json: any): AddToCart;
    static addToCartToJson(value: AddToCart): any;
    static toEventDetail(json: any): EventDetail;
    static eventDetailToJson(value: EventDetail): any;
    static toItemDetails(json: any): ItemDetails;
    static itemDetailsToJson(value: ItemDetails): any;
    static toAttributes(json: any): Attributes;
    static attributesToJson(value: Attributes): any;
    static toArticle(json: any): Article;
    static articleToJson(value: Article): any;
    static toCategories(json: any): Categories;
    static categoriesToJson(value: Categories): any;
    static toCosts(json: any): Costs;
    static costsToJson(value: Costs): any;
    static toDescription(json: any): Description;
    static descriptionToJson(value: Description): any;
    static toItemEcommerceSpec(json: any): ItemEcommerceSpec;
    static itemEcommerceSpecToJson(value: ItemEcommerceSpec): any;
    static toImages(json: any): Images;
    static imagesToJson(value: Images): any;
    static toImage(json: any): Image;
    static imageToJson(value: Image): any;
    static toExactPrice(json: any): ExactPrice;
    static exactPriceToJson(value: ExactPrice): any;
    static toStock(json: any): Stock;
    static stockToJson(value: Stock): any;
    static toTags(json: any): Tags;
    static tagsToJson(value: Tags): any;
    static toItemURL(json: any): ItemURL;
    static itemURLToJson(value: ItemURL): any;
    static toVideo(json: any): Video;
    static videoToJson(value: Video): any;
    static toUserInfo(json: any): UserInfo;
    static userInfoToJson(value: UserInfo): any;
    static toUserAdditionalInfo(json: any): UserAdditionalInfo;
    static userAdditionalInfoToJson(value: UserAdditionalInfo): any;
    static toAddToList(json: any): AddToList;
    static addToListToJson(value: AddToList): any;
    static toAPISettings(json: any): APISettings;
    static aPISettingsToJson(value: APISettings): any;
    static toCategoryPageView(json: any): CategoryPageView;
    static categoryPageViewToJson(value: CategoryPageView): any;
    static toChangeItemStockState(json: any): ChangeItemStockState;
    static changeItemStockStateToJson(value: ChangeItemStockState): any;
    static toItem(json: any): Item;
    static itemToJson(value: Item): any;
    static toCheckoutStart(json: any): CheckoutStart;
    static checkoutStartToJson(value: CheckoutStart): any;
    static toPurchaseTransaction(json: any): PurchaseTransaction;
    static purchaseTransactionToJson(value: PurchaseTransaction): any;
    static toTaxes(json: any): Taxes;
    static taxesToJson(value: Taxes): any;
    static toDetailItemView(json: any): DetailItemView;
    static detailItemViewToJson(value: DetailItemView): any;
    static toDetailItemViewAttributes(json: any): DetailItemViewAttributes;
    static detailItemViewAttributesToJson(value: DetailItemViewAttributes): any;
    static toHomePageView(json: any): HomePageView;
    static homePageViewToJson(value: HomePageView): any;
    static toImageInteraction(json: any): ImageInteraction;
    static imageInteractionToJson(value: ImageInteraction): any;
    static toItemAttributesSelectionClass(json: any): ItemAttributesSelectionClass;
    static itemAttributesSelectionClassToJson(value: ItemAttributesSelectionClass): any;
    static toItemAttributesFieldNames(json: any): ItemAttributesFieldNames;
    static itemAttributesFieldNamesToJson(value: ItemAttributesFieldNames): any;
    static toItemRemove(json: any): ItemRemove;
    static itemRemoveToJson(value: ItemRemove): any;
    static toItemsImpression(json: any): ItemsImpression;
    static itemsImpressionToJson(value: ItemsImpression): any;
    static toItemsView(json: any): ItemsView;
    static itemsViewToJson(value: ItemsView): any;
    static toItemUpsert(json: any): ItemUpsert;
    static itemUpsertToJson(value: ItemUpsert): any;
    static toListView(json: any): ListView;
    static listViewToJson(value: ListView): any;
    static toOfflineRecommendationsRemove(json: any): OfflineRecommendationsRemove;
    static offlineRecommendationsRemoveToJson(value: OfflineRecommendationsRemove): any;
    static toOfflineRecommendationsTypeClass(json: any): OfflineRecommendationsTypeClass;
    static offlineRecommendationsTypeClassToJson(value: OfflineRecommendationsTypeClass): any;
    static toOfflineRecommendationsUpsert(json: any): OfflineRecommendationsUpsert;
    static offlineRecommendationsUpsertToJson(value: OfflineRecommendationsUpsert): any;
    static toOtherInteraction(json: any): OtherInteraction;
    static otherInteractionToJson(value: OtherInteraction): any;
    static toPageVisit(json: any): PageVisit;
    static pageVisitToJson(value: PageVisit): any;
    static toPlacementRemove(json: any): PlacementRemove;
    static placementRemoveToJson(value: PlacementRemove): any;
    static toPlacementStatisticsJSONReady(json: any): PlacementStatisticsJSONReady;
    static placementStatisticsJSONReadyToJson(value: PlacementStatisticsJSONReady): any;
    static toLIFOVecForUint128(json: any): LIFOVecForUint128;
    static lIFOVecForUint128ToJson(value: LIFOVecForUint128): any;
    static toGenericStrategiesObject(json: any): GenericStrategiesObject;
    static genericStrategiesObjectToJson(value: GenericStrategiesObject): any;
    static toPlacementUpsert(json: any): PlacementUpsert;
    static placementUpsertToJson(value: PlacementUpsert): any;
    static toWeightedGenericCandidateRec(json: any): WeightedGenericCandidateRec;
    static weightedGenericCandidateRecToJson(value: WeightedGenericCandidateRec): any;
    static toStrategyGenericStrategies(json: any): StrategyGenericStrategies;
    static strategyGenericStrategiesToJson(value: StrategyGenericStrategies): any;
    static toPurchaseComplete(json: any): PurchaseComplete;
    static purchaseCompleteToJson(value: PurchaseComplete): any;
    static toRateItem(json: any): RateItem;
    static rateItemToJson(value: RateItem): any;
    static toRecoACK(json: any): RecoACK;
    static recoACKToJson(value: RecoACK): any;
    static toItemDetailsRecoShow(json: any): ItemDetailsRecoShow;
    static itemDetailsRecoShowToJson(value: ItemDetailsRecoShow): any;
    static toStrategiesUsedGenericStrategies(json: any): StrategiesUsedGenericStrategies;
    static strategiesUsedGenericStrategiesToJson(value: StrategiesUsedGenericStrategies): any;
    static toPlacementConfig(json: any): PlacementConfig;
    static placementConfigToJson(value: PlacementConfig): any;
    static toItemAttributesSelectionItemAttributesSelectionClass(json: any): ItemAttributesSelectionItemAttributesSelectionClass;
    static itemAttributesSelectionItemAttributesSelectionClassToJson(value: ItemAttributesSelectionItemAttributesSelectionClass): any;
    static toStrategyParametersValues(json: any): StrategyParametersValues;
    static strategyParametersValuesToJson(value: StrategyParametersValues): any;
    static toPageInfo(json: any): PageInfo;
    static pageInfoToJson(value: PageInfo): any;
    static toSearchInfo(json: any): SearchInfo;
    static searchInfoToJson(value: SearchInfo): any;
    static toRecoRequest(json: any): RecoRequest;
    static recoRequestToJson(value: RecoRequest): any;
    static toRecoShow(json: any): RecoShow;
    static recoShowToJson(value: RecoShow): any;
    static toRemoveFromCart(json: any): RemoveFromCart;
    static removeFromCartToJson(value: RemoveFromCart): any;
    static toRemoveFromList(json: any): RemoveFromList;
    static removeFromListToJson(value: RemoveFromList): any;
    static toSearchItems(json: any): SearchItems;
    static searchItemsToJson(value: SearchItems): any;
    static toCartPageView(json: any): CartPageView;
    static cartPageViewToJson(value: CartPageView): any;
    static toSmartSearchRequest(json: any): SmartSearchRequest;
    static smartSearchRequestToJson(value: SmartSearchRequest): any;
    static toSmartSearchShow(json: any): SmartSearchShow;
    static smartSearchShowToJson(value: SmartSearchShow): any;
    static toSortItems(json: any): SortItems;
    static sortItemsToJson(value: SortItems): any;
    static toStrategyParametersTypes(json: any): StrategyParametersTypes;
    static strategyParametersTypesToJson(value: StrategyParametersTypes): any;
    static toUnknownEvent(json: any): UnknownEvent;
    static unknownEventToJson(value: UnknownEvent): any;
    static toVideoInteraction(json: any): VideoInteraction;
    static videoInteractionToJson(value: VideoInteraction): any;
}
