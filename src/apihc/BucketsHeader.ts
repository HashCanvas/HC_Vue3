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

import { KlinesBucketHeader } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BucketsHeader<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags BucketsHeader
   * @name GetApiBucketsheader
   * @request GET:/api/bucketsheader
   */
  getApiBucketsheader = (
    query: { provider: string; exchange: string; symbol: string; timeframe: string; eventtype: string },
    params: RequestParams = {},
  ) =>
    this.request<KlinesBucketHeader[], string>({
      path: `/api/bucketsheader`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BucketsHeader
   * @name GetApiBucketspesheader
   * @request GET:/api/bucketspesheader
   */
  getApiBucketspesheader = (
    query: { provider: string; exchange: string; symbol: string; count?: number },
    params: RequestParams = {},
  ) =>
    this.request<KlinesBucketHeader[], string>({
      path: `/api/bucketspesheader`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BucketsHeader
   * @name PutBucketsheader
   * @request PUT:/bucketsheader
   */
  putBucketsheader = (data: KlinesBucketHeader, params: RequestParams = {}) =>
    this.request<number, string>({
      path: `/bucketsheader`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Post a list of header's bucket
   *
   * @tags BucketsHeader
   * @name PostBucketsheader
   * @request POST:/bucketsheader
   */
  postBucketsheader = (data: KlinesBucketHeader, params: RequestParams = {}) =>
    this.request<number, string>({
      path: `/bucketsheader`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Post a header's bucket
   *
   * @tags BucketsHeader
   * @name PostBucketheader
   * @request POST:/bucketheader
   */
  postBucketheader = (data: KlinesBucketHeader, params: RequestParams = {}) =>
    this.request<number, string>({
      path: `/bucketheader`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
