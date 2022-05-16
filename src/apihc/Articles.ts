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

import { Articles } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Articles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Articles new
   *
   * @tags Articles
   * @name PostNewarticle
   * @request POST:/newarticle
   * @secure
   */
  postNewarticle = (data: Articles, params: RequestParams = {}) =>
    this.request<void, string>({
      path: `/newarticle`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
