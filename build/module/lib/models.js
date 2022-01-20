// To parse this data:
//
//   import { Convert, AddToCart, AddToList, APISettings, BuilderFn1, BuilderFn2, BuilderVariable, CategoryPageView, ChangeItemStockState, CheckoutStart, DetailItemView, HomePageView, ImageInteraction, ItemAttributesSelection, ItemRemove, ItemsImpression, ItemsView, ItemUpsert, ListView, OfflineRecommendationsRemove, OfflineRecommendationsUpsert, OtherInteraction, PageVisit, PlacementRemove, PlacementStatisticsJSONReady, PlacementUpsert, PurchaseComplete, RateItem, RecoACK, RecoRequest, RecoShow, RemoveFromCart, RemoveFromList, SearchItems, CartPageView, SmartSearchRequest, SmartSearchShow, SortItems, StrategyParametersTypes, UnknownEvent, VideoInteraction } from "./file";
//
//   const addToCart = Convert.toAddToCart(json);
//   const addToList = Convert.toAddToList(json);
//   const aPISettings = Convert.toAPISettings(json);
//   const builderFn1 = Convert.toBuilderFn1(json);
//   const builderFn2 = Convert.toBuilderFn2(json);
//   const builderVariable = Convert.toBuilderVariable(json);
//   const categoryPageView = Convert.toCategoryPageView(json);
//   const changeItemStockState = Convert.toChangeItemStockState(json);
//   const checkoutStart = Convert.toCheckoutStart(json);
//   const common = Convert.toCommon(json);
//   const detailItemView = Convert.toDetailItemView(json);
//   const homePageView = Convert.toHomePageView(json);
//   const imageInteraction = Convert.toImageInteraction(json);
//   const itemAttributesSelection = Convert.toItemAttributesSelection(json);
//   const itemRemove = Convert.toItemRemove(json);
//   const itemsImpression = Convert.toItemsImpression(json);
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
export var EventType;
(function (EventType) {
    EventType["AddToCart"] = "AddToCart";
    EventType["AddToList"] = "AddToList";
    EventType["CartPageView"] = "CartPageView";
    EventType["ChangeItemStockState"] = "ChangeItemStockState";
    EventType["CheckoutStart"] = "CheckoutStart";
    EventType["DetailItemView"] = "DetailItemView";
    EventType["HomePageView"] = "HomePageView";
    EventType["ImageInteraction"] = "ImageInteraction";
    EventType["ItemRemove"] = "ItemRemove";
    EventType["ItemUpsert"] = "ItemUpsert";
    EventType["ItemsView"] = "ItemsView";
    EventType["ListView"] = "ListView";
    EventType["OfflineRecommendationsRemove"] = "OfflineRecommendationsRemove";
    EventType["OfflineRecommendationsUpsert"] = "OfflineRecommendationsUpsert";
    EventType["OtherInteraction"] = "OtherInteraction";
    EventType["PageVisit"] = "PageVisit";
    EventType["PlacementRemove"] = "PlacementRemove";
    EventType["PlacementUpsert"] = "PlacementUpsert";
    EventType["PurchaseComplete"] = "PurchaseComplete";
    EventType["RateItem"] = "RateItem";
    EventType["RecoACK"] = "RecoAck";
    EventType["RecoRequest"] = "RecoRequest";
    EventType["RecoShow"] = "RecoShow";
    EventType["RemoveFromCart"] = "RemoveFromCart";
    EventType["RemoveFromList"] = "RemoveFromList";
    EventType["SearchItems"] = "SearchItems";
    EventType["SmartSearchRequest"] = "SmartSearchRequest";
    EventType["SmartSearchShow"] = "SmartSearchShow";
    EventType["SortItems"] = "SortItems";
    EventType["UnknownEvent"] = "UnknownEvent";
    EventType["VideoInteraction"] = "VideoInteraction";
})(EventType || (EventType = {}));
export var Currency;
(function (Currency) {
    Currency["AMD"] = "AMD";
    Currency["Aed"] = "AED";
    Currency["Afn"] = "AFN";
    Currency["All"] = "ALL";
    Currency["Ang"] = "ANG";
    Currency["Aoa"] = "AOA";
    Currency["Ars"] = "ARS";
    Currency["Aud"] = "AUD";
    Currency["Awg"] = "AWG";
    Currency["Azn"] = "AZN";
    Currency["BAM"] = "BAM";
    Currency["BSD"] = "BSD";
    Currency["Bbd"] = "BBD";
    Currency["Bdt"] = "BDT";
    Currency["Bgn"] = "BGN";
    Currency["Bhd"] = "BHD";
    Currency["Bif"] = "BIF";
    Currency["Bmd"] = "BMD";
    Currency["Bnd"] = "BND";
    Currency["Bob"] = "BOB";
    Currency["Bov"] = "BOV";
    Currency["Brl"] = "BRL";
    Currency["Btn"] = "BTN";
    Currency["Bwp"] = "BWP";
    Currency["Byn"] = "BYN";
    Currency["Bzd"] = "BZD";
    Currency["CAD"] = "CAD";
    Currency["CRC"] = "CRC";
    Currency["Cdf"] = "CDF";
    Currency["Che"] = "CHE";
    Currency["Chf"] = "CHF";
    Currency["Chw"] = "CHW";
    Currency["Clf"] = "CLF";
    Currency["Clp"] = "CLP";
    Currency["Cny"] = "CNY";
    Currency["Cop"] = "COP";
    Currency["Cou"] = "COU";
    Currency["Cuc"] = "CUC";
    Currency["Cup"] = "CUP";
    Currency["Cve"] = "CVE";
    Currency["Czk"] = "CZK";
    Currency["Djf"] = "DJF";
    Currency["Dkk"] = "DKK";
    Currency["Dop"] = "DOP";
    Currency["Dzd"] = "DZD";
    Currency["EGP"] = "EGP";
    Currency["Ern"] = "ERN";
    Currency["Etb"] = "ETB";
    Currency["Eur"] = "EUR";
    Currency["Fjd"] = "FJD";
    Currency["Fkp"] = "FKP";
    Currency["Gbp"] = "GBP";
    Currency["Gel"] = "GEL";
    Currency["Ghs"] = "GHS";
    Currency["Gip"] = "GIP";
    Currency["Gmd"] = "GMD";
    Currency["Gnf"] = "GNF";
    Currency["Gtq"] = "GTQ";
    Currency["Gyd"] = "GYD";
    Currency["Hkd"] = "HKD";
    Currency["Hnl"] = "HNL";
    Currency["Hrk"] = "HRK";
    Currency["Htg"] = "HTG";
    Currency["Huf"] = "HUF";
    Currency["Idr"] = "IDR";
    Currency["Ils"] = "ILS";
    Currency["Inr"] = "INR";
    Currency["Iqd"] = "IQD";
    Currency["Irr"] = "IRR";
    Currency["Isk"] = "ISK";
    Currency["Jmd"] = "JMD";
    Currency["Jod"] = "JOD";
    Currency["Jpy"] = "JPY";
    Currency["Kes"] = "KES";
    Currency["Kgs"] = "KGS";
    Currency["Khr"] = "KHR";
    Currency["Kmf"] = "KMF";
    Currency["Kpw"] = "KPW";
    Currency["Krw"] = "KRW";
    Currency["Kwd"] = "KWD";
    Currency["Kyd"] = "KYD";
    Currency["Kzt"] = "KZT";
    Currency["Lak"] = "LAK";
    Currency["Lbp"] = "LBP";
    Currency["Lkr"] = "LKR";
    Currency["Lrd"] = "LRD";
    Currency["Lsl"] = "LSL";
    Currency["Lyd"] = "LYD";
    Currency["Mad"] = "MAD";
    Currency["Mdl"] = "MDL";
    Currency["Mga"] = "MGA";
    Currency["Mkd"] = "MKD";
    Currency["Mmk"] = "MMK";
    Currency["Mnt"] = "MNT";
    Currency["Mop"] = "MOP";
    Currency["Mru"] = "MRU";
    Currency["Mur"] = "MUR";
    Currency["Mvr"] = "MVR";
    Currency["Mwk"] = "MWK";
    Currency["Mxn"] = "MXN";
    Currency["Mxv"] = "MXV";
    Currency["Myr"] = "MYR";
    Currency["Mzn"] = "MZN";
    Currency["NIO"] = "NIO";
    Currency["Nad"] = "NAD";
    Currency["Ngn"] = "NGN";
    Currency["Nok"] = "NOK";
    Currency["Npr"] = "NPR";
    Currency["Nzd"] = "NZD";
    Currency["OMR"] = "OMR";
    Currency["PHP"] = "PHP";
    Currency["Pab"] = "PAB";
    Currency["Pen"] = "PEN";
    Currency["Pgk"] = "PGK";
    Currency["Pkr"] = "PKR";
    Currency["Pln"] = "PLN";
    Currency["Pyg"] = "PYG";
    Currency["Qar"] = "QAR";
    Currency["Ron"] = "RON";
    Currency["Rsd"] = "RSD";
    Currency["Rub"] = "RUB";
    Currency["Rwf"] = "RWF";
    Currency["SSP"] = "SSP";
    Currency["SVC"] = "SVC";
    Currency["Sar"] = "SAR";
    Currency["Sbd"] = "SBD";
    Currency["Scr"] = "SCR";
    Currency["Sdg"] = "SDG";
    Currency["Sek"] = "SEK";
    Currency["Sgd"] = "SGD";
    Currency["Shp"] = "SHP";
    Currency["Sll"] = "SLL";
    Currency["Sos"] = "SOS";
    Currency["Srd"] = "SRD";
    Currency["Stn"] = "STN";
    Currency["Syp"] = "SYP";
    Currency["Szl"] = "SZL";
    Currency["Thb"] = "THB";
    Currency["Tjs"] = "TJS";
    Currency["Tmt"] = "TMT";
    Currency["Tnd"] = "TND";
    Currency["Top"] = "TOP";
    Currency["Try"] = "TRY";
    Currency["Ttd"] = "TTD";
    Currency["Twd"] = "TWD";
    Currency["Tzs"] = "TZS";
    Currency["Uah"] = "UAH";
    Currency["Ugx"] = "UGX";
    Currency["Unk"] = "UNK";
    Currency["Usd"] = "USD";
    Currency["Usn"] = "USN";
    Currency["Uyi"] = "UYI";
    Currency["Uyu"] = "UYU";
    Currency["Uzs"] = "UZS";
    Currency["Vef"] = "VEF";
    Currency["Vnd"] = "VND";
    Currency["Vuv"] = "VUV";
    Currency["Wst"] = "WST";
    Currency["Xaf"] = "XAF";
    Currency["Xcd"] = "XCD";
    Currency["Xdr"] = "XDR";
    Currency["Xof"] = "XOF";
    Currency["Xpf"] = "XPF";
    Currency["Xsu"] = "XSU";
    Currency["Xua"] = "XUA";
    Currency["Yer"] = "YER";
    Currency["Zar"] = "ZAR";
    Currency["Zmw"] = "ZMW";
    Currency["Zwl"] = "ZWL";
})(Currency || (Currency = {}));
export var StockState;
(function (StockState) {
    StockState["BackOrder"] = "BackOrder";
    StockState["InStock"] = "InStock";
    StockState["OutOfStock"] = "OutOfStock";
    StockState["PreOrder"] = "PreOrder";
})(StockState || (StockState = {}));
export var ItemType;
(function (ItemType) {
    ItemType["Article"] = "Article";
    ItemType["Ecommerce"] = "Ecommerce";
    ItemType["Unknown"] = "Unknown";
    ItemType["Video"] = "Video";
})(ItemType || (ItemType = {}));
export var Gender;
(function (Gender) {
    Gender["Female"] = "Female";
    Gender["Male"] = "Male";
    Gender["Other"] = "Other";
})(Gender || (Gender = {}));
export var PrivacySetting;
(function (PrivacySetting) {
    PrivacySetting["NonPersonalized"] = "NonPersonalized";
    PrivacySetting["Personalized"] = "Personalized";
})(PrivacySetting || (PrivacySetting = {}));
export var BuilderFn1;
(function (BuilderFn1) {
    BuilderFn1["ArgMax"] = "ArgMax";
    BuilderFn1["ArgMin"] = "ArgMin";
    BuilderFn1["ConvertToPlacementItemType"] = "ConvertToPlacementItemType";
    BuilderFn1["Invert"] = "Invert";
    BuilderFn1["Ranking"] = "Ranking";
})(BuilderFn1 || (BuilderFn1 = {}));
export var BuilderFn2;
(function (BuilderFn2) {
    BuilderFn2["Expand"] = "Expand";
    BuilderFn2["Highest"] = "Highest";
    BuilderFn2["Intersect"] = "Intersect";
    BuilderFn2["Less"] = "Less";
    BuilderFn2["LessEq"] = "LessEq";
    BuilderFn2["Lookup"] = "Lookup";
    BuilderFn2["Lowest"] = "Lowest";
    BuilderFn2["More"] = "More";
    BuilderFn2["MoreEq"] = "MoreEq";
    BuilderFn2["Remove"] = "Remove";
    BuilderFn2["Union"] = "Union";
})(BuilderFn2 || (BuilderFn2 = {}));
export var BuilderVariable;
(function (BuilderVariable) {
    BuilderVariable["AllItems"] = "AllItems";
    BuilderVariable["ItemCurrent"] = "ItemCurrent";
    BuilderVariable["ItemCurrentType"] = "ItemCurrentType";
    BuilderVariable["ItemsAlsoAddedToCartInSession"] = "ItemsAlsoAddedToCartInSession";
    BuilderVariable["ItemsAlsoBoughtInSession"] = "ItemsAlsoBoughtInSession";
    BuilderVariable["ItemsAlsoSeenInSession"] = "ItemsAlsoSeenInSession";
    BuilderVariable["ItemsInCart"] = "ItemsInCart";
    BuilderVariable["ItemsRecommendedSessionCounter"] = "ItemsRecommendedSessionCounter";
    BuilderVariable["ItemsSeenInSession"] = "ItemsSeenInSession";
    BuilderVariable["ItemsVisitedCounter"] = "ItemsVisitedCounter";
})(BuilderVariable || (BuilderVariable = {}));
export var ArticleFieldName;
(function (ArticleFieldName) {
    ArticleFieldName["Author"] = "Author";
    ArticleFieldName["Snippet"] = "Snippet";
    ArticleFieldName["TimestampAdded"] = "TimestampAdded";
})(ArticleFieldName || (ArticleFieldName = {}));
export var CategoriesFieldName;
(function (CategoriesFieldName) {
    CategoriesFieldName["Categories"] = "Categories";
})(CategoriesFieldName || (CategoriesFieldName = {}));
export var CostsFieldName;
(function (CostsFieldName) {
    CostsFieldName["Costs"] = "Costs";
})(CostsFieldName || (CostsFieldName = {}));
export var DescriptionFieldName;
(function (DescriptionFieldName) {
    DescriptionFieldName["Content"] = "Content";
    DescriptionFieldName["LanguageCode"] = "LanguageCode";
    DescriptionFieldName["Title"] = "Title";
})(DescriptionFieldName || (DescriptionFieldName = {}));
export var ItemEcommerceSpecFieldName;
(function (ItemEcommerceSpecFieldName) {
    ItemEcommerceSpecFieldName["ItemCode"] = "ItemCode";
    ItemEcommerceSpecFieldName["ItemGroupID"] = "ItemGroupId";
})(ItemEcommerceSpecFieldName || (ItemEcommerceSpecFieldName = {}));
export var ImagesFieldName;
(function (ImagesFieldName) {
    ImagesFieldName["Images"] = "Images";
})(ImagesFieldName || (ImagesFieldName = {}));
export var ExactPriceFieldName;
(function (ExactPriceFieldName) {
    ExactPriceFieldName["CurrencyCode"] = "CurrencyCode";
    ExactPriceFieldName["DisplayPrice"] = "DisplayPrice";
    ExactPriceFieldName["OriginalPrice"] = "OriginalPrice";
})(ExactPriceFieldName || (ExactPriceFieldName = {}));
export var StockFieldName;
(function (StockFieldName) {
    StockFieldName["AvailableQuantity"] = "AvailableQuantity";
    StockFieldName["Quantity"] = "Quantity";
    StockFieldName["StockState"] = "StockState";
})(StockFieldName || (StockFieldName = {}));
export var TagsFieldName;
(function (TagsFieldName) {
    TagsFieldName["Tags"] = "Tags";
})(TagsFieldName || (TagsFieldName = {}));
export var ItemURLFieldName;
(function (ItemURLFieldName) {
    ItemURLFieldName["CanonicalURI"] = "CanonicalUri";
    ItemURLFieldName["CanonicalURIWithParams"] = "CanonicalUriWithParams";
    ItemURLFieldName["URLParams"] = "UrlParams";
})(ItemURLFieldName || (ItemURLFieldName = {}));
export var VideoFieldName;
(function (VideoFieldName) {
    VideoFieldName["DurationSecs"] = "DurationSecs";
    VideoFieldName["URI"] = "Uri";
})(VideoFieldName || (VideoFieldName = {}));
export var ItemAttributesSelectionEnum;
(function (ItemAttributesSelectionEnum) {
    ItemAttributesSelectionEnum["AllAttributes"] = "AllAttributes";
})(ItemAttributesSelectionEnum || (ItemAttributesSelectionEnum = {}));
export var OfflineRecommendationsTypeEnum;
(function (OfflineRecommendationsTypeEnum) {
    OfflineRecommendationsTypeEnum["AttributesSimilarity"] = "AttributesSimilarity";
    OfflineRecommendationsTypeEnum["ImageSimilarity"] = "ImageSimilarity";
    OfflineRecommendationsTypeEnum["TextSimilarity"] = "TextSimilarity";
})(OfflineRecommendationsTypeEnum || (OfflineRecommendationsTypeEnum = {}));
export var StrategyEnum;
(function (StrategyEnum) {
    StrategyEnum["Unknown"] = "Unknown";
})(StrategyEnum || (StrategyEnum = {}));
export var GenericStrategy;
(function (GenericStrategy) {
    GenericStrategy["AlsoAddedToCart"] = "AlsoAddedToCart";
    GenericStrategy["AlsoPurchased"] = "AlsoPurchased";
    GenericStrategy["AlsoSeen"] = "AlsoSeen";
    GenericStrategy["BestsellerCategory"] = "BestsellerCategory";
    GenericStrategy["BestsellerGlobal"] = "BestsellerGlobal";
    GenericStrategy["ContentMatching"] = "ContentMatching";
    GenericStrategy["MostPurchases"] = "MostPurchases";
    GenericStrategy["MostViews"] = "MostViews";
    GenericStrategy["SearchMatching"] = "SearchMatching";
    GenericStrategy["SeenInSession"] = "SeenInSession";
    GenericStrategy["SeenInSessionCoccurAddedToCart"] = "SeenInSessionCoccurAddedToCart";
    GenericStrategy["SeenInSessionCoccurSeen"] = "SeenInSessionCoccurSeen";
})(GenericStrategy || (GenericStrategy = {}));
/**
 * Choose location
 */
export var Location;
(function (Location) {
    Location["AddToCart"] = "AddToCart";
    Location["CategoryPage"] = "CategoryPage";
    Location["CheckoutPage"] = "CheckoutPage";
    Location["Error404"] = "Error404";
    Location["HomePage"] = "HomePage";
    Location["ItemPage"] = "ItemPage";
    Location["OtherPage"] = "OtherPage";
    Location["SearchPage"] = "SearchPage";
    Location["UnknownPage"] = "UnknownPage";
})(Location || (Location = {}));
/**
 * How the strategies are selected
 */
export var StrategySelectorStrategyChooseOne;
(function (StrategySelectorStrategyChooseOne) {
    StrategySelectorStrategyChooseOne["RankingModel"] = "RankingModel";
    StrategySelectorStrategyChooseOne["ThompsonSampling"] = "ThompsonSampling";
    StrategySelectorStrategyChooseOne["WeightedSample"] = "WeightedSample";
})(StrategySelectorStrategyChooseOne || (StrategySelectorStrategyChooseOne = {}));
export var Locale;
(function (Locale) {
    Locale["AFZA"] = "af_ZA";
    Locale["ArAR"] = "ar_AR";
    Locale["AsIN"] = "as_IN";
    Locale["AzAZ"] = "az_AZ";
    Locale["BeBY"] = "be_BY";
    Locale["BgBG"] = "bg_BG";
    Locale["BnIN"] = "bn_IN";
    Locale["BrFR"] = "br_FR";
    Locale["BsBA"] = "bs_BA";
    Locale["CAES"] = "ca_ES";
    Locale["CSCZ"] = "cs_CZ";
    Locale["CbIQ"] = "cb_IQ";
    Locale["CoFR"] = "co_FR";
    Locale["CxPH"] = "cx_PH";
    Locale["CyGB"] = "cy_GB";
    Locale["DaDK"] = "da_DK";
    Locale["DeDE"] = "de_DE";
    Locale["ElGR"] = "el_GR";
    Locale["EnGB"] = "en_GB";
    Locale["EnUD"] = "en_UD";
    Locale["EnUS"] = "en_US";
    Locale["EsES"] = "es_ES";
    Locale["EsLA"] = "es_LA";
    Locale["EtEE"] = "et_EE";
    Locale["EuES"] = "eu_ES";
    Locale["FaIR"] = "fa_IR";
    Locale["FfNG"] = "ff_NG";
    Locale["FiFI"] = "fi_FI";
    Locale["FoFO"] = "fo_FO";
    Locale["FrCA"] = "fr_CA";
    Locale["FrFR"] = "fr_FR";
    Locale["FyNL"] = "fy_NL";
    Locale["GaIE"] = "ga_IE";
    Locale["GlES"] = "gl_ES";
    Locale["GnPY"] = "gn_PY";
    Locale["GuIN"] = "gu_IN";
    Locale["HaNG"] = "ha_NG";
    Locale["HeIL"] = "he_IL";
    Locale["HiIN"] = "hi_IN";
    Locale["HrHR"] = "hr_HR";
    Locale["HuHU"] = "hu_HU";
    Locale["HyAM"] = "hy_AM";
    Locale["IDID"] = "id_ID";
    Locale["IsIS"] = "is_IS";
    Locale["ItIT"] = "it_IT";
    Locale["JaJP"] = "ja_JP";
    Locale["JaKS"] = "ja_KS";
    Locale["JvID"] = "jv_ID";
    Locale["KMKH"] = "km_KH";
    Locale["KaGE"] = "ka_GE";
    Locale["KkKZ"] = "kk_KZ";
    Locale["KnIN"] = "kn_IN";
    Locale["KoKR"] = "ko_KR";
    Locale["KuTR"] = "ku_TR";
    Locale["LVLV"] = "lv_LV";
    Locale["LtLT"] = "lt_LT";
    Locale["MSMY"] = "ms_MY";
    Locale["MTMT"] = "mt_MT";
    Locale["MgMG"] = "mg_MG";
    Locale["MkMK"] = "mk_MK";
    Locale["MlIN"] = "ml_IN";
    Locale["MnMN"] = "mn_MN";
    Locale["MrIN"] = "mr_IN";
    Locale["MyMM"] = "my_MM";
    Locale["NbNO"] = "nb_NO";
    Locale["NeNP"] = "ne_NP";
    Locale["NlBE"] = "nl_BE";
    Locale["NlNL"] = "nl_NL";
    Locale["NnNO"] = "nn_NO";
    Locale["OrIN"] = "or_IN";
    Locale["PSAF"] = "ps_AF";
    Locale["PaIN"] = "pa_IN";
    Locale["PlPL"] = "pl_PL";
    Locale["PtBR"] = "pt_BR";
    Locale["PtPT"] = "pt_PT";
    Locale["QzMM"] = "qz_MM";
    Locale["RoRO"] = "ro_RO";
    Locale["RuRU"] = "ru_RU";
    Locale["RwRW"] = "rw_RW";
    Locale["ScIT"] = "sc_IT";
    Locale["SiLK"] = "si_LK";
    Locale["SkSK"] = "sk_SK";
    Locale["SlSI"] = "sl_SI";
    Locale["SoSO"] = "so_SO";
    Locale["SqAL"] = "sq_AL";
    Locale["SrRS"] = "sr_RS";
    Locale["SvSE"] = "sv_SE";
    Locale["SwKE"] = "sw_KE";
    Locale["SzPL"] = "sz_PL";
    Locale["TaIN"] = "ta_IN";
    Locale["TeIN"] = "te_IN";
    Locale["TgTJ"] = "tg_TJ";
    Locale["ThTH"] = "th_TH";
    Locale["TlPH"] = "tl_PH";
    Locale["TrTR"] = "tr_TR";
    Locale["TzMA"] = "tz_MA";
    Locale["UkUA"] = "uk_UA";
    Locale["UrPK"] = "ur_PK";
    Locale["UzUZ"] = "uz_UZ";
    Locale["ViVN"] = "vi_VN";
    Locale["ZhCN"] = "zh_CN";
    Locale["ZhHK"] = "zh_HK";
    Locale["ZhTW"] = "zh_TW";
})(Locale || (Locale = {}));
export var SearchOrder;
(function (SearchOrder) {
    SearchOrder["Newest"] = "Newest";
    SearchOrder["Oldest"] = "Oldest";
    SearchOrder["Personalized"] = "Personalized";
    SearchOrder["PopularityAsc"] = "PopularityAsc";
    SearchOrder["PopularityDesc"] = "PopularityDesc";
    SearchOrder["PriceAsc"] = "PriceAsc";
    SearchOrder["PriceDesc"] = "PriceDesc";
    SearchOrder["RatingAsc"] = "RatingAsc";
    SearchOrder["RatingDesc"] = "RatingDesc";
    SearchOrder["RelevanceAsc"] = "RelevanceAsc";
    SearchOrder["RelevanceDesc"] = "RelevanceDesc";
})(SearchOrder || (SearchOrder = {}));
export var SortOrder;
(function (SortOrder) {
    SortOrder["NameAsc"] = "NameAsc";
    SortOrder["NameDesc"] = "NameDesc";
    SortOrder["PopularityAsc"] = "PopularityAsc";
    SortOrder["PopularityDesc"] = "PopularityDesc";
    SortOrder["PriceAsc"] = "PriceAsc";
    SortOrder["PriceDesc"] = "PriceDesc";
    SortOrder["RatingAsc"] = "RatingAsc";
    SortOrder["RatingDesc"] = "RatingDesc";
})(SortOrder || (SortOrder = {}));
// Converts JSON types to/from your types
// and asserts the results at runtime
export class Convert {
    static toAddToCart(json) {
        return cast(json, r("AddToCart"));
    }
    static addToCartToJson(value) {
        return uncast(value, r("AddToCart"));
    }
    static toEventDetail(json) {
        return cast(json, r("EventDetail"));
    }
    static eventDetailToJson(value) {
        return uncast(value, r("EventDetail"));
    }
    static toItemDetails(json) {
        return cast(json, r("ItemDetails"));
    }
    static itemDetailsToJson(value) {
        return uncast(value, r("ItemDetails"));
    }
    static toAttributes(json) {
        return cast(json, r("Attributes"));
    }
    static attributesToJson(value) {
        return uncast(value, r("Attributes"));
    }
    static toArticle(json) {
        return cast(json, r("Article"));
    }
    static articleToJson(value) {
        return uncast(value, r("Article"));
    }
    static toCategories(json) {
        return cast(json, r("Categories"));
    }
    static categoriesToJson(value) {
        return uncast(value, r("Categories"));
    }
    static toCosts(json) {
        return cast(json, r("Costs"));
    }
    static costsToJson(value) {
        return uncast(value, r("Costs"));
    }
    static toDescription(json) {
        return cast(json, r("Description"));
    }
    static descriptionToJson(value) {
        return uncast(value, r("Description"));
    }
    static toItemEcommerceSpec(json) {
        return cast(json, r("ItemEcommerceSpec"));
    }
    static itemEcommerceSpecToJson(value) {
        return uncast(value, r("ItemEcommerceSpec"));
    }
    static toImages(json) {
        return cast(json, r("Images"));
    }
    static imagesToJson(value) {
        return uncast(value, r("Images"));
    }
    static toImage(json) {
        return cast(json, r("Image"));
    }
    static imageToJson(value) {
        return uncast(value, r("Image"));
    }
    static toExactPrice(json) {
        return cast(json, r("ExactPrice"));
    }
    static exactPriceToJson(value) {
        return uncast(value, r("ExactPrice"));
    }
    static toStock(json) {
        return cast(json, r("Stock"));
    }
    static stockToJson(value) {
        return uncast(value, r("Stock"));
    }
    static toTags(json) {
        return cast(json, r("Tags"));
    }
    static tagsToJson(value) {
        return uncast(value, r("Tags"));
    }
    static toItemURL(json) {
        return cast(json, r("ItemURL"));
    }
    static itemURLToJson(value) {
        return uncast(value, r("ItemURL"));
    }
    static toVideo(json) {
        return cast(json, r("Video"));
    }
    static videoToJson(value) {
        return uncast(value, r("Video"));
    }
    static toUserInfo(json) {
        return cast(json, r("UserInfo"));
    }
    static userInfoToJson(value) {
        return uncast(value, r("UserInfo"));
    }
    static toUserAdditionalInfo(json) {
        return cast(json, r("UserAdditionalInfo"));
    }
    static userAdditionalInfoToJson(value) {
        return uncast(value, r("UserAdditionalInfo"));
    }
    static toAddToList(json) {
        return cast(json, r("AddToList"));
    }
    static addToListToJson(value) {
        return uncast(value, r("AddToList"));
    }
    static toAPISettings(json) {
        return cast(json, r("APISettings"));
    }
    static aPISettingsToJson(value) {
        return uncast(value, r("APISettings"));
    }
    static toCategoryPageView(json) {
        return cast(json, r("CategoryPageView"));
    }
    static categoryPageViewToJson(value) {
        return uncast(value, r("CategoryPageView"));
    }
    static toChangeItemStockState(json) {
        return cast(json, r("ChangeItemStockState"));
    }
    static changeItemStockStateToJson(value) {
        return uncast(value, r("ChangeItemStockState"));
    }
    static toItem(json) {
        return cast(json, r("Item"));
    }
    static itemToJson(value) {
        return uncast(value, r("Item"));
    }
    static toCheckoutStart(json) {
        return cast(json, r("CheckoutStart"));
    }
    static checkoutStartToJson(value) {
        return uncast(value, r("CheckoutStart"));
    }
    static toPurchaseTransaction(json) {
        return cast(json, r("PurchaseTransaction"));
    }
    static purchaseTransactionToJson(value) {
        return uncast(value, r("PurchaseTransaction"));
    }
    static toTaxes(json) {
        return cast(json, r("Taxes"));
    }
    static taxesToJson(value) {
        return uncast(value, r("Taxes"));
    }
    static toDetailItemView(json) {
        return cast(json, r("DetailItemView"));
    }
    static detailItemViewToJson(value) {
        return uncast(value, r("DetailItemView"));
    }
    static toDetailItemViewAttributes(json) {
        return cast(json, r("DetailItemViewAttributes"));
    }
    static detailItemViewAttributesToJson(value) {
        return uncast(value, r("DetailItemViewAttributes"));
    }
    static toHomePageView(json) {
        return cast(json, r("HomePageView"));
    }
    static homePageViewToJson(value) {
        return uncast(value, r("HomePageView"));
    }
    static toImageInteraction(json) {
        return cast(json, r("ImageInteraction"));
    }
    static imageInteractionToJson(value) {
        return uncast(value, r("ImageInteraction"));
    }
    static toItemAttributesSelectionClass(json) {
        return cast(json, r("ItemAttributesSelectionClass"));
    }
    static itemAttributesSelectionClassToJson(value) {
        return uncast(value, r("ItemAttributesSelectionClass"));
    }
    static toItemAttributesFieldNames(json) {
        return cast(json, r("ItemAttributesFieldNames"));
    }
    static itemAttributesFieldNamesToJson(value) {
        return uncast(value, r("ItemAttributesFieldNames"));
    }
    static toItemRemove(json) {
        return cast(json, r("ItemRemove"));
    }
    static itemRemoveToJson(value) {
        return uncast(value, r("ItemRemove"));
    }
    static toItemsImpression(json) {
        return cast(json, r("ItemsImpression"));
    }
    static itemsImpressionToJson(value) {
        return uncast(value, r("ItemsImpression"));
    }
    static toItemsView(json) {
        return cast(json, r("ItemsView"));
    }
    static itemsViewToJson(value) {
        return uncast(value, r("ItemsView"));
    }
    static toItemUpsert(json) {
        return cast(json, r("ItemUpsert"));
    }
    static itemUpsertToJson(value) {
        return uncast(value, r("ItemUpsert"));
    }
    static toListView(json) {
        return cast(json, r("ListView"));
    }
    static listViewToJson(value) {
        return uncast(value, r("ListView"));
    }
    static toOfflineRecommendationsRemove(json) {
        return cast(json, r("OfflineRecommendationsRemove"));
    }
    static offlineRecommendationsRemoveToJson(value) {
        return uncast(value, r("OfflineRecommendationsRemove"));
    }
    static toOfflineRecommendationsTypeClass(json) {
        return cast(json, r("OfflineRecommendationsTypeClass"));
    }
    static offlineRecommendationsTypeClassToJson(value) {
        return uncast(value, r("OfflineRecommendationsTypeClass"));
    }
    static toOfflineRecommendationsUpsert(json) {
        return cast(json, r("OfflineRecommendationsUpsert"));
    }
    static offlineRecommendationsUpsertToJson(value) {
        return uncast(value, r("OfflineRecommendationsUpsert"));
    }
    static toOtherInteraction(json) {
        return cast(json, r("OtherInteraction"));
    }
    static otherInteractionToJson(value) {
        return uncast(value, r("OtherInteraction"));
    }
    static toPageVisit(json) {
        return cast(json, r("PageVisit"));
    }
    static pageVisitToJson(value) {
        return uncast(value, r("PageVisit"));
    }
    static toPlacementRemove(json) {
        return cast(json, r("PlacementRemove"));
    }
    static placementRemoveToJson(value) {
        return uncast(value, r("PlacementRemove"));
    }
    static toPlacementStatisticsJSONReady(json) {
        return cast(json, r("PlacementStatisticsJSONReady"));
    }
    static placementStatisticsJSONReadyToJson(value) {
        return uncast(value, r("PlacementStatisticsJSONReady"));
    }
    static toLIFOVecForUint128(json) {
        return cast(json, r("LIFOVecForUint128"));
    }
    static lIFOVecForUint128ToJson(value) {
        return uncast(value, r("LIFOVecForUint128"));
    }
    static toGenericStrategiesObject(json) {
        return cast(json, r("GenericStrategiesObject"));
    }
    static genericStrategiesObjectToJson(value) {
        return uncast(value, r("GenericStrategiesObject"));
    }
    static toPlacementUpsert(json) {
        return cast(json, r("PlacementUpsert"));
    }
    static placementUpsertToJson(value) {
        return uncast(value, r("PlacementUpsert"));
    }
    static toWeightedGenericCandidateRec(json) {
        return cast(json, r("WeightedGenericCandidateRec"));
    }
    static weightedGenericCandidateRecToJson(value) {
        return uncast(value, r("WeightedGenericCandidateRec"));
    }
    static toStrategyGenericStrategies(json) {
        return cast(json, r("StrategyGenericStrategies"));
    }
    static strategyGenericStrategiesToJson(value) {
        return uncast(value, r("StrategyGenericStrategies"));
    }
    static toPurchaseComplete(json) {
        return cast(json, r("PurchaseComplete"));
    }
    static purchaseCompleteToJson(value) {
        return uncast(value, r("PurchaseComplete"));
    }
    static toRateItem(json) {
        return cast(json, r("RateItem"));
    }
    static rateItemToJson(value) {
        return uncast(value, r("RateItem"));
    }
    static toRecoACK(json) {
        return cast(json, r("RecoACK"));
    }
    static recoACKToJson(value) {
        return uncast(value, r("RecoACK"));
    }
    static toItemDetailsRecoShow(json) {
        return cast(json, r("ItemDetailsRecoShow"));
    }
    static itemDetailsRecoShowToJson(value) {
        return uncast(value, r("ItemDetailsRecoShow"));
    }
    static toStrategiesUsedGenericStrategies(json) {
        return cast(json, r("StrategiesUsedGenericStrategies"));
    }
    static strategiesUsedGenericStrategiesToJson(value) {
        return uncast(value, r("StrategiesUsedGenericStrategies"));
    }
    static toPlacementConfig(json) {
        return cast(json, r("PlacementConfig"));
    }
    static placementConfigToJson(value) {
        return uncast(value, r("PlacementConfig"));
    }
    static toItemAttributesSelectionItemAttributesSelectionClass(json) {
        return cast(json, r("ItemAttributesSelectionItemAttributesSelectionClass"));
    }
    static itemAttributesSelectionItemAttributesSelectionClassToJson(value) {
        return uncast(value, r("ItemAttributesSelectionItemAttributesSelectionClass"));
    }
    static toStrategyParametersValues(json) {
        return cast(json, r("StrategyParametersValues"));
    }
    static strategyParametersValuesToJson(value) {
        return uncast(value, r("StrategyParametersValues"));
    }
    static toPageInfo(json) {
        return cast(json, r("PageInfo"));
    }
    static pageInfoToJson(value) {
        return uncast(value, r("PageInfo"));
    }
    static toSearchInfo(json) {
        return cast(json, r("SearchInfo"));
    }
    static searchInfoToJson(value) {
        return uncast(value, r("SearchInfo"));
    }
    static toRecoRequest(json) {
        return cast(json, r("RecoRequest"));
    }
    static recoRequestToJson(value) {
        return uncast(value, r("RecoRequest"));
    }
    static toRecoShow(json) {
        return cast(json, r("RecoShow"));
    }
    static recoShowToJson(value) {
        return uncast(value, r("RecoShow"));
    }
    static toRemoveFromCart(json) {
        return cast(json, r("RemoveFromCart"));
    }
    static removeFromCartToJson(value) {
        return uncast(value, r("RemoveFromCart"));
    }
    static toRemoveFromList(json) {
        return cast(json, r("RemoveFromList"));
    }
    static removeFromListToJson(value) {
        return uncast(value, r("RemoveFromList"));
    }
    static toSearchItems(json) {
        return cast(json, r("SearchItems"));
    }
    static searchItemsToJson(value) {
        return uncast(value, r("SearchItems"));
    }
    static toCartPageView(json) {
        return cast(json, r("CartPageView"));
    }
    static cartPageViewToJson(value) {
        return uncast(value, r("CartPageView"));
    }
    static toSmartSearchRequest(json) {
        return cast(json, r("SmartSearchRequest"));
    }
    static smartSearchRequestToJson(value) {
        return uncast(value, r("SmartSearchRequest"));
    }
    static toSmartSearchShow(json) {
        return cast(json, r("SmartSearchShow"));
    }
    static smartSearchShowToJson(value) {
        return uncast(value, r("SmartSearchShow"));
    }
    static toSortItems(json) {
        return cast(json, r("SortItems"));
    }
    static sortItemsToJson(value) {
        return uncast(value, r("SortItems"));
    }
    static toStrategyParametersTypes(json) {
        return cast(json, r("StrategyParametersTypes"));
    }
    static strategyParametersTypesToJson(value) {
        return uncast(value, r("StrategyParametersTypes"));
    }
    static toUnknownEvent(json) {
        return cast(json, r("UnknownEvent"));
    }
    static unknownEventToJson(value) {
        return uncast(value, r("UnknownEvent"));
    }
    static toVideoInteraction(json) {
        return cast(json, r("VideoInteraction"));
    }
    static videoInteractionToJson(value) {
        return uncast(value, r("VideoInteraction"));
    }
}
function invalidValue(typ, val, key = '') {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}
function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}
function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}
function transform(val, typ, getProps, key = '') {
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val)
            return val;
        return invalidValue(typ, val, key);
    }
    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            }
            catch (_) { }
        }
        return invalidValue(typs, val);
    }
    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1)
            return val;
        return invalidValue(cases, val);
    }
    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val))
            return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }
    function transformDate(val) {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }
    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result = {};
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
    if (typ === "any")
        return val;
    if (typ === null) {
        if (val === null)
            return val;
        return invalidValue(typ, val);
    }
    if (typ === false)
        return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ))
        return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number")
        return transformDate(val);
    return transformPrimitive(typ, val);
}
function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}
function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}
function a(typ) {
    return { arrayItems: typ };
}
function u(...typs) {
    return { unionMembers: typs };
}
function o(props, additional) {
    return { props, additional };
}
function m(additional) {
    return { props: [], additional };
}
function r(name) {
    return { ref: name };
}
const typeMap = {
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
        { json: "item_id", js: "item_id", typ: "" },
        { json: "item_type", js: "item_type", typ: r("ItemType") },
    ], "any"),
    "Attributes": o([
        { json: "article", js: "article", typ: u(undefined, u(null, r("Article"))) },
        { json: "categories", js: "categories", typ: u(undefined, u(null, r("Categories"))) },
        { json: "costs", js: "costs", typ: u(undefined, u(null, r("Costs"))) },
        { json: "description", js: "description", typ: u(undefined, u(null, r("Description"))) },
        { json: "ecommerce", js: "ecommerce", typ: u(undefined, u(null, r("ItemEcommerceSpec"))) },
        { json: "images", js: "images", typ: u(undefined, u(null, r("Images"))) },
        { json: "price", js: "price", typ: u(undefined, u(null, r("ExactPrice"))) },
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
    "CategoryPageView": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "on_screen", js: "on_screen", typ: true },
        { json: "page_categories", js: "page_categories", typ: u(undefined, u(a(""), null)) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "ChangeItemStockState": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("Item") },
        { json: "stock_state", js: "stock_state", typ: r("StockState") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "Item": o([
        { json: "item_id", js: "item_id", typ: "" },
        { json: "item_type", js: "item_type", typ: r("ItemType") },
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
    "ItemsImpression": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "on_screen", js: "on_screen", typ: true },
        { json: "page_categories", js: "page_categories", typ: u(undefined, u(a(""), null)) },
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
        { json: "placements_statistics", js: "placements_statistics", typ: m(a(a(u(r("StrategyEnum"), r("GenericStrategiesObject"))))) },
    ], "any"),
    "LIFOVecForUint128": o([
        { json: "base", js: "base", typ: a(0) },
        { json: "capacity", js: "capacity", typ: 0 },
    ], "any"),
    "GenericStrategiesObject": o([
        { json: "Generic", js: "Generic", typ: u(undefined, r("GenericStrategy")) },
        { json: "StrategyBuilder", js: "StrategyBuilder", typ: u(undefined, "") },
        { json: "Similarities", js: "Similarities", typ: u(undefined, u(r("OfflineRecommendationsTypeClass"), r("OfflineRecommendationsTypeEnum"))) },
        { json: "n_impressions", js: "n_impressions", typ: u(undefined, 0) },
        { json: "n_success", js: "n_success", typ: u(undefined, 0) },
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
        { json: "strategy", js: "strategy", typ: u(r("StrategyGenericStrategies"), r("StrategyEnum")) },
        { json: "weight", js: "weight", typ: u(undefined, u(3.14, null)) },
    ], "any"),
    "StrategyGenericStrategies": o([
        { json: "Generic", js: "Generic", typ: u(undefined, r("GenericStrategy")) },
        { json: "StrategyBuilder", js: "StrategyBuilder", typ: u(undefined, "") },
        { json: "Similarities", js: "Similarities", typ: u(undefined, u(r("OfflineRecommendationsTypeClass"), r("OfflineRecommendationsTypeEnum"))) },
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
        { json: "strategies_used", js: "strategies_used", typ: u(undefined, u(a(a(u(r("StrategiesUsedGenericStrategies"), 3.14, r("StrategyEnum")))), null)) },
        { json: "strategy_selected", js: "strategy_selected", typ: u(r("StrategyGenericStrategies"), r("StrategyEnum")) },
    ], "any"),
    "StrategiesUsedGenericStrategies": o([
        { json: "Generic", js: "Generic", typ: u(undefined, r("GenericStrategy")) },
        { json: "StrategyBuilder", js: "StrategyBuilder", typ: u(undefined, "") },
        { json: "Similarities", js: "Similarities", typ: u(undefined, u(r("OfflineRecommendationsTypeClass"), r("OfflineRecommendationsTypeEnum"))) },
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
    "StockState": [
        "BackOrder",
        "InStock",
        "OutOfStock",
        "PreOrder",
    ],
    "ItemType": [
        "Article",
        "Ecommerce",
        "Unknown",
        "Video",
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
        "AlsoAddedToCart",
        "AlsoPurchased",
        "AlsoSeen",
        "BestsellerCategory",
        "BestsellerGlobal",
        "ContentMatching",
        "MostPurchases",
        "MostViews",
        "SearchMatching",
        "SeenInSession",
        "SeenInSessionCoccurAddedToCart",
        "SeenInSessionCoccurSeen",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCO0FBQ3RCLEVBQUU7QUFDRix5cUJBQXlxQjtBQUN6cUIsRUFBRTtBQUNGLGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQscURBQXFEO0FBQ3JELG1EQUFtRDtBQUNuRCxtREFBbUQ7QUFDbkQsNkRBQTZEO0FBQzdELCtEQUErRDtBQUMvRCx1RUFBdUU7QUFDdkUseURBQXlEO0FBQ3pELDJDQUEyQztBQUMzQywyREFBMkQ7QUFDM0QsdURBQXVEO0FBQ3ZELCtEQUErRDtBQUMvRCw2RUFBNkU7QUFDN0UsbURBQW1EO0FBQ25ELDZEQUE2RDtBQUM3RCxpREFBaUQ7QUFDakQsbURBQW1EO0FBQ25ELCtDQUErQztBQUMvQyx1RkFBdUY7QUFDdkYsdUZBQXVGO0FBQ3ZGLCtEQUErRDtBQUMvRCxpREFBaUQ7QUFDakQsNkRBQTZEO0FBQzdELHVGQUF1RjtBQUN2Riw2REFBNkQ7QUFDN0QsK0RBQStEO0FBQy9ELCtDQUErQztBQUMvQyw2Q0FBNkM7QUFDN0MscURBQXFEO0FBQ3JELCtDQUErQztBQUMvQywyREFBMkQ7QUFDM0QsMkRBQTJEO0FBQzNELHFEQUFxRDtBQUNyRCx1REFBdUQ7QUFDdkQsbUVBQW1FO0FBQ25FLDZEQUE2RDtBQUM3RCxpREFBaUQ7QUFDakQsNkVBQTZFO0FBQzdFLHVEQUF1RDtBQUN2RCwrREFBK0Q7QUFDL0QsRUFBRTtBQUNGLDBEQUEwRDtBQUMxRCwyREFBMkQ7QUFrQjNELE1BQU0sQ0FBTixJQUFZLFNBZ0NYO0FBaENELFdBQVksU0FBUztJQUNqQixvQ0FBdUIsQ0FBQTtJQUN2QixvQ0FBdUIsQ0FBQTtJQUN2QiwwQ0FBNkIsQ0FBQTtJQUM3QiwwREFBNkMsQ0FBQTtJQUM3Qyw0Q0FBK0IsQ0FBQTtJQUMvQiw4Q0FBaUMsQ0FBQTtJQUNqQywwQ0FBNkIsQ0FBQTtJQUM3QixrREFBcUMsQ0FBQTtJQUNyQyxzQ0FBeUIsQ0FBQTtJQUN6QixzQ0FBeUIsQ0FBQTtJQUN6QixvQ0FBdUIsQ0FBQTtJQUN2QixrQ0FBcUIsQ0FBQTtJQUNyQiwwRUFBNkQsQ0FBQTtJQUM3RCwwRUFBNkQsQ0FBQTtJQUM3RCxrREFBcUMsQ0FBQTtJQUNyQyxvQ0FBdUIsQ0FBQTtJQUN2QixnREFBbUMsQ0FBQTtJQUNuQyxnREFBbUMsQ0FBQTtJQUNuQyxrREFBcUMsQ0FBQTtJQUNyQyxrQ0FBcUIsQ0FBQTtJQUNyQixnQ0FBbUIsQ0FBQTtJQUNuQix3Q0FBMkIsQ0FBQTtJQUMzQixrQ0FBcUIsQ0FBQTtJQUNyQiw4Q0FBaUMsQ0FBQTtJQUNqQyw4Q0FBaUMsQ0FBQTtJQUNqQyx3Q0FBMkIsQ0FBQTtJQUMzQixzREFBeUMsQ0FBQTtJQUN6QyxnREFBbUMsQ0FBQTtJQUNuQyxvQ0FBdUIsQ0FBQTtJQUN2QiwwQ0FBNkIsQ0FBQTtJQUM3QixrREFBcUMsQ0FBQTtBQUN6QyxDQUFDLEVBaENXLFNBQVMsS0FBVCxTQUFTLFFBZ0NwQjtBQW1FRCxNQUFNLENBQU4sSUFBWSxRQTBLWDtBQTFLRCxXQUFZLFFBQVE7SUFDaEIsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFX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YyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENB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QUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQy9FLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUNoRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO0tBQ3RDLEVBQUUsS0FBSyxDQUFDO0lBQ1QsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNiLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNyRixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO1FBQzNDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7S0FDN0QsRUFBRSxLQUFLLENBQUM7SUFDVCxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ1osRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzVFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNyRixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDdEUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3hGLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzFGLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUN6RSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDM0UsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3RFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFF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QUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMxRixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDdkUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUM3RCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0tBQzdELEVBQUUsS0FBSyxDQUFDO0lBQ1QsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMxRixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDdkUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUM3RCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO1FBQ3JDLEVBQUUsSUFBSSxF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UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7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