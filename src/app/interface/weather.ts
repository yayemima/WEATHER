export interface Weather {
    "@context": Array<ContextClass | string>;
    type:       string;
    geometry:   Geometry;
    properties: Properties;
}

export interface ContextClass {
    "@version": string;
    wx:         string;
    geo:        string;
    unit:       string;
    "@vocab":   string;
}

export interface Geometry {
    type:        string;
    coordinates: Array<Array<number[]>>;
}

export interface Properties {
    updated:           string;
    units:             string;
    forecastGenerator: string;
    generatedAt:       string;
    updateTime:        string;
    validTimes:        string;
    elevation:         Elevation;
    periods:           Period[];
}

export interface Elevation {
    unitCode: string;
    value:    number;
}

export interface Period {
    number:           number;
    name:             string;
    startTime:        string;
    endTime:          string;
    isDaytime:        boolean;
    temperature:      number;
    temperatureUnit:  TemperatureUnit;
    temperatureTrend: null | string;
    windSpeed:        string;
    windDirection:    string;
    icon:             string;
    shortForecast:    string;
    detailedForecast: string;
}

export enum TemperatureUnit {
    F = "F",
}