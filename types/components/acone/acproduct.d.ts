export default class ACProduct {
    private name;
    private category;
    private price;
    private quantify;
    private productId?;
    private optionCodeName?;
    constructor(name: string, category: string, price: string, quantify: number, productId?: string | undefined, optionCodeName?: string | undefined);
    private getName;
    private getCategory;
    private getPrice;
    private getQuantify;
    private getProductId;
    private getOptionCodeName;
    private encodedName;
    private encodedCategory;
    private encodedPrice;
    private encodedProductId;
    private encodedOptionCodeName;
    toStringForOne(logSource: number): string;
}
