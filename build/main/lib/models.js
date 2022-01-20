"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = exports.SortOrder = exports.SearchOrder = exports.Locale = exports.StrategySelectorStrategyChooseOne = exports.Location = exports.GenericStrategy = exports.StrategyEnum = exports.OfflineRecommendationsTypeEnum = exports.ItemAttributesSelectionEnum = exports.VideoFieldName = exports.ItemURLFieldName = exports.TagsFieldName = exports.StockFieldName = exports.ExactPriceFieldName = exports.ImagesFieldName = exports.ItemEcommerceSpecFieldName = exports.DescriptionFieldName = exports.CostsFieldName = exports.CategoriesFieldName = exports.ArticleFieldName = exports.BuilderVariable = exports.BuilderFn2 = exports.BuilderFn1 = exports.PrivacySetting = exports.Gender = exports.ItemType = exports.StockState = exports.Currency = exports.EventType = void 0;
var EventType;
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
})(EventType = exports.EventType || (exports.EventType = {}));
var Currency;
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
})(Currency = exports.Currency || (exports.Currency = {}));
var StockState;
(function (StockState) {
    StockState["BackOrder"] = "BackOrder";
    StockState["InStock"] = "InStock";
    StockState["OutOfStock"] = "OutOfStock";
    StockState["PreOrder"] = "PreOrder";
})(StockState = exports.StockState || (exports.StockState = {}));
var ItemType;
(function (ItemType) {
    ItemType["Article"] = "Article";
    ItemType["Ecommerce"] = "Ecommerce";
    ItemType["Unknown"] = "Unknown";
    ItemType["Video"] = "Video";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
var Gender;
(function (Gender) {
    Gender["Female"] = "Female";
    Gender["Male"] = "Male";
    Gender["Other"] = "Other";
})(Gender = exports.Gender || (exports.Gender = {}));
var PrivacySetting;
(function (PrivacySetting) {
    PrivacySetting["NonPersonalized"] = "NonPersonalized";
    PrivacySetting["Personalized"] = "Personalized";
})(PrivacySetting = exports.PrivacySetting || (exports.PrivacySetting = {}));
var BuilderFn1;
(function (BuilderFn1) {
    BuilderFn1["ArgMax"] = "ArgMax";
    BuilderFn1["ArgMin"] = "ArgMin";
    BuilderFn1["ConvertToPlacementItemType"] = "ConvertToPlacementItemType";
    BuilderFn1["Invert"] = "Invert";
    BuilderFn1["Ranking"] = "Ranking";
})(BuilderFn1 = exports.BuilderFn1 || (exports.BuilderFn1 = {}));
var BuilderFn2;
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
})(BuilderFn2 = exports.BuilderFn2 || (exports.BuilderFn2 = {}));
var BuilderVariable;
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
})(BuilderVariable = exports.BuilderVariable || (exports.BuilderVariable = {}));
var ArticleFieldName;
(function (ArticleFieldName) {
    ArticleFieldName["Author"] = "Author";
    ArticleFieldName["Snippet"] = "Snippet";
    ArticleFieldName["TimestampAdded"] = "TimestampAdded";
})(ArticleFieldName = exports.ArticleFieldName || (exports.ArticleFieldName = {}));
var CategoriesFieldName;
(function (CategoriesFieldName) {
    CategoriesFieldName["Categories"] = "Categories";
})(CategoriesFieldName = exports.CategoriesFieldName || (exports.CategoriesFieldName = {}));
var CostsFieldName;
(function (CostsFieldName) {
    CostsFieldName["Costs"] = "Costs";
})(CostsFieldName = exports.CostsFieldName || (exports.CostsFieldName = {}));
var DescriptionFieldName;
(function (DescriptionFieldName) {
    DescriptionFieldName["Content"] = "Content";
    DescriptionFieldName["LanguageCode"] = "LanguageCode";
    DescriptionFieldName["Title"] = "Title";
})(DescriptionFieldName = exports.DescriptionFieldName || (exports.DescriptionFieldName = {}));
var ItemEcommerceSpecFieldName;
(function (ItemEcommerceSpecFieldName) {
    ItemEcommerceSpecFieldName["ItemCode"] = "ItemCode";
    ItemEcommerceSpecFieldName["ItemGroupID"] = "ItemGroupId";
})(ItemEcommerceSpecFieldName = exports.ItemEcommerceSpecFieldName || (exports.ItemEcommerceSpecFieldName = {}));
var ImagesFieldName;
(function (ImagesFieldName) {
    ImagesFieldName["Images"] = "Images";
})(ImagesFieldName = exports.ImagesFieldName || (exports.ImagesFieldName = {}));
var ExactPriceFieldName;
(function (ExactPriceFieldName) {
    ExactPriceFieldName["CurrencyCode"] = "CurrencyCode";
    ExactPriceFieldName["DisplayPrice"] = "DisplayPrice";
    ExactPriceFieldName["OriginalPrice"] = "OriginalPrice";
})(ExactPriceFieldName = exports.ExactPriceFieldName || (exports.ExactPriceFieldName = {}));
var StockFieldName;
(function (StockFieldName) {
    StockFieldName["AvailableQuantity"] = "AvailableQuantity";
    StockFieldName["Quantity"] = "Quantity";
    StockFieldName["StockState"] = "StockState";
})(StockFieldName = exports.StockFieldName || (exports.StockFieldName = {}));
var TagsFieldName;
(function (TagsFieldName) {
    TagsFieldName["Tags"] = "Tags";
})(TagsFieldName = exports.TagsFieldName || (exports.TagsFieldName = {}));
var ItemURLFieldName;
(function (ItemURLFieldName) {
    ItemURLFieldName["CanonicalURI"] = "CanonicalUri";
    ItemURLFieldName["CanonicalURIWithParams"] = "CanonicalUriWithParams";
    ItemURLFieldName["URLParams"] = "UrlParams";
})(ItemURLFieldName = exports.ItemURLFieldName || (exports.ItemURLFieldName = {}));
var VideoFieldName;
(function (VideoFieldName) {
    VideoFieldName["DurationSecs"] = "DurationSecs";
    VideoFieldName["URI"] = "Uri";
})(VideoFieldName = exports.VideoFieldName || (exports.VideoFieldName = {}));
var ItemAttributesSelectionEnum;
(function (ItemAttributesSelectionEnum) {
    ItemAttributesSelectionEnum["AllAttributes"] = "AllAttributes";
})(ItemAttributesSelectionEnum = exports.ItemAttributesSelectionEnum || (exports.ItemAttributesSelectionEnum = {}));
var OfflineRecommendationsTypeEnum;
(function (OfflineRecommendationsTypeEnum) {
    OfflineRecommendationsTypeEnum["AttributesSimilarity"] = "AttributesSimilarity";
    OfflineRecommendationsTypeEnum["ImageSimilarity"] = "ImageSimilarity";
    OfflineRecommendationsTypeEnum["TextSimilarity"] = "TextSimilarity";
})(OfflineRecommendationsTypeEnum = exports.OfflineRecommendationsTypeEnum || (exports.OfflineRecommendationsTypeEnum = {}));
var StrategyEnum;
(function (StrategyEnum) {
    StrategyEnum["Unknown"] = "Unknown";
})(StrategyEnum = exports.StrategyEnum || (exports.StrategyEnum = {}));
var GenericStrategy;
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
})(GenericStrategy = exports.GenericStrategy || (exports.GenericStrategy = {}));
/**
 * Choose location
 */
var Location;
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
})(Location = exports.Location || (exports.Location = {}));
/**
 * How the strategies are selected
 */
var StrategySelectorStrategyChooseOne;
(function (StrategySelectorStrategyChooseOne) {
    StrategySelectorStrategyChooseOne["RankingModel"] = "RankingModel";
    StrategySelectorStrategyChooseOne["ThompsonSampling"] = "ThompsonSampling";
    StrategySelectorStrategyChooseOne["WeightedSample"] = "WeightedSample";
})(StrategySelectorStrategyChooseOne = exports.StrategySelectorStrategyChooseOne || (exports.StrategySelectorStrategyChooseOne = {}));
var Locale;
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
})(Locale = exports.Locale || (exports.Locale = {}));
var SearchOrder;
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
})(SearchOrder = exports.SearchOrder || (exports.SearchOrder = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["NameAsc"] = "NameAsc";
    SortOrder["NameDesc"] = "NameDesc";
    SortOrder["PopularityAsc"] = "PopularityAsc";
    SortOrder["PopularityDesc"] = "PopularityDesc";
    SortOrder["PriceAsc"] = "PriceAsc";
    SortOrder["PriceDesc"] = "PriceDesc";
    SortOrder["RatingAsc"] = "RatingAsc";
    SortOrder["RatingDesc"] = "RatingDesc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
// Converts JSON types to/from your types
// and asserts the results at runtime
class Convert {
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
exports.Convert = Convert;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNCQUFzQjtBQUN0QixFQUFFO0FBQ0YseXFCQUF5cUI7QUFDenFCLEVBQUU7QUFDRixpREFBaUQ7QUFDakQsaURBQWlEO0FBQ2pELHFEQUFxRDtBQUNyRCxtREFBbUQ7QUFDbkQsbURBQW1EO0FBQ25ELDZEQUE2RDtBQUM3RCwrREFBK0Q7QUFDL0QsdUVBQXVFO0FBQ3ZFLHlEQUF5RDtBQUN6RCwyQ0FBMkM7QUFDM0MsMkRBQTJEO0FBQzNELHVEQUF1RDtBQUN2RCwrREFBK0Q7QUFDL0QsNkVBQTZFO0FBQzdFLG1EQUFtRDtBQUNuRCw2REFBNkQ7QUFDN0QsaURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCwrQ0FBK0M7QUFDL0MsdUZBQXVGO0FBQ3ZGLHVGQUF1RjtBQUN2RiwrREFBK0Q7QUFDL0QsaURBQWlEO0FBQ2pELDZEQUE2RDtBQUM3RCx1RkFBdUY7QUFDdkYsNkRBQTZEO0FBQzdELCtEQUErRDtBQUMvRCwrQ0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDLHFEQUFxRDtBQUNyRCwrQ0FBK0M7QUFDL0MsMkRBQTJEO0FBQzNELDJEQUEyRDtBQUMzRCxxREFBcUQ7QUFDckQsdURBQXVEO0FBQ3ZELG1FQUFtRTtBQUNuRSw2REFBNkQ7QUFDN0QsaURBQWlEO0FBQ2pELDZFQUE2RTtBQUM3RSx1REFBdUQ7QUFDdkQsK0RBQStEO0FBQy9ELEVBQUU7QUFDRiwwREFBMEQ7QUFDMUQsMkRBQTJEOzs7QUFrQjNELElBQVksU0FnQ1g7QUFoQ0QsV0FBWSxTQUFTO0lBQ2pCLG9DQUF1QixDQUFBO0lBQ3ZCLG9DQUF1QixDQUFBO0lBQ3ZCLDBDQUE2QixDQUFBO0lBQzdCLDBEQUE2QyxDQUFBO0lBQzdDLDRDQUErQixDQUFBO0lBQy9CLDhDQUFpQyxDQUFBO0lBQ2pDLDBDQUE2QixDQUFBO0lBQzdCLGtEQUFxQyxDQUFBO0lBQ3JDLHNDQUF5QixDQUFBO0lBQ3pCLHNDQUF5QixDQUFBO0lBQ3pCLG9DQUF1QixDQUFBO0lBQ3ZCLGtDQUFxQixDQUFBO0lBQ3JCLDBFQUE2RCxDQUFBO0lBQzdELDBFQUE2RCxDQUFBO0lBQzdELGtEQUFxQyxDQUFBO0lBQ3JDLG9DQUF1QixDQUFBO0lBQ3ZCLGdEQUFtQyxDQUFBO0lBQ25DLGdEQUFtQyxDQUFBO0lBQ25DLGtEQUFxQyxDQUFBO0lBQ3JDLGtDQUFxQixDQUFBO0lBQ3JCLGdDQUFtQixDQUFBO0lBQ25CLHdDQUEyQixDQUFBO0lBQzNCLGtDQUFxQixDQUFBO0lBQ3JCLDhDQUFpQyxDQUFBO0lBQ2pDLDhDQUFpQyxDQUFBO0lBQ2pDLHdDQUEyQixDQUFBO0lBQzNCLHNEQUF5QyxDQUFBO0lBQ3pDLGdEQUFtQyxDQUFBO0lBQ25DLG9DQUF1QixDQUFBO0lBQ3ZCLDBDQUE2QixDQUFBO0lBQzdCLGtEQUFxQyxDQUFBO0FBQ3pDLENBQUMsRUFoQ1csU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFnQ3BCO0FBbUVELElBQVksUUEwS1g7QUExS0QsV0FBWSxRQUFRO0lBQ2hCLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFBO0lBQ1gsdUJBQVcsQ0FBQTtJQUNYLHVCQUFXLENBQUE7SUFDWCx1QkFBVyxDQUFB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d0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFBYyxDQUFBO0lBQ2Qsd0JBQWMsQ0FBQTtJQUNkLHdCQUFjLENBQUE7SUFDZCx3QkFB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Z0JBQWdCLENBQUMsS0FBaUI7UUFDNUMsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQVM7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQWM7UUFDdEMsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQVM7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBaUI7UUFDNUMsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQVM7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQVk7UUFDbEMsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQVM7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBa0I7UUFDOUMsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBUztRQUN2QyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sTUFBTSxDQUFDLHVCQUF1QixDQUFDLEtBQXdCO1FBQzFELE9BQU8sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQVM7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQWE7UUFDcEMsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQVM7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQVk7UUFDbEMsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQVM7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBaUI7UUFDNUMsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQVM7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQVk7UUFDbEMsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQVM7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQVc7UUFDaEMsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQVM7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQWM7UUFDdEMsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQVM7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQVk7UUFDbEMsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQVM7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQWU7UUFDeEMsT0FBTyxN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Q0FBQyxHQUFHLENBQUMsRUFBRSxDQUFHLENBQUM7QUFDMUYsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLEdBQVE7SUFDM0IsSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtRQUM1QixNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7UUFDcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdkUsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7S0FDdEI7SUFDRCxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDeEIsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLEdBQVE7SUFDM0IsSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtRQUM1QixNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7UUFDcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdkUsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7S0FDdEI7SUFDRCxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDeEIsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQVEsRUFBRSxHQUFRLEVBQUUsUUFBYSxFQUFFLE1BQVcsRUFBRTtJQUMvRCxTQUFTLGtCQUFrQixDQUFDLEdBQVcsRUFBRSxHQUFRO1FBQzdDLElBQUksT0FBTyxHQUFHLEtBQUssT0FBTyxHQUFHO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFD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LEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDdkYsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUMvRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDaEUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtLQUN0QyxFQUFFLEtBQUssQ0FBQztJQUNULGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDYixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDckYsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtRQUMzQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0tBQzdELEVBQUUsS0FBSyxDQUFDO0lBQ1QsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNaLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM1RSxFQUFFLElBQUksRUFBRSxZQUFZLEVB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RSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUNwRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDeEUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO0tBQzNFLEVBQUUsS0FBSyxDQUFDO0lBQ1QsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNYLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMxRixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDdkUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUM3RCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ25ELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7UUFDM0MsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtLQUM3RCxFQUFFLEtBQUssQ0FBQztJQUNULGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDYixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO0tBQzlDLEVBQUUsS0FBSyxDQUFDO0lBQ1Qsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMxRixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDdkUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUM3RCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDakQsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNyRixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0tBQzdELEVBQUUsS0FBSyxDQUFDO0lBQ1Qsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMxRixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDdkUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUM3RCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzVDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDaEUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtLQUM3RCxFQUFFLEtBQUssQ0FBQztJQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDTixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO1FBQzNDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7S0FDN0QsRUFBRSxLQUFLLENBQUM7SUFDVCxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ2xFLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMxRixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDdkUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUM3RCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFO1FBQ3hELEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLEVBQUUsRUFBRSxzQkFBc0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEVBQUU7UUFDM0YsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtLQUM3RCxFQUFFLEtBQUssQ0FBQztJQUNULHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUNyQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDdEUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNsRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDeEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtRQUM3QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7S0FDekUsRUFBRSxLQUFLLENBQUM7SUFDVCxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ1AsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ2hFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMs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QUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQzdFLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNsRixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDbkUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ3hFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNqRixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7S0FDMUYsRUFBRSxLQUFLLENBQUM7SUFDVCxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ1YsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUks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LEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNM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