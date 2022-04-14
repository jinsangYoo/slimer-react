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
export declare function isEmpty(value: any): boolean;
export declare function isStartIndexAkAtGCodeString(value: string): boolean;
export declare function isAlphabetOrNumberAtStringStartIndex(value: string): boolean;
export declare function onlyAlphabetOrNumberAtStringStartIndex(value: string): string;
export declare function isLetterAtStringStartIndex(value: string): boolean;
export declare function onlyLetteringAtStartIndex(value: string): string;
export declare function stringToNumber(num: string, base: number): number;
export declare function encode(value: string | number | boolean): string;
export declare function decode(value: string): string;
export declare function getQueryVar(source: string): object;
export declare function getQueryForKey(source: string, value: string): string | undefined;
