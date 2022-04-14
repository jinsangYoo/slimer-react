'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var require$$1 = require('http');
var require$$2 = require('https');
var require$$0$1 = require('url');
var require$$3 = require('stream');
var require$$4 = require('assert');
var require$$8 = require('zlib');
var EventEmitter = require('events');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
var require$$8__default = /*#__PURE__*/_interopDefaultLegacy(require$$8);
var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

var AceConfiguration = {
    PLATFORM: {
        DEFAULT: 'ACONE',
    },
    init: function (key, platform, debug, enablePrivacyPolicy) {
        if (platform === void 0) { platform = AceConfiguration.PLATFORM.DEFAULT; }
        if (debug === void 0) { debug = true; }
        if (enablePrivacyPolicy === void 0) { enablePrivacyPolicy = false; }
        return { platform: platform, key: key, debug: debug, enablePrivacyPolicy: enablePrivacyPolicy };
    },
    toJSONString: function () {
        return JSON.stringify(this);
    },
};

var ACParams = {
    TYPE: {
        ADDCART: 'addcart',
        APPEAR_PRODUCT: 'appearProduct',
        BUY: 'buy',
        DELCART: 'delcart',
        EVENT: 'event',
        JOIN: 'join',
        LEAVE: 'leave',
        LINK: 'link',
        LOGIN: 'login',
        PUSH: 'push',
        REFERRER: 'referrer',
        SEARCH: 'search',
        TEL: 'tel',
    },
    init: function (type, name) {
        if (type === void 0) { type = ACParams.TYPE.EVENT; }
        return { type: type, name: name };
    },
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * Checks if a JavaScript value is empty
 * @example
 *    isEmpty(null); // true
 *    isEmpty(undefined); // true
 *    isEmpty(''); // true
 *    isEmpty([]); // true
 *    isEmpty({}); // true
 * @param {any} value - item to test
 * @returns {boolean} true if empty, otherwise false
 */
function isEmpty(value) {
    return (value === null || // check for null
        value === undefined || // check for undefined
        value === '' || // check for empty string
        (Array.isArray(value) && value.length === 0) || // check for empty array
        (typeof value === 'object' && Object.keys(value).length === 0) // check for empty object
    );
}
function isStartIndexAkAtGCodeString(value) {
    var regex = /^AK.*/;
    return regex.test(value);
}
function isLetterAtStringStartIndex(value) {
    var regex = /^[\w|ㄱ-ㅎ|ㄱ-ㅎ|가-힣].*/;
    return regex.test(value);
}
function onlyLetteringAtStartIndex(value) {
    if (!isEmpty(value)) {
        while (!isLetterAtStringStartIndex(value)) {
            value = value.substring(1);
            if (isEmpty(value)) {
                break;
            }
        }
    }
    return value;
}
function stringToNumber(num, base) {
    var parsed = parseInt(num, base);
    if (isNaN(parsed)) {
        return 0;
    }
    return parsed;
}
function encode$1(value) {
    return encodeURIComponent(value);
}
function decode(value) {
    return decodeURIComponent(value);
}
function getQueryVar(source) {
    var query = {};
    var pairs = (source[0] === '?' ? source.substring(1) : source).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}
function getQueryForKey(source, value) {
    return getQueryVar(source)[value];
}

var ACECONSTANT;
(function (ACECONSTANT) {
    ACECONSTANT["BOOKMARK"] = "bookmark";
    ACECONSTANT["DEFAULT_ADID"] = "00000000-0000-0000-0000-000000000000";
    ACECONSTANT["DIRECT"] = "Direct";
    ACECONSTANT["DOMAIN_DUMMY"] = "www.acecounter.com";
    ACECONSTANT["DOMAIN_LNC"] = "api-logncrash.cloud.toast.com/v2/log";
    ACECONSTANT["EMPTY"] = "";
    ACECONSTANT["FAILED_SAVE_FILE_NAME"] = "aceFailedLog.json";
    ACECONSTANT["INSTALL_REFERRER_BROADCAST_NAME"] = "com.android.vending.INSTALL_REFERRER";
    ACECONSTANT["INTENT_REFERRER_NAME"] = "referrer";
    ACECONSTANT["LNC_LOG_VERSION"] = "v2";
    ACECONSTANT["OFFICIAL_LOG_TAG"] = "[ACE]";
    ACECONSTANT["PATCH"] = "rev01";
    ACECONSTANT["ReferrerKeyName"] = "kw";
    ACECONSTANT["SDK_PATCH"] = "patch";
    ACECONSTANT["SDK_VERSION"] = "version";
    ACECONSTANT["TASK_CREATE_TIME_FORMAT"] = "yyyy-MM-dd HH:mm:ss.SSS";
    ACECONSTANT["InstallReferrer"] = "_ACE.Received.InstallReferrer";
    ACECONSTANT["ZERO"] = "0";
})(ACECONSTANT || (ACECONSTANT = {}));
var ACECONSTANT$1 = ACECONSTANT;

var ACEParameters = /** @class */ (function () {
    function ACEParameters() {
    }
    ACEParameters.prototype.getIsNeedSetNewSession = function () {
        return this.isNeedSetNewSession;
    };
    ACEParameters.prototype.setIsNeedSetNewSession = function (value) {
        this.isNeedSetNewSession = value;
    };
    ACEParameters.prototype.getPatch = function () {
        if (isEmpty(this.patch)) {
            this.patch = ACECONSTANT$1.PATCH;
        }
        return this.patch;
    };
    ACEParameters.prototype.setPatch = function (value) {
        if (isEmpty(value)) {
            this.patch = ACECONSTANT$1.PATCH;
        }
        else {
            this.patch = value;
        }
    };
    return ACEParameters;
}());

var ACOneConstantSt;
(function (ACOneConstantSt) {
    ACOneConstantSt["DefaultTS"] = "0";
    ACOneConstantSt["KeyInStorage"] = "ac1_st";
    ACOneConstantSt["KeyWillUpdateSt"] = "ac1_willUpdateSt";
    ACOneConstantSt["KeyGetTS"] = "ac1_getTS";
    ACOneConstantSt["KeyRandom6ForGetTS"] = "ac1_random6GetTS";
    ACOneConstantSt["KeyInsenginetTS"] = "ac1_insenginetTS";
    ACOneConstantSt["KeyRandom6ForInsenginetTS"] = "ac1_random6InsenginetTS";
    ACOneConstantSt["KeyRTS"] = "ac1_rTS";
    ACOneConstantSt["KeyRandom6ForRTS"] = "ac1_random6RTS";
    ACOneConstantSt["KeyStartTS"] = "ac1_startTS";
    ACOneConstantSt["KeyRandom6ForStartTS"] = "ac1_random6StartTS";
})(ACOneConstantSt || (ACOneConstantSt = {}));
var ACOneConstantSt$1 = ACOneConstantSt;

// import ACELog from '../../common/logger/ACELog'
var ACEntityForST = /** @class */ (function () {
    function ACEntityForST() {
        this._map = new Map();
        this._map.set(ACOneConstantSt$1.KeyGetTS, ACOneConstantSt$1.DefaultTS);
        this._map.set(ACOneConstantSt$1.KeyRandom6ForGetTS, ACECONSTANT$1.EMPTY);
        this._map.set(ACOneConstantSt$1.KeyInsenginetTS, ACOneConstantSt$1.DefaultTS);
        this._map.set(ACOneConstantSt$1.KeyRandom6ForInsenginetTS, ACECONSTANT$1.EMPTY);
        this._map.set(ACOneConstantSt$1.KeyRTS, ACOneConstantSt$1.DefaultTS);
        this._map.set(ACOneConstantSt$1.KeyRandom6ForRTS, ACECONSTANT$1.EMPTY);
        this._map.set(ACOneConstantSt$1.KeyStartTS, ACOneConstantSt$1.DefaultTS);
        this._map.set(ACOneConstantSt$1.KeyRandom6ForStartTS, ACECONSTANT$1.EMPTY);
    }
    ACEntityForST.prototype.getMap = function () {
        return this._map;
    };
    ACEntityForST.prototype.setDeepCopy = function (value) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (this._map) {
            this._map = new Map();
        }
        var _getTS = (_a = value.get(ACOneConstantSt$1.KeyGetTS)) !== null && _a !== void 0 ? _a : ACOneConstantSt$1.DefaultTS;
        this._map.set(ACOneConstantSt$1.KeyGetTS, _getTS);
        var _getTSRandom = (_b = value.get(ACOneConstantSt$1.KeyRandom6ForGetTS)) !== null && _b !== void 0 ? _b : ACECONSTANT$1.EMPTY;
        this._map.set(ACOneConstantSt$1.KeyRandom6ForGetTS, _getTSRandom);
        var _insenginetTS = (_c = value.get(ACOneConstantSt$1.KeyInsenginetTS)) !== null && _c !== void 0 ? _c : ACOneConstantSt$1.DefaultTS;
        this._map.set(ACOneConstantSt$1.KeyInsenginetTS, _insenginetTS);
        var _insenginetTSRandom = (_d = value.get(ACOneConstantSt$1.KeyRandom6ForInsenginetTS)) !== null && _d !== void 0 ? _d : ACECONSTANT$1.EMPTY;
        this._map.set(ACOneConstantSt$1.KeyRandom6ForInsenginetTS, _insenginetTSRandom);
        var _rTS = (_e = value.get(ACOneConstantSt$1.KeyRTS)) !== null && _e !== void 0 ? _e : ACOneConstantSt$1.DefaultTS;
        this._map.set(ACOneConstantSt$1.KeyRTS, _rTS);
        var _rTSRandom = (_f = value.get(ACOneConstantSt$1.KeyRandom6ForRTS)) !== null && _f !== void 0 ? _f : ACECONSTANT$1.EMPTY;
        this._map.set(ACOneConstantSt$1.KeyRandom6ForRTS, _rTSRandom);
        var _startTS = (_g = value.get(ACOneConstantSt$1.KeyStartTS)) !== null && _g !== void 0 ? _g : ACOneConstantSt$1.DefaultTS;
        this._map.set(ACOneConstantSt$1.KeyStartTS, _startTS);
        var _startTSRandom = (_h = value.get(ACOneConstantSt$1.KeyRandom6ForStartTS)) !== null && _h !== void 0 ? _h : ACECONSTANT$1.EMPTY;
        this._map.set(ACOneConstantSt$1.KeyRandom6ForStartTS, _startTSRandom);
    };
    ACEntityForST.prototype.getAssembleParams = function () {
        var _getTS = this.getGetTSGoldMaster();
        var _insenginetTS = this.getInsenginetTSGoldMaster();
        var _rTS = this.getRTSGoldMaster();
        var _startTS = this.getStartTSGoldMaster();
        return "".concat(_startTS, "|").concat(_getTS, "|").concat(_rTS, "|").concat(_insenginetTS);
    };
    // #region GoldMaster
    ACEntityForST.prototype.getGetTSGoldMaster = function () {
        var _getTS = this.getGetTS();
        var _random = this.getRandom6ForGetTS();
        return "".concat(_getTS).concat(_random);
    };
    ACEntityForST.prototype.getInsenginetTSGoldMaster = function () {
        var _insenginetTS = this.getInsenginetTS();
        var _random = this.getRandom6ForInsenginetTS();
        return "".concat(_insenginetTS).concat(_random);
    };
    ACEntityForST.prototype.getRTSGoldMaster = function () {
        var _rTS = this.getRTS();
        var _random = this.getRandom6ForRTS();
        return "".concat(_rTS).concat(_random);
    };
    ACEntityForST.prototype.getStartTSGoldMaster = function () {
        var _startTS = this.getStartTS();
        var _random = this.getRandom6ForStartTS();
        return "".concat(_startTS).concat(_random);
    };
    // #endregion
    // #region GetTS
    ACEntityForST.prototype.getGetTS = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantSt$1.KeyGetTS)) !== null && _a !== void 0 ? _a : ACOneConstantSt$1.DefaultTS;
    };
    ACEntityForST.prototype.setGetTS = function (value) {
        this._map.set(ACOneConstantSt$1.KeyGetTS, value.valueOf().toString());
    };
    ACEntityForST.prototype.getRandom6ForGetTS = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantSt$1.KeyRandom6ForGetTS)) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY;
    };
    ACEntityForST.prototype.setRandom6ForGetTS = function (value) {
        this._map.set(ACOneConstantSt$1.KeyRandom6ForGetTS, value);
    };
    // #endregion
    // #region InsenginetTS
    ACEntityForST.prototype.getInsenginetTS = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantSt$1.KeyInsenginetTS)) !== null && _a !== void 0 ? _a : ACOneConstantSt$1.DefaultTS;
    };
    ACEntityForST.prototype.setInsenginetTS = function (value) {
        this._map.set(ACOneConstantSt$1.KeyInsenginetTS, value.valueOf().toString());
    };
    ACEntityForST.prototype.getRandom6ForInsenginetTS = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantSt$1.KeyRandom6ForInsenginetTS)) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY;
    };
    ACEntityForST.prototype.setRandom6ForInsenginetTS = function (value) {
        this._map.set(ACOneConstantSt$1.KeyRandom6ForInsenginetTS, value);
    };
    // #endregion
    // #region RTS
    ACEntityForST.prototype.getRTS = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantSt$1.KeyRTS)) !== null && _a !== void 0 ? _a : ACOneConstantSt$1.DefaultTS;
    };
    ACEntityForST.prototype.setRTS = function (value) {
        this._map.set(ACOneConstantSt$1.KeyRTS, value.valueOf().toString());
    };
    ACEntityForST.prototype.getRandom6ForRTS = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantSt$1.KeyRandom6ForRTS)) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY;
    };
    ACEntityForST.prototype.setRandom6ForRTS = function (value) {
        this._map.set(ACOneConstantSt$1.KeyRandom6ForRTS, value);
    };
    // #endregion
    // #region StartTS
    ACEntityForST.prototype.getStartTS = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantSt$1.KeyStartTS)) !== null && _a !== void 0 ? _a : ACOneConstantSt$1.DefaultTS;
    };
    ACEntityForST.prototype.setStartTS = function (value) {
        this._map.set(ACOneConstantSt$1.KeyStartTS, value.valueOf().toString());
    };
    ACEntityForST.prototype.getRandom6ForStartTS = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantSt$1.KeyRandom6ForStartTS)) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY;
    };
    ACEntityForST.prototype.setRandom6ForStartTS = function (value) {
        this._map.set(ACOneConstantSt$1.KeyRandom6ForStartTS, value);
    };
    // #endregion
    ACEntityForST.prototype.toJSON = function () {
        return {
            ac1_getTS: this.getGetTS(),
            ac1_random6GetTS: this.getRandom6ForGetTS(),
            ac1_insenginetTS: this.getInsenginetTS(),
            ac1_random6InsenginetTS: this.getRandom6ForInsenginetTS(),
            ac1_rTS: this.getRTS(),
            ac1_random6RTS: this.getRandom6ForRTS(),
            ac1_startTS: this.getStartTS(),
            ac1_random6StartTS: this.getRandom6ForStartTS(),
        };
    };
    ACEntityForST.prototype.getObjectForTS = function () {
        return {
            getts: this.getGetTSGoldMaster(),
            insenginets: this.getInsenginetTSGoldMaster(),
            referts: this.getRTSGoldMaster(),
            startts: this.getStartTSGoldMaster(),
        };
    };
    return ACEntityForST;
}());

var ACOneConstantVt;
(function (ACOneConstantVt) {
    ACOneConstantVt["DefaultTS"] = "0";
    ACOneConstantVt["KeyInStorage"] = "ac1_vt";
    ACOneConstantVt["KeyWillUpdateVt"] = "ac1_willUpdateVt";
    ACOneConstantVt["KeyBuyCount"] = "ac1_buyCount";
    ACOneConstantVt["KeyBuyTimeTS"] = "ac1_buyTimeTS";
    ACOneConstantVt["KeyRandom6ForBuyTimeTS"] = "ac1_random6BuyTimeTS";
    ACOneConstantVt["KeyVisitCount"] = "ac1_visitCount";
    ACOneConstantVt["KeyVTS"] = "ac1_vTS";
    ACOneConstantVt["KeyRandom6ForVTS"] = "ac1_random6VTS";
    ACOneConstantVt["KeyPcStamp"] = "ac1_pcStamp";
    ACOneConstantVt["KeyRandom6ForPcStamp"] = "ac1_random6pcStamp";
})(ACOneConstantVt || (ACOneConstantVt = {}));
var ACOneConstantVt$1 = ACOneConstantVt;

function padLeadingZeros(num, size) {
    var s = num + '';
    while (s.length < size)
        s = '0' + s;
    return s;
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandom6CharForSTVT() {
    return padLeadingZeros(getRandomIntInclusive(0, 999999), 6).toString();
}

var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ASSERT"] = 7] = "ASSERT";
    LogLevel[LogLevel["ERROR"] = 6] = "ERROR";
    LogLevel[LogLevel["WARN"] = 5] = "WARN";
    LogLevel[LogLevel["INFO"] = 4] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 2] = "VERBOSE";
})(LogLevel || (LogLevel = {}));

var ACELog = /** @class */ (function () {
    function ACELog() {
    }
    ACELog.setProductionMode = function () {
        this.setLogLevel(LogLevel.INFO);
    };
    ACELog.setAllLogLevel = function () {
        this.setLogLevel(LogLevel.VERBOSE);
    };
    ACELog.setDevMode = function () {
        this.setLogLevel(LogLevel.DEBUG);
    };
    ACELog.setLogLevel = function (logLevel) {
        this._logLevel = logLevel;
    };
    ACELog.isLoggable = function (priority) {
        return priority >= this._logLevel;
    };
    ACELog.isDevMode = function () {
        return LogLevel.INFO > this._logLevel;
    };
    ACELog.logLevelToIdentity = function (priority) {
        switch (priority) {
            case LogLevel.ASSERT:
                return 'A';
            case LogLevel.ERROR:
                return 'E';
            case LogLevel.WARN:
                return 'W';
            case LogLevel.INFO:
                return 'I';
            case LogLevel.DEBUG:
                return 'D';
            case LogLevel.VERBOSE:
                return 'V';
        }
    };
    ACELog.println = function (priority, tag, msg, info, moreDebugMessage) {
        if (!this.isLoggable(priority)) {
            return;
        }
        var _location;
        if (priority >= this._logLevel) {
            _location = ' [' + tag + ']';
        }
        else {
            _location = '::';
        }
        if (ACELog.isLoggable(priority)) {
            if (info) {
                console.log("".concat(ACECONSTANT$1.OFFICIAL_LOG_TAG, " [SDK] [").concat(new Date().toJSON(), "] [").concat(ACELog.logLevelToIdentity(priority), "]").concat(_location, ": ").concat(msg, ", debug: >>").concat(moreDebugMessage !== null && moreDebugMessage !== void 0 ? moreDebugMessage : ACECONSTANT$1.EMPTY, "<<, info: ").concat(JSON.stringify(info, null, 2)));
            }
            else {
                console.log("".concat(ACECONSTANT$1.OFFICIAL_LOG_TAG, " [SDK] [").concat(new Date().toJSON(), "] [").concat(ACELog.logLevelToIdentity(priority), "]").concat(_location, ": ").concat(msg, ", debug: >>").concat(moreDebugMessage !== null && moreDebugMessage !== void 0 ? moreDebugMessage : ACECONSTANT$1.EMPTY, "<<"));
            }
        }
        else {
            if (info) {
                console.log("".concat(ACECONSTANT$1.OFFICIAL_LOG_TAG, " [SDK] [").concat(new Date().toJSON(), "] [").concat(ACELog.logLevelToIdentity(priority), "]").concat(_location, ": ").concat(msg, ", info: ").concat(JSON.stringify(info, null, 2)));
            }
            else {
                console.log("".concat(ACECONSTANT$1.OFFICIAL_LOG_TAG, " [SDK] [").concat(new Date().toJSON(), "] [").concat(ACELog.logLevelToIdentity(priority), "]").concat(_location, ": ").concat(msg));
            }
        }
    };
    ACELog.e = function (tag, msg, debug, moreDebugMessage) {
        ACELog.println(LogLevel.ERROR, tag, msg, debug, moreDebugMessage);
    };
    ACELog.d = function (tag, msg, debug, moreDebugMessage) {
        ACELog.println(LogLevel.DEBUG, tag, msg, debug, moreDebugMessage);
    };
    ACELog.i = function (tag, msg, info, moreDebugMessage) {
        ACELog.println(LogLevel.INFO, tag, msg, info, moreDebugMessage);
    };
    ACELog.v = function (tag, msg, info, moreDebugMessage) {
        ACELog.println(LogLevel.VERBOSE, tag, msg, info, moreDebugMessage);
    };
    ACELog._logLevel = LogLevel.INFO;
    return ACELog;
}());

var ACEntityForVT = /** @class */ (function () {
    function ACEntityForVT() {
        this._map = new Map();
        this._map.set(ACOneConstantVt$1.KeyVTS, ACOneConstantVt$1.DefaultTS);
        this._map.set(ACOneConstantVt$1.KeyRandom6ForVTS, ACECONSTANT$1.EMPTY);
        this._map.set(ACOneConstantVt$1.KeyVisitCount, ACECONSTANT$1.ZERO);
        this._map.set(ACOneConstantVt$1.KeyBuyTimeTS, ACOneConstantVt$1.DefaultTS);
        this._map.set(ACOneConstantVt$1.KeyRandom6ForBuyTimeTS, ACECONSTANT$1.EMPTY);
        this._map.set(ACOneConstantVt$1.KeyBuyCount, ACECONSTANT$1.ZERO);
        this._map.set(ACOneConstantVt$1.KeyPcStamp, ACOneConstantVt$1.DefaultTS);
        this._map.set(ACOneConstantVt$1.KeyRandom6ForPcStamp, ACECONSTANT$1.EMPTY);
    }
    ACEntityForVT.prototype.getMap = function () {
        return this._map;
    };
    ACEntityForVT.prototype.setDeepCopy = function (value) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (this._map) {
            this._map = new Map();
        }
        var _vts = (_a = value.get(ACOneConstantVt$1.KeyVTS)) !== null && _a !== void 0 ? _a : ACOneConstantVt$1.DefaultTS;
        this._map.set(ACOneConstantVt$1.KeyVTS, _vts);
        var _vtsRandom = (_b = value.get(ACOneConstantVt$1.KeyRandom6ForVTS)) !== null && _b !== void 0 ? _b : ACECONSTANT$1.EMPTY;
        this._map.set(ACOneConstantVt$1.KeyRandom6ForVTS, _vtsRandom);
        var _visitCount = (_c = value.get(ACOneConstantVt$1.KeyVisitCount)) !== null && _c !== void 0 ? _c : ACECONSTANT$1.ZERO;
        this._map.set(ACOneConstantVt$1.KeyVisitCount, _visitCount);
        var _buyTimeTS = (_d = value.get(ACOneConstantVt$1.KeyBuyTimeTS)) !== null && _d !== void 0 ? _d : ACOneConstantVt$1.DefaultTS;
        this._map.set(ACOneConstantVt$1.KeyBuyTimeTS, _buyTimeTS);
        var _buyTimeTSRandom = (_e = value.get(ACOneConstantVt$1.KeyRandom6ForBuyTimeTS)) !== null && _e !== void 0 ? _e : ACECONSTANT$1.EMPTY;
        this._map.set(ACOneConstantVt$1.KeyRandom6ForBuyTimeTS, _buyTimeTSRandom);
        var _buyCount = (_f = value.get(ACOneConstantVt$1.KeyBuyCount)) !== null && _f !== void 0 ? _f : ACECONSTANT$1.ZERO;
        this._map.set(ACOneConstantVt$1.KeyBuyCount, _buyCount);
        var _pcStamp = (_g = value.get(ACOneConstantVt$1.KeyPcStamp)) !== null && _g !== void 0 ? _g : ACOneConstantVt$1.DefaultTS;
        this._map.set(ACOneConstantVt$1.KeyPcStamp, _pcStamp);
        var _pcStampRandom = (_h = value.get(ACOneConstantVt$1.KeyRandom6ForPcStamp)) !== null && _h !== void 0 ? _h : ACECONSTANT$1.EMPTY;
        this._map.set(ACOneConstantVt$1.KeyRandom6ForPcStamp, _pcStampRandom);
    };
    ACEntityForVT.prototype.setDeepCopyForJSON = function (value) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (this._map) {
            this._map = new Map();
        }
        var _vts = (_a = value[ACOneConstantVt$1.KeyVTS]) !== null && _a !== void 0 ? _a : ACOneConstantVt$1.DefaultTS;
        this._map.set(ACOneConstantVt$1.KeyVTS, _vts);
        var _vtsRandom = (_b = value[ACOneConstantVt$1.KeyRandom6ForVTS]) !== null && _b !== void 0 ? _b : ACECONSTANT$1.EMPTY;
        this._map.set(ACOneConstantVt$1.KeyRandom6ForVTS, _vtsRandom);
        var _visitCount = (_c = value[ACOneConstantVt$1.KeyVisitCount]) !== null && _c !== void 0 ? _c : ACECONSTANT$1.ZERO;
        this._map.set(ACOneConstantVt$1.KeyVisitCount, _visitCount);
        var _buyTimeTS = (_d = value[ACOneConstantVt$1.KeyBuyTimeTS]) !== null && _d !== void 0 ? _d : ACOneConstantVt$1.DefaultTS;
        this._map.set(ACOneConstantVt$1.KeyBuyTimeTS, _buyTimeTS);
        var _buyTimeTSRandom = (_e = value[ACOneConstantVt$1.KeyRandom6ForBuyTimeTS]) !== null && _e !== void 0 ? _e : ACECONSTANT$1.EMPTY;
        this._map.set(ACOneConstantVt$1.KeyRandom6ForBuyTimeTS, _buyTimeTSRandom);
        var _buyCount = (_f = value[ACOneConstantVt$1.KeyBuyCount]) !== null && _f !== void 0 ? _f : ACECONSTANT$1.ZERO;
        this._map.set(ACOneConstantVt$1.KeyBuyCount, _buyCount);
        var _pcStamp = (_g = value[ACOneConstantVt$1.KeyPcStamp]) !== null && _g !== void 0 ? _g : ACOneConstantVt$1.DefaultTS;
        this._map.set(ACOneConstantVt$1.KeyPcStamp, _pcStamp);
        var _pcStampRandom = (_h = value[ACOneConstantVt$1.KeyRandom6ForPcStamp]) !== null && _h !== void 0 ? _h : ACECONSTANT$1.EMPTY;
        this._map.set(ACOneConstantVt$1.KeyRandom6ForPcStamp, _pcStampRandom);
    };
    ACEntityForVT.prototype.getAssembleParams = function () {
        var _vts = this.getVTSGoldMaster();
        var _visitCount = this.getVisitCount();
        var _buyTimeTS = this.getBuyTimeTSGoldMaster();
        var _buyCount = this.getBuyCount();
        var _pcStamp = this.getPcStampGoldMaster();
        return "".concat(_vts, "|").concat(_visitCount, "|").concat(_buyTimeTS, "|").concat(_buyCount, "|").concat(_pcStamp);
    };
    // #region GoldMaster
    ACEntityForVT.prototype.getVTSGoldMaster = function () {
        var _vts = this.getVTS();
        var _random = this.getRandom6ForVTS();
        return "".concat(_vts).concat(_random);
    };
    ACEntityForVT.prototype.getBuyTimeTSGoldMaster = function () {
        var _buyTimeTS = this.getBuyTimeTS();
        var _random = this.getRandom6ForBuyTimeTS();
        return "".concat(_buyTimeTS).concat(_random);
    };
    ACEntityForVT.prototype.getPcStampGoldMaster = function () {
        var _pcStamp = this.getPcStamp();
        var _random = this.getRandom6ForPcStamp();
        return "".concat(_pcStamp).concat(_random);
    };
    // #endregion
    // #region vts
    ACEntityForVT.prototype.isEmptyAtVTS = function () {
        var _vts = this.getVTS();
        if (_vts == ACOneConstantVt$1.DefaultTS) {
            return true;
        }
        else {
            return false;
        }
    };
    ACEntityForVT.prototype.getVTS = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantVt$1.KeyVTS)) !== null && _a !== void 0 ? _a : ACOneConstantVt$1.DefaultTS;
    };
    ACEntityForVT.prototype.setVTS = function (value) {
        this._map.set(ACOneConstantVt$1.KeyVTS, value.valueOf().toString());
    };
    ACEntityForVT.prototype.getRandom6ForVTS = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantVt$1.KeyRandom6ForVTS)) !== null && _a !== void 0 ? _a : ACECONSTANT$1.ZERO;
    };
    ACEntityForVT.prototype.setRandom6ForVTS = function (value) {
        this._map.set(ACOneConstantVt$1.KeyRandom6ForVTS, value);
    };
    // #endregion
    // #region VisitCount
    ACEntityForVT.prototype.getVisitCount = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantVt$1.KeyVisitCount)) !== null && _a !== void 0 ? _a : ACECONSTANT$1.ZERO;
    };
    ACEntityForVT.prototype.setVisitCount = function (value) {
        this._map.set(ACOneConstantVt$1.KeyVisitCount, value.toString());
    };
    // #endregion
    // #region BuyTimeTS
    ACEntityForVT.prototype.isEmptyAtBuyTimeTS = function () {
        var _buyTimeTS = this.getBuyTimeTS();
        if (_buyTimeTS == ACOneConstantVt$1.DefaultTS) {
            return true;
        }
        else {
            return false;
        }
    };
    ACEntityForVT.prototype.getBuyTimeTS = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantVt$1.KeyBuyTimeTS)) !== null && _a !== void 0 ? _a : ACOneConstantVt$1.DefaultTS;
    };
    ACEntityForVT.prototype.setBuyTimeTS = function (value) {
        this._map.set(ACOneConstantVt$1.KeyBuyTimeTS, value);
    };
    ACEntityForVT.prototype.getRandom6ForBuyTimeTS = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantVt$1.KeyRandom6ForBuyTimeTS)) !== null && _a !== void 0 ? _a : ACECONSTANT$1.ZERO;
    };
    ACEntityForVT.prototype.setRandom6ForBuyTimeTS = function (value) {
        this._map.set(ACOneConstantVt$1.KeyRandom6ForBuyTimeTS, value);
    };
    // #endregion
    // #region BuyCount
    ACEntityForVT.prototype.getBuyCount = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantVt$1.KeyBuyCount)) !== null && _a !== void 0 ? _a : ACECONSTANT$1.ZERO;
    };
    ACEntityForVT.prototype.setBuyCount = function (value) {
        this._map.set(ACOneConstantVt$1.KeyBuyCount, value.toString());
    };
    // #endregion
    // #region pcstamp
    ACEntityForVT.prototype.getPcStamp = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantVt$1.KeyPcStamp)) !== null && _a !== void 0 ? _a : ACOneConstantVt$1.DefaultTS;
    };
    ACEntityForVT.prototype.setPcStamp = function (value) {
        this._map.set(ACOneConstantVt$1.KeyPcStamp, value.toString());
    };
    ACEntityForVT.prototype.getRandom6ForPcStamp = function () {
        var _a;
        return (_a = this._map.get(ACOneConstantVt$1.KeyRandom6ForPcStamp)) !== null && _a !== void 0 ? _a : ACECONSTANT$1.ZERO;
    };
    ACEntityForVT.prototype.setRandom6ForPcStamp = function (value) {
        this._map.set(ACOneConstantVt$1.KeyRandom6ForPcStamp, value);
    };
    ACEntityForVT.prototype.setPcStampWhenNotStored = function () {
        var _pcStamp = this.getPcStamp();
        if (_pcStamp == ACOneConstantVt$1.DefaultTS) {
            this.setPcStamp(Date.now());
            this.setRandom6ForPcStamp(getRandom6CharForSTVT());
            ACELog.d(ACEntityForVT._TAG, "maked pcStamp: ".concat(this.getPcStampGoldMaster()));
        }
        else {
            ACELog.d(ACEntityForVT._TAG, "existed pcStamp: ".concat(this.getPcStampGoldMaster()));
        }
    };
    // #endregion
    ACEntityForVT.prototype.toJSON = function () {
        return {
            ac1_buyCount: this.getBuyCount(),
            ac1_buyTimeTS: this.getBuyTimeTS(),
            ac1_random6BuyTimeTS: this.getRandom6ForBuyTimeTS(),
            ac1_visitCount: this.getVisitCount(),
            ac1_vTS: this.getVTS(),
            ac1_random6VTS: this.getRandom6ForVTS(),
            ac1_pcStamp: this.getPcStamp(),
            ac1_random6pcStamp: this.getRandom6ForPcStamp(),
        };
    };
    ACEntityForVT.prototype.getObjectForTS = function () {
        return {
            vts: this.getVTSGoldMaster(),
            visitCount: this.getVisitCount(),
            buyTimeTS: this.getBuyTimeTSGoldMaster(),
            buyCount: this.getBuyCount(),
            pcStamp: this.getPcStampGoldMaster(),
        };
    };
    ACEntityForVT._TAG = 'vt';
    return ACEntityForVT;
}());

var ADID;
(function (ADID) {
    ADID["enable"] = "1";
    ADID["disable"] = "0";
    ADID["defaultADID"] = "00000000-0000-0000-0000-000000000000";
})(ADID || (ADID = {}));
var ADID$1 = ADID;

var ACOneConstant;
(function (ACOneConstant) {
    ACOneConstant["CustomSDKForCustomer"] = "1";
    ACOneConstant["DefaultCE"] = "1";
    ACOneConstant["DefaultNotCustomSDKForCustomer"] = "0";
    ACOneConstant["DefaultRI"] = "1";
    ACOneConstant["DefaultServiceCode"] = "ACA";
    ACOneConstant["EnabledPrivacyPolicyUserID"] = "undefined_member";
    ACOneConstant["JavascriptSuccessCallbackName"] = "callbackSuccessCommon";
    ACOneConstant["JavascriptFailCallbackName"] = "callbackFailCommon";
    ACOneConstant["PushKeyName"] = "kw";
})(ACOneConstant || (ACOneConstant = {}));
var ACOneConstant$1 = ACOneConstant;

var IACBuyMode;
(function (IACBuyMode) {
    IACBuyMode["Unknown"] = "";
    IACBuyMode["AddProductAtCart"] = "i";
    IACBuyMode["Order"] = "b";
    IACBuyMode["RemoveProductAtCart"] = "o";
})(IACBuyMode || (IACBuyMode = {}));
var IACBuyMode$1 = IACBuyMode;

var ACEConstantCallback;
(function (ACEConstantCallback) {
    ACEConstantCallback["DefaultMessage"] = "done";
    ACEConstantCallback["Failed"] = "fail";
    ACEConstantCallback["Success"] = "success";
})(ACEConstantCallback || (ACEConstantCallback = {}));
var ACEResultCode;
(function (ACEResultCode) {
    ACEResultCode[ACEResultCode["Default"] = 0] = "Default";
    // positive
    ACEResultCode[ACEResultCode["Success"] = 200] = "Success";
    // negative
    ACEResultCode[ACEResultCode["AlreadyInitialized"] = 1000] = "AlreadyInitialized";
    ACEResultCode[ACEResultCode["ExecutorNotInitAtPolicy"] = 1001] = "ExecutorNotInitAtPolicy";
    ACEResultCode[ACEResultCode["ExecutorWasShutdownedAtPolicy"] = 1002] = "ExecutorWasShutdownedAtPolicy";
    ACEResultCode[ACEResultCode["ExecutorWasTerminatedAtPolicy"] = 1003] = "ExecutorWasTerminatedAtPolicy";
    ACEResultCode[ACEResultCode["OccurredExceptionAtPolicy"] = 1004] = "OccurredExceptionAtPolicy";
    ACEResultCode[ACEResultCode["FailAfterRequest"] = 1005] = "FailAfterRequest";
    ACEResultCode[ACEResultCode["DoNotImplement_to_IACEParameterUtil"] = 1006] = "DoNotImplement_to_IACEParameterUtil";
    ACEResultCode[ACEResultCode["DoNotFindMethod"] = 1007] = "DoNotFindMethod";
    ACEResultCode[ACEResultCode["DoNotGetSDKVersion"] = 1008] = "DoNotGetSDKVersion";
    ACEResultCode[ACEResultCode["NeedToCheckService"] = 1009] = "NeedToCheckService";
    ACEResultCode[ACEResultCode["NeedToCheckAceConfiguration"] = 1010] = "NeedToCheckAceConfiguration";
    ACEResultCode[ACEResultCode["DoNotImplement_to_IACECommonAPI"] = 1011] = "DoNotImplement_to_IACECommonAPI";
    ACEResultCode[ACEResultCode["DisableSDKOrDoNotImplementAPI"] = 1012] = "DisableSDKOrDoNotImplementAPI";
    ACEResultCode[ACEResultCode["GetQueueManagerFactoryIsNull"] = 1013] = "GetQueueManagerFactoryIsNull";
    ACEResultCode[ACEResultCode["DoNotFindKeyword"] = 1014] = "DoNotFindKeyword";
    ACEResultCode[ACEResultCode["ParamsIsNull"] = 1015] = "ParamsIsNull";
    ACEResultCode[ACEResultCode["ProductParamIsNull"] = 1016] = "ProductParamIsNull";
    ACEResultCode[ACEResultCode["FailLogObjectIsNull"] = 1017] = "FailLogObjectIsNull";
    ACEResultCode[ACEResultCode["NotContainParamsKey"] = 1018] = "NotContainParamsKey";
    ACEResultCode[ACEResultCode["NotConnectToTheInternet"] = 1019] = "NotConnectToTheInternet";
    ACEResultCode[ACEResultCode["URLParamIsNull"] = 1020] = "URLParamIsNull";
    ACEResultCode[ACEResultCode["ResponseParamIsNull"] = 1021] = "ResponseParamIsNull";
    ACEResultCode[ACEResultCode["FailResponseHeaderToMapType"] = 1022] = "FailResponseHeaderToMapType";
    ACEResultCode[ACEResultCode["NeitherDeeplinkAndPush"] = 1023] = "NeitherDeeplinkAndPush";
    ACEResultCode[ACEResultCode["NotSupportPromise"] = 1024] = "NotSupportPromise";
    ACEResultCode[ACEResultCode["CanNotRequestToPolicy"] = 1025] = "CanNotRequestToPolicy";
    ACEResultCode[ACEResultCode["FailLoadVT"] = 1026] = "FailLoadVT";
    ACEResultCode[ACEResultCode["DoNotInitialized"] = 1027] = "DoNotInitialized";
    ACEResultCode[ACEResultCode["NotReceivePolicy"] = 1028] = "NotReceivePolicy";
    ACEResultCode[ACEResultCode["UnknownConnectStateToTheInternet"] = 1029] = "UnknownConnectStateToTheInternet";
    ACEResultCode[ACEResultCode["DisabledByPolicy"] = 1030] = "DisabledByPolicy";
    ACEResultCode[ACEResultCode["NotFoundPolicyInformation"] = 1031] = "NotFoundPolicyInformation";
    ACEResultCode[ACEResultCode["NotExistWaitTask"] = 1032] = "NotExistWaitTask";
    ACEResultCode[ACEResultCode["TooBusyWillSendAfterDone"] = 1033] = "TooBusyWillSendAfterDone";
    ACEResultCode[ACEResultCode["InvalidACParamValues"] = 1034] = "InvalidACParamValues";
})(ACEResultCode || (ACEResultCode = {}));
exports.ACEGender = void 0;
(function (ACEGender) {
    ACEGender["Unknown"] = "";
    ACEGender["Man"] = "man";
    ACEGender["Woman"] = "woman";
})(exports.ACEGender || (exports.ACEGender = {}));
exports.ACEMaritalStatus = void 0;
(function (ACEMaritalStatus) {
    ACEMaritalStatus["Unknown"] = "";
    ACEMaritalStatus["Married"] = "married";
    ACEMaritalStatus["Single"] = "single";
})(exports.ACEMaritalStatus || (exports.ACEMaritalStatus = {}));

var SESSION;
(function (SESSION) {
    SESSION[SESSION["KEEP"] = 0] = "KEEP";
    SESSION[SESSION["NEW"] = 1] = "NEW";
})(SESSION || (SESSION = {}));
var SESSION$1 = SESSION;

var ACEInnerCBResultKey;
(function (ACEInnerCBResultKey) {
    // positive
    ACEInnerCBResultKey[ACEInnerCBResultKey["Success"] = 200] = "Success";
    // negative
    ACEInnerCBResultKey[ACEInnerCBResultKey["AlreadyInitialized"] = 1000] = "AlreadyInitialized";
    ACEInnerCBResultKey[ACEInnerCBResultKey["ExecutorNotInitAtPolicy"] = 1001] = "ExecutorNotInitAtPolicy";
    ACEInnerCBResultKey[ACEInnerCBResultKey["ExecutorWasShutdownedAtPolicy"] = 1002] = "ExecutorWasShutdownedAtPolicy";
    ACEInnerCBResultKey[ACEInnerCBResultKey["ExecutorWasTerminatedAtPolicy"] = 1003] = "ExecutorWasTerminatedAtPolicy";
    ACEInnerCBResultKey[ACEInnerCBResultKey["OccurredExceptionAtPolicy"] = 1004] = "OccurredExceptionAtPolicy";
    ACEInnerCBResultKey[ACEInnerCBResultKey["FailAfterRequest"] = 1005] = "FailAfterRequest";
    ACEInnerCBResultKey[ACEInnerCBResultKey["FailGetVT"] = 5404] = "FailGetVT";
    ACEInnerCBResultKey[ACEInnerCBResultKey["DoNotImplement_to_IACEParameterUtil"] = 1006] = "DoNotImplement_to_IACEParameterUtil";
    ACEInnerCBResultKey[ACEInnerCBResultKey["DoNotFindMethod"] = 1007] = "DoNotFindMethod";
    ACEInnerCBResultKey[ACEInnerCBResultKey["DoNotGetSDKVersion"] = 1008] = "DoNotGetSDKVersion";
    ACEInnerCBResultKey[ACEInnerCBResultKey["NeedToCheckService"] = 1009] = "NeedToCheckService";
    ACEInnerCBResultKey[ACEInnerCBResultKey["NeedToCheckAceConfiguration"] = 1010] = "NeedToCheckAceConfiguration";
    ACEInnerCBResultKey[ACEInnerCBResultKey["NotSupportPromise"] = 1024] = "NotSupportPromise";
    ACEInnerCBResultKey[ACEInnerCBResultKey["NotExistKey"] = 4404] = "NotExistKey";
})(ACEInnerCBResultKey || (ACEInnerCBResultKey = {}));

var ACOneConstantInteger;
(function (ACOneConstantInteger) {
    ACOneConstantInteger[ACOneConstantInteger["DefaultRE"] = 0] = "DefaultRE";
    ACOneConstantInteger[ACOneConstantInteger["TimezoneArrayIndexAtAceServer"] = 29] = "TimezoneArrayIndexAtAceServer";
    ACOneConstantInteger[ACOneConstantInteger["VtVisitCountMax"] = 11] = "VtVisitCountMax";
})(ACOneConstantInteger || (ACOneConstantInteger = {}));
var ACOneConstantInteger$1 = ACOneConstantInteger;

var TP;
(function (TP) {
    TP["UNKNOWN"] = "unknown";
    TP["CART"] = "cart";
    TP["LINK"] = "link";
    TP["MCLICK"] = "mclick";
    TP["SITE"] = "site";
    TP["TEL"] = "tel";
})(TP || (TP = {}));
var TP$1 = TP;

var JN;
(function (JN) {
    JN["Unknown"] = "";
    JN["Join"] = "join";
    JN["Withdraw"] = "withdraw";
})(JN || (JN = {}));
var JN$1 = JN;

var ACEParametersForOne = /** @class */ (function (_super) {
    __extends(ACEParametersForOne, _super);
    function ACEParametersForOne() {
        return _super.call(this) || this;
    }
    ACEParametersForOne.getInstance = function () {
        return this.instance || (this.instance = new this());
    };
    ACEParametersForOne.prototype.getADELD = function () {
        if (isEmpty(this.adeld)) {
            this.adeld = ADID$1.disable;
        }
        return this.adeld;
    };
    ACEParametersForOne.prototype.setADELD = function (value) {
        this.adeld = value ? ADID$1.enable : ADID$1.disable;
    };
    ACEParametersForOne.prototype.getADID = function () {
        if (isEmpty(this.adid)) {
            this.adid = ADID$1.defaultADID;
        }
        return this.adid;
    };
    ACEParametersForOne.prototype.setADID = function (value) {
        if (isEmpty(value)) {
            this.adid = ADID$1.defaultADID;
            this.setADELD(false);
        }
        else {
            this.setADELD(true);
            this.adid = value;
        }
    };
    ACEParametersForOne.prototype.getAG = function () {
        if (this.ag < 0) {
            this.ag = 0;
        }
        return this.ag;
    };
    ACEParametersForOne.prototype.setAG = function (value) {
        if (value < 0) {
            value = 0;
        }
        this.ag = value;
    };
    ACEParametersForOne.prototype.getAMT = function () {
        if (isEmpty(this.amt)) {
            this.amt = ACECONSTANT$1.EMPTY;
        }
        return this.amt;
    };
    ACEParametersForOne.prototype.setAMT = function (value) {
        if (isEmpty(value)) {
            this.amt = ACECONSTANT$1.EMPTY;
        }
        else {
            this.amt = value;
        }
    };
    ACEParametersForOne.prototype.getCE = function () {
        if (isEmpty(this.ce)) {
            this.ce = ACOneConstant$1.DefaultCE;
        }
        return this.ce;
    };
    ACEParametersForOne.prototype.setCE = function (value) {
        if (isEmpty(value)) {
            this.ce = ACOneConstant$1.DefaultCE;
        }
        else {
            this.ce = value;
        }
    };
    ACEParametersForOne.prototype.getCT = function () {
        if (isEmpty(this.ct)) {
            this.ct = ACECONSTANT$1.EMPTY;
        }
        return this.ct;
    };
    ACEParametersForOne.prototype.setCT = function (value) {
        if (isEmpty(value)) {
            this.ct = ACECONSTANT$1.EMPTY;
        }
        else {
            this.ct = value;
        }
    };
    ACEParametersForOne.prototype.getDM = function () {
        if (isEmpty(this.dm)) {
            this.dm = ACECONSTANT$1.EMPTY;
        }
        return this.dm;
    };
    ACEParametersForOne.prototype.setDM = function (value) {
        if (isEmpty(value)) {
            this.dm = ACECONSTANT$1.EMPTY;
        }
        else {
            this.dm = value;
        }
    };
    ACEParametersForOne.prototype.getGD = function () {
        if (isEmpty(this.gd)) {
            this.gd = exports.ACEGender.Unknown;
        }
        return this.gd;
    };
    ACEParametersForOne.prototype.setGD = function (value) {
        if (isEmpty(value)) {
            this.gd = exports.ACEGender.Unknown;
        }
        else {
            this.gd = value;
        }
    };
    ACEParametersForOne.prototype.getID = function () {
        if (isEmpty(this._id)) {
            this._id = ACECONSTANT$1.EMPTY;
        }
        return this._id;
    };
    ACEParametersForOne.prototype.setID = function (value) {
        if (isEmpty(value)) {
            this._id = ACECONSTANT$1.EMPTY;
        }
        else {
            this._id = value;
        }
    };
    ACEParametersForOne.prototype.getInstallReferrer = function (callback) {
        if (!global.Promise) {
            ACELog.d(ACEParametersForOne._TAG, 'getInstallReferrer not support promise.');
            // AsyncStorage.getItem(ACECONSTANT.InstallReferrer, (err, result) => {
            //   ACELog.d(ACEParametersForOne._TAG, `${ACECONSTANT.InstallReferrer}: ${result}`)
            //   if (callback) {
            //     callback(err, {
            //       getKey: ACECONSTANT.InstallReferrer,
            //       getValue: result,
            //     })
            //   }
            // })
            if (callback) {
                callback(new Error('in getInstallReferrer::err'), {
                    getKey: ACECONSTANT$1.InstallReferrer,
                    getValue: 'in getInstallReferrer::result',
                });
            }
        }
        else {
            ACELog.d(ACEParametersForOne._TAG, 'getInstallReferrer support promise.');
            return new Promise(function (resolve, reject) {
                // AsyncStorage.getItem(ACECONSTANT.InstallReferrer, (err, result) => {
                //   ACELog.d(ACEParametersForOne._TAG, `${ACECONSTANT.InstallReferrer}: ${result}`)
                //   if (callback) {
                //     callback(err, {
                //       getKey: ACECONSTANT.InstallReferrer,
                //       getValue: result,
                //     })
                //   } else {
                //     if (err) {
                //       reject(err)
                //     } else {
                //       resolve({
                //         getKey: ACECONSTANT.InstallReferrer,
                //         getValue: result,
                //       })
                //     }
                //   }
                // })
                if (callback) {
                    callback(new Error('in getInstallReferrer::err'), {
                        getKey: ACECONSTANT$1.InstallReferrer,
                        getValue: 'in getInstallReferrer::result',
                    });
                }
                else {
                    resolve({
                        getKey: ACECONSTANT$1.InstallReferrer,
                        getValue: 'in getInstallReferrer::result',
                    });
                }
            });
        }
    };
    ACEParametersForOne.prototype.setInstallReferrer = function (value, callback) {
        if (isEmpty(value)) {
            value = ACECONSTANT$1.EMPTY;
        }
        ACELog.d(ACEParametersForOne._TAG, "".concat(ACECONSTANT$1.InstallReferrer, ": ").concat(value));
        if (!global.Promise) {
            ACELog.d(ACEParametersForOne._TAG, 'setInstallReferrer not support promise.');
            // AsyncStorage.setItem(ACECONSTANT.InstallReferrer, value, err => {
            //   if (callback) {
            //     callback(err, {
            //       getKey: ACECONSTANT.InstallReferrer,
            //       getValue: value,
            //     })
            //   }
            // })
            if (callback) {
                callback(new Error('in setInstallReferrer::err'), {
                    getKey: ACECONSTANT$1.InstallReferrer,
                    getValue: 'in setInstallReferrer::result',
                });
            }
        }
        else {
            ACELog.d(ACEParametersForOne._TAG, 'setInstallReferrer support promise.');
            return new Promise(function (resolve, reject) {
                // AsyncStorage.setItem(ACECONSTANT.InstallReferrer, value, err => {
                //   if (callback) {
                //     callback(err, {
                //       getKey: ACECONSTANT.InstallReferrer,
                //       getValue: value,
                //     })
                //   } else {
                //     if (err) {
                //       reject(err)
                //     } else {
                //       resolve({
                //         getKey: ACECONSTANT.InstallReferrer,
                //         getValue: value,
                //       })
                //     }
                //   }
                // })
                if (callback) {
                    callback(new Error('in setInstallReferrer::err'), {
                        getKey: ACECONSTANT$1.InstallReferrer,
                        getValue: 'in setInstallReferrer::result',
                    });
                }
                else {
                    resolve({
                        getKey: ACECONSTANT$1.InstallReferrer,
                        getValue: 'in setInstallReferrer::result',
                    });
                }
            });
        }
    };
    ACEParametersForOne.prototype.getJN = function () {
        if (isEmpty(this.jn)) {
            this.jn = JN$1.Unknown;
        }
        return this.jn;
    };
    ACEParametersForOne.prototype.setJN = function (value) {
        if (isEmpty(value)) {
            this.jn = JN$1.Unknown;
        }
        else {
            this.jn = value;
        }
    };
    ACEParametersForOne.prototype.getKW = function () {
        if (isEmpty(this.kw)) {
            this.kw = ACECONSTANT$1.EMPTY;
        }
        return this.kw;
    };
    ACEParametersForOne.prototype.setKW = function (value) {
        if (isEmpty(value)) {
            this.kw = ACECONSTANT$1.EMPTY;
        }
        else {
            this.kw = value;
        }
    };
    ACEParametersForOne.prototype.getLG = function () {
        if (isEmpty(this.lg)) {
            this.lg = ACECONSTANT$1.EMPTY;
        }
        return this.lg;
    };
    ACEParametersForOne.prototype.setLG = function (value) {
        if (isEmpty(value)) {
            this.lg = ACECONSTANT$1.EMPTY;
        }
        else {
            this.lg = value;
        }
    };
    ACEParametersForOne.prototype.getLL = function () {
        if (isEmpty(this.ll)) {
            this.ll = ACECONSTANT$1.EMPTY;
        }
        return this.ll;
    };
    ACEParametersForOne.prototype.setLL = function (value) {
        if (isEmpty(value)) {
            this.ll = ACECONSTANT$1.EMPTY;
        }
        else {
            this.ll = value;
        }
    };
    ACEParametersForOne.prototype.getMD = function () {
        if (isEmpty(this.md)) {
            this.md = IACBuyMode$1.Unknown;
        }
        return this.md;
    };
    ACEParametersForOne.prototype.setMD = function (value) {
        this.md = value;
    };
    ACEParametersForOne.prototype.getMemberKey = function () {
        if (isEmpty(this.memberKey)) {
            this.memberKey = ACECONSTANT$1.EMPTY;
        }
        return this.memberKey;
    };
    ACEParametersForOne.prototype.setMemberKey = function (value) {
        if (isEmpty(value)) {
            this.memberKey = ACECONSTANT$1.EMPTY;
        }
        else {
            this.memberKey = value;
        }
    };
    ACEParametersForOne.prototype.getMID = function () {
        if (isEmpty(this.mid)) {
            this.mid = ACECONSTANT$1.EMPTY;
        }
        return this.mid;
    };
    ACEParametersForOne.prototype.setMID = function (value) {
        if (isEmpty(value)) {
            this.mid = ACECONSTANT$1.EMPTY;
        }
        else {
            this.mid = value;
        }
    };
    ACEParametersForOne.prototype.getMR = function () {
        if (isEmpty(this.mr)) {
            this.mr = exports.ACEMaritalStatus.Unknown;
        }
        return this.mr;
    };
    ACEParametersForOne.prototype.setMR = function (value) {
        if (isEmpty(value)) {
            this.mr = exports.ACEMaritalStatus.Unknown;
        }
        else {
            this.mr = value;
        }
    };
    ACEParametersForOne.prototype.getONUM = function () {
        if (isEmpty(this.onum)) {
            this.onum = ACECONSTANT$1.EMPTY;
        }
        return this.onum;
    };
    ACEParametersForOne.prototype.setONUM = function (value) {
        if (isEmpty(value)) {
            this.onum = ACECONSTANT$1.EMPTY;
        }
        else {
            this.onum = value;
        }
    };
    ACEParametersForOne.prototype.getPayMethod = function () {
        if (isEmpty(this.payMethod)) {
            this.payMethod = ACECONSTANT$1.EMPTY;
        }
        return this.payMethod;
    };
    ACEParametersForOne.prototype.setPayMethod = function (value) {
        if (isEmpty(value)) {
            this.payMethod = ACECONSTANT$1.EMPTY;
        }
        else {
            this.payMethod = value;
        }
    };
    ACEParametersForOne.prototype.getPD = function () {
        if (isEmpty(this.pd)) {
            this.pd = ACECONSTANT$1.EMPTY;
        }
        return this.pd;
    };
    ACEParametersForOne.prototype.setPD = function (value) {
        if (isEmpty(value)) {
            this.pd = ACECONSTANT$1.EMPTY;
        }
        else {
            this.pd = value;
        }
    };
    ACEParametersForOne.prototype.getProductId = function () {
        if (isEmpty(this.productId)) {
            this.productId = ACECONSTANT$1.EMPTY;
        }
        return this.productId;
    };
    ACEParametersForOne.prototype.setProductId = function (value) {
        if (isEmpty(value)) {
            this.productId = ACECONSTANT$1.EMPTY;
        }
        else {
            this.productId = value;
        }
    };
    ACEParametersForOne.prototype.getPush = function () {
        if (isEmpty(this.push)) {
            this.push = ACECONSTANT$1.EMPTY;
        }
        return this.push;
    };
    ACEParametersForOne.prototype.setPush = function (value) {
        if (isEmpty(value)) {
            this.push = ACECONSTANT$1.EMPTY;
        }
        else {
            this.push = value;
        }
    };
    ACEParametersForOne.prototype.getRE = function () {
        if (this.re < 0) {
            this.re = 0;
        }
        return this.re;
    };
    ACEParametersForOne.prototype.setRE = function (value) {
        if (value < 0) {
            value = 0;
        }
        this.re = value;
    };
    ACEParametersForOne.prototype.clearREF = function () {
        this.ref = ACECONSTANT$1.EMPTY;
    };
    ACEParametersForOne.prototype.getREF = function () {
        if (isEmpty(this.ref)) {
            this.ref = ACECONSTANT$1.BOOKMARK;
        }
        return this.ref;
    };
    ACEParametersForOne.prototype.setREF = function (value) {
        if (isEmpty(value)) {
            this.ref = ACECONSTANT$1.BOOKMARK;
        }
        else {
            this.ref = value;
        }
    };
    ACEParametersForOne.prototype.getRI = function () {
        if (isEmpty(this.ri)) {
            this.ri = ACOneConstant$1.DefaultRI;
        }
        return this.ri;
    };
    ACEParametersForOne.prototype.setRI = function (value) {
        if (isEmpty(value)) {
            this.ri = ACOneConstant$1.DefaultRI;
        }
        else {
            this.ri = value;
        }
    };
    ACEParametersForOne.prototype.getSKEY = function () {
        if (isEmpty(this.skey)) {
            this.skey = ACECONSTANT$1.EMPTY;
        }
        return this.skey;
    };
    ACEParametersForOne.prototype.setSKEY = function (value) {
        if (isEmpty(value)) {
            this.skey = ACECONSTANT$1.EMPTY;
        }
        else {
            this.skey = value;
        }
    };
    ACEParametersForOne.prototype.getSRC = function () {
        if (isEmpty(this.src)) {
            this.src = ACECONSTANT$1.EMPTY;
        }
        return this.src;
    };
    ACEParametersForOne.prototype.setSRC = function (value) {
        if (isEmpty(value)) {
            this.src = ACECONSTANT$1.EMPTY;
        }
        else {
            this.src = value;
        }
    };
    ACEParametersForOne.prototype.getST = function () {
        if (!this.st) {
            this.st = new ACEntityForST();
        }
        return this.st;
    };
    ACEParametersForOne.prototype.setST = function (value) {
        if (!this.st) {
            this.st = new ACEntityForST();
        }
        else {
            this.st.setDeepCopy(value.getMap());
        }
    };
    ACEParametersForOne.prototype.loadST = function (callback) {
        if (!global.Promise) {
            ACELog.d(ACEParametersForOne._TAG, 'loadST not support promise.');
            // AsyncStorage.getItem(ACOneConstantSt.KeyInStorage, (err, result) => {
            //   ACELog.d(ACEParametersForOne._TAG, `${ACOneConstantSt.KeyInStorage}: ${result}`)
            //   if (result) {
            //     this.setST(JSON.parse(result))
            //   }
            //   if (callback) {
            //     callback(err, {
            //       getKey: ACOneConstantSt.KeyInStorage,
            //       getValue: result,
            //     })
            //   }
            // })
            if (callback) {
                callback(new Error('in loadST::err'), {
                    getKey: ACOneConstantSt$1.KeyInStorage,
                    getValue: 'in loadST::result',
                });
            }
        }
        else {
            ACELog.d(ACEParametersForOne._TAG, 'loadST support promise.');
            return new Promise(function (resolve, reject) {
                // AsyncStorage.getItem(ACOneConstantSt.KeyInStorage, (err, result) => {
                //   ACELog.d(ACEParametersForOne._TAG, `${ACOneConstantSt.KeyInStorage}: ${result}`)
                //   if (callback) {
                //     if (result) {
                //       this.setST(JSON.parse(result))
                //     }
                //     callback(err, {
                //       getKey: ACOneConstantSt.KeyInStorage,
                //       getValue: result,
                //     })
                //   } else {
                //     if (err) {
                //       reject(err)
                //     } else {
                //       if (result) {
                //         this.setST(JSON.parse(result))
                //       }
                //       resolve({
                //         getKey: ACOneConstantSt.KeyInStorage,
                //         getValue: result,
                //       })
                //     }
                //   }
                // })
                if (callback) {
                    callback(new Error('in loadST::err'), {
                        getKey: ACOneConstantSt$1.KeyInStorage,
                        getValue: 'in loadST::result',
                    });
                }
                else {
                    resolve({
                        getKey: ACOneConstantSt$1.KeyInStorage,
                        getValue: 'in loadST::result',
                    });
                }
            });
        }
    };
    ACEParametersForOne.prototype.saveST_toInStorage = function (st, callback) {
        JSON.stringify(st);
        if (!global.Promise) {
            // AsyncStorage.setItem(ACOneConstantSt.KeyInStorage, _json, err => {
            //   // ACELog.d(ACEParametersForOne._TAG, `${ACOneConstantSt.KeyInStorage}: ${_json}`)
            //   if (callback) {
            //     callback(err, {
            //       getKey: ACOneConstantSt.KeyInStorage,
            //       getValue: _json,
            //     })
            //   }
            // })
            if (callback) {
                callback(new Error('in saveST_toInStorage::err'), {
                    getKey: ACOneConstantSt$1.KeyInStorage,
                    getValue: 'in saveST_toInStorage::result',
                });
            }
        }
        else {
            return new Promise(function (resolve, reject) {
                // AsyncStorage.setItem(ACOneConstantSt.KeyInStorage, _json, err => {
                //   // ACELog.d(ACEParametersForOne._TAG, `${ACOneConstantSt.KeyInStorage}: ${_json}`)
                //   if (callback) {
                //     callback(err, {
                //       getKey: ACOneConstantSt.KeyInStorage,
                //       getValue: _json,
                //     })
                //   } else {
                //     if (err) {
                //       reject(err)
                //     } else {
                //       resolve({
                //         getKey: ACOneConstantSt.KeyInStorage,
                //         getValue: _json,
                //       })
                //     }
                //   }
                // })
                if (callback) {
                    callback(new Error('in saveST_toInStorage::err'), {
                        getKey: ACOneConstantSt$1.KeyInStorage,
                        getValue: 'in saveST_toInStorage::result',
                    });
                }
                else {
                    resolve({
                        getKey: ACOneConstantSt$1.KeyInStorage,
                        getValue: 'in saveST_toInStorage::result',
                    });
                }
            });
        }
    };
    ACEParametersForOne.prototype.getSTS = function () {
        if (isEmpty(this.sts)) {
            this.sts = ACECONSTANT$1.ZERO;
        }
        return this.sts;
    };
    ACEParametersForOne.prototype.setSTS = function (value) {
        if (isEmpty(value)) {
            this.sts = ACECONSTANT$1.ZERO;
        }
        else {
            this.sts = value;
        }
    };
    ACEParametersForOne.prototype.getSV = function () {
        if (isEmpty(this.sv)) {
            this.sv = ACECONSTANT$1.EMPTY;
        }
        return this.sv;
    };
    ACEParametersForOne.prototype.setSV = function (value) {
        if (isEmpty(value)) {
            this.sv = ACECONSTANT$1.EMPTY;
        }
        else {
            this.sv = value;
        }
    };
    ACEParametersForOne.prototype.getTP = function () {
        if (isEmpty(this.tp)) {
            this.tp = ACECONSTANT$1.EMPTY;
        }
        return this.tp;
    };
    ACEParametersForOne.prototype.setTP = function (value) {
        if (isEmpty(value)) {
            this.tp = TP$1.UNKNOWN;
        }
        else {
            this.tp = value;
        }
    };
    ACEParametersForOne.prototype.getTZ = function () {
        var _timezoneOffset = new Date().getTimezoneOffset() / 60 + ACOneConstantInteger$1.TimezoneArrayIndexAtAceServer;
        if (_timezoneOffset > 24)
            _timezoneOffset -= 24;
        return _timezoneOffset.toString();
    };
    ACEParametersForOne.prototype.getUDF1 = function () {
        if (this.udf1 < 0) {
            this.udf1 = 0;
        }
        return this.udf1;
    };
    ACEParametersForOne.prototype.setUDF1 = function (value) {
        if (value < 0) {
            value = 0;
        }
        this.udf1 = value;
    };
    ACEParametersForOne.prototype.getUDF2 = function () {
        if (this.udf2 < 0) {
            this.udf2 = 0;
        }
        return this.udf2;
    };
    ACEParametersForOne.prototype.setUDF2 = function (value) {
        if (value < 0) {
            value = 0;
        }
        this.udf2 = value;
    };
    ACEParametersForOne.prototype.getUDF3 = function () {
        if (this.udf3 < 0) {
            this.udf3 = 0;
        }
        return this.udf3;
    };
    ACEParametersForOne.prototype.setUDF3 = function (value) {
        if (value < 0) {
            value = 0;
        }
        this.udf3 = value;
    };
    ACEParametersForOne.prototype.getURL = function () {
        if (isEmpty(this.url)) {
            this.url = ACECONSTANT$1.BOOKMARK;
        }
        return this.url;
    };
    ACEParametersForOne.prototype.setURL = function (value) {
        if (isEmpty(value)) {
            this.url = ACECONSTANT$1.BOOKMARK;
        }
        else {
            this.url = value;
        }
    };
    ACEParametersForOne.prototype.getUserID = function () {
        if (isEmpty(this.userId)) {
            this.userId = ACECONSTANT$1.EMPTY;
        }
        return this.userId;
    };
    ACEParametersForOne.prototype.setUserID = function (value) {
        if (isEmpty(value)) {
            this.userId = ACECONSTANT$1.EMPTY;
        }
        else {
            this.userId = value;
        }
    };
    ACEParametersForOne.prototype.getVK = function () {
        if (this.vk < 0) {
            this.vk = SESSION$1.NEW;
        }
        return this.vk;
    };
    ACEParametersForOne.prototype.setVK = function (value) {
        if (value > SESSION$1.NEW) {
            value = SESSION$1.NEW;
        }
        else if (value < SESSION$1.KEEP) {
            value = SESSION$1.KEEP;
        }
        this.vk = value;
    };
    // #region VT
    ACEParametersForOne.prototype.getVT = function () {
        if (!this.vt) {
            this.vt = new ACEntityForVT();
        }
        return this.vt;
    };
    ACEParametersForOne.prototype.setVT = function (value) {
        // ACELog.d(ACEParametersForOne._TAG, `setVT::value`, value)
        // ACELog.d(ACEParametersForOne._TAG, `setVT::before this.vt`, this.vt)
        if (!this.vt) {
            this.vt = new ACEntityForVT();
        }
        this.vt.setDeepCopy(value.getMap());
        // ACELog.d(ACEParametersForOne._TAG, `setVT::after this.vt`, this.vt)
    };
    ACEParametersForOne.prototype.setJSONtoVT = function (value) {
        // ACELog.d(ACEParametersForOne._TAG, `setJSONtoVT::value: ${JSON.stringify(value, null, 2)}`)
        // ACELog.d(ACEParametersForOne._TAG, `setJSONtoVT::before this.vt`, this.vt)
        if (!this.vt) {
            this.vt = new ACEntityForVT();
        }
        this.vt.setDeepCopyForJSON(value);
        // ACELog.d(ACEParametersForOne._TAG, `setJSONtoVT::after this.vt`, this.vt)
    };
    ACEParametersForOne.prototype.setPcStampWhenNotStored = function () {
        if (this.vt) {
            this.vt.setPcStampWhenNotStored();
        }
    };
    ACEParametersForOne.prototype.loadVT = function (callback) {
        if (!global.Promise) {
            // AsyncStorage.getItem(ACOneConstantVt.KeyInStorage, (err, result) => {
            //   ACELog.d(ACEParametersForOne._TAG, 'in loadVT::in cb::result', JSON.parse(result ?? '{"result":"undefined"}'))
            //   if (callback) {
            //     if (err) {
            //       callback(err, {
            //         code: ACEInnerCBResultKey.FailGetVT,
            //         result: ACEInnerCBResultKey[ACEInnerCBResultKey.FailGetVT],
            //       })
            //     } else {
            //       if (result) {
            //         this.setJSONtoVT(JSON.parse(result))
            //         callback(err, {
            //           code: ACEInnerCBResultKey.Success,
            //           result: ACEInnerCBResultKey[ACEInnerCBResultKey.Success],
            //         })
            //       } else {
            //         callback(err, {
            //           code: ACEInnerCBResultKey.NotExistKey,
            //           result: ACEInnerCBResultKey[ACEInnerCBResultKey.NotExistKey],
            //         })
            //       }
            //     }
            //   }
            // })
            if (callback) {
                callback(new Error('in loadVT::err'), {
                    code: ACEInnerCBResultKey.Success,
                    result: ACEInnerCBResultKey[ACEInnerCBResultKey.Success],
                });
            }
        }
        else {
            return new Promise(function (resolve, reject) {
                // AsyncStorage.getItem(ACOneConstantVt.KeyInStorage, (err, result) => {
                //   ACELog.d(
                //     ACEParametersForOne._TAG,
                //     'in loadVT::in Promise::result',
                //     JSON.parse(result ?? '{"result":"undefined"}'),
                //   )
                //   if (callback) {
                //     if (err) {
                //       callback(err, {
                //         code: ACEInnerCBResultKey.FailGetVT,
                //         result: ACEInnerCBResultKey[ACEInnerCBResultKey.FailGetVT],
                //       })
                //     } else {
                //       if (result) {
                //         this.setJSONtoVT(JSON.parse(result))
                //         callback(err, {
                //           code: ACEInnerCBResultKey.Success,
                //           result: ACEInnerCBResultKey[ACEInnerCBResultKey.Success],
                //         })
                //       } else {
                //         callback(err, {
                //           code: ACEInnerCBResultKey.NotExistKey,
                //           result: ACEInnerCBResultKey[ACEInnerCBResultKey.NotExistKey],
                //         })
                //       }
                //     }
                //   } else {
                //     if (err) {
                //       reject(err)
                //     } else {
                //       if (result) {
                //         this.setJSONtoVT(JSON.parse(result))
                //         resolve({
                //           code: ACEInnerCBResultKey.Success,
                //           result: ACEInnerCBResultKey[ACEInnerCBResultKey.Success],
                //         })
                //       } else {
                //         resolve({
                //           code: ACEInnerCBResultKey.NotExistKey,
                //           result: ACEInnerCBResultKey[ACEInnerCBResultKey.NotExistKey],
                //         })
                //       }
                //     }
                //   }
                // })
                if (callback) {
                    callback(new Error('in loadVT::err'), {
                        code: ACEInnerCBResultKey.Success,
                        result: ACEInnerCBResultKey[ACEInnerCBResultKey.Success],
                    });
                }
                else {
                    resolve({
                        code: ACEInnerCBResultKey.Success,
                        result: ACEInnerCBResultKey[ACEInnerCBResultKey.Success],
                    });
                }
            });
        }
    };
    ACEParametersForOne.prototype.saveVT_toInStorage = function (vt, callback) {
        JSON.stringify(vt);
        if (!global.Promise) {
            // AsyncStorage.setItem(ACOneConstantVt.KeyInStorage, _json, err => {
            //   // ACELog.d(ACEParametersForOne._TAG, `${ACOneConstantSt.KeyInStorage}: ${_json}`)
            //   if (callback) {
            //     callback(err, {
            //       getKey: ACOneConstantVt.KeyInStorage,
            //       getValue: _json,
            //     })
            //   }
            // })
            if (callback) {
                callback(new Error('in saveVT_toInStorage::err'), {
                    getKey: ACOneConstantVt$1.KeyInStorage,
                    getValue: 'in saveVT_toInStorage::result',
                });
            }
        }
        else {
            return new Promise(function (resolve, reject) {
                // AsyncStorage.setItem(ACOneConstantVt.KeyInStorage, _json, err => {
                //   // ACELog.d(ACEParametersForOne._TAG, `${ACOneConstantSt.KeyInStorage}: ${_json}`)
                //   if (callback) {
                //     callback(err, {
                //       getKey: ACOneConstantVt.KeyInStorage,
                //       getValue: _json,
                //     })
                //   } else {
                //     if (err) {
                //       reject(err)
                //     } else {
                //       resolve({
                //         getKey: ACOneConstantVt.KeyInStorage,
                //         getValue: _json,
                //       })
                //     }
                //   }
                // })
                if (callback) {
                    callback(new Error('in saveVT_toInStorage::err'), {
                        getKey: ACOneConstantVt$1.KeyInStorage,
                        getValue: 'in saveVT_toInStorage::result',
                    });
                }
                else {
                    resolve({
                        getKey: ACOneConstantVt$1.KeyInStorage,
                        getValue: 'in saveVT_toInStorage::result',
                    });
                }
            });
        }
    };
    // #endregion
    ACEParametersForOne.prototype.getParamsToObject = function () {
        return {
            adeld: this.adeld,
            adid: this.adid,
            ag: this.ag,
            push: this.push,
            amt: this.amt,
            ce: this.ce,
            ct: this.ct,
            dm: this.dm,
            gd: this.gd,
            id: this._id,
            jid: this.userId,
            jn: this.jn,
            kw: this.kw,
            lg: this.lg,
            ll: this.ll,
            md: this.md,
            member_key: this.memberKey,
            mid: this.mid,
            mr: this.mr,
            onum: this.onum,
            pay: this.payMethod,
            pd: this.pd,
            pdid: this.productId,
            re: this.re,
            ref: this.ref,
            ri: this.ri,
            skey: this.skey,
            src: this.src,
            st: this.st.getAssembleParams(),
            sts: this.sts,
            sv: this.sv,
            tp: this.tp,
            tz: this.getTZ(),
            udf1: this.udf1,
            udf2: this.udf2,
            udf3: this.udf3,
            url: this.url,
            vk: this.vk,
            vt: this.vt.getAssembleParams(),
        };
    };
    ACEParametersForOne.prototype.getParamsToObjectForLogSend = function () {
        var toParamsObject = this.getParamsToObject();
        delete toParamsObject.push;
        return toParamsObject;
    };
    ACEParametersForOne._TAG = 'paramForOne';
    return ACEParametersForOne;
}(ACEParameters));

// import {Dimensions} from 'react-native'
// import DeviceInfo from 'react-native-device-info'
var ACEParameterUtil = /** @class */ (function () {
    function ACEParameterUtil() {
    }
    ACEParameterUtil.getResolution = function () {
        // return `${Math.floor(Dimensions.get('window').width)}*${Math.floor(Dimensions.get('window').height)}`
        return "000*000";
    };
    ACEParameterUtil.getPackageNameOrBundleID = function () {
        // return DeviceInfo.getBundleId()
        return 'react bundleID';
    };
    ACEParameterUtil.getModel = function () {
        // return DeviceInfo.getModel()
        return 'react model';
    };
    ACEParameterUtil.getSystemName = function () {
        // return DeviceInfo.getSystemName()
        return 'react system name';
    };
    ACEParameterUtil.getSystemVersion = function () {
        // return DeviceInfo.getSystemVersion()
        return 'react system version';
    };
    ACEParameterUtil.getUniqueId = function () {
        // return DeviceInfo.getUniqueId()
        return 'react unique Id';
    };
    ACEParameterUtil.getUserAgentForSDK = function () {
        return "".concat(ACEParameterUtil.getSystemName(), " ").concat(ACEParameterUtil.getSystemVersion(), " ").concat(ACEParameterUtil.getModel(), " on react");
    };
    return ACEParameterUtil;
}());

var ACEofAPIForOne;
(function (ACEofAPIForOne) {
    ACEofAPIForOne[ACEofAPIForOne["AddInCart"] = 110] = "AddInCart";
    ACEofAPIForOne[ACEofAPIForOne["DeleteInCart"] = 111] = "DeleteInCart";
    ACEofAPIForOne[ACEofAPIForOne["TrackLinkEvent"] = 130] = "TrackLinkEvent";
    ACEofAPIForOne[ACEofAPIForOne["TrackTelEvent"] = 131] = "TrackTelEvent";
    ACEofAPIForOne[ACEofAPIForOne["Pairs"] = 170] = "Pairs";
    ACEofAPIForOne[ACEofAPIForOne["PairsWithProduct"] = 171] = "PairsWithProduct";
    ACEofAPIForOne[ACEofAPIForOne["PlWithPage"] = 100] = "PlWithPage";
    ACEofAPIForOne[ACEofAPIForOne["AppearProduct"] = 101] = "AppearProduct";
    ACEofAPIForOne[ACEofAPIForOne["Buy"] = 102] = "Buy";
    ACEofAPIForOne[ACEofAPIForOne["Leave"] = 150] = "Leave";
    ACEofAPIForOne[ACEofAPIForOne["Join"] = 151] = "Join";
    ACEofAPIForOne[ACEofAPIForOne["Login"] = 152] = "Login";
    ACEofAPIForOne[ACEofAPIForOne["Search"] = 190] = "Search";
    ACEofAPIForOne[ACEofAPIForOne["Policy"] = 1000] = "Policy";
    ACEofAPIForOne[ACEofAPIForOne["InstallReferrer"] = 3300] = "InstallReferrer";
    ACEofAPIForOne[ACEofAPIForOne["Push"] = 3210] = "Push";
})(ACEofAPIForOne || (ACEofAPIForOne = {}));
var ACEofAPIForOne$1 = ACEofAPIForOne;

var ACEParameterUtilForOne = /** @class */ (function () {
    function ACEParameterUtilForOne() {
        this._enablePrivacyPolicy = false;
    }
    ACEParameterUtilForOne.getInstance = function () {
        return this.instance || (this.instance = new this());
    };
    ACEParameterUtilForOne.prototype.loadUniqueKeyForSDK = function () {
        ACEParametersForOne.getInstance().setPcStampWhenNotStored();
    };
    ACEParameterUtilForOne.prototype.setFirstLogParameters = function () {
        throw new Error('Method not implemented.');
    };
    ACEParameterUtilForOne.prototype.setLogSource = function (value) {
        throw new Error('Method not implemented.');
    };
    ACEParameterUtilForOne.prototype.getSdkDetails = function (json) {
        throw new Error('Method not implemented.');
    };
    ACEParameterUtilForOne.prototype.setAdvertisingIdentifier = function (advertisingIdentifier) {
        ACEParametersForOne.getInstance().setADID(advertisingIdentifier);
    };
    ACEParameterUtilForOne.prototype.isDuplicateInstallReferrer = function (value) {
        return new Promise(function (resolve, reject) {
            ACEParametersForOne.getInstance()
                .getInstallReferrer()
                .then(function (result) {
                ACELog.d(ACEParameterUtilForOne._TAG, "result: ".concat(JSON.stringify(result), ", new referrer: ").concat(value));
                if (!isEmpty(result.getValue)) {
                    ACELog.d(ACEParameterUtilForOne._TAG, 'Already stored referrer.');
                    if (result.getValue == value) {
                        ACELog.d(ACEParameterUtilForOne._TAG, 'Same referrer');
                    }
                    else {
                        resolve(true);
                        return;
                    }
                }
                reject(false);
            })
                .catch(function (err) {
                ACELog.d(ACEParameterUtilForOne._TAG, "err: ".concat(JSON.stringify(err)));
                reject(false);
            });
        });
    };
    ACEParameterUtilForOne.prototype.getTS = function () {
        return JSON.stringify({ st: this.getST().getObjectForTS(), vt: this.getVT().getObjectForTS() });
    };
    ACEParameterUtilForOne.prototype.initParameters = function (key, enablePrivacyPolicy, callback) {
        var _this = this;
        this._enablePrivacyPolicy = enablePrivacyPolicy;
        var _parametersForOne = ACEParametersForOne.getInstance();
        _parametersForOne.getCE();
        _parametersForOne.setDM(ACEParameterUtil.getResolution());
        _parametersForOne.setMID(key);
        _parametersForOne.setIsNeedSetNewSession(false);
        _parametersForOne.setPatch(ACECONSTANT$1.PATCH);
        _parametersForOne.setRE(ACOneConstantInteger$1.DefaultRE);
        _parametersForOne.setREF(ACECONSTANT$1.BOOKMARK);
        _parametersForOne.setRI(ACOneConstant$1.DefaultRI);
        this.loadSV();
        _parametersForOne.getUDF1();
        _parametersForOne.getUDF2();
        _parametersForOne.getUDF3();
        this.setSTS(ACECONSTANT$1.ZERO);
        _parametersForOne.setADELD(false);
        _parametersForOne.setADID(ACEParameterUtil.getUniqueId());
        ACELog.d(ACEParameterUtilForOne._TAG, "tz: ".concat(_parametersForOne.getTZ()));
        this.setNewSession();
        ACS.setPackageNameOrBundleID(ACEParameterUtil.getPackageNameOrBundleID());
        var promiseWorkLoadVT = this.loadVT();
        return new Promise(function (resolve, reject) {
            Promise.all([promiseWorkLoadVT])
                .then(function (res) {
                ACELog.d(ACEParameterUtilForOne._TAG, 'Promise.all res:', res);
                _this.getVT();
                _this.loadUniqueKeyForSDK();
                ACELog.d(ACEParameterUtilForOne._TAG, 'Promise.all vt:', _this.getVT());
                var response = {
                    taskHash: '0003',
                    code: ACEResultCode.Success,
                    result: ACEConstantCallback[ACEConstantCallback.Success],
                    message: 'SDK init step one done',
                    apiName: 'init',
                };
                if (callback) {
                    callback(undefined, response);
                }
                else {
                    resolve(response);
                }
            })
                .catch(function (err) {
                ACELog.d(ACEParameterUtilForOne._TAG, 'Promise.all err:', err);
                var response = {
                    taskHash: '0004',
                    code: ACEResultCode.FailAfterRequest,
                    result: ACEConstantCallback[ACEConstantCallback.Failed],
                    message: 'SDK init step one fail',
                    apiName: 'init',
                };
                if (callback) {
                    callback(err, response);
                }
                else {
                    reject(response);
                }
            });
        });
    };
    ACEParameterUtilForOne.prototype.getBuyMode = function () {
        return ACEParametersForOne.getInstance().getMD();
    };
    ACEParameterUtilForOne.prototype.setBuyMode = function (value) {
        ACEParametersForOne.getInstance().setMD(value);
    };
    ACEParameterUtilForOne.prototype.clearBuyMode = function () {
        ACEParametersForOne.getInstance().setMD(IACBuyMode$1.Unknown);
    };
    ACEParameterUtilForOne.prototype.setKeyword = function (value) {
        ACEParametersForOne.getInstance().setSKEY(value);
    };
    ACEParameterUtilForOne.prototype.clearKeyword = function () {
        this.setKeyword(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.getKW = function () {
        return ACEParametersForOne.getInstance().getKW();
    };
    ACEParameterUtilForOne.prototype.setKW = function (value) {
        ACEParametersForOne.getInstance().setKW(value);
    };
    ACEParameterUtilForOne.prototype.clearKW = function () {
        ACEParametersForOne.getInstance().setKW(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.setJN = function (value) {
        var _jn = JN$1.Unknown;
        switch (value) {
            case ACEofAPIForOne$1.Join:
                _jn = JN$1.Join;
                break;
            case ACEofAPIForOne$1.Leave:
                _jn = JN$1.Withdraw;
                break;
        }
        ACEParametersForOne.getInstance().setJN(_jn);
    };
    ACEParameterUtilForOne.prototype.clearJn = function () {
        this.setJN(-1);
    };
    ACEParameterUtilForOne.prototype.clearMemberKey = function () {
        ACEParametersForOne.getInstance().setMemberKey(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.setMemberKey = function (value) {
        ACEParametersForOne.getInstance().setMemberKey(value);
    };
    ACEParameterUtilForOne.prototype.getOrderNumber = function () {
        return ACEParametersForOne.getInstance().getONUM();
    };
    ACEParameterUtilForOne.prototype.setOrderNumber = function (value) {
        ACEParametersForOne.getInstance().setONUM(value);
    };
    ACEParameterUtilForOne.prototype.clearOrderNumber = function () {
        ACEParametersForOne.getInstance().setONUM(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.getPaymentMethod = function () {
        return ACEParametersForOne.getInstance().getPayMethod();
    };
    ACEParameterUtilForOne.prototype.setPaymentMethod = function (value) {
        ACEParametersForOne.getInstance().setPayMethod(value);
    };
    ACEParameterUtilForOne.prototype.clearPayMethod = function () {
        ACEParametersForOne.getInstance().setPayMethod(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.setProduct = function (value) {
        ACEParametersForOne.getInstance().setLL(value);
    };
    ACEParameterUtilForOne.prototype.clearProduct = function () {
        ACEParametersForOne.getInstance().setLL(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.clearProductId = function () {
        ACEParametersForOne.getInstance().setProductId(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.setProductId = function (value) {
        ACEParametersForOne.getInstance().setProductId(value);
    };
    ACEParameterUtilForOne.prototype.clearProductName = function () {
        ACEParametersForOne.getInstance().setPD(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.setProductName = function (value) {
        ACEParametersForOne.getInstance().setPD(value);
    };
    ACEParameterUtilForOne.prototype.clearProductCategoryName = function () {
        ACEParametersForOne.getInstance().setCT(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.setProductCategoryName = function (value) {
        ACEParametersForOne.getInstance().setCT(value);
    };
    ACEParameterUtilForOne.prototype.clearProductPrice = function () {
        ACEParametersForOne.getInstance().setAMT(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.setProductPrice = function (value) {
        ACEParametersForOne.getInstance().setAMT(value);
    };
    //#region Session
    ACEParameterUtilForOne.prototype.isFirstLog = function () {
        return this.getSession() == SESSION$1.NEW;
    };
    ACEParameterUtilForOne.prototype.resetSessionAndParameterAfterSend = function () {
        this.resetSessionAndParameterAfterSendWithParams(undefined);
    };
    ACEParameterUtilForOne.prototype.resetSessionAndParameterAfterSendWithParams = function (params) {
        var _this = this;
        if (this.isFirstLog()) {
            this.setKeepSession();
        }
        if (params) {
            var _st_1 = params.st;
            var _vt_1 = params.vt;
            if (_st_1) {
                if (_vt_1) {
                    return new Promise(function (resolve, reject) {
                        _this.saveST_toInStorage(_st_1)
                            .then(function (result) {
                            ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::save willUpdate St');
                            ACELog.d(ACEParameterUtilForOne._TAG, "resetSession::result: ".concat(result.getKey), JSON.parse(result.getValue));
                            return _this.saveVT_toInStorage(_vt_1);
                        })
                            .then(function (result) {
                            ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::save willUpdate Vt');
                            ACELog.d(ACEParameterUtilForOne._TAG, "resetSession::result: ".concat(result.getKey), JSON.parse(result.getValue));
                            resolve(true);
                        })
                            .catch(function (err) {
                            ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::fail willUpdate S/Vt.');
                            ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::err', err);
                            reject(false);
                        });
                    });
                }
                else {
                    return new Promise(function (resolve, reject) {
                        _this.saveST_toInStorage(_st_1)
                            .then(function (result) {
                            ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::save willUpdate St');
                            ACELog.d(ACEParameterUtilForOne._TAG, "resetSession::result: ".concat(result.getKey), JSON.parse(result.getValue));
                            resolve(true);
                        })
                            .catch(function (err) {
                            ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::fail willUpdate only St.');
                            ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::err', err);
                            reject(false);
                        });
                    });
                }
            }
            if (_vt_1) {
                return new Promise(function (resolve, reject) {
                    _this.saveVT_toInStorage(_vt_1)
                        .then(function (result) {
                        ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::save willUpdate Vt');
                        ACELog.d(ACEParameterUtilForOne._TAG, "resetSession::result: ".concat(result.getKey), JSON.parse(result.getValue));
                        resolve(true);
                    })
                        .catch(function (err) {
                        ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::fail willUpdate only Vt.');
                        ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::err', err);
                        reject(false);
                    });
                });
            }
        }
        return new Promise(function (resolve, reject) {
            ACELog.d(ACEParameterUtilForOne._TAG, 'not save S/Vt.');
            resolve(true);
        });
    };
    ACEParameterUtilForOne.prototype.setNewSession = function () {
        ACEParametersForOne.getInstance().setVK(SESSION$1.NEW);
    };
    ACEParameterUtilForOne.prototype.getSession = function () {
        return ACEParametersForOne.getInstance().getVK();
    };
    ACEParameterUtilForOne.prototype.setKeepSession = function () {
        ACEParametersForOne.getInstance().setVK(SESSION$1.KEEP);
    };
    //#endregion
    //#region src
    ACEParameterUtilForOne.prototype.clearSRC = function () {
        ACEParametersForOne.getInstance().setSRC(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.getSRC = function () {
        return ACEParametersForOne.getInstance().getSRC();
    };
    ACEParameterUtilForOne.prototype.setSRC = function (value) {
        ACEParametersForOne.getInstance().setSRC(value);
    };
    //#endregion
    //#region Update ST & VT
    ACEParameterUtilForOne.prototype.updateSTnVT = function (willUpdateVt) {
        var _now = new Date();
        var _randomString = getRandom6CharForSTVT();
        if (this.isFirstLog()) {
            this.setStartTS(_now, _randomString);
            this.setSTS(this.getStartTSGoldMaster());
            if (this.getVT().isEmptyAtVTS()) {
                ACELog.d(ACEParameterUtilForOne._TAG, 'update vts');
                this.setVTSButNotStorage(_now, _randomString);
            }
            else {
                ACELog.d(ACEParameterUtilForOne._TAG, "vts is >>".concat(this.getVT().getVTS(), "<<"));
            }
            this.setVTSAtObject(willUpdateVt, _now, _randomString);
            var visitCount = this.getVisitCount();
            ACELog.d(ACEParameterUtilForOne._TAG, "visitCount is >>".concat(visitCount, "<<"));
            if (visitCount == 0) {
                ACELog.d(ACEParameterUtilForOne._TAG, 'visitCount is 0');
                this.setVisitCountAtObject(willUpdateVt, 2);
            }
            else {
                this.setVisitCountAtObject(willUpdateVt, visitCount + 1);
            }
            if (this.getVT().isEmptyAtBuyTimeTS()) {
                this.setBuyTimeTSButNotStorage(_now.valueOf().toString(), _randomString);
                this.setBuyTimeTSAtObject(willUpdateVt, _now.valueOf().toString(), _randomString);
                this.setBuyCountAtObject(willUpdateVt, 1);
            }
        }
        else {
            ACELog.d(ACEParameterUtilForOne._TAG, "not firstLog: ".concat(this.getSession(), ", ").concat(SESSION$1[this.getSession()]));
        }
        this.setGetTS(_now, _randomString);
        return this.saveVT_toInStorage(this.getVT());
    };
    //#endregion
    //#region ST
    ACEParameterUtilForOne.prototype.getST = function () {
        return ACEParametersForOne.getInstance().getST();
    };
    ACEParameterUtilForOne.prototype.setGetTS = function (value, random6Value) {
        var _parametersForOne = ACEParametersForOne.getInstance();
        _parametersForOne.getST().setGetTS(value);
        _parametersForOne.getST().setRandom6ForGetTS(random6Value);
    };
    ACEParameterUtilForOne.prototype.makeInsenginetTS = function () {
        this.setInsenginetTS(new Date(), getRandom6CharForSTVT());
    };
    ACEParameterUtilForOne.prototype.setInsenginetTS = function (value, random6Value) {
        var _parametersForOne = ACEParametersForOne.getInstance();
        _parametersForOne.getST().setInsenginetTS(value);
        _parametersForOne.getST().setRandom6ForInsenginetTS(random6Value);
    };
    ACEParameterUtilForOne.prototype.saveST_toInStorage = function (st, callback) {
        return ACEParametersForOne.getInstance().saveST_toInStorage(st, callback);
    };
    ACEParameterUtilForOne.prototype.setStartTS = function (value, random6Value) {
        var _parametersForOne = ACEParametersForOne.getInstance();
        _parametersForOne.getST().setStartTS(value);
        _parametersForOne.getST().setRandom6ForStartTS(random6Value);
    };
    ACEParameterUtilForOne.prototype.getStartTSGoldMaster = function () {
        var _parametersForOne = ACEParametersForOne.getInstance();
        return _parametersForOne.getST().getStartTSGoldMaster();
    };
    ACEParameterUtilForOne.prototype.getSTS = function () {
        return ACEParametersForOne.getInstance().getSTS();
    };
    ACEParameterUtilForOne.prototype.setSTS = function (value) {
        return ACEParametersForOne.getInstance().setSTS(value);
    };
    //#endregion
    ACEParameterUtilForOne.prototype.clearSV = function () {
        ACEParametersForOne.getInstance().setSV(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.loadSV = function () {
        ACEParametersForOne.getInstance().setSV(this.makeSV());
    };
    ACEParameterUtilForOne.prototype.makeSV = function () {
        return "".concat(ACOneConstant$1.DefaultServiceCode).concat(ACS.SDKVersion()).concat(ACOneConstant$1.DefaultNotCustomSDKForCustomer);
    };
    ACEParameterUtilForOne.prototype.setTP = function (value) {
        ACEParametersForOne.getInstance().setTP(value);
    };
    ACEParameterUtilForOne.prototype.setURL = function (value) {
        value = onlyLetteringAtStartIndex(value);
        var _parametersForOne = ACEParametersForOne.getInstance();
        ACELog.d(ACEParameterUtilForOne._TAG, ">>".concat(ACS.getPackageNameOrBundleID(), "/").concat(value, "<<"));
        _parametersForOne.setURL("".concat(ACS.getPackageNameOrBundleID(), "/").concat(value));
    };
    ACEParameterUtilForOne.prototype.updateUrlToRef = function (value) {
        var _parametersForOne = ACEParametersForOne.getInstance();
        _parametersForOne.setREF(_parametersForOne.getURL());
        this.setURL(value);
    };
    ACEParameterUtilForOne.prototype.clearREF = function () {
        ACEParametersForOne.getInstance().clearREF();
    };
    ACEParameterUtilForOne.prototype.setRefWithBundleID = function (value) {
        if (isEmpty(value)) {
            value = ACECONSTANT$1.EMPTY;
        }
        ACELog.d(ACEParameterUtilForOne._TAG, "value: >>".concat(value, "<<"));
        value = onlyLetteringAtStartIndex(value);
        ACELog.d(ACEParameterUtilForOne._TAG, ">>".concat(ACS.getPackageNameOrBundleID(), "/").concat(value, "<<"));
        ACEParametersForOne.getInstance().setREF("".concat(ACS.getPackageNameOrBundleID(), "/").concat(value));
    };
    ACEParameterUtilForOne.prototype.setRefForTel = function (value) {
        if (isEmpty(value)) {
            value = ACECONSTANT$1.EMPTY;
        }
        ACELog.d(ACEParameterUtilForOne._TAG, "value: >>".concat(value, "<<"));
        value = onlyLetteringAtStartIndex(value);
        ACELog.d(ACEParameterUtilForOne._TAG, ">>tel:".concat(value, "<<"));
        ACEParametersForOne.getInstance().setREF("tel:".concat(value));
    };
    // #region VT
    ACEParameterUtilForOne.prototype.setBuyCountAtObject = function (willUpdateVt, value) {
        willUpdateVt.setBuyCount(value);
    };
    ACEParameterUtilForOne.prototype.getBuyTimeTS = function () {
        return ACEParametersForOne.getInstance().getVT().getBuyTimeTS();
    };
    ACEParameterUtilForOne.prototype.setBuyTimeTSButNotStorage = function (value, random) {
        this.getVT().setBuyTimeTS(value);
        this.getVT().setRandom6ForBuyTimeTS(random);
    };
    ACEParameterUtilForOne.prototype.setBuyTimeTSAtObject = function (willUpdateVt, value, random) {
        willUpdateVt.setBuyTimeTS(value);
        willUpdateVt.setRandom6ForBuyTimeTS(random);
    };
    ACEParameterUtilForOne.prototype.getVisitCount = function () {
        return stringToNumber(this.getVT().getVisitCount(), 10);
    };
    ACEParameterUtilForOne.prototype.setVisitCountAtObject = function (willUpdateVt, value) {
        willUpdateVt.setVisitCount(value);
    };
    ACEParameterUtilForOne.prototype.getVT = function () {
        return ACEParametersForOne.getInstance().getVT();
    };
    ACEParameterUtilForOne.prototype.loadVT = function (callback) {
        return ACEParametersForOne.getInstance().loadVT(callback);
    };
    ACEParameterUtilForOne.prototype.setVTSButNotStorage = function (value, random) {
        this.getVT().setVTS(value);
        this.getVT().setRandom6ForVTS(random);
    };
    ACEParameterUtilForOne.prototype.setVTSAtObject = function (willUpdateVt, value, random) {
        willUpdateVt.setVTS(value);
        willUpdateVt.setRandom6ForVTS(random);
    };
    ACEParameterUtilForOne.prototype.saveVT_toInStorage = function (vt, callback) {
        return ACEParametersForOne.getInstance().saveVT_toInStorage(vt, callback);
    };
    // #endregion
    //#region User
    ACEParameterUtilForOne.prototype.getUserAge = function () {
        return ACEParametersForOne.getInstance().getAG();
    };
    ACEParameterUtilForOne.prototype.setUserAge = function (value) {
        ACEParametersForOne.getInstance().setAG(value);
    };
    ACEParameterUtilForOne.prototype.clearUserAge = function () {
        this.setUserAge(0);
    };
    ACEParameterUtilForOne.prototype.getUserGender = function () {
        return exports.ACEGender[ACEParametersForOne.getInstance().getGD()];
    };
    ACEParameterUtilForOne.prototype.setUserGender = function (value) {
        ACEParametersForOne.getInstance().setGD(value);
    };
    ACEParameterUtilForOne.prototype.clearUserGender = function () {
        this.setUserGender(exports.ACEGender.Unknown);
    };
    ACEParameterUtilForOne.prototype.getLoginUserID = function () {
        return ACEParametersForOne.getInstance().getID();
    };
    ACEParameterUtilForOne.prototype.setLoginUserID = function (value) {
        if (!isEmpty(value) && this._enablePrivacyPolicy) {
            value = ACOneConstant$1.EnabledPrivacyPolicyUserID;
        }
        ACEParametersForOne.getInstance().setID(value);
    };
    ACEParameterUtilForOne.prototype.clearLoginUserID = function () {
        ACEParametersForOne.getInstance().setID(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.getJoinOrLeaveUserID = function () {
        return ACEParametersForOne.getInstance().getUserID();
    };
    ACEParameterUtilForOne.prototype.setJoinOrLeaveUserID = function (value) {
        if (!isEmpty(value) && this._enablePrivacyPolicy) {
            value = ACOneConstant$1.EnabledPrivacyPolicyUserID;
        }
        ACEParametersForOne.getInstance().setUserID(value);
    };
    ACEParameterUtilForOne.prototype.clearJoinOrLeaveUserID = function () {
        ACEParametersForOne.getInstance().setUserID(ACECONSTANT$1.EMPTY);
    };
    ACEParameterUtilForOne.prototype.getUserMaritalStatus = function () {
        return exports.ACEMaritalStatus[ACEParametersForOne.getInstance().getMR()];
    };
    ACEParameterUtilForOne.prototype.setUserMaritalStatus = function (value) {
        ACEParametersForOne.getInstance().setMR(value);
    };
    ACEParameterUtilForOne.prototype.clearUserMaritalStatus = function () {
        this.setUserMaritalStatus(exports.ACEMaritalStatus.Unknown);
    };
    //#endregion
    ACEParameterUtilForOne.prototype.setterForString = function (key, value) { };
    ACEParameterUtilForOne.prototype.getParamsToObjectForLogSend = function () {
        return ACEParametersForOne.getInstance().getParamsToObjectForLogSend();
    };
    ACEParameterUtilForOne._TAG = 'paramUtilForOne';
    return ACEParameterUtilForOne;
}());

var ACENetworkResult = /** @class */ (function () {
    function ACENetworkResult(response) {
        this._responseCode = response.status;
        this._responseBody = response.data;
        this._responseHeaders = response.headers;
    }
    ACENetworkResult.prototype.getCode = function () {
        return this._responseCode;
    };
    ACENetworkResult.prototype.getBody = function () {
        return this._responseBody;
    };
    ACENetworkResult.prototype.getHeaders = function () {
        return this._responseHeaders;
    };
    return ACENetworkResult;
}());

var Task = /** @class */ (function () {
    function Task(params) {
        this._logSource = params.type;
        this._date = Date.now();
    }
    Task.prototype.doWork = function (callback) {
        ACELog.d(Task._p0TAG, "doWork: ".concat(ACEofAPIForOne$1[this._logSource]));
    };
    Task.prototype.didWork = function (callback) {
        ACELog.d(Task._p0TAG, "didWork: ".concat(ACEofAPIForOne$1[this._logSource]));
    };
    Task.prototype.doneWork = function (callback) {
        ACELog.d(Task._p0TAG, "doneWork: ".concat(ACEofAPIForOne$1[this._logSource]));
    };
    Task.prototype.completed = function (response) {
        ACELog.d(Task._p0TAG, "completed: ".concat(ACEofAPIForOne$1[this._logSource]));
        this._response = new ACENetworkResult(response);
    };
    Task.prototype.failed = function (err) {
        ACELog.d(Task._p0TAG, "failed: ".concat(ACEofAPIForOne$1[this._logSource]), err);
        this._error = JSON.parse(JSON.stringify(err));
    };
    Task.prototype.getLogSource = function () {
        return this._logSource;
    };
    Task.prototype.getDescription = function () {
        return ACEofAPIForOne$1[this._logSource];
    };
    Task.prototype.getCreateTime = function () {
        return this._date;
    };
    Task.prototype.getTaskHash = function () {
        return this.getCreateTime().valueOf().toString();
    };
    Task.prototype.getNetworkResult = function () {
        return this._response;
    };
    Task.prototype.getNetworkError = function () {
        return this._error;
    };
    Task.prototype.getNetworkResultToResponseToCaller = function () {
        var _a;
        if (this._response) {
            if (ACELog.isDevMode()) {
                return {
                    config: (_a = this._response) !== null && _a !== void 0 ? _a : {},
                };
            }
            else {
                return {
                    config: {},
                };
            }
        }
        else {
            return {
                config: {},
            };
        }
    };
    Task.prototype.getNetworkErrorToResponseToCaller = function () {
        var _a, _b, _c, _d, _e;
        if (this._error) {
            if (ACELog.isDevMode()) {
                return {
                    message: (_a = this._error['message']) !== null && _a !== void 0 ? _a : '',
                    name: (_b = this._error['name']) !== null && _b !== void 0 ? _b : '',
                    config: (_c = this._error['config']) !== null && _c !== void 0 ? _c : {},
                };
            }
            else {
                return {
                    message: (_d = this._error['message']) !== null && _d !== void 0 ? _d : '',
                    name: (_e = this._error['name']) !== null && _e !== void 0 ? _e : '',
                };
            }
        }
        else {
            return {
                message: '',
                name: '',
            };
        }
    };
    Task._p0TAG = 'pTask';
    return Task;
}());

var axios$2 = {exports: {}};

var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

var bind$1 = bind$2;

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

var utils$e = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

var utils$d = utils$e;

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL$3 = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$d.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils$d.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils$d.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils$d.forEach(val, function parseValue(v) {
        if (utils$d.isDate(v)) {
          v = v.toISOString();
        } else if (utils$d.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

var utils$c = utils$e;

function InterceptorManager$1() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager$1.prototype.forEach = function forEach(fn) {
  utils$c.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager$1;

var utils$b = utils$e;

var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$b.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError$3 = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

var enhanceError$2 = enhanceError$3;

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError$3 = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError$2(error, config, code, request, response);
};

var createError$2 = createError$3;

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle$2 = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError$2(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

var utils$a = utils$e;

var cookies$1 = (
  utils$a.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils$a.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils$a.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils$a.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

var isAbsoluteURL = isAbsoluteURL$1;
var combineURLs = combineURLs$1;

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath$2 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

var utils$9 = utils$e;

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils$9.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils$9.trim(line.substr(0, i)).toLowerCase();
    val = utils$9.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

var utils$8 = utils$e;

var isURLSameOrigin$1 = (
  utils$8.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils$8.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

var utils$7 = utils$e;
var settle$1 = settle$2;
var cookies = cookies$1;
var buildURL$2 = buildURL$3;
var buildFullPath$1 = buildFullPath$2;
var parseHeaders = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError$1 = createError$3;

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils$7.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath$1(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL$2(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle$1(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError$1('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError$1('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError$1(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils$7.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$7.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils$7.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

var followRedirects = {exports: {}};

var debug$1;

var debug_1 = function () {
  if (!debug$1) {
    try {
      /* eslint global-require: off */
      debug$1 = require("debug")("follow-redirects");
    }
    catch (error) { /* */ }
    if (typeof debug$1 !== "function") {
      debug$1 = function () { /* */ };
    }
  }
  debug$1.apply(null, arguments);
};

var url$1 = require$$0__default["default"];
var URL = url$1.URL;
var http$1 = require$$1__default["default"];
var https$1 = require$$2__default["default"];
var Writable = require$$3__default["default"].Writable;
var assert = require$$4__default["default"];
var debug = debug_1;

// Create handlers that pass events from native requests
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

// Error types with codes
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded"
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype.abort = function () {
  abortRequest(this._currentRequest);
  this.emit("abort");
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;

  // Destroys the socket on timeout
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }

  // Stops a timeout from triggering
  function clearTimer() {
    // Clear the timeout
    if (self._timeout) {
      clearTimeout(self._timeout);
      self._timeout = null;
    }

    // Clean up all attached listeners
    self.removeListener("abort", clearTimer);
    self.removeListener("error", clearTimer);
    self.removeListener("response", clearTimer);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!self.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Attach callback if passed
  if (callback) {
    this.on("timeout", callback);
  }

  // Start the timer if or when the socket is opened
  if (this.socket) {
    startTimer(this.socket);
  }
  else {
    this._currentRequest.once("socket", startTimer);
  }

  // Clean up on events
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);

  return this;
};

// Proxy all other public ClientRequest methods
[
  "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url$1.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var e = 0; e < events.length; e++) {
    request.on(events[e], eventHandlers[events[e]]);
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.

  // If the response is not a redirect; return it as-is
  var location = response.headers.location;
  if (!location || this._options.followRedirects === false ||
      statusCode < 300 || statusCode >= 400) {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
    return;
  }

  // The response is a redirect, so abort the current request
  abortRequest(this._currentRequest);
  // Discard the remainder of the response to avoid waiting for data
  response.destroy();

  // RFC7231§6.4: A client SHOULD detect and intervene
  // in cyclical redirections (i.e., "infinite" redirection loops).
  if (++this._redirectCount > this._options.maxRedirects) {
    this.emit("error", new TooManyRedirectsError());
    return;
  }

  // RFC7231§6.4: Automatic redirection needs to done with
  // care for methods not known to be safe, […]
  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
  // the request method from POST to GET for the subsequent request.
  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
      // RFC7231§6.4.4: The 303 (See Other) status code indicates that
      // the server is redirecting the user agent to a different resource […]
      // A user agent can perform a retrieval request targeting that URI
      // (a GET or HEAD request if using HTTP) […]
      (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    this._options.method = "GET";
    // Drop a possible entity and headers related to it
    this._requestBodyBuffers = [];
    removeMatchingHeaders(/^content-/i, this._options.headers);
  }

  // Drop the Host header, as the redirect might lead to a different host
  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

  // If the redirect is relative, carry over the host of the last request
  var currentUrlParts = url$1.parse(this._currentUrl);
  var currentHost = currentHostHeader || currentUrlParts.host;
  var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
    url$1.format(Object.assign(currentUrlParts, { host: currentHost }));

  // Determine the URL of the redirection
  var redirectUrl;
  try {
    redirectUrl = url$1.resolve(currentUrl, location);
  }
  catch (cause) {
    this.emit("error", new RedirectionError(cause));
    return;
  }

  // Create the redirected request
  debug("redirecting to", redirectUrl);
  this._isRedirect = true;
  var redirectUrlParts = url$1.parse(redirectUrl);
  Object.assign(this._options, redirectUrlParts);

  // Drop confidential headers when redirecting to a less secure protocol
  // or to a different domain that is not a superdomain
  if (redirectUrlParts.protocol !== currentUrlParts.protocol &&
     redirectUrlParts.protocol !== "https:" ||
     redirectUrlParts.host !== currentHost &&
     !isSubdomain(redirectUrlParts.host, currentHost)) {
    removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
  }

  // Evaluate the beforeRedirect callback
  if (typeof this._options.beforeRedirect === "function") {
    var responseDetails = { headers: response.headers };
    try {
      this._options.beforeRedirect.call(null, this._options, responseDetails);
    }
    catch (err) {
      this.emit("error", err);
      return;
    }
    this._sanitizeOptions(this._options);
  }

  // Perform the redirected request
  try {
    this._performRequest();
  }
  catch (cause) {
    this.emit("error", new RedirectionError(cause));
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters
      if (typeof input === "string") {
        var urlStr = input;
        try {
          input = urlToOptions(new URL(urlStr));
        }
        catch (err) {
          /* istanbul ignore next */
          input = url$1.parse(urlStr);
        }
      }
      else if (URL && (input instanceof URL)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (typeof options === "function") {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return (lastValue === null || typeof lastValue === "undefined") ?
    undefined : String(lastValue).trim();
}

function createErrorType(code, defaultMessage) {
  function CustomError(cause) {
    Error.captureStackTrace(this, this.constructor);
    if (!cause) {
      this.message = defaultMessage;
    }
    else {
      this.message = defaultMessage + ": " + cause.message;
      this.cause = cause;
    }
  }
  CustomError.prototype = new Error();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  CustomError.prototype.code = code;
  return CustomError;
}

function abortRequest(request) {
  for (var e = 0; e < events.length; e++) {
    request.removeListener(events[e], eventHandlers[events[e]]);
  }
  request.on("error", noop);
  request.abort();
}

function isSubdomain(subdomain, domain) {
  const dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}

// Exports
followRedirects.exports = wrap({ http: http$1, https: https$1 });
followRedirects.exports.wrap = wrap;

var _from = "axios@^0.21.1";
var _id = "axios@0.21.4";
var _inBundle = false;
var _integrity = "sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==";
var _location = "/axios";
var _phantomChildren = {
};
var _requested = {
	type: "range",
	registry: true,
	raw: "axios@^0.21.1",
	name: "axios",
	escapedName: "axios",
	rawSpec: "^0.21.1",
	saveSpec: null,
	fetchSpec: "^0.21.1"
};
var _requiredBy = [
	"/"
];
var _resolved = "https://registry.npmjs.org/axios/-/axios-0.21.4.tgz";
var _shasum = "c67b90dc0568e5c1cf2b0b858c43ba28e2eda575";
var _spec = "axios@^0.21.1";
var _where = "/Users/jinsangyoo/Desktop/Project/slimer-react";
var author = {
	name: "Matt Zabriskie"
};
var browser = {
	"./lib/adapters/http.js": "./lib/adapters/xhr.js"
};
var bugs = {
	url: "https://github.com/axios/axios/issues"
};
var bundleDependencies = false;
var bundlesize = [
	{
		path: "./dist/axios.min.js",
		threshold: "5kB"
	}
];
var dependencies = {
	"follow-redirects": "^1.14.0"
};
var deprecated = false;
var description = "Promise based HTTP client for the browser and node.js";
var devDependencies = {
	coveralls: "^3.0.0",
	"es6-promise": "^4.2.4",
	grunt: "^1.3.0",
	"grunt-banner": "^0.6.0",
	"grunt-cli": "^1.2.0",
	"grunt-contrib-clean": "^1.1.0",
	"grunt-contrib-watch": "^1.0.0",
	"grunt-eslint": "^23.0.0",
	"grunt-karma": "^4.0.0",
	"grunt-mocha-test": "^0.13.3",
	"grunt-ts": "^6.0.0-beta.19",
	"grunt-webpack": "^4.0.2",
	"istanbul-instrumenter-loader": "^1.0.0",
	"jasmine-core": "^2.4.1",
	karma: "^6.3.2",
	"karma-chrome-launcher": "^3.1.0",
	"karma-firefox-launcher": "^2.1.0",
	"karma-jasmine": "^1.1.1",
	"karma-jasmine-ajax": "^0.1.13",
	"karma-safari-launcher": "^1.0.0",
	"karma-sauce-launcher": "^4.3.6",
	"karma-sinon": "^1.0.5",
	"karma-sourcemap-loader": "^0.3.8",
	"karma-webpack": "^4.0.2",
	"load-grunt-tasks": "^3.5.2",
	minimist: "^1.2.0",
	mocha: "^8.2.1",
	sinon: "^4.5.0",
	"terser-webpack-plugin": "^4.2.3",
	typescript: "^4.0.5",
	"url-search-params": "^0.10.0",
	webpack: "^4.44.2",
	"webpack-dev-server": "^3.11.0"
};
var homepage = "https://axios-http.com";
var jsdelivr = "dist/axios.min.js";
var keywords = [
	"xhr",
	"http",
	"ajax",
	"promise",
	"node"
];
var license = "MIT";
var main = "index.js";
var name = "axios";
var repository = {
	type: "git",
	url: "git+https://github.com/axios/axios.git"
};
var scripts = {
	build: "NODE_ENV=production grunt build",
	coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
	examples: "node ./examples/server.js",
	fix: "eslint --fix lib/**/*.js",
	postversion: "git push && git push --tags",
	preversion: "npm test",
	start: "node ./sandbox/server.js",
	test: "grunt test",
	version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
};
var typings = "./index.d.ts";
var unpkg = "dist/axios.min.js";
var version = "0.21.4";
var require$$0 = {
	_from: _from,
	_id: _id,
	_inBundle: _inBundle,
	_integrity: _integrity,
	_location: _location,
	_phantomChildren: _phantomChildren,
	_requested: _requested,
	_requiredBy: _requiredBy,
	_resolved: _resolved,
	_shasum: _shasum,
	_spec: _spec,
	_where: _where,
	author: author,
	browser: browser,
	bugs: bugs,
	bundleDependencies: bundleDependencies,
	bundlesize: bundlesize,
	dependencies: dependencies,
	deprecated: deprecated,
	description: description,
	devDependencies: devDependencies,
	homepage: homepage,
	jsdelivr: jsdelivr,
	keywords: keywords,
	license: license,
	main: main,
	name: name,
	repository: repository,
	scripts: scripts,
	typings: typings,
	unpkg: unpkg,
	version: version
};

var utils$6 = utils$e;
var settle = settle$2;
var buildFullPath = buildFullPath$2;
var buildURL$1 = buildURL$3;
var http = require$$1__default["default"];
var https = require$$2__default["default"];
var httpFollow = followRedirects.exports.http;
var httpsFollow = followRedirects.exports.https;
var url = require$$0__default["default"];
var zlib = require$$8__default["default"];
var pkg$1 = require$$0;
var createError = createError$3;
var enhanceError$1 = enhanceError$3;

var isHttps = /https:?/;

/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */
function setProxy(options, proxy, location) {
  options.hostname = proxy.host;
  options.host = proxy.host;
  options.port = proxy.port;
  options.path = location;

  // Basic proxy authorization
  if (proxy.auth) {
    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
  }

  // If a proxy is used, any redirects must also pass through the proxy
  options.beforeRedirect = function beforeRedirect(redirection) {
    redirection.headers.host = redirection.host;
    setProxy(redirection, proxy, redirection.href);
  };
}

/*eslint consistent-return:0*/
var http_1 = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var resolve = function resolve(value) {
      resolvePromise(value);
    };
    var reject = function reject(value) {
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;

    // Set User-Agent (required by some servers)
    // See https://github.com/axios/axios/issues/69
    if ('User-Agent' in headers || 'user-agent' in headers) {
      // User-Agent is specified; handle case where no UA header is desired
      if (!headers['User-Agent'] && !headers['user-agent']) {
        delete headers['User-Agent'];
        delete headers['user-agent'];
      }
      // Otherwise, use specified value
    } else {
      // Only set header if it hasn't been set in config
      headers['User-Agent'] = 'axios/' + pkg$1.version;
    }

    if (data && !utils$6.isStream(data)) {
      if (Buffer.isBuffer(data)) ; else if (utils$6.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils$6.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL$1(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }

        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port,
            protocol: parsedProxyUrl.protocol
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;

      // return the last request in case of redirects
      var lastRequest = res.req || req;


      // if no content, is HEAD request or decompress disabled we should not decompress
      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
        switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
        // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib.createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        }
      }

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        var totalResponseBytes = 0;
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError$1(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString(config.responseEncoding);
            if (!config.responseEncoding || config.responseEncoding === 'utf8') {
              responseData = utils$6.stripBOM(responseData);
            }
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
      reject(enhanceError$1(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout) {
      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
      var timeout = parseInt(config.timeout, 10);

      if (isNaN(timeout)) {
        reject(createError(
          'error trying to parse `config.timeout` to int',
          config,
          'ERR_PARSE_TIMEOUT',
          req
        ));

        return;
      }

      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(timeout, function handleRequestTimeout() {
        req.abort();
        reject(createError(
          'timeout of ' + timeout + 'ms exceeded',
          config,
          config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
          req
        ));
      });
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils$6.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError$1(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};

var utils$5 = utils$e;
var normalizeHeaderName = normalizeHeaderName$1;
var enhanceError = enhanceError$3;

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = http_1;
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils$5.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$5.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults$3 = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils$5.isFormData(data) ||
      utils$5.isArrayBuffer(data) ||
      utils$5.isBuffer(data) ||
      utils$5.isStream(data) ||
      utils$5.isFile(data) ||
      utils$5.isBlob(data)
    ) {
      return data;
    }
    if (utils$5.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$5.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils$5.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils$5.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults$3.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils$5.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});

utils$5.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults$3;

var utils$4 = utils$e;
var defaults$2 = defaults_1;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData$1 = function transformData(data, headers, fns) {
  var context = this || defaults$2;
  /*eslint no-param-reassign:0*/
  utils$4.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var utils$3 = utils$e;
var transformData = transformData$1;
var isCancel = isCancel$1;
var defaults$1 = defaults_1;

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils$3.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils$3.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults$1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

var utils$2 = utils$e;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig$2 = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
      return utils$2.merge(target, source);
    } else if (utils$2.isPlainObject(source)) {
      return utils$2.merge({}, source);
    } else if (utils$2.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils$2.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils$2.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils$2.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils$2.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils$2.forEach(otherKeys, mergeDeepProperties);

  return config;
};

var pkg = require$$0;

var validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

var validator$1 = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators$1
};

var utils$1 = utils$e;
var buildURL = buildURL$3;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios$1.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig$1(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios$1.prototype.getUri = function getUri(config) {
  config = mergeConfig$1(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig$1(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios$1;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel$1(message) {
  this.message = message;
}

Cancel$1.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel$1.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel$1;

var Cancel = Cancel_1;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
var isAxiosError = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

var utils = utils$e;
var bind = bind$2;
var Axios = Axios_1;
var mergeConfig = mergeConfig$2;
var defaults = defaults_1;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios$1 = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios;

// Factory for creating new instances
axios$1.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;

// Expose isAxiosError
axios$1.isAxiosError = isAxiosError;

axios$2.exports = axios$1;

// Allow use of default import syntax in TypeScript
axios$2.exports.default = axios$1;

var axios = axios$2.exports;

var BASE_URL;
(function (BASE_URL) {
    BASE_URL["COMPANY_LOCAL_LOG"] = "http://192.168.0.18:52274";
    BASE_URL["COMPANY_LOCAL_POLICY"] = "http://192.168.0.18:52274";
    // HOME_LOCAL_LOG = 'http://192.168.0.18:52274',
    BASE_URL["HOME_LOCAL_LOG"] = "https://gmb.acecounter.com";
    BASE_URL["HOME_LOCAL_POLICY"] = "http://192.168.0.18:52274";
    BASE_URL["PRO_LOG"] = "https://gmb.acecounter.com";
    BASE_URL["PRO_POLICY"] = "https://policy.acecounter.com";
})(BASE_URL || (BASE_URL = {}));
var HTTP_METHOD;
(function (HTTP_METHOD) {
    HTTP_METHOD["GET"] = "GET";
    HTTP_METHOD["POST"] = "POST";
})(HTTP_METHOD || (HTTP_METHOD = {}));
var HTTP_URL;
(function (HTTP_URL) {
    HTTP_URL["COMPANY_LOCAL_LOG"] = "log";
    HTTP_URL["COMPANY_LOCAL_POLICY"] = "policy";
    HTTP_URL["HOME_LOCAL_LOG"] = "mac";
    HTTP_URL["HOME_LOCAL_POLICY"] = "policy";
    HTTP_URL["PRO_LOG"] = "mac";
    HTTP_URL["PRO_POLICY"] = "policy";
})(HTTP_URL || (HTTP_URL = {}));
var HttpURLConnection;
(function (HttpURLConnection) {
    HttpURLConnection[HttpURLConnection["HTTP_OK"] = 200] = "HTTP_OK";
})(HttpURLConnection || (HttpURLConnection = {}));

var POLICY;
(function (POLICY) {
    POLICY["REQUEST_URL"] = "https://policy.acecounter.com/policy";
    POLICY["REQUEST_APPLICATION_ID"] = "CP-Application-Id";
    POLICY["REQUEST_CID"] = "CP-Request-Cid";
    POLICY["REQUEST_PLATFORM"] = "CP-Request-Platform";
    POLICY["REQUEST_SERVICE_ID"] = "CP-Request-Id";
    POLICY["REQUEST_TIME"] = "CP-Request-Time";
    POLICY["REQUEST_VERSION"] = "CP-Request-Version";
    POLICY["RESPONSE_APP_KEY_FOR_LNC"] = "AppKeyForLNC";
    POLICY["RESPONSE_APP_KEY_FOR_LNC_RECEIVED"] = "received";
    POLICY["RESPONSE_APP_KEY_FOR_LNC_DO_NOT_RECEIVED"] = "don't received";
    POLICY["RESPONSE_APP_KEY_FOR_LNC_DO_NOT_EXIST"] = "don't existed";
    POLICY["RESPONSE_APPLIST_ENABLE"] = "Cp-App";
    POLICY["RESPONSE_CID"] = "Cp-Cid";
    POLICY["RESPONSE_DEBUG"] = "Cp-Debug";
    POLICY["RESPONSE_DEBUG_LOG_URL"] = "Cp-Crash-Domain";
    POLICY["RESPONSE_DOMAIN"] = "Cp-Domain";
    POLICY["RESPONSE_FORCE_DELETE_FAILEDFILE"] = "Cp-Force-Delete-FailedLogs";
    POLICY["RESPONSE_FORCE_STOP"] = "Cp-Force-Stop";
    POLICY["RESPONSE_POLICY_INTERVAL"] = "Cp-Repeat-Interval";
    POLICY["RESPONSE_PRIVATE"] = "Cp-Private";
    POLICY["RESPONSE_SDK_ENABLE"] = "Cp-Allow";
    POLICY["RESPONSE_SOURCE_IP"] = "Cp-Source-Ip";
    POLICY["RESPONSE_TOAST_APPKEY"] = "Cp-LNC-Id";
    POLICY["FLAG_ACELOG_GATHERING"] = "1";
    POLICY["FLAG_FORCE_DELETE_FAILEDFILE"] = "1";
    POLICY["FLAG_SDK_ENABLE"] = "*";
    POLICY["FLAG_SDK_FORCE_STOP"] = "1";
})(POLICY || (POLICY = {}));
var POLICY$1 = POLICY;

var SDKMode;
(function (SDKMode) {
    SDKMode[SDKMode["development"] = 0] = "development";
    SDKMode[SDKMode["production"] = 1] = "production";
})(SDKMode || (SDKMode = {}));
var NetworkMode;
(function (NetworkMode) {
    NetworkMode[NetworkMode["COMPANY_dev"] = 0] = "COMPANY_dev";
    NetworkMode[NetworkMode["HOME_dev"] = 1] = "HOME_dev";
    NetworkMode[NetworkMode["Pro"] = 2] = "Pro";
})(NetworkMode || (NetworkMode = {}));
var NetworkRequestType;
(function (NetworkRequestType) {
    NetworkRequestType[NetworkRequestType["LOG"] = 0] = "LOG";
    NetworkRequestType[NetworkRequestType["POLICY"] = 1] = "POLICY";
})(NetworkRequestType || (NetworkRequestType = {}));
var NetworkRequestType2;
(function (NetworkRequestType2) {
    NetworkRequestType2[NetworkRequestType2["COMPANY_LOCAL"] = 0] = "COMPANY_LOCAL";
    NetworkRequestType2[NetworkRequestType2["HOME_LOCAL_LOG"] = 1] = "HOME_LOCAL_LOG";
    NetworkRequestType2[NetworkRequestType2["HOME_LOCAL_POLICY"] = 2] = "HOME_LOCAL_POLICY";
    NetworkRequestType2[NetworkRequestType2["LOG"] = 3] = "LOG";
    NetworkRequestType2[NetworkRequestType2["POLICY"] = 4] = "POLICY";
})(NetworkRequestType2 || (NetworkRequestType2 = {}));

function mapValueStringToObject(map) {
    return Array.from(map).reduce(function (obj, _a) {
        var key = _a[0], value = _a[1];
        obj[key] = value;
        return obj;
    }, {});
}
function makeSuccessCallbackParams(task, message) {
    var innerMsg = ACEConstantCallback.DefaultMessage;
    if (!isEmpty(message) && message) {
        innerMsg = message;
    }
    var _response = task.getNetworkResult();
    if (_response) {
        return {
            taskHash: task.getTaskHash(),
            code: ACEResultCode.Success,
            result: ACEConstantCallback[ACEConstantCallback.Success],
            message: innerMsg,
            apiName: task.getDescription(),
            reseponse: task.getNetworkResultToResponseToCaller(),
        };
    }
    else {
        return {
            taskHash: task.getTaskHash(),
            code: ACEResultCode.Success,
            result: ACEConstantCallback[ACEConstantCallback.Success],
            message: innerMsg,
            apiName: task.getDescription(),
            reseponse: {
                message: '_response is undefined.',
            },
        };
    }
}
function makeFailCallbackParams(task, message) {
    var innerMsg = ACEConstantCallback.DefaultMessage;
    if (message && !isEmpty(message)) {
        innerMsg = message;
    }
    var _err = task.getNetworkError();
    if (_err) {
        return {
            taskHash: task.getTaskHash(),
            code: ACEResultCode.FailAfterRequest,
            result: ACEConstantCallback[ACEConstantCallback.Failed],
            message: innerMsg,
            apiName: task.getDescription(),
            reseponse: task.getNetworkErrorToResponseToCaller(),
        };
    }
    else {
        return {
            taskHash: task.getTaskHash(),
            code: ACEResultCode.FailAfterRequest,
            result: ACEConstantCallback[ACEConstantCallback.Failed],
            message: innerMsg,
            apiName: task.getDescription(),
            reseponse: {
                message: 'err is undefined.',
            },
        };
    }
}

var ACEPolicyParameters = /** @class */ (function () {
    function ACEPolicyParameters() {
        this.setCpAllow(undefined);
        this.setCpApp(0);
        this.setCpCid(undefined);
        this.setCpDebug(undefined);
        this.setCpDomain(undefined);
        this.setCpPrivate(undefined);
        this.setCpSourceIP(undefined);
        this.setToastAppKey(undefined);
    }
    ACEPolicyParameters.getInstance = function () {
        return this.instance || (this.instance = new this());
    };
    ACEPolicyParameters.prototype.getCpAllow = function () {
        return this.cpAllow;
    };
    ACEPolicyParameters.prototype.setCpAllow = function (value) {
        // console.log(`setCpAllow::value: >>${value}<<`)
        if (isEmpty(value)) {
            // console.log(`setCpAllow::value: setEmpty`)
            this.cpAllow = ACECONSTANT$1.EMPTY;
        }
        else {
            // console.log(`setCpAllow::value: value`)
            if (value)
                this.cpAllow = value;
        }
    };
    ACEPolicyParameters.prototype.getCpApp = function () {
        return this.cpApp;
    };
    ACEPolicyParameters.prototype.setCpApp = function (value) {
        if (value === undefined || value < 0) {
            value = 0;
        }
        this.cpApp = value;
    };
    ACEPolicyParameters.prototype.getCpCid = function () {
        return this.cpCid;
    };
    ACEPolicyParameters.prototype.setCpCid = function (value) {
        if (isEmpty(value)) {
            this.cpCid = ACECONSTANT$1.EMPTY;
        }
        else {
            if (value)
                this.cpCid = value;
        }
    };
    ACEPolicyParameters.prototype.getCpDebug = function () {
        return this.cpDebug;
    };
    ACEPolicyParameters.prototype.setCpDebug = function (value) {
        if (isEmpty(value)) {
            this.cpDebug = ACECONSTANT$1.EMPTY;
        }
        else {
            if (value)
                this.cpDebug = value;
        }
    };
    ACEPolicyParameters.prototype.getCpDomain = function () {
        return this.cpDomain;
    };
    ACEPolicyParameters.prototype.setCpDomain = function (value) {
        if (isEmpty(value)) {
            this.cpDomain = ACECONSTANT$1.EMPTY;
        }
        else {
            if (value)
                this.cpDomain = value;
        }
    };
    ACEPolicyParameters.prototype.getCpPrivate = function () {
        return this.cpPrivate;
    };
    ACEPolicyParameters.prototype.setCpPrivate = function (value) {
        if (isEmpty(value)) {
            this.cpPrivate = ACECONSTANT$1.EMPTY;
        }
        else {
            if (value)
                this.cpPrivate = value;
        }
    };
    ACEPolicyParameters.prototype.getCpSourceIP = function () {
        return this.cpSourceIP;
    };
    ACEPolicyParameters.prototype.setCpSourceIP = function (value) {
        if (isEmpty(value)) {
            this.cpSourceIP = ACECONSTANT$1.EMPTY;
        }
        else {
            if (value)
                this.cpSourceIP = value;
        }
    };
    ACEPolicyParameters.prototype.getCpCrashDomain = function () {
        return this.cpCrashDomain;
    };
    ACEPolicyParameters.prototype.setCpCrashDomain = function (value) {
        if (isEmpty(value)) {
            this.cpCrashDomain = ACECONSTANT$1.EMPTY;
        }
        else {
            if (value)
                this.cpCrashDomain = value;
        }
    };
    ACEPolicyParameters.prototype.getToastAppKey = function () {
        return this.toastAppKey;
    };
    ACEPolicyParameters.prototype.setToastAppKey = function (value) {
        if (isEmpty(value)) {
            this.toastAppKey = ACECONSTANT$1.EMPTY;
        }
        else {
            if (value)
                this.toastAppKey = value;
        }
    };
    return ACEPolicyParameters;
}());

var ControlTower = /** @class */ (function () {
    function ControlTower() {
        this.reset();
    }
    ControlTower.getInstance = function () {
        return this.instance || (this.instance = new this());
    };
    ControlTower.prototype.reset = function () {
        ACELog.d(ControlTower._pTAG, 'Reset policy information of SDK.');
        this._sdk_mode = SDKMode.production;
        this._network_mode = NetworkMode.Pro;
        this._isCompletePolicy = false;
        this._isInstallReferrerDone = false;
        this._isSDKForceStop = false;
        this._isSDKEnabled = false;
        ACELog.setProductionMode();
    };
    ControlTower.prototype.getIsCompletePolicy = function () {
        return this._isCompletePolicy;
    };
    ControlTower.prototype.setIsCompletePolicy = function (isCompletePolicy, isSucceedRequestPolicy) {
        ACELog.d(ControlTower._pTAG, "setIsCompletePolicy, isCompletePolicy: ".concat(isCompletePolicy, ", isSucceedRequestPolicy: ").concat(isSucceedRequestPolicy));
    };
    ControlTower.prototype.isDisabled = function () {
        var alreadyIsCompletePolicy = this.getIsCompletePolicy();
        var isSDKEnabled = this.getIsSDKEnabled();
        ACELog.d(ControlTower._pTAG, "isDisabled, alreadyIsCompletePolicy: ".concat(alreadyIsCompletePolicy, ", isSDKEnabled: ").concat(isSDKEnabled));
        if (alreadyIsCompletePolicy && !isSDKEnabled) {
            ACELog.d(ControlTower._pTAG, 'SDK is disabled.');
            return true;
        }
        return false;
    };
    ControlTower.prototype.setSDKDisable = function () {
        ACELog.d(ControlTower._pTAG, 'Set SDK disable by policy.');
        this._isSDKEnabled = false;
    };
    ControlTower.prototype.isEnableByPolicy = function () {
        var result = ACEPolicyParameters.getInstance().getCpAllow();
        if (isEmpty(result)) {
            return false;
        }
        else {
            // console.log(`isEnableByPolicy::result: ${result}, ${POLICY.FLAG_SDK_ENABLE}`)
            // console.log(
            //   `isEnableByPolicy::>>${result}<< == >>${POLICY.FLAG_SDK_ENABLE}<<: >>${result == POLICY.FLAG_SDK_ENABLE}<<`,
            // )
            return result == POLICY$1.FLAG_SDK_ENABLE;
        }
    };
    ControlTower.prototype.getIsSDKEnabled = function () {
        if (this._isSDKForceStop) {
            ACELog.d(ControlTower._pTAG, 'SDK was force stopped.');
            return false;
        }
        this._isSDKEnabled = this.isEnableByPolicy();
        ACELog.d(ControlTower._pTAG, "isEnable of policy: ".concat(this._isSDKEnabled));
        if (!this._isSDKEnabled) {
            ACELog.d(ControlTower._pTAG, 'not found SDK policy information.');
        }
        return this._isSDKEnabled;
    };
    ControlTower.prototype.getSDKMode = function () {
        return this._sdk_mode;
    };
    ControlTower.prototype.setSDKMode = function (value) {
        this._sdk_mode = value;
        switch (value) {
            case SDKMode.production:
                this._network_mode = NetworkMode.Pro;
            case SDKMode.development:
                this._network_mode = NetworkMode.COMPANY_dev;
        }
    };
    ControlTower.prototype.getNetworkMode = function () {
        return this._network_mode;
    };
    ControlTower.prototype.setNetworkMode = function (value) {
        this._network_mode = value;
    };
    ControlTower.prototype.enableForceStop = function () { };
    ControlTower.prototype.setDevSDKMode = function () {
        this.setSDKMode(SDKMode.development);
        ACELog.setDevMode();
    };
    ControlTower.prototype.setProductionSDKMode = function () {
        this.setSDKMode(SDKMode.production);
        ACELog.setProductionMode();
    };
    //#region static
    ControlTower.getDefaultNetworkMode = function () {
        return NetworkMode.Pro;
    };
    ControlTower._pTAG = 'pTower';
    return ControlTower;
}());

var ACEControlTowerForOne = /** @class */ (function (_super) {
    __extends(ACEControlTowerForOne, _super);
    function ACEControlTowerForOne() {
        return _super.call(this) || this;
    }
    ACEControlTowerForOne.prototype.setIsCompletePolicy = function (isCompletePolicy, isSucceedRequestPolicy) {
        _super.prototype.setIsCompletePolicy.call(this, isCompletePolicy, isSucceedRequestPolicy);
        if (this.isDisabled()) {
            return;
        }
        if (isCompletePolicy && isSucceedRequestPolicy) ;
        else if (!isSucceedRequestPolicy) {
            ACELog.d(ACEControlTowerForOne._TAG, 'failed receive policy will disable SDK.');
            this._isSDKEnabled = isSucceedRequestPolicy;
        }
        this._isCompletePolicy = isCompletePolicy;
    };
    ACEControlTowerForOne._TAG = 'towerForOne';
    return ACEControlTowerForOne;
}(ControlTower));

var ControlTowerSingleton = /** @class */ (function () {
    function ControlTowerSingleton(platform) {
        if (platform === void 0) { platform = AceConfiguration.PLATFORM.DEFAULT; }
        if (platform) {
            this._platform = platform;
        }
        switch (this._platform) {
            default:
                this._controlTower = new ACEControlTowerForOne();
                break;
        }
    }
    ControlTowerSingleton.getInstance = function (platform) {
        return this.instance || (this.instance = new this(platform));
    };
    ControlTowerSingleton.prototype.getIsCompletePolicy = function () {
        return this._controlTower.getIsCompletePolicy();
    };
    ControlTowerSingleton.prototype.setIsCompletePolicy = function (isCompletePolicy, isSucceedRequestPolicy) {
        this._controlTower.setIsCompletePolicy(isCompletePolicy, isSucceedRequestPolicy);
    };
    ControlTowerSingleton.prototype.isDisabled = function () {
        var currentIsCompletePolicy = this.getIsCompletePolicy();
        var currentIsSDKEnabled = this.getIsSDKEnabled();
        ACELog.d(ControlTowerSingleton._TAG, "getIsCompletePolicy(): ".concat(currentIsCompletePolicy, ", getIsSDKEnabled(): ").concat(currentIsSDKEnabled));
        if (currentIsCompletePolicy && !currentIsSDKEnabled) {
            ACELog.d(ControlTowerSingleton._TAG, 'SDK is disabled.');
            return true;
        }
        return false;
    };
    ControlTowerSingleton.prototype.getIsSDKEnabled = function () {
        return this._controlTower.getIsSDKEnabled();
    };
    ControlTowerSingleton.prototype.setSDKDisable = function () {
        this._controlTower.setSDKDisable();
    };
    ControlTowerSingleton.prototype.isEnableByPolicy = function () {
        return this._controlTower.isEnableByPolicy();
    };
    ControlTowerSingleton.prototype.getSDKMode = function () {
        return this._controlTower.getSDKMode();
    };
    ControlTowerSingleton.prototype.setSDKMode = function (value) {
        this._controlTower.setSDKMode(value);
    };
    ControlTowerSingleton.prototype.getNetworkMode = function () {
        return this._controlTower.getNetworkMode();
    };
    ControlTowerSingleton.prototype.setNetworkMode = function (value) {
        this._controlTower.setNetworkMode(value);
    };
    ControlTowerSingleton.prototype.enableForceStop = function () {
        this._controlTower.enableForceStop();
    };
    ControlTowerSingleton.prototype.setDevSDKMode = function () {
        this._controlTower.setDevSDKMode();
    };
    ControlTowerSingleton.prototype.setProductionSDKMode = function () {
        this._controlTower.setProductionSDKMode();
    };
    ControlTowerSingleton.prototype.setHomeDevNetworkMode = function () {
        this._controlTower.setNetworkMode(NetworkMode.HOME_dev);
    };
    ControlTowerSingleton.prototype.succeedRequestPolicy = function () {
        this._controlTower.setIsCompletePolicy(true, true);
    };
    ControlTowerSingleton.prototype.failedRequestPolicy = function () {
        this._controlTower.setIsCompletePolicy(true, false);
    };
    ControlTowerSingleton.prototype.reset = function () {
        return this._controlTower.reset();
    };
    //#region static
    ControlTowerSingleton.getCurrentSDKkModeName = function () {
        return SDKMode[ControlTowerSingleton.getInstance().getSDKMode()];
    };
    ControlTowerSingleton.getCurrentNetworkModeName = function () {
        return NetworkMode[ControlTowerSingleton.getInstance().getNetworkMode()];
    };
    ControlTowerSingleton.getDefaultNetworkMode = function () {
        return ControlTower.getDefaultNetworkMode();
    };
    ControlTowerSingleton.setDefaultNetworkMode = function () {
        ControlTowerSingleton.getInstance().setNetworkMode(ControlTowerSingleton.getDefaultNetworkMode());
    };
    ControlTowerSingleton.setDevSDKMode = function () {
        ControlTowerSingleton.getInstance().setDevSDKMode();
    };
    ControlTowerSingleton.getIsCompletePolicy = function () {
        return ControlTowerSingleton.getInstance().getIsCompletePolicy();
    };
    ControlTowerSingleton.isEnableByPolicy = function () {
        return ControlTowerSingleton.getInstance().isEnableByPolicy();
    };
    ControlTowerSingleton.reset = function () {
        return ControlTowerSingleton.getInstance().reset();
    };
    ControlTowerSingleton._TAG = 'towerSingle';
    return ControlTowerSingleton;
}());

var ACENetwork = /** @class */ (function () {
    function ACENetwork() {
    }
    ACENetwork.networkRequestTypeToParams = function (requestType) {
        var currentNetworkMode = ControlTowerSingleton.getInstance().getNetworkMode();
        ACELog.d(ACENetwork._TAG, "networkRequestTypeToParams requestType: ".concat(NetworkRequestType[requestType], ", currentNetworkMode:").concat(NetworkMode[currentNetworkMode]));
        return {
            baseUrl: this.networkRequestTypeToBaseURLs(currentNetworkMode, requestType),
            requestHeaders: this.networkRequestTypeToHeaders(currentNetworkMode, requestType),
            url: this.networkRequestTypeToURLs(currentNetworkMode, requestType),
            params: this.networkRequestTypeToURLParams(requestType),
        };
    };
    //#region base url
    ACENetwork.logToBaseURL = function (networkMode) {
        switch (networkMode) {
            case NetworkMode.COMPANY_dev:
                return BASE_URL.COMPANY_LOCAL_LOG;
            case NetworkMode.HOME_dev:
                return BASE_URL.HOME_LOCAL_LOG;
            case NetworkMode.Pro:
                return BASE_URL.PRO_LOG;
        }
    };
    ACENetwork.policyToBaseURL = function (networkMode) {
        switch (networkMode) {
            case NetworkMode.COMPANY_dev:
                return BASE_URL.COMPANY_LOCAL_POLICY;
            case NetworkMode.HOME_dev:
                return BASE_URL.HOME_LOCAL_POLICY;
            case NetworkMode.Pro:
                return BASE_URL.PRO_POLICY;
        }
    };
    ACENetwork.networkRequestTypeToBaseURLs = function (networkMode, requestType) {
        switch (requestType) {
            case NetworkRequestType.LOG:
                return this.logToBaseURL(networkMode);
            case NetworkRequestType.POLICY:
                return this.policyToBaseURL(networkMode);
        }
    };
    //#endregion
    //#region request headers
    ACENetwork.logToRequestHeaders = function (networkMode) {
        var _map = new Map();
        switch (networkMode) {
            case NetworkMode.COMPANY_dev:
                return _map;
            case NetworkMode.HOME_dev:
                return _map;
            case NetworkMode.Pro:
                return _map;
        }
    };
    ACENetwork.policyToRequestHeaders = function (networkMode) {
        var _a;
        var _map = new Map();
        switch (networkMode) {
            case NetworkMode.COMPANY_dev:
            case NetworkMode.HOME_dev:
            case NetworkMode.Pro:
                _map.set(POLICY$1.REQUEST_APPLICATION_ID, (_a = ACS.getPackageNameOrBundleID()) !== null && _a !== void 0 ? _a : 'no packageName');
                _map.set(POLICY$1.REQUEST_CID, ACECommonStaticConfig.getKey());
                // _map.set(POLICY.REQUEST_PLATFORM, Platform.OS)
                _map.set(POLICY$1.REQUEST_PLATFORM, 'react');
                _map.set(POLICY$1.REQUEST_SERVICE_ID, ACECommonStaticConfig.getKey());
                _map.set(POLICY$1.REQUEST_TIME, Date.now().toString());
                _map.set(POLICY$1.REQUEST_VERSION, ACS.SDKVersion());
                break;
        }
        return _map;
    };
    ACENetwork.networkRequestTypeToHeaders = function (networkMode, requestType) {
        switch (requestType) {
            case NetworkRequestType.LOG:
                return this.logToRequestHeaders(networkMode);
            case NetworkRequestType.POLICY:
                return this.policyToRequestHeaders(networkMode);
        }
    };
    //#endregion
    //#region url
    ACENetwork.logToURL = function (networkMode) {
        switch (networkMode) {
            case NetworkMode.COMPANY_dev:
                return HTTP_URL.COMPANY_LOCAL_LOG;
            case NetworkMode.HOME_dev:
                return HTTP_URL.HOME_LOCAL_LOG;
            case NetworkMode.Pro:
                return HTTP_URL.PRO_LOG;
        }
    };
    ACENetwork.policyToURL = function (networkMode) {
        switch (networkMode) {
            case NetworkMode.COMPANY_dev:
                return HTTP_URL.COMPANY_LOCAL_POLICY;
            case NetworkMode.HOME_dev:
                return HTTP_URL.HOME_LOCAL_POLICY;
            case NetworkMode.Pro:
                return HTTP_URL.PRO_POLICY;
        }
    };
    ACENetwork.networkRequestTypeToURLs = function (networkMode, requestType) {
        switch (requestType) {
            case NetworkRequestType.LOG:
                return this.logToURL(networkMode);
            case NetworkRequestType.POLICY:
                return this.policyToURL(networkMode);
        }
    };
    ACENetwork.networkRequestTypeToURLParams = function (requestType) {
        switch (requestType) {
            case NetworkRequestType.LOG:
                return ACEParameterUtilForOne.getInstance().getParamsToObjectForLogSend();
            case NetworkRequestType.POLICY:
                return {};
        }
    };
    //#endregion
    //#region request
    ACENetwork.requestToPolicy = function (completed, failed) {
        ACENetwork.request(ACENetwork.networkRequestTypeToParams(NetworkRequestType.POLICY), completed, failed);
    };
    ACENetwork.requestToLog = function (completed, failed) {
        ACENetwork.request(ACENetwork.networkRequestTypeToParams(NetworkRequestType.LOG), completed, failed);
    };
    ACENetwork.request = function (networkParam, completed, failed, method) {
        if (method === void 0) { method = HTTP_METHOD.GET; }
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common['Content-Type'] = 'text/plain';
        axios.defaults.headers.common['User-Agent'] = ACEParameterUtil.getUserAgentForSDK();
        var requestHeaders = mapValueStringToObject(networkParam.requestHeaders);
        // ACELog.d(ACENetwork._TAG, 'request requestHeaders:', requestHeaders)
        var requestConfig = {
            url: networkParam.url,
            method: method,
            baseURL: networkParam.baseUrl,
            headers: requestHeaders,
            timeout: 1000,
            params: networkParam.params,
        };
        // let collectorConfig: AxiosRequestConfig = {
        //   url: "mac",
        //   method: "get",
        //   baseURL: "https://gmb.acecounter.com",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Access-Control-Allow-Origin": "*",
        //   },
        //   params: {
        //     tp: "site",
        //     re: 0,
        //     adeld: 1,
        //     st: "1620722629634435895%7C1620722629634435895%7C0%7C0",
        //     dm: "375*812",
        //     url: "com.acecounter.aceappplus/LoginAceCounterViewController",
        //     logsource: 100,
        //     ri: 1,
        //     sv: "ACA02.02.030",
        //     sts: "1620722629634435895",
        //     ag: 0,
        //     vt:
        //       "1620722508087038827%7C4%7C1619540480760523362%7C1%7C1619540480427865497",
        //     ce: 1,
        //     patch: "rev01",
        //     adid: "00000000-0000-0000-0000-000000000000",
        //     lg: "en",
        //     tz: 20,
        //     ref: "bookmark",
        //     mid: "AK3A79964",
        //     vk: 1,
        //     udf1: 0,
        //     udf2: 0,
        //     udf3: 0,
        //   },
        //   timeout: 1000,
        // };
        ACELog.d(ACENetwork._TAG, 'requestConfig', requestConfig);
        axios
            .create()
            .request(requestConfig)
            .then(function (response) {
            if (completed) {
                completed(response);
            }
        })
            .catch(function (error) {
            if (failed) {
                failed(error);
            }
        });
    };
    ACENetwork._TAG = 'Net';
    return ACENetwork;
}());

var APIForPL = /** @class */ (function (_super) {
    __extends(APIForPL, _super);
    function APIForPL(params) {
        var _this = this;
        var _a;
        _this = _super.call(this, params) || this;
        ACELog.d(APIForPL._p1TAG, 'in constructor, params:', params);
        _this.pageName = (_a = params.payload.pageName) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY;
        return _this;
    }
    APIForPL.prototype.doWork = function (callback) {
        var _this = this;
        _super.prototype.doWork.call(this, callback);
        ACELog.d(APIForPL._p1TAG, 'doWork');
        var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
        _parameterUtilForOne.setTP(TP$1.SITE);
        _parameterUtilForOne.updateUrlToRef(this.pageName);
        _parameterUtilForOne
            .loadVT()
            .then(function (response) {
            ACELog.d(APIForPL._p1TAG, 'Done load vt.', response);
            ACELog.d(APIForPL._p1TAG, 'vt after loadVT()', _parameterUtilForOne.getVT());
            return _parameterUtilForOne.updateSTnVT(_this.assignWillUpdateVt());
        })
            .then(function (response) {
            ACELog.d(APIForPL._p1TAG, 'Done update st and vt.', response);
            ACELog.d(APIForPL._p1TAG, 'vt after updateSTnVT()', _parameterUtilForOne.getVT());
            if (callback) {
                var res = {
                    taskHash: "".concat(_this._logSource, "::0011"),
                    code: ACEResultCode.Success,
                    result: ACEConstantCallback[ACEConstantCallback.Success],
                    message: 'Done update st and vt.',
                    apiName: _this.getDescription(),
                };
                callback(undefined, res);
            }
        })
            .catch(function (err) {
            ACELog.d(APIForPL._p1TAG, 'Fail load st and vt.', err);
            if (callback) {
                var res = {
                    taskHash: "".concat(_this._logSource, "::0012"),
                    code: ACEResultCode.FailLoadVT,
                    result: ACEConstantCallback[ACEConstantCallback.Failed],
                    message: 'Fail load vt.',
                    apiName: _this.getDescription(),
                };
                callback(err, res);
            }
        });
    };
    APIForPL.prototype.didWork = function (callback) {
        var _this = this;
        _super.prototype.didWork.call(this, callback);
        ACELog.d(APIForPL._p1TAG, 'didWork');
        ACENetwork.requestToLog(function (response) {
            ACELog.d(APIForPL._p1TAG, 'in requestToLog, completed');
            _this.completed(response);
            _this.doneWork(callback);
        }, function (err) {
            ACELog.d(APIForPL._p1TAG, 'in requestToLog, failed');
            _this.failed(err);
            _this.doneWork(callback);
        });
    };
    APIForPL.prototype.completed = function (response) {
        _super.prototype.completed.call(this, response);
        ACELog.d(APIForPL._p1TAG, 'completed');
    };
    APIForPL.prototype.failed = function (err) {
        _super.prototype.failed.call(this, err);
        ACELog.d(APIForPL._p1TAG, 'failed');
    };
    APIForPL.prototype.doneWork = function (callback) {
        var _this = this;
        _super.prototype.doneWork.call(this, callback);
        ACELog.d(APIForPL._p1TAG, 'doneWork');
        var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
        _parameterUtilForOne
            .resetSessionAndParameterAfterSendWithParams({
            vt: this.assignWillUpdateVt(),
        })
            .then(function (result) {
            ACELog.d(APIForPL._p1TAG, "resetSessionAndParameterAfterSendWithParams::result: ".concat(result));
            if (callback) {
                if (_this._error) {
                    callback(_this.getNetworkError(), makeFailCallbackParams(_this));
                }
                else {
                    callback(undefined, makeSuccessCallbackParams(_this));
                }
            }
        })
            .catch(function (err) {
            ACELog.d(APIForPL._p1TAG, "resetSessionAndParameterAfterSendWithParams::err: ".concat(err));
            if (callback) {
                if (_this._error) {
                    callback(_this.getNetworkError(), makeFailCallbackParams(_this));
                }
                else {
                    callback(undefined, makeSuccessCallbackParams(_this));
                }
            }
        });
    };
    APIForPL.prototype.assignWillUpdateSt = function () {
        if (!this._willUpdateSt) {
            var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
            this._willUpdateSt = new ACEntityForVT();
            this._willUpdateSt.setDeepCopy(_parameterUtilForOne.getST().getMap());
        }
        return this._willUpdateSt;
    };
    APIForPL.prototype.assignWillUpdateVt = function () {
        if (!this._willUpdateVt) {
            var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
            this._willUpdateVt = new ACEntityForVT();
            this._willUpdateVt.setDeepCopy(_parameterUtilForOne.getVT().getMap());
        }
        return this._willUpdateVt;
    };
    APIForPL._p1TAG = 'APIForPL';
    return APIForPL;
}(Task));

function acproductToURLForOne(products, logSoruce) {
    if (products.length < 1)
        return '';
    else
        return "".concat(products.map(function (product) { return product.toStringForOne(logSoruce); }).join('^'), "^");
}

var APIForBuy = /** @class */ (function (_super) {
    __extends(APIForBuy, _super);
    function APIForBuy(params) {
        var _this = this;
        var _a, _b, _c, _d;
        ACELog.d(APIForBuy._TAG, 'in constructor');
        _this = _super.call(this, params) || this;
        _this.memberKey = (_a = params.payload.memberKey) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY;
        _this.orderNumber = (_b = params.payload.orderNumber) !== null && _b !== void 0 ? _b : ACECONSTANT$1.EMPTY;
        _this.paymentMethod = (_c = params.payload.paymentMethod) !== null && _c !== void 0 ? _c : ACECONSTANT$1.EMPTY;
        _this.products = Array.from((_d = params.payload.products) !== null && _d !== void 0 ? _d : []);
        return _this;
    }
    APIForBuy.prototype.doWork = function (callback) {
        var _this = this;
        _super.prototype.doWork.call(this, function (error, innerResult) {
            ACELog.d(APIForBuy._TAG, 'in doWork::in cb');
            if (error && callback) {
                callback(error, innerResult);
            }
            else if (callback) {
                var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
                _parameterUtilForOne.setBuyMode(IACBuyMode$1.Order);
                _parameterUtilForOne.setMemberKey(_this.memberKey);
                _parameterUtilForOne.setOrderNumber(_this.orderNumber);
                _parameterUtilForOne.setPaymentMethod(_this.paymentMethod);
                _parameterUtilForOne.setProduct(acproductToURLForOne(_this.products, _this.getLogSource()));
                //#region BuyTimeTS
                var _st = _parameterUtilForOne.getST();
                _parameterUtilForOne.setBuyTimeTSAtObject(_this.assignWillUpdateVt(), _st.getGetTS(), _st.getRandom6ForGetTS());
                //#endregion
                //#region BuyCount
                var _buyCount = stringToNumber(_parameterUtilForOne.getVT().getBuyCount(), 10);
                _parameterUtilForOne.setBuyCountAtObject(_this.assignWillUpdateVt(), _buyCount + 1);
                //#endregion
                callback(undefined, innerResult);
            }
        });
    };
    APIForBuy.prototype.didWork = function (callback) {
        _super.prototype.didWork.call(this, callback);
        ACELog.d(APIForBuy._TAG, 'didWork');
    };
    APIForBuy.prototype.completed = function (response) {
        _super.prototype.completed.call(this, response);
        ACELog.d(APIForBuy._TAG, 'completed');
    };
    APIForBuy.prototype.failed = function (err) {
        _super.prototype.failed.call(this, err);
        ACELog.d(APIForBuy._TAG, 'failed');
    };
    APIForBuy.prototype.doneWork = function (callback) {
        _super.prototype.doneWork.call(this, callback);
        ACELog.d(APIForBuy._TAG, 'doneWork');
        var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
        //#region clear
        _parameterUtilForOne.clearBuyMode();
        _parameterUtilForOne.clearMemberKey();
        _parameterUtilForOne.clearPayMethod();
        _parameterUtilForOne.clearOrderNumber();
        _parameterUtilForOne.clearProduct();
        //#endregion
    };
    APIForBuy._TAG = 'APIForBuy';
    return APIForBuy;
}(APIForPL));

var APIForCart = /** @class */ (function (_super) {
    __extends(APIForCart, _super);
    function APIForCart(params) {
        var _this = this;
        var _a, _b;
        _this = _super.call(this, params) || this;
        ACELog.d(APIForCart._TAG, 'in constructor, params:', params);
        _this.memberKey = (_a = params.payload.memberKey) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY;
        _this.products = Array.from((_b = params.payload.products) !== null && _b !== void 0 ? _b : []);
        return _this;
    }
    APIForCart.prototype.doWork = function (callback) {
        var _this = this;
        _super.prototype.doWork.call(this, callback);
        ACELog.d(APIForCart._TAG, 'doWork');
        var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
        _parameterUtilForOne.setMemberKey(this.memberKey);
        _parameterUtilForOne.setTP(TP$1.CART);
        switch (this.getLogSource()) {
            case ACEofAPIForOne$1.AddInCart:
                _parameterUtilForOne.setBuyMode(IACBuyMode$1.AddProductAtCart);
                break;
            case ACEofAPIForOne$1.DeleteInCart:
                _parameterUtilForOne.setBuyMode(IACBuyMode$1.RemoveProductAtCart);
                break;
        }
        _parameterUtilForOne.setProduct(acproductToURLForOne(this.products, this.getLogSource()));
        _parameterUtilForOne
            .loadVT()
            .then(function (response) {
            ACELog.d(APIForCart._TAG, 'Done load vt.', response);
            ACELog.d(APIForCart._TAG, 'vt after loadVT()', _parameterUtilForOne.getVT());
            return _parameterUtilForOne.updateSTnVT(_this.assignWillUpdateVt());
        })
            .then(function (response) {
            ACELog.d(APIForCart._TAG, 'Done update st and vt.', response);
            ACELog.d(APIForCart._TAG, 'vt after updateSTnVT()', _parameterUtilForOne.getVT());
            if (callback) {
                var res = {
                    taskHash: "".concat(_this._logSource, "::0011"),
                    code: ACEResultCode.Success,
                    result: ACEConstantCallback[ACEConstantCallback.Success],
                    message: 'Done update st and vt.',
                    apiName: _this.getDescription(),
                };
                callback(undefined, res);
            }
        })
            .catch(function (err) {
            ACELog.d(APIForCart._TAG, 'Fail load st and vt.', err);
            if (callback) {
                var res = {
                    taskHash: "".concat(_this._logSource, "::0012"),
                    code: ACEResultCode.FailLoadVT,
                    result: ACEConstantCallback[ACEConstantCallback.Failed],
                    message: 'Fail load vt.',
                    apiName: _this.getDescription(),
                };
                callback(err, res);
            }
        });
    };
    APIForCart.prototype.didWork = function (callback) {
        var _this = this;
        _super.prototype.didWork.call(this, callback);
        ACELog.d(APIForCart._TAG, 'didWork');
        ACENetwork.requestToLog(function (response) {
            ACELog.d(APIForCart._TAG, 'in requestToLog, completed');
            _this.completed(response);
            _this.doneWork(callback);
        }, function (err) {
            ACELog.d(APIForCart._TAG, 'in requestToLog, failed');
            _this.failed(err);
            _this.doneWork(callback);
        });
    };
    APIForCart.prototype.completed = function (response) {
        _super.prototype.completed.call(this, response);
        ACELog.d(APIForCart._TAG, 'completed');
    };
    APIForCart.prototype.failed = function (err) {
        _super.prototype.failed.call(this, err);
        ACELog.d(APIForCart._TAG, 'failed');
    };
    APIForCart.prototype.doneWork = function (callback) {
        var _this = this;
        _super.prototype.doneWork.call(this, callback);
        ACELog.d(APIForCart._TAG, 'doneWork');
        var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
        _parameterUtilForOne
            .resetSessionAndParameterAfterSendWithParams({
            vt: this.assignWillUpdateVt(),
        })
            .then(function (result) {
            ACELog.d(APIForCart._TAG, "resetSessionAndParameterAfterSendWithParams::result: ".concat(result));
            //#region clear
            var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
            _parameterUtilForOne.clearBuyMode();
            _parameterUtilForOne.clearMemberKey();
            _parameterUtilForOne.clearProduct();
            //#endregion
            if (callback) {
                if (_this._error) {
                    callback(_this.getNetworkError(), makeFailCallbackParams(_this));
                }
                else {
                    callback(undefined, makeSuccessCallbackParams(_this));
                }
            }
        })
            .catch(function (err) {
            ACELog.d(APIForCart._TAG, "resetSessionAndParameterAfterSendWithParams::err: ".concat(err));
            if (callback) {
                if (_this._error) {
                    callback(_this.getNetworkError(), makeFailCallbackParams(_this));
                }
                else {
                    callback(undefined, makeSuccessCallbackParams(_this));
                }
            }
        });
    };
    APIForCart.prototype.assignWillUpdateVt = function () {
        if (!this._willUpdateVt) {
            var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
            this._willUpdateVt = new ACEntityForVT();
            this._willUpdateVt.setDeepCopy(_parameterUtilForOne.getVT().getMap());
        }
        return this._willUpdateVt;
    };
    APIForCart._TAG = 'APIForCart';
    return APIForCart;
}(Task));

var APIForAppearProduct = /** @class */ (function (_super) {
    __extends(APIForAppearProduct, _super);
    function APIForAppearProduct(params) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        ACELog.d(APIForAppearProduct._TAG, 'in constructor');
        _this = _super.call(this, params) || this;
        _this.memberKey = (_a = params.payload.memberKey) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY;
        _this.productId = (_b = params.payload.productId) !== null && _b !== void 0 ? _b : ACECONSTANT$1.EMPTY;
        _this.productName = (_c = params.payload.productName) !== null && _c !== void 0 ? _c : ACECONSTANT$1.EMPTY;
        _this.productCategoryName = (_d = params.payload.productCategoryName) !== null && _d !== void 0 ? _d : ACECONSTANT$1.EMPTY;
        _this.productPrice = (_e = params.payload.productPrice) !== null && _e !== void 0 ? _e : ACECONSTANT$1.EMPTY;
        return _this;
    }
    APIForAppearProduct.prototype.doWork = function (callback) {
        var _this = this;
        _super.prototype.doWork.call(this, function (error, innerResult) {
            ACELog.d(APIForAppearProduct._TAG, 'in doWork::in cb');
            if (error && callback) {
                callback(error, innerResult);
            }
            else if (callback) {
                var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
                _parameterUtilForOne.setMemberKey(_this.memberKey);
                _parameterUtilForOne.setProductId(_this.productId);
                _parameterUtilForOne.setProductName(_this.productName);
                _parameterUtilForOne.setProductCategoryName(_this.productCategoryName);
                _parameterUtilForOne.setProductPrice(_this.productPrice);
                callback(undefined, innerResult);
            }
        });
    };
    APIForAppearProduct.prototype.didWork = function (callback) {
        _super.prototype.didWork.call(this, callback);
        ACELog.d(APIForAppearProduct._TAG, 'didWork');
    };
    APIForAppearProduct.prototype.completed = function (response) {
        _super.prototype.completed.call(this, response);
        ACELog.d(APIForAppearProduct._TAG, 'completed');
    };
    APIForAppearProduct.prototype.failed = function (err) {
        _super.prototype.failed.call(this, err);
        ACELog.d(APIForAppearProduct._TAG, 'failed');
    };
    APIForAppearProduct.prototype.doneWork = function (callback) {
        _super.prototype.doneWork.call(this, callback);
        ACELog.d(APIForAppearProduct._TAG, 'doneWork');
        var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
        //#region clear
        _parameterUtilForOne.clearMemberKey();
        _parameterUtilForOne.clearProductId();
        _parameterUtilForOne.clearProductName();
        _parameterUtilForOne.clearProductCategoryName();
        _parameterUtilForOne.clearProductPrice();
        //#endregion
    };
    APIForAppearProduct._TAG = 'APIForAppearProduct';
    return APIForAppearProduct;
}(APIForPL));

var APIForSearch = /** @class */ (function (_super) {
    __extends(APIForSearch, _super);
    function APIForSearch(params) {
        var _this = this;
        var _a;
        ACELog.d(APIForSearch._TAG, 'in constructor');
        _this = _super.call(this, params) || this;
        _this.keyword = (_a = params.payload.keyword) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY;
        return _this;
    }
    APIForSearch.prototype.doWork = function (callback) {
        var _this = this;
        _super.prototype.doWork.call(this, function (error, innerResult) {
            ACELog.d(APIForSearch._TAG, 'in doWork::in cb');
            if (error && callback) {
                callback(error, innerResult);
            }
            else if (callback) {
                var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
                _parameterUtilForOne.setKeyword(_this.keyword);
                _parameterUtilForOne.makeInsenginetTS();
                callback(undefined, innerResult);
            }
        });
    };
    APIForSearch.prototype.didWork = function (callback) {
        _super.prototype.didWork.call(this, callback);
        ACELog.d(APIForSearch._TAG, 'didWork');
    };
    APIForSearch.prototype.completed = function (response) {
        _super.prototype.completed.call(this, response);
        ACELog.d(APIForSearch._TAG, 'completed');
    };
    APIForSearch.prototype.failed = function (err) {
        _super.prototype.failed.call(this, err);
        ACELog.d(APIForSearch._TAG, 'failed');
    };
    APIForSearch.prototype.doneWork = function (callback) {
        _super.prototype.doneWork.call(this, callback);
        ACELog.d(APIForSearch._TAG, 'doneWork');
        var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
        //#region clear
        _parameterUtilForOne.clearKeyword();
        //#endregion
    };
    APIForSearch._TAG = 'APIForSearch';
    return APIForSearch;
}(APIForPL));

var APIForLinkTel = /** @class */ (function (_super) {
    __extends(APIForLinkTel, _super);
    function APIForLinkTel(params) {
        var _this = this;
        var _a, _b, _c;
        ACELog.d(APIForLinkTel._TAG, 'in constructor');
        _this = _super.call(this, params) || this;
        _this.linkName = (_a = params.payload.linkName) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY;
        _this.memberKey = (_b = params.payload.memberKey) !== null && _b !== void 0 ? _b : ACECONSTANT$1.EMPTY;
        _this.tel = (_c = params.payload.tel) !== null && _c !== void 0 ? _c : ACECONSTANT$1.EMPTY;
        return _this;
    }
    APIForLinkTel.prototype.doWork = function (callback) {
        var _this = this;
        _super.prototype.doWork.call(this, function (error, innerResult) {
            ACELog.d(APIForLinkTel._TAG, 'in doWork::in cb');
            if (error && callback) {
                callback(error, innerResult);
            }
            else if (callback) {
                var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
                _parameterUtilForOne.setMemberKey(_this.memberKey);
                switch (_this.getLogSource()) {
                    case ACEofAPIForOne$1.TrackLinkEvent:
                        _parameterUtilForOne.setTP(TP$1.LINK);
                        _parameterUtilForOne.setRefWithBundleID(_this.linkName);
                        break;
                    case ACEofAPIForOne$1.TrackTelEvent:
                        _parameterUtilForOne.setTP(TP$1.TEL);
                        _parameterUtilForOne.setRefForTel(_this.tel);
                        break;
                }
                callback(undefined, innerResult);
            }
        });
    };
    APIForLinkTel.prototype.didWork = function (callback) {
        _super.prototype.didWork.call(this, callback);
        ACELog.d(APIForLinkTel._TAG, 'didWork');
    };
    APIForLinkTel.prototype.completed = function (response) {
        _super.prototype.completed.call(this, response);
        ACELog.d(APIForLinkTel._TAG, 'completed');
    };
    APIForLinkTel.prototype.failed = function (err) {
        _super.prototype.failed.call(this, err);
        ACELog.d(APIForLinkTel._TAG, 'failed');
    };
    APIForLinkTel.prototype.doneWork = function (callback) {
        _super.prototype.doneWork.call(this, callback);
        ACELog.d(APIForLinkTel._TAG, 'doneWork');
        var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
        //#region clear
        _parameterUtilForOne.clearMemberKey();
        _parameterUtilForOne.clearREF();
        //#endregion
    };
    APIForLinkTel._TAG = 'APIForLinkTel';
    return APIForLinkTel;
}(APIForPL));

var APIForLogin = /** @class */ (function (_super) {
    __extends(APIForLogin, _super);
    function APIForLogin(params) {
        var _this = this;
        var _a, _b, _c, _d;
        ACELog.d(APIForLogin._TAG, 'in constructor');
        _this = _super.call(this, params) || this;
        _this.userAge = (_a = params.payload.userAge) !== null && _a !== void 0 ? _a : 0;
        _this.userGender = (_b = params.payload.userGender) !== null && _b !== void 0 ? _b : exports.ACEGender.Unknown;
        _this.userId = (_c = params.payload.userId) !== null && _c !== void 0 ? _c : ACECONSTANT$1.EMPTY;
        _this.userMaritalStatus = (_d = params.payload.userMaritalStatus) !== null && _d !== void 0 ? _d : exports.ACEMaritalStatus.Unknown;
        return _this;
    }
    APIForLogin.prototype.doWork = function (callback) {
        var _this = this;
        _super.prototype.doWork.call(this, function (error, innerResult) {
            ACELog.d(APIForLogin._TAG, 'in doWork::in cb');
            if (error && callback) {
                callback(error, innerResult);
            }
            else if (callback) {
                var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
                _parameterUtilForOne.setUserAge(_this.userAge);
                _parameterUtilForOne.setUserGender(_this.userGender);
                _parameterUtilForOne.setLoginUserID(_this.userId);
                _parameterUtilForOne.setUserMaritalStatus(_this.userMaritalStatus);
                callback(undefined, innerResult);
            }
        });
    };
    APIForLogin.prototype.didWork = function (callback) {
        _super.prototype.didWork.call(this, callback);
        ACELog.d(APIForLogin._TAG, 'didWork');
    };
    APIForLogin.prototype.completed = function (response) {
        _super.prototype.completed.call(this, response);
        ACELog.d(APIForLogin._TAG, 'completed');
    };
    APIForLogin.prototype.failed = function (err) {
        _super.prototype.failed.call(this, err);
        ACELog.d(APIForLogin._TAG, 'failed');
    };
    APIForLogin.prototype.doneWork = function (callback) {
        _super.prototype.doneWork.call(this, callback);
        ACELog.d(APIForLogin._TAG, 'doneWork');
        var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
        //#region clear
        _parameterUtilForOne.clearUserAge();
        _parameterUtilForOne.clearUserGender();
        _parameterUtilForOne.clearLoginUserID();
        _parameterUtilForOne.clearUserMaritalStatus();
        //#endregion
    };
    APIForLogin._TAG = 'APIForLogin';
    return APIForLogin;
}(APIForPL));

var APIForJoinLeave = /** @class */ (function (_super) {
    __extends(APIForJoinLeave, _super);
    function APIForJoinLeave(params) {
        var _this = this;
        var _a;
        ACELog.d(APIForJoinLeave._TAG, 'in constructor');
        _this = _super.call(this, params) || this;
        _this.userId = (_a = params.payload.userId) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY;
        return _this;
    }
    APIForJoinLeave.prototype.doWork = function (callback) {
        var _this = this;
        _super.prototype.doWork.call(this, function (error, innerResult) {
            ACELog.d(APIForJoinLeave._TAG, 'in doWork::in cb');
            if (error && callback) {
                callback(error, innerResult);
            }
            else if (callback) {
                var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
                _parameterUtilForOne.setJN(_this._logSource);
                _parameterUtilForOne.setJoinOrLeaveUserID(_this.userId);
                callback(undefined, innerResult);
            }
        });
    };
    APIForJoinLeave.prototype.didWork = function (callback) {
        _super.prototype.didWork.call(this, callback);
        ACELog.d(APIForJoinLeave._TAG, 'didWork');
    };
    APIForJoinLeave.prototype.completed = function (response) {
        _super.prototype.completed.call(this, response);
        ACELog.d(APIForJoinLeave._TAG, 'completed');
    };
    APIForJoinLeave.prototype.failed = function (err) {
        _super.prototype.failed.call(this, err);
        ACELog.d(APIForJoinLeave._TAG, 'failed');
    };
    APIForJoinLeave.prototype.doneWork = function (callback) {
        _super.prototype.doneWork.call(this, callback);
        ACELog.d(APIForJoinLeave._TAG, 'doneWork');
        var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
        //#region clear
        _parameterUtilForOne.clearJn();
        _parameterUtilForOne.clearJoinOrLeaveUserID();
        //#endregion
    };
    APIForJoinLeave._TAG = 'APIForJoinLeave';
    return APIForJoinLeave;
}(APIForPL));

var ACEConstantInteger;
(function (ACEConstantInteger) {
    ACEConstantInteger[ACEConstantInteger["ACEPRODUCT_QUERY_MAX_LENGTH"] = 512] = "ACEPRODUCT_QUERY_MAX_LENGTH";
    ACEConstantInteger[ACEConstantInteger["ENCRYPT_VALUE_AGE"] = 4] = "ENCRYPT_VALUE_AGE";
    ACEConstantInteger[ACEConstantInteger["HalfOfHourMilliseconds"] = 1800000] = "HalfOfHourMilliseconds";
    ACEConstantInteger[ACEConstantInteger["INIT_FAILED_LOG_COUNT"] = 1] = "INIT_FAILED_LOG_COUNT";
    ACEConstantInteger[ACEConstantInteger["MAX_LENGTH_REDUCE_TEXT_COUNT"] = 128] = "MAX_LENGTH_REDUCE_TEXT_COUNT";
    ACEConstantInteger[ACEConstantInteger["OneDayMilliseconds"] = 86400000] = "OneDayMilliseconds";
    ACEConstantInteger[ACEConstantInteger["QUEUE_MAX_FAILED_LOG_COUNT"] = 99] = "QUEUE_MAX_FAILED_LOG_COUNT";
    ACEConstantInteger[ACEConstantInteger["QUEUE_MAX_WAITING_COUNT"] = 5] = "QUEUE_MAX_WAITING_COUNT";
    ACEConstantInteger[ACEConstantInteger["QUEUE_MAX_BUFFER_COUNT"] = 5] = "QUEUE_MAX_BUFFER_COUNT";
    ACEConstantInteger[ACEConstantInteger["TWO_MINUTES"] = 120] = "TWO_MINUTES";
})(ACEConstantInteger || (ACEConstantInteger = {}));
var ACEConstantInteger$1 = ACEConstantInteger;

var ACEPolicyParameterUtil = /** @class */ (function () {
    function ACEPolicyParameterUtil() {
        ACEPolicyParameterUtil.REPEAT_PULLING_INTERVAL_SECOND =
            ACEPolicyParameterUtil.REPEAT_PULLING_INTERVAL_SECOND_DEFAULT;
    }
    ACEPolicyParameterUtil.getInstance = function () {
        return this.instance || (this.instance = new this());
    };
    ACEPolicyParameterUtil.prototype.savePolicy = function (result) {
        if (result.getCode() != HttpURLConnection.HTTP_OK) {
            ACELog.d(ACEPolicyParameterUtil._TAG, "http response code not ok: ".concat(result.getCode()));
            return;
        }
        ACELog.d(ACEPolicyParameterUtil._TAG, 'Receive policy.');
        // console.log(`ACEPolicyParameterUtil::savePolicy::_response: ${JSON.stringify(result)}`)
        var _policyParameters = ACEPolicyParameters.getInstance();
        var responseHeaders = result.getHeaders();
        if (responseHeaders[POLICY$1.RESPONSE_SDK_ENABLE.toLowerCase()]) {
            // console.log(
            //   `in if key: ${POLICY.RESPONSE_SDK_ENABLE.toLowerCase()}, value: ${
            //     responseHeaders[POLICY.RESPONSE_SDK_ENABLE.toLowerCase()]
            //   }`,
            // )
            _policyParameters.setCpAllow(responseHeaders[POLICY$1.RESPONSE_SDK_ENABLE.toLowerCase()]);
            if (!ControlTowerSingleton.getInstance().isEnableByPolicy()) {
                ACELog.d(ACEPolicyParameterUtil._TAG, 'disabled by policy.');
                ControlTowerSingleton.getInstance().setSDKDisable();
            }
        }
        if (responseHeaders[POLICY$1.RESPONSE_CID.toLowerCase()]) {
            // console.log(
            //   `in if key: ${POLICY.RESPONSE_CID.toLowerCase()}, value: ${responseHeaders[POLICY.RESPONSE_CID.toLowerCase()]}`,
            // )
            _policyParameters.setCpCid(responseHeaders[POLICY$1.RESPONSE_CID.toLowerCase()]);
        }
        if (responseHeaders[POLICY$1.RESPONSE_DEBUG.toLowerCase()]) {
            // console.log(
            //   `in if key: ${POLICY.RESPONSE_DEBUG.toLowerCase()}, value: ${
            //     responseHeaders[POLICY.RESPONSE_DEBUG.toLowerCase()]
            //   }`,
            // )
            _policyParameters.setCpDebug(responseHeaders[POLICY$1.RESPONSE_DEBUG.toLowerCase()]);
        }
        if (responseHeaders[POLICY$1.RESPONSE_DOMAIN.toLowerCase()]) {
            // console.log(
            //   `in if key: ${POLICY.RESPONSE_DOMAIN.toLowerCase()}, value: ${
            //     responseHeaders[POLICY.RESPONSE_DOMAIN.toLowerCase()]
            //   }`,
            // )
            _policyParameters.setCpDomain(responseHeaders[POLICY$1.RESPONSE_DOMAIN.toLowerCase()]);
        }
        if (responseHeaders[POLICY$1.RESPONSE_PRIVATE.toLowerCase()]) {
            // console.log(
            //   `in if key: ${POLICY.RESPONSE_PRIVATE.toLowerCase()}, value: ${
            //     responseHeaders[POLICY.RESPONSE_PRIVATE.toLowerCase()]
            //   }`,
            // )
            _policyParameters.setCpPrivate(responseHeaders[POLICY$1.RESPONSE_PRIVATE.toLowerCase()]);
        }
        if (responseHeaders[POLICY$1.RESPONSE_SOURCE_IP.toLowerCase()]) {
            // console.log(
            //   `in if key: ${POLICY.RESPONSE_SOURCE_IP.toLowerCase()}, value: ${
            //     responseHeaders[POLICY.RESPONSE_SOURCE_IP.toLowerCase()]
            //   }`,
            // )
            _policyParameters.setCpSourceIP(responseHeaders[POLICY$1.RESPONSE_SOURCE_IP.toLowerCase()]);
        }
        if (responseHeaders[POLICY$1.RESPONSE_FORCE_STOP.toLowerCase()]) {
            // console.log(
            //   `in if key: ${POLICY.RESPONSE_FORCE_STOP.toLowerCase()}, value: ${
            //     responseHeaders[POLICY.RESPONSE_FORCE_STOP.toLowerCase()]
            //   }`,
            // )
            var _value = responseHeaders[POLICY$1.RESPONSE_SOURCE_IP.toLowerCase()];
            if (!isEmpty(_value) && _value === POLICY$1.FLAG_SDK_FORCE_STOP) {
                ACELog.d(ACEPolicyParameterUtil._TAG, 'force stop enabled.');
                ControlTowerSingleton.getInstance().enableForceStop();
            }
        }
        // if (responseHeaders.has(POLICY.RESPONSE_FORCE_DELETE_FAILEDFILE.toLowerCase())) {
        //   const _value = responseHeaders.get(POLICY.RESPONSE_FORCE_DELETE_FAILEDFILE.toLowerCase())
        //   if (!isEmpty(_value) && _value === POLICY.FLAG_FORCE_DELETE_FAILEDFILE) {
        //   }
        // }
        if (responseHeaders[POLICY$1.RESPONSE_DEBUG_LOG_URL.toLowerCase()]) {
            // console.log(
            //   `in if key: ${POLICY.RESPONSE_DEBUG_LOG_URL.toLowerCase()}, value: ${
            //     responseHeaders[POLICY.RESPONSE_DEBUG_LOG_URL.toLowerCase()]
            //   }`,
            // )
            _policyParameters.setCpCrashDomain(responseHeaders[POLICY$1.RESPONSE_DEBUG_LOG_URL.toLowerCase()]);
        }
        if (responseHeaders[POLICY$1.RESPONSE_POLICY_INTERVAL.toLowerCase()]) {
            // console.log(
            //   `in if key: ${POLICY.RESPONSE_POLICY_INTERVAL.toLowerCase()}, value: ${
            //     responseHeaders[POLICY.RESPONSE_POLICY_INTERVAL.toLowerCase()]
            //   }`,
            // )
            var interval = ACEPolicyParameterUtil.REPEAT_PULLING_INTERVAL_SECOND;
            var _value = responseHeaders[POLICY$1.RESPONSE_POLICY_INTERVAL.toLowerCase()];
            if (_value && !isEmpty(_value)) {
                interval = parseInt(_value);
                if (interval < ACEConstantInteger$1.TWO_MINUTES) {
                    interval = ACEConstantInteger$1.TWO_MINUTES;
                }
                ACEPolicyParameterUtil.REPEAT_PULLING_INTERVAL_SECOND = interval;
            }
        }
        if (responseHeaders[POLICY$1.RESPONSE_TOAST_APPKEY.toLowerCase()]) {
            // console.log(
            //   `in if key: ${POLICY.RESPONSE_TOAST_APPKEY.toLowerCase()}, value: ${
            //     responseHeaders[POLICY.RESPONSE_TOAST_APPKEY.toLowerCase()]
            //   }`,
            // )
            _policyParameters.setToastAppKey(responseHeaders[POLICY$1.RESPONSE_TOAST_APPKEY.toLowerCase()]);
        }
        ACELog.d(ACEPolicyParameterUtil._TAG, 'done save policy.', _policyParameters);
    };
    ACEPolicyParameterUtil._TAG = 'paramUtilForPolicy';
    ACEPolicyParameterUtil.REPEAT_PULLING_INTERVAL_SECOND_DEFAULT = 6 * 60 * 60;
    return ACEPolicyParameterUtil;
}());

var APIForPolicy = /** @class */ (function (_super) {
    __extends(APIForPolicy, _super);
    function APIForPolicy(params) {
        return _super.call(this, params) || this;
    }
    APIForPolicy.prototype.doWork = function (callback) {
        _super.prototype.doWork.call(this, callback);
        if (callback) {
            var res = {
                taskHash: "".concat(this._logSource, "::0011"),
                code: ACEResultCode.Success,
                result: ACEConstantCallback[ACEConstantCallback.Success],
                message: 'Done doWork to policy.',
                apiName: this.getDescription(),
            };
            callback(undefined, res);
        }
    };
    APIForPolicy.prototype.didWork = function (callback) {
        var _this = this;
        _super.prototype.didWork.call(this, callback);
        ACENetwork.requestToPolicy(function (response) {
            ACELog.d(APIForPolicy._TAG, 'in requestToPolicy, completed');
            _this.completed(response);
            _this.doneWork(callback);
        }, function (err) {
            ACELog.d(APIForPolicy._TAG, 'in requestToPolicy, failed');
            _this.failed(err);
            _this.doneWork(callback);
        });
    };
    APIForPolicy.prototype.doneWork = function (callback) {
        _super.prototype.doneWork.call(this, callback);
        if (callback) {
            if (this._error) {
                callback(this.getNetworkError(), makeFailCallbackParams(this));
            }
            else {
                callback(undefined, makeSuccessCallbackParams(this));
            }
        }
    };
    APIForPolicy.prototype.completed = function (response) {
        _super.prototype.completed.call(this, response);
        ACELog.d(APIForPolicy._TAG, 'completed, before savePolicy');
        ACEPolicyParameterUtil.getInstance().savePolicy(this._response);
        ACELog.d(APIForPolicy._TAG, 'completed, after savePolicy');
        ControlTowerSingleton.getInstance().succeedRequestPolicy();
    };
    APIForPolicy.prototype.failed = function (err) {
        _super.prototype.failed.call(this, err);
        ControlTowerSingleton.getInstance().failedRequestPolicy();
    };
    APIForPolicy._TAG = 'APIForPolicy';
    return APIForPolicy;
}(Task));

var SRC;
(function (SRC) {
    SRC["Deeplink"] = "ACE_link";
    SRC["InstallReferrer"] = "ACE_inst";
    SRC["Push"] = "ACE_push";
})(SRC || (SRC = {}));
var SRC$1 = SRC;

var APIForPushReferrerDeeplink = /** @class */ (function (_super) {
    __extends(APIForPushReferrerDeeplink, _super);
    function APIForPushReferrerDeeplink(params) {
        var _this = this;
        var _a;
        _this = _super.call(this, params) || this;
        ACELog.d(APIForPushReferrerDeeplink._p1TAG, 'in constructor, params:', params);
        _this._kw = (_a = params.payload.keyword) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY;
        return _this;
    }
    APIForPushReferrerDeeplink.prototype.doWork = function (callback) {
        var _this = this;
        _super.prototype.doWork.call(this, callback);
        ACELog.d(APIForPushReferrerDeeplink._p1TAG, 'doWork');
        var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
        _parameterUtilForOne.setTP(TP$1.MCLICK);
        _parameterUtilForOne.updateUrlToRef(ACECONSTANT$1.EMPTY);
        switch (this.getLogSource()) {
            case ACEofAPIForOne$1.InstallReferrer:
                _parameterUtilForOne.setSRC(SRC$1.InstallReferrer);
                _parameterUtilForOne.setKW(this._kw);
                break;
            case ACEofAPIForOne$1.Push:
                _parameterUtilForOne.setSRC(SRC$1.Push);
                _parameterUtilForOne.setKW(this._kw);
                break;
        }
        _parameterUtilForOne
            .loadVT()
            .then(function (response) {
            ACELog.d(APIForPushReferrerDeeplink._p1TAG, 'Done load vt.', response);
            ACELog.d(APIForPushReferrerDeeplink._p1TAG, 'vt after loadVT()', _parameterUtilForOne.getVT());
            return _parameterUtilForOne.updateSTnVT(_this.assignWillUpdateVt());
        })
            .then(function (response) {
            ACELog.d(APIForPushReferrerDeeplink._p1TAG, 'Done update st and vt.', response);
            ACELog.d(APIForPushReferrerDeeplink._p1TAG, 'vt after updateSTnVT()', _parameterUtilForOne.getVT());
            if (callback) {
                var res = {
                    taskHash: "".concat(_this._logSource, "::0011"),
                    code: ACEResultCode.Success,
                    result: ACEConstantCallback[ACEConstantCallback.Success],
                    message: 'Done update st and vt.',
                    apiName: _this.getDescription(),
                };
                callback(undefined, res);
            }
        })
            .catch(function (err) {
            ACELog.d(APIForPushReferrerDeeplink._p1TAG, 'Fail load st and vt.', err);
            if (callback) {
                var res = {
                    taskHash: "".concat(_this._logSource, "::0012"),
                    code: ACEResultCode.FailLoadVT,
                    result: ACEConstantCallback[ACEConstantCallback.Failed],
                    message: 'Fail load vt.',
                    apiName: _this.getDescription(),
                };
                callback(err, res);
            }
        });
    };
    APIForPushReferrerDeeplink.prototype.didWork = function (callback) {
        var _this = this;
        _super.prototype.didWork.call(this, callback);
        ACELog.d(APIForPushReferrerDeeplink._p1TAG, 'didWork');
        ACENetwork.requestToLog(function (response) {
            ACELog.d(APIForPushReferrerDeeplink._p1TAG, 'in requestToLog, completed');
            _this.completed(response);
            _this.doneWork(callback);
        }, function (err) {
            ACELog.d(APIForPushReferrerDeeplink._p1TAG, 'in requestToLog, failed');
            _this.failed(err);
            _this.doneWork(callback);
        });
    };
    APIForPushReferrerDeeplink.prototype.completed = function (response) {
        _super.prototype.completed.call(this, response);
        ACELog.d(APIForPushReferrerDeeplink._p1TAG, 'completed');
    };
    APIForPushReferrerDeeplink.prototype.failed = function (err) {
        _super.prototype.failed.call(this, err);
        ACELog.d(APIForPushReferrerDeeplink._p1TAG, 'failed');
    };
    APIForPushReferrerDeeplink.prototype.doneWork = function (callback) {
        var _this = this;
        _super.prototype.doneWork.call(this, callback);
        ACELog.d(APIForPushReferrerDeeplink._p1TAG, 'doneWork');
        var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
        _parameterUtilForOne
            .resetSessionAndParameterAfterSendWithParams({
            vt: this.assignWillUpdateVt(),
        })
            .then(function (result) {
            ACELog.d(APIForPushReferrerDeeplink._p1TAG, "resetSessionAndParameterAfterSendWithParams::result: ".concat(result));
            //#region clear
            var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
            _parameterUtilForOne.clearSRC();
            _parameterUtilForOne.clearKW();
            //#endregion
            if (callback) {
                if (_this._error) {
                    callback(_this.getNetworkError(), makeFailCallbackParams(_this));
                }
                else {
                    callback(undefined, makeSuccessCallbackParams(_this));
                }
            }
        })
            .catch(function (err) {
            ACELog.d(APIForPushReferrerDeeplink._p1TAG, "resetSessionAndParameterAfterSendWithParams::err: ".concat(err));
            if (callback) {
                if (_this._error) {
                    callback(_this.getNetworkError(), makeFailCallbackParams(_this));
                }
                else {
                    callback(undefined, makeSuccessCallbackParams(_this));
                }
            }
        });
    };
    APIForPushReferrerDeeplink.prototype.assignWillUpdateSt = function () {
        if (!this._willUpdateSt) {
            var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
            this._willUpdateSt = new ACEntityForVT();
            this._willUpdateSt.setDeepCopy(_parameterUtilForOne.getST().getMap());
        }
        return this._willUpdateSt;
    };
    APIForPushReferrerDeeplink.prototype.assignWillUpdateVt = function () {
        if (!this._willUpdateVt) {
            var _parameterUtilForOne = ACEParameterUtilForOne.getInstance();
            this._willUpdateVt = new ACEntityForVT();
            this._willUpdateVt.setDeepCopy(_parameterUtilForOne.getVT().getMap());
        }
        return this._willUpdateVt;
    };
    APIForPushReferrerDeeplink._p1TAG = 'APIForPushReferrerDeeplink';
    return APIForPushReferrerDeeplink;
}(Task));

var TaskAdapter = /** @class */ (function () {
    function TaskAdapter() {
    }
    TaskAdapter.prototype.addTask = function (argTask, callback) {
        this._task = argTask;
        this._callback = callback;
    };
    TaskAdapter.prototype.doWork = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._task) {
                ACELog.d(TaskAdapter._TAG, 'in doWork');
                _this._task.doWork(function (error, result) {
                    if (result) {
                        ACELog.d(TaskAdapter._TAG, 'in doWork::in cb', result);
                    }
                    if (error) {
                        resolve(false);
                    }
                    else {
                        resolve(true);
                    }
                });
            }
            else {
                ACELog.d(TaskAdapter._TAG, 'in doWork, undefined task');
                reject(new Error('undefined task'));
            }
        });
    };
    TaskAdapter.prototype.didWork = function (resultDoWork) {
        ACELog.d(TaskAdapter._TAG, "in didWork, resultDoWork: ".concat(resultDoWork));
        if (resultDoWork) {
            this._task.didWork(this._callback);
        }
        else {
            throw new Error("Fail doWork at ".concat(this._task.getDescription(), "."));
        }
    };
    TaskAdapter.prototype.run = function () {
        var _this = this;
        this.doWork()
            .then(function (resolve) {
            _this.didWork(resolve);
        })
            .catch(function (err) {
            ACELog.d(TaskAdapter._TAG, 'run::err:', err);
        });
    };
    TaskAdapter._TAG = 'taskAdap';
    return TaskAdapter;
}());

var ACEReducerForOne = /** @class */ (function () {
    function ACEReducerForOne() {
    }
    ACEReducerForOne.getInstance = function () {
        return this.instance || (this.instance = new this());
    };
    ACEReducerForOne.reducer = function (params, callback) {
        if (params.type !== ACEofAPIForOne$1.Policy) {
            if (!ControlTowerSingleton.isEnableByPolicy()) {
                var result_1 = {
                    taskHash: "".concat(params.type, "::0006"),
                    code: ACEResultCode.NotFoundPolicyInformation,
                    result: ACEConstantCallback[ACEConstantCallback.Failed],
                    message: 'Not found policy information.',
                    apiName: ACEofAPIForOne$1[params.type],
                };
                if (callback) {
                    callback(new Error('0006, Not found policy information.'), result_1);
                    return;
                }
                else {
                    return new Promise(function (resolveToOut, rejectToOut) {
                        rejectToOut(result_1);
                    });
                }
            }
        }
        var taskAdapter = new TaskAdapter();
        switch (params.type) {
            case ACEofAPIForOne$1.AppearProduct:
                taskAdapter.addTask(new APIForAppearProduct(params), callback);
                break;
            case ACEofAPIForOne$1.Buy:
                taskAdapter.addTask(new APIForBuy(params), callback);
                break;
            case ACEofAPIForOne$1.AddInCart:
            case ACEofAPIForOne$1.DeleteInCart:
                taskAdapter.addTask(new APIForCart(params), callback);
                break;
            case ACEofAPIForOne$1.Search:
                taskAdapter.addTask(new APIForSearch(params), callback);
                break;
            case ACEofAPIForOne$1.Join:
            case ACEofAPIForOne$1.Leave:
                taskAdapter.addTask(new APIForJoinLeave(params), callback);
                break;
            case ACEofAPIForOne$1.Login:
                taskAdapter.addTask(new APIForLogin(params), callback);
                break;
            case ACEofAPIForOne$1.PlWithPage:
                taskAdapter.addTask(new APIForPL(params), callback);
                break;
            case ACEofAPIForOne$1.Policy:
                taskAdapter.addTask(new APIForPolicy(params), callback);
                break;
            case ACEofAPIForOne$1.InstallReferrer:
            case ACEofAPIForOne$1.Push:
                taskAdapter.addTask(new APIForPushReferrerDeeplink(params), callback);
                break;
            case ACEofAPIForOne$1.TrackLinkEvent:
            case ACEofAPIForOne$1.TrackTelEvent:
                taskAdapter.addTask(new APIForLinkTel(params), callback);
                break;
            default:
                ACELog.d(ACEReducerForOne._TAG, 'not implementation Task.');
                break;
        }
        taskAdapter.run();
    };
    ACEReducerForOne.appearProduct = function (callback, pageName, memberKey, productId, productName, productCategoryName, productPrice) {
        return ACEReducerForOne.reducer({
            type: ACEofAPIForOne$1.AppearProduct,
            payload: {
                pageName: pageName,
                memberKey: memberKey,
                productId: productId,
                productName: productName,
                productCategoryName: productCategoryName,
                productPrice: productPrice,
            },
            error: false,
            debugParams: {},
        }, callback);
    };
    ACEReducerForOne.buy = function (callback, pageName, memberKey, orderNumber, payMethodName, products) {
        ACELog.d(ACEReducerForOne._TAG, 'buy: ' + JSON.stringify(pageName));
        return ACEReducerForOne.reducer({
            type: ACEofAPIForOne$1.Buy,
            payload: {
                memberKey: memberKey,
                orderNumber: orderNumber,
                paymentMethod: payMethodName,
                products: products,
            },
            error: false,
            debugParams: {},
        }, callback);
    };
    ACEReducerForOne.cart = function (type, callback, memberKey, products) {
        return ACEReducerForOne.reducer({
            type: type == ACParams.TYPE.ADDCART ? ACEofAPIForOne$1.AddInCart : ACEofAPIForOne$1.DeleteInCart,
            payload: {
                memberKey: memberKey,
                products: products,
            },
            error: false,
            debugParams: {},
        }, callback);
    };
    ACEReducerForOne.join = function (callback, pageName, userId) {
        return ACEReducerForOne.reducer({
            type: ACEofAPIForOne$1.Join,
            payload: {
                pageName: pageName,
                userId: userId,
            },
            error: false,
            debugParams: {},
        }, callback);
    };
    ACEReducerForOne.leave = function (callback, pageName, userId) {
        return ACEReducerForOne.reducer({
            type: ACEofAPIForOne$1.Leave,
            payload: {
                pageName: pageName,
                userId: userId,
            },
            error: false,
            debugParams: {},
        }, callback);
    };
    ACEReducerForOne.link = function (callback, pageName, linkName, memberKey) {
        return ACEReducerForOne.reducer({
            type: ACEofAPIForOne$1.TrackLinkEvent,
            payload: {
                pageName: pageName,
                memberKey: memberKey,
                linkName: linkName,
            },
            error: false,
            debugParams: {},
        }, callback);
    };
    ACEReducerForOne.login = function (callback, pageName, userAge, userGender, userId, userMaritalStatus) {
        return ACEReducerForOne.reducer({
            type: ACEofAPIForOne$1.Login,
            payload: {
                pageName: pageName,
                userAge: userAge,
                userGender: userGender,
                userId: userId,
                userMaritalStatus: userMaritalStatus,
            },
            error: false,
            debugParams: {},
        }, callback);
    };
    ACEReducerForOne.plWithPage = function (callback, pageName) {
        ControlTowerSingleton.getInstance().setDevSDKMode();
        ControlTowerSingleton.getInstance().setHomeDevNetworkMode();
        return ACEReducerForOne.reducer({
            type: ACEofAPIForOne$1.PlWithPage,
            payload: {
                pageName: pageName,
            },
            error: false,
            debugParams: {},
        }, callback);
    };
    ACEReducerForOne.policy = function (callback) {
        return ACEReducerForOne.reducer({
            type: ACEofAPIForOne$1.Policy,
            payload: {},
            error: false,
            debugParams: {},
        }, callback);
    };
    ACEReducerForOne.push = function (callback, data, push) {
        var _push = push;
        if (isEmpty(_push)) {
            if (data) {
                _push = data[ACOneConstant$1.PushKeyName];
            }
        }
        return ACEReducerForOne.reducer({
            type: ACEofAPIForOne$1.Push,
            payload: {
                keyword: _push,
            },
            error: false,
            debugParams: {},
        }, callback);
    };
    ACEReducerForOne.referrer = function (callback, keyword) {
        var _keyword = keyword !== null && keyword !== void 0 ? keyword : ACECONSTANT$1.EMPTY;
        ACEParameterUtilForOne.getInstance()
            .isDuplicateInstallReferrer(_keyword)
            .then(function (result) {
            ACELog.i(ACECONSTANT$1.OFFICIAL_LOG_TAG, 'Already stored referrer.');
        })
            .catch(function (err) {
            return ACEReducerForOne.reducer({
                type: ACEofAPIForOne$1.InstallReferrer,
                payload: {
                    keyword: _keyword,
                },
                error: false,
                debugParams: {},
            }, callback);
        });
    };
    ACEReducerForOne.search = function (callback, pageName, keyword) {
        return ACEReducerForOne.reducer({
            type: ACEofAPIForOne$1.Search,
            payload: {
                pageName: pageName,
                keyword: keyword,
            },
            error: false,
            debugParams: {},
        }, callback);
    };
    ACEReducerForOne.tel = function (callback, pageName, memberKey, tel) {
        return ACEReducerForOne.reducer({
            type: ACEofAPIForOne$1.TrackTelEvent,
            payload: {
                pageName: pageName,
                memberKey: memberKey,
                tel: tel,
            },
            error: false,
            debugParams: {},
        }, callback);
    };
    ACEReducerForOne._TAG = 'reducerForOne';
    return ACEReducerForOne;
}());

var ACEInternalAPIForOne = /** @class */ (function () {
    function ACEInternalAPIForOne() {
    }
    ACEInternalAPIForOne.prototype.requestPolicy = function (callback) {
        return ACEReducerForOne.policy(callback);
    };
    ACEInternalAPIForOne.prototype.send = function (value, callback) {
        throw new Error('Method not implemented.');
    };
    return ACEInternalAPIForOne;
}());

var ACEOneStaticConfig = /** @class */ (function () {
    function ACEOneStaticConfig() {
        this._enablePrivacyPolicy = false;
        this._debug = true;
        this._key = 'empty';
        this._commonAPI = new ACEInternalAPIForOne();
    }
    ACEOneStaticConfig.prototype.configure = function (configuration, callback) {
        this._key = configuration.key;
        if (configuration.enablePrivacyPolicy)
            this._enablePrivacyPolicy = configuration.enablePrivacyPolicy;
        if (configuration.debug)
            this._debug = configuration.debug;
        return ACEParameterUtilForOne.getInstance().initParameters(this._key, this._enablePrivacyPolicy, callback);
    };
    ACEOneStaticConfig.prototype.isDebug = function () {
        return this._debug;
    };
    ACEOneStaticConfig.prototype.getEnablePrivacyPolicy = function () {
        return this._enablePrivacyPolicy;
    };
    ACEOneStaticConfig.prototype.getKey = function () {
        return this._key;
    };
    ACEOneStaticConfig.prototype.getCommonAPI = function () {
        if (this._commonAPI) {
            return this._commonAPI;
        }
        return undefined;
    };
    ACEOneStaticConfig.prototype.getParameterUtil = function () {
        return ACEParameterUtilForOne.getInstance();
    };
    return ACEOneStaticConfig;
}());

var ACECommonStaticConfig = /** @class */ (function () {
    function ACECommonStaticConfig() {
    }
    ACECommonStaticConfig.configure = function (configuration, callback) {
        var _this = this;
        // ************************************************ development mode [S]
        ControlTowerSingleton.setDevSDKMode();
        // ControlTowerSingleton.getInstance().setHomeDevNetworkMode()
        ControlTowerSingleton.setDefaultNetworkMode(); // 공개 정책 서버를 쓰도록
        // ************************************************ development mode [E]
        ACELog.i(ACECommonStaticConfig._TAG, "SDK mode: ".concat(ControlTowerSingleton.getCurrentSDKkModeName(), ", network mode: ").concat(ControlTowerSingleton.getCurrentNetworkModeName()));
        ACELog.i(ACECommonStaticConfig._TAG, "NHN DATA SDK version: ".concat(ACS.SDKVersion()));
        if (ControlTowerSingleton.isEnableByPolicy()) {
            ACELog.d(ACECommonStaticConfig._TAG, 'Already init SDK.');
            var response_1 = {
                taskHash: '0000',
                code: ACEResultCode.AlreadyInitialized,
                result: ACEConstantCallback[ACEConstantCallback.Failed],
                message: 'Already init SDK.',
                apiName: 'init',
            };
            if (callback) {
                callback(new Error('Already init SDK.'), response_1);
                return;
            }
            else {
                return new Promise(function (resolveToOut, rejectToOut) {
                    rejectToOut(response_1);
                });
            }
        }
        else {
            if (this._staticConfigImpl) {
                ACELog.i(ACECommonStaticConfig._TAG, 'Reinit SDK.');
                ControlTowerSingleton.reset();
                // ************************************************ development mode [S]
                ControlTowerSingleton.setDevSDKMode();
                // ControlTowerSingleton.getInstance().setHomeDevNetworkMode()
                ControlTowerSingleton.setDefaultNetworkMode(); // 공개 정책 서버를 쓰도록
                // ************************************************ development mode [E]
            }
            else {
                ACELog.i(ACECommonStaticConfig._TAG, 'Start init SDK.');
            }
        }
        ACELog.d(ACECommonStaticConfig._TAG, 'AceConfiguration information:', configuration);
        if (!ACECommonStaticConfig.validateForAceConfiguration(configuration)) {
            ACELog.d(ACECommonStaticConfig._TAG, 'Initialization SDK failed.');
            var response_2 = {
                taskHash: '0000',
                code: ACEResultCode.NeedToCheckAceConfiguration,
                result: ACEConstantCallback[ACEConstantCallback.Failed],
                message: 'Please check the configuration.',
                apiName: 'init',
            };
            if (callback) {
                callback(new Error('Initialization SDK failed.'), response_2);
                return;
            }
            else {
                return new Promise(function (resolveToOut, rejectToOut) {
                    rejectToOut(response_2);
                });
            }
        }
        if (configuration.platform) {
            this._platform = configuration.platform;
        }
        if (ACECommonStaticConfig._platform === AceConfiguration.PLATFORM.DEFAULT) {
            this._staticConfigImpl = new ACEOneStaticConfig();
        }
        var _commonAPI = this._staticConfigImpl.getCommonAPI();
        if (callback) {
            this._staticConfigImpl
                .configure(configuration)
                .then(function (res) {
                ACELog.d(ACECommonStaticConfig._TAG, 'SDK init step one result:', res);
                return res;
            })
                .then(function (res) {
                ACELog.d(ACECommonStaticConfig._TAG, 'SDK init step two request policy');
                if (_commonAPI) {
                    _commonAPI.requestPolicy(function (error, innerResult) {
                        if (error) {
                            callback(new Error('0001, Can not request policy.'), innerResult);
                        }
                        else {
                            callback(undefined, innerResult);
                        }
                    });
                }
                else {
                    var response = {
                        taskHash: '0001',
                        code: ACEResultCode.CanNotRequestToPolicy,
                        result: ACEConstantCallback[ACEConstantCallback.Failed],
                        message: 'Can not request policy.',
                        apiName: 'init',
                    };
                    callback(new Error('0001, Can not request policy.'), response);
                }
            })
                .catch(function (err) {
                ACELog.d(ACECommonStaticConfig._TAG, '0001, Can not request policy.', err);
                callback(err, undefined);
            });
        }
        else {
            return new Promise(function (resolveToOut, rejectToOut) {
                _this._staticConfigImpl
                    .configure(configuration)
                    .then(function (res) {
                    ACELog.d(ACECommonStaticConfig._TAG, 'SDK init step one result:', res);
                    return res;
                })
                    .then(function (res) {
                    if (_commonAPI) {
                        ACELog.d(ACECommonStaticConfig._TAG, 'SDK init step two request policy');
                        _commonAPI.requestPolicy(function (error, innerResult) {
                            if (error) {
                                if (innerResult) {
                                    rejectToOut(innerResult);
                                }
                                else {
                                    rejectToOut(new Error('0002, Can not request policy.'));
                                }
                            }
                            else {
                                if (innerResult)
                                    resolveToOut(innerResult);
                            }
                        });
                    }
                    else {
                        var response = {
                            taskHash: '0002',
                            code: ACEResultCode.CanNotRequestToPolicy,
                            result: ACEConstantCallback[ACEConstantCallback.Failed],
                            message: 'Can not request policy.',
                            apiName: 'init',
                        };
                        rejectToOut(response);
                    }
                })
                    .catch(function (err) {
                    ACELog.d(ACECommonStaticConfig._TAG, '0002, Can not request policy.', err);
                    rejectToOut(err);
                });
            });
        }
    };
    ACECommonStaticConfig.validateForAceConfiguration = function (config) {
        if (isEmpty(config.key) || !isStartIndexAkAtGCodeString(config.key)) {
            return false;
        }
        return true;
    };
    ACECommonStaticConfig.isDebug = function () {
        if (this._staticConfigImpl) {
            return this._staticConfigImpl.isDebug();
        }
        return false;
    };
    ACECommonStaticConfig.getEnablePrivacyPolicy = function () {
        if (this._staticConfigImpl) {
            return this._staticConfigImpl.getEnablePrivacyPolicy();
        }
        return false;
    };
    ACECommonStaticConfig.getKey = function () {
        if (this._staticConfigImpl) {
            return this._staticConfigImpl.getKey();
        }
        return ACECONSTANT$1.EMPTY;
    };
    ACECommonStaticConfig.getParameterUtil = function () {
        if (this._staticConfigImpl) {
            return this._staticConfigImpl.getParameterUtil();
        }
        return undefined;
    };
    //#region AdvertisingIdentifier
    ACECommonStaticConfig.setAdvertisingIdentifier = function (advertisingIdentifier) {
        var _parameterUtil = ACECommonStaticConfig.getParameterUtil();
        if (_parameterUtil) {
            _parameterUtil.setAdvertisingIdentifier(advertisingIdentifier);
        }
    };
    ACECommonStaticConfig._TAG = 'comInit';
    return ACECommonStaticConfig;
}());

// import NetInfo from '@react-native-community/netinfo'
var NetworkUtils = /** @class */ (function () {
    function NetworkUtils() {
    }
    NetworkUtils.isNetworkAvailable = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // const response = await NetInfo.fetch()
                // return response.isConnected
                return [2 /*return*/, true];
            });
        });
    };
    return NetworkUtils;
}());

var SafeEmitter = /** @class */ (function (_super) {
    __extends(SafeEmitter, _super);
    function SafeEmitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeEmitter.prototype.addListener = function (event, listener) {
        return _super.prototype.on.call(this, event, listener);
    };
    SafeEmitter.prototype.on = function (event, listener) {
        return _super.prototype.on.call(this, event, listener);
    };
    SafeEmitter.prototype.once = function (event, listener) {
        return _super.prototype.once.call(this, event, listener);
    };
    SafeEmitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return _super.prototype.emit.apply(this, __spreadArray([event], args, false));
    };
    SafeEmitter.prototype.removeListener = function (event, listener) {
        return _super.prototype.removeListener.call(this, event, listener);
    };
    SafeEmitter.prototype.removeAllListeners = function (event) {
        return _super.prototype.removeAllListeners.call(this, event);
    };
    SafeEmitter.prototype.removeListeners = function (event) {
        return _super.prototype.removeAllListeners.call(this, event);
    };
    return SafeEmitter;
}(EventEmitter__default["default"]));

var EventsForWorkerEmitter = /** @class */ (function (_super) {
    __extends(EventsForWorkerEmitter, _super);
    function EventsForWorkerEmitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventsForWorkerEmitter;
}(SafeEmitter));

var ACS = /** @class */ (function () {
    function ACS() {
        var _this = this;
        this.emitter = new EventsForWorkerEmitter();
        this.emitter.on('popWaitQueue', function () {
            _this.popWaitQueue();
        });
        this.emitter.on('popBufferQueue', function () {
            _this.popBufferQueue();
        });
    }
    ACS.getInstance = function () {
        return this.instance || (this.instance = new this());
    };
    ACS.configure = function (value, callback) {
        return ACS.getInstance().configure(value, callback);
    };
    ACS.prototype.configure = function (value, callback) {
        var _this = this;
        if (callback) {
            var callbackAtInit = function (error, innerResult) {
                if (error) {
                    callback(new Error("0000, Can not init SDK."));
                }
                else {
                    callback(undefined, innerResult);
                    _this.popWaitQueueEmit();
                }
            };
            ACECommonStaticConfig.configure(value, callbackAtInit);
        }
        else {
            return new Promise(function (resolveToOut, rejectToOut) {
                ACECommonStaticConfig.configure(value)
                    .then(function (res) {
                    resolveToOut(res);
                })
                    .then(function (res) {
                    ACELog.d(ACS._TAG, "0000::configure::then2: ".concat(JSON.stringify(res, null, 2)));
                    _this.popWaitQueueEmit();
                })
                    .catch(function (err) {
                    ACELog.d(ACS._TAG, "0000::configure::catch2: ".concat(JSON.stringify(err, null, 2)));
                    rejectToOut(err);
                });
            });
        }
    };
    ACS.send = function (value, callback) {
        if (!ControlTowerSingleton.isEnableByPolicy()) {
            ACS.setWaitQueue(value);
            var result_1 = {
                taskHash: "".concat(value.type, "::0404"),
                code: ACEResultCode.NotFoundPolicyInformation,
                result: ACEConstantCallback.Failed,
                message: 'Not found policy information.',
                apiName: value.type,
            };
            if (callback) {
                callback(undefined, result_1);
                return;
            }
            else {
                return new Promise(function (resolveToOut, rejectToOut) {
                    rejectToOut(result_1);
                });
            }
        }
        ACELog.d(ACS._TAG, "send::getIsCompletePolicy: ".concat(ControlTowerSingleton.getIsCompletePolicy()));
        if (!ControlTowerSingleton.getIsCompletePolicy()) {
            ACS.setWaitQueue(value);
            var result_2 = {
                taskHash: "".concat(value.type, "::0405"),
                code: ACEResultCode.NotReceivePolicy,
                result: ACEConstantCallback.Failed,
                message: 'Not receive policy for SDK. It will send after init.',
                apiName: value.type,
            };
            if (callback) {
                callback(undefined, result_2);
                return;
            }
            else {
                return new Promise(function (resolveToOut, rejectToOut) {
                    rejectToOut(result_2);
                });
            }
        }
        ACELog.d(ACS._TAG, "send::isEnableByPolicy: ".concat(ControlTowerSingleton.isEnableByPolicy()));
        if (!ControlTowerSingleton.isEnableByPolicy()) {
            ACS.setWaitQueue(value);
            var result_3 = {
                taskHash: "".concat(value.type, "::0406"),
                code: ACEResultCode.DisabledByPolicy,
                result: ACEConstantCallback.Failed,
                message: 'Disabled by policy of SDK. It will send after init.',
                apiName: value.type,
            };
            if (callback) {
                callback(undefined, result_3);
                return;
            }
            else {
                return new Promise(function (resolveToOut, rejectToOut) {
                    rejectToOut(result_3);
                });
            }
        }
        if (ACS.isLock()) {
            ACS.setBufferQueue(value);
            var result_4 = {
                taskHash: "".concat(value.type, "::0409"),
                code: ACEResultCode.TooBusyWillSendAfterDone,
                result: ACEConstantCallback.Failed,
                message: 'Too busy. It will send after done.',
                apiName: value.type,
            };
            if (callback) {
                callback(undefined, result_4);
                return;
            }
            else {
                return new Promise(function (resolveToOut, rejectToOut) {
                    rejectToOut(result_4);
                });
            }
        }
        return ACS._send(value, callback);
    };
    //#endregion
    //#region detail of SDK
    ACS.SDKVersion = function () {
        return '0.0.278';
    };
    ACS.getPackageNameOrBundleID = function () {
        return this._packageNameOrBundleID;
    };
    ACS.setPackageNameOrBundleID = function (packageNameOrBundleID) {
        this._packageNameOrBundleID = packageNameOrBundleID;
    };
    ACS.getDetail = function () {
        var _a, _b;
        return {
            sdkVersion: ACS.SDKVersion(),
            packageNameOrBundleID: ACS.getPackageNameOrBundleID(),
            internal: {
                waitQueue: Array.from((_a = ACS.waitQueue) !== null && _a !== void 0 ? _a : []),
                bufferQueue: Array.from((_b = ACS.bufferQueue) !== null && _b !== void 0 ? _b : []),
            },
        };
    };
    //#endregion
    //#region pop wait queue
    ACS.prototype.popWaitQueueEmit = function () {
        this.emitter.emit('popWaitQueue');
    };
    ACS.prototype.popWaitQueue = function () {
        var _this = this;
        ACELog.d(ACS._TAG, 'pop waitQueue');
        if (ACS.waitQueue && ACS.waitQueue.length > 0) {
            ACELog.d(ACS._TAG, "waitQueue: ".concat(ACS.waitQueue.length));
            var callback = function (error, innerResult) {
                if (error) {
                    ACELog.d(ACS._TAG, 'error of waitQueue', error);
                }
                else if (innerResult) {
                    ACELog.d(ACS._TAG, 'result of waitQueue', innerResult);
                    _this.popWaitQueueEmit();
                }
            };
            var param = ACS.waitQueue.shift();
            if (param)
                ACS._send(param, callback);
        }
    };
    //#endregion
    //#region pop buffer queue
    ACS.prototype.popBufferQueueEmit = function () {
        this.emitter.emit('popBufferQueue');
    };
    ACS.prototype.popBufferQueue = function () {
        ACELog.d(ACS._TAG, 'pop bufferQueue');
        if (ACS.bufferQueue && ACS.bufferQueue.length > 0) {
            ACELog.d(ACS._TAG, "bufferQueue: ".concat(ACS.bufferQueue.length));
            var callback = function (error, innerResult) {
                if (error) {
                    ACELog.d(ACS._TAG, 'error of bufferQueue', error);
                }
                else if (innerResult) {
                    ACELog.d(ACS._TAG, 'result of bufferQueue', innerResult);
                }
            };
            var param = ACS.bufferQueue.shift();
            if (param)
                ACS._send(param, callback);
        }
    };
    ACS._send = function (value, callback) {
        ACS.toggleLock();
        ACELog.i(ACS._TAG, 'ACParams is ', value);
        if (callback) {
            var callbackForCB_1 = function (error, innerResult) {
                if (error) {
                    callback(new Error("0001, Can not use ".concat(value.type, " api.")));
                }
                else {
                    callback(undefined, innerResult);
                }
                ACS.toggleLock();
                ACS.getInstance().popBufferQueueEmit();
            };
            NetworkUtils.isNetworkAvailable()
                .then(function (isConnected) {
                var _a;
                ACELog.d(ACS._TAG, "isNetworkAvailable::in then::isConnected: ".concat(isConnected));
                if (isConnected) {
                    switch (value.type) {
                        case ACParams.TYPE.APPEAR_PRODUCT:
                            ACEReducerForOne.appearProduct(callbackForCB_1, value.name, value.memberKey, value.productId, value.productName, value.productCategoryName, value.productPrice);
                            break;
                        case ACParams.TYPE.BUY:
                            ACEReducerForOne.buy(callbackForCB_1, value.name, value.memberKey, value.orderNumber, value.payMethodName, value.products);
                            break;
                        case ACParams.TYPE.ADDCART:
                        case ACParams.TYPE.DELCART:
                            ACEReducerForOne.cart(value.type, callbackForCB_1, value.memberKey, value.products);
                            break;
                        case ACParams.TYPE.EVENT:
                            ACEReducerForOne.plWithPage(callbackForCB_1, value.name);
                            break;
                        case ACParams.TYPE.JOIN:
                            ACEReducerForOne.join(callbackForCB_1, value.name, value.userId);
                            break;
                        case ACParams.TYPE.LEAVE:
                            ACEReducerForOne.leave(callbackForCB_1, value.name, value.userId);
                            break;
                        case ACParams.TYPE.LINK:
                            ACEReducerForOne.link(callbackForCB_1, value.name, value.linkName, value.memberKey);
                            break;
                        case ACParams.TYPE.LOGIN:
                            ACEReducerForOne.login(callbackForCB_1, value.name, value.userAge, value.userGender, value.userId, value.userMaritalStatus);
                            break;
                        case ACParams.TYPE.PUSH:
                            ACEReducerForOne.push(callbackForCB_1, value.data, value.push);
                            break;
                        case ACParams.TYPE.REFERRER:
                            var _keyword = getQueryForKey(decode((_a = value.keyword) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY), ACECONSTANT$1.ReferrerKeyName);
                            if (isEmpty(_keyword)) {
                                var result = {
                                    taskHash: "".concat(value.type, "::0410"),
                                    code: ACEResultCode.InvalidACParamValues,
                                    result: ACEConstantCallback.Failed,
                                    message: 'Invalid value in ACParam object.',
                                    apiName: value.type,
                                };
                                ACS.toggleLock();
                                ACS.getInstance().popBufferQueueEmit();
                                callback(undefined, result);
                                return;
                            }
                            ACEReducerForOne.referrer(callbackForCB_1, _keyword);
                            break;
                        case ACParams.TYPE.SEARCH:
                            ACEReducerForOne.search(callbackForCB_1, value.name, value.keyword);
                            break;
                        case ACParams.TYPE.TEL:
                            ACEReducerForOne.tel(callbackForCB_1, value.name, value.memberKey, value.tel);
                            break;
                    }
                }
                else {
                    var result = {
                        taskHash: "".concat(value.type, "::0407"),
                        code: ACEResultCode.NotConnectToTheInternet,
                        result: ACEConstantCallback.Failed,
                        message: 'Not connect to the internet.',
                        apiName: value.type,
                    };
                    ACS.toggleLock();
                    ACS.getInstance().popBufferQueueEmit();
                    callback(undefined, result);
                }
            })
                .catch(function (err) {
                ACELog.e(ACS._TAG, 'isNetworkAvailable::in catch::err', err);
                var result = {
                    taskHash: "".concat(value.type, "::0408"),
                    code: ACEResultCode.UnknownConnectStateToTheInternet,
                    result: ACEConstantCallback.Failed,
                    message: 'Unknown connect state to the internet.',
                    apiName: value.type,
                };
                ACS.toggleLock();
                ACS.getInstance().popBufferQueueEmit();
                callback(undefined, result);
            });
        }
        else {
            return new Promise(function (resolveToOut, rejectToOut) {
                var callbackForPromise = function (error, innerResult) {
                    if (error) {
                        if (innerResult) {
                            rejectToOut(innerResult);
                        }
                        else {
                            rejectToOut(new Error("0002, Can not use ".concat(value.type, " api.")));
                        }
                    }
                    else {
                        if (innerResult)
                            resolveToOut(innerResult);
                    }
                    ACS.toggleLock();
                    ACS.getInstance().popBufferQueueEmit();
                };
                NetworkUtils.isNetworkAvailable()
                    .then(function (isConnected) {
                    var _a;
                    ACELog.d(ACS._TAG, "isNetworkAvailable::in then::isConnected: ".concat(isConnected));
                    if (isConnected) {
                        switch (value.type) {
                            case ACParams.TYPE.APPEAR_PRODUCT:
                                ACEReducerForOne.appearProduct(callbackForPromise, value.name, value.memberKey, value.productId, value.productName, value.productCategoryName, value.productPrice);
                                break;
                            case ACParams.TYPE.BUY:
                                ACEReducerForOne.buy(callbackForPromise, value.name, value.memberKey, value.orderNumber, value.payMethodName, value.products);
                                break;
                            case ACParams.TYPE.ADDCART:
                            case ACParams.TYPE.DELCART:
                                ACEReducerForOne.cart(value.type, callbackForPromise, value.memberKey, value.products);
                                break;
                            case ACParams.TYPE.EVENT:
                                ACEReducerForOne.plWithPage(callbackForPromise, value.name);
                                break;
                            case ACParams.TYPE.JOIN:
                                ACEReducerForOne.join(callbackForPromise, value.name, value.userId);
                                break;
                            case ACParams.TYPE.LEAVE:
                                ACEReducerForOne.leave(callbackForPromise, value.name, value.userId);
                                break;
                            case ACParams.TYPE.LINK:
                                ACEReducerForOne.link(callbackForPromise, value.name, value.linkName, value.memberKey);
                                break;
                            case ACParams.TYPE.LOGIN:
                                ACEReducerForOne.login(callbackForPromise, value.name, value.userAge, value.userGender, value.userId, value.userMaritalStatus);
                                break;
                            case ACParams.TYPE.PUSH:
                                ACEReducerForOne.push(callbackForPromise, value.data, value.push);
                                break;
                            case ACParams.TYPE.REFERRER:
                                var _keyword = getQueryForKey(decode((_a = value.keyword) !== null && _a !== void 0 ? _a : ACECONSTANT$1.EMPTY), ACECONSTANT$1.ReferrerKeyName);
                                if (isEmpty(_keyword)) {
                                    var result = {
                                        taskHash: "".concat(value.type, "::0410"),
                                        code: ACEResultCode.InvalidACParamValues,
                                        result: ACEConstantCallback.Failed,
                                        message: 'Invalid value in ACParam object.',
                                        apiName: value.type,
                                    };
                                    ACS.toggleLock();
                                    ACS.getInstance().popBufferQueueEmit();
                                    rejectToOut(result);
                                    return;
                                }
                                ACEReducerForOne.referrer(callbackForPromise, _keyword);
                                break;
                            case ACParams.TYPE.SEARCH:
                                ACEReducerForOne.search(callbackForPromise, value.name, value.keyword);
                                break;
                            case ACParams.TYPE.TEL:
                                ACEReducerForOne.tel(callbackForPromise, value.name, value.memberKey, value.tel);
                                break;
                        }
                    }
                    else {
                        var result = {
                            taskHash: "".concat(value.type, "::0407"),
                            code: ACEResultCode.NotConnectToTheInternet,
                            result: ACEConstantCallback.Failed,
                            message: 'Not connect to the internet.',
                            apiName: value.type,
                        };
                        rejectToOut(result);
                        ACS.toggleLock();
                        ACS.getInstance().popBufferQueueEmit();
                    }
                })
                    .catch(function (err) {
                    ACELog.e(ACS._TAG, 'isNetworkAvailable::in catch::err', err);
                    var result = {
                        taskHash: "".concat(value.type, "::0408"),
                        code: ACEResultCode.UnknownConnectStateToTheInternet,
                        result: ACEConstantCallback.Failed,
                        message: 'Unknown connect state to the internet.',
                        apiName: value.type,
                    };
                    ACS.toggleLock();
                    rejectToOut(result);
                });
            });
        }
    };
    ACS.initWaitQueue = function () {
        if (!ACS.waitQueue) {
            ACS.waitQueue = [];
        }
    };
    ACS.setWaitQueue = function (value) {
        ACS.initWaitQueue();
        ACELog.i(ACS._TAG, "ACS.waitQueue.length: ".concat(ACS.waitQueue.length));
        if (ACS.waitQueue.length < ACEConstantInteger$1.QUEUE_MAX_WAITING_COUNT) {
            ACELog.i(ACS._TAG, "ACS.waitQueue.push: ".concat(value.type, ", >>").concat(value.name, "<<"));
            ACS.waitQueue.push(value);
        }
    };
    ACS.initBufferQueue = function () {
        if (!ACS.bufferQueue) {
            ACS.bufferQueue = [];
        }
    };
    ACS.setBufferQueue = function (value) {
        ACS.initBufferQueue();
        ACELog.i(ACS._TAG, "ACS.bufferQueue.length: ".concat(ACS.bufferQueue.length));
        if (ACS.bufferQueue.length < ACEConstantInteger$1.QUEUE_MAX_BUFFER_COUNT) {
            ACELog.i(ACS._TAG, "ACS.bufferQueue.push: ".concat(value.type, ", >>").concat(value.name, "<<"));
            ACS.bufferQueue.push(value);
        }
    };
    ACS.toggleLock = function () {
        this.lock = !this.lock;
    };
    ACS.isLock = function () {
        return this.lock;
    };
    //#endregion
    //#region AdvertisingIdentifier
    ACS.setAdvertisingIdentifier = function (advertisingIdentifier) {
        ACECommonStaticConfig.setAdvertisingIdentifier(advertisingIdentifier);
    };
    //#endregion
    //#region AceWebViewInterface
    ACS.getKey = function () {
        return ACECommonStaticConfig.getKey();
    };
    ACS.getDevice = function () {
        return ACEParameterUtil.getModel();
    };
    ACS.getTS = function () {
        var parameterUtil = ACECommonStaticConfig.getParameterUtil();
        return parameterUtil ? parameterUtil.getTS() : '{}';
    };
    ACS._TAG = 'ACS';
    ACS.lock = false;
    return ACS;
}());

var ACProduct = /** @class */ (function () {
    function ACProduct(name, category, price, quantify, productId, optionCodeName) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantify = quantify;
        this.productId = productId;
        this.optionCodeName = optionCodeName;
    }
    //#region getter
    ACProduct.prototype.getName = function () {
        if (isEmpty(this.name)) {
            this.name = '';
        }
        return this.name;
    };
    ACProduct.prototype.getCategory = function () {
        if (isEmpty(this.category)) {
            this.category = '';
        }
        return this.category;
    };
    ACProduct.prototype.getPrice = function () {
        if (isEmpty(this.price)) {
            this.price = '';
        }
        return this.price;
    };
    ACProduct.prototype.getQuantify = function () {
        return this.quantify;
    };
    ACProduct.prototype.getProductId = function () {
        var _a;
        if (isEmpty(this.productId)) {
            this.productId = '';
        }
        return (_a = this.productId) !== null && _a !== void 0 ? _a : '';
    };
    ACProduct.prototype.getOptionCodeName = function () {
        var _a;
        if (isEmpty(this.optionCodeName)) {
            this.optionCodeName = '';
        }
        return (_a = this.optionCodeName) !== null && _a !== void 0 ? _a : '';
    };
    //#endregion
    //#region getter for encode
    ACProduct.prototype.encodedName = function () {
        return encode$1(this.getName());
    };
    ACProduct.prototype.encodedCategory = function () {
        return encode$1(this.getCategory());
    };
    ACProduct.prototype.encodedPrice = function () {
        return encode$1(this.getPrice());
    };
    ACProduct.prototype.encodedProductId = function () {
        return encode$1(this.getProductId());
    };
    ACProduct.prototype.encodedOptionCodeName = function () {
        return encode$1(this.getOptionCodeName());
    };
    //#endregion
    ACProduct.prototype.toStringForOne = function (logSource) {
        if (logSource == ACEofAPIForOne$1.Buy) {
            return "".concat(this.encodedCategory(), "@").concat(this.encodedName(), "@").concat(this.encodedPrice(), "@").concat(this.getQuantify(), "@").concat(this.encodedProductId(), "@").concat(this.encodedOptionCodeName());
        }
        else {
            return "".concat(this.encodedCategory(), "@").concat(this.encodedName(), "@").concat(this.encodedPrice(), "@").concat(this.getQuantify());
        }
    };
    return ACProduct;
}());

exports.ACParams = ACParams;
exports.ACProduct = ACProduct;
exports.ACS = ACS;
exports.AceConfiguration = AceConfiguration;
//# sourceMappingURL=index.js.map
