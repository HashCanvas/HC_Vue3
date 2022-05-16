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

import { KlinesBucket } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Buckets<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get Buckets from P,E,S,I,E,D
   *
   * @tags Buckets
   * @name GetKlinesbucket
   * @request GET:/klinesbucket
   */
  getKlinesbucket = (
    query: {
      provider: string;
      exchange: string;
      symbol: string;
      timeframe: string;
      eventtype: string;
      bucketid: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<KlinesBucket[], string>({
      path: `/klinesbucket`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Post buckets values
   *
   * @tags Buckets
   * @name PostKlinesbucket
   * @request POST:/klinesbucket
   */
  postKlinesbucket = (data: KlinesBucket, params: RequestParams = {}) =>
    this.request<void, string>({
      path: `/klinesbucket`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
