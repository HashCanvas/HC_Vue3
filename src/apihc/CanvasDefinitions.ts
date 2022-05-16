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

import { CanvasDraw } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CanvasDefinitions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Canvas Definitions
   * @name GetCanvas
   * @request GET:/canvas
   */
  getCanvas = (data: string, params: RequestParams = {}) =>
    this.request<CanvasDraw, string>({
      path: `/canvas`,
      method: "GET",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Canvas Definitions
   * @name PostCanvas
   * @request POST:/canvas
   */
  postCanvas = (data: CanvasDraw, params: RequestParams = {}) =>
    this.request<CanvasDraw, string>({
      path: `/canvas`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
