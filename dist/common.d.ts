export declare type Time = number;
export interface IConfigItem {
    _id: string;
    value: ConfigItemValue;
}
export declare type ConfigItemValue = BasicConfigItemValue | TableConfigItemValue;
export declare type TableConfigItemValue = {
    _id: string;
    [key: string]: BasicConfigItemValue;
}[];
export declare type BasicConfigItemValue = string | number | boolean | string[];
