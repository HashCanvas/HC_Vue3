/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Articles {
  id: string;
  status: string;
  title: string;
  abstractContent: string;
  fullContent: string;
  sourceURL: string;
  imageURL: string;

  /** @format double */
  timestamp: number;
  platforms?: string[];
  disableComment: boolean;

  /** @format double */
  importance: number;
  author: string;
  reviewer: string;
  type: string;

  /** @format double */
  pageviews: number;
}

export interface CanvasDraw {
  pk: string;
  page: Page;
  connectors?: Connectors[];
  shapes?: Shapes[];
}

export interface Connectors {
  key: string;
  points?: ConnectorsPoints[];

  /** @format double */
  zIndex: number;
  beginItemKey: string;

  /** @format double */
  beginConnectionPointIndex: number;
  endItemKey: string;

  /** @format double */
  endConnectionPointIndex: number;
}

export interface ConnectorsPoints {
  /** @format double */
  x: number;

  /** @format double */
  y: number;
}

export interface KLinesSource {
  provider: string;
  exchange: string;
  symbol: string;
  timeframe: string;
  eventtype: string;

  /** @format int64 */
  opentime: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;

  /** @format int64 */
  closetime: number;
  quoteassetvolume: number;

  /** @format int64 */
  nroftrades: number;
  takerbuybaseassetvolume: number;
  takerbuyquoteassetvolume: number;

  /** @format int64 */
  insertts: number;
  source: string;
}

export interface KlinesBucket {
  id: string;
  provider: string;
  exchange: string;
  symbol: string;
  timeframe: string;
  eventtype: string;

  /** @format int64 */
  fromts: number;

  /** @format int64 */
  tots: number;

  /** @format int64 */
  bucketid: number;
  open?: number[];
  high?: number[];
  low?: number[];
  close?: number[];
  volume?: number[];
  closeTime?: number[];
  quoteassetvolume?: number[];
  nroftrades?: number[];
  takerbuybaseassetvolume?: number[];
  takerbuyquoteassetvolume?: number[];
  insertts?: number[];
  source?: string[];

  /** @format int64 */
  modifyts: number;
}

export interface KlinesBucketHeader {
  provider: string;
  exchange: string;
  symbol: string;
  timeframe: string;
  eventtype: string;

  /** @format int64 */
  initts: number;

  /** @format int64 */
  endts: number;

  /** @format int64 */
  bucketid: number;
  status: boolean;

  /** @format int64 */
  statusupdatets: number;
  iscontinuos: boolean;
  idmongodb: string;
  ids3: string;
  idhdfs: string;
  iscomplete: boolean;

  /** @format int64 */
  totallines: number;
  stage: string;
  metric: string;

  /** @format int64 */
  maxTs: number;

  /** @format int64 */
  modifyts: number;
}

export interface KlinesSeries {
  provider: string;
  exchange: string;
  symbol: string;
  timeframe: string;
  eventtype: string;

  /** @format int64 */
  firstTimeTs: number;
  state: KlinesSeriesState;
  group: string;
  qty: number;
  klines?: KLinesSource[];
}

export interface KlinesSeriesState {
  qty: number;
  fromBegin: boolean;
  isContinues: boolean;
  isComplete: boolean;
  isUpdate: boolean;
}

export type MapKlinesSeriesState = Record<string, KlinesSeriesState>;

export interface MonitorRtStats {
  qtypk: number;

  /** @format int64 */
  lastTs: number;
  lastTsString: string;
  incomplete: number;
  data: MapKlinesSeriesState;
}

export interface Node1 {
  name: string;
}

export interface Node2 {
  name: string;
  data: string;
}

export interface Page {
  /** @format double */
  width: number;

  /** @format double */
  height: number;

  /** @format double */
  pageWidth: number;

  /** @format double */
  pageHeight: number;
  pageLandscape: boolean;

  /** @format double */
  gridSize: number;
  snapToGrid: boolean;
}

export type RulesNodeBasic = Node1 | Node2;

export interface Shapes {
  key: string;
  type: string;
  locked?: boolean;
  text: string;

  /** @format double */
  x: number;

  /** @format double */
  y: number;

  /** @format double */
  width: number;

  /** @format double */
  height: number;

  /** @format double */
  zIndex: number;
  styleText?: ShapesStyleText;
}

export interface ShapesStyleText {
  "font-size": string;
  "font-weight": string;
}

export interface StrategyDef {
  name: string;

  /** @format int64 */
  crDate: number;

  /** @format int64 */
  modifyDate: number;
  rules: RulesNodeBasic;
}

export interface SymbolDefinition {
  provider: string;
  exchange: string;
  symbol: string;
  timeframe: string;
  eventtype: string;
  aggregated: string;
  enable: boolean;
  typesymbol: string;
  fromdate: string;
  todate: string;
  calendar: string;
  updatets: string;
}

export interface SymbolDefinitionBase {
  provider: string;
  exchange: string;
  symbol: string;
  eventtype: string;
  status: boolean;
  assetname: string;
  quotename: string;
  symbolprecesision: number;
  shortDescription: string;
  updatets: string;
}

export interface SymbolDefinitionBaseStats {
  provider: string;
  exchange: string;
  qty: number;
  qtyTrading: number;
}

export interface TwAlertsBasic {
  id: string;
  customerid: string;
  pksymbol: string;
  rule: string;

  /** @format double */
  value1: number;

  /** @format double */
  value2: number;
  bars: number;
  options: string;

  /** @format int64 */
  startts: number;

  /** @format int64 */
  endts: number;
  alertaction: string;
  alertName: string;
  message: string;
  group: string;

  /** @format int64 */
  updatets: number;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface Userauth {
  /** @format double */
  id: number;
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  introduction: string;
  roles?: string[];
}
