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

import { TwAlertsBasic } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AlertsBasic<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get all Alerts, must be deprecated
   *
   * @tags Alerts Basic
   * @name GetAlertsbasic
   * @request GET:/alertsbasic
   */
  getAlertsbasic = (params: RequestParams = {}) =>
    this.request<TwAlertsBasic[], string>({
      path: `/alertsbasic`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Update an alert
   *
   * @tags Alerts Basic
   * @name PutAlertsbasic
   * @request PUT:/alertsbasic
   */
  putAlertsbasic = (data: TwAlertsBasic, params: RequestParams = {}) =>
    this.request<TwAlertsBasic, string>({
      path: `/alertsbasic`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Create an alert
   *
   * @tags Alerts Basic
   * @name PostAlertsbasic
   * @request POST:/alertsbasic
   */
  postAlertsbasic = (data: TwAlertsBasic, params: RequestParams = {}) =>
    this.request<TwAlertsBasic, string>({
      path: `/alertsbasic`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Alerts Basic
   * @name GetAlertsbasicalertid
   * @request GET:/alertsbasicalertid
   */
  getAlertsbasicalertid = (query: { alertId: string }, params: RequestParams = {}) =>
    this.request<TwAlertsBasic, string>({
      path: `/alertsbasicalertid`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Delete an alert
   *
   * @tags Alerts Basic
   * @name DeleteAlertsbasicdelete
   * @request DELETE:/alertsbasicdelete
   */
  deleteAlertsbasicdelete = (data: TwAlertsBasic, params: RequestParams = {}) =>
    this.request<boolean, string>({
      path: `/alertsbasicdelete`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Alerts Basic
   * @name GetAlertsbasicownerid
   * @request GET:/alertsbasicownerid
   */
  getAlertsbasicownerid = (query: { ownerid: string }, params: RequestParams = {}) =>
    this.request<TwAlertsBasic[], string>({
      path: `/alertsbasicownerid`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Alerts Basic
   * @name GetAlertsbasicsymbolid
   * @request GET:/alertsbasicsymbolid
   */
  getAlertsbasicsymbolid = (query: { ownerid: string }, params: RequestParams = {}) =>
    this.request<TwAlertsBasic[], string>({
      path: `/alertsbasicsymbolid`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Alerts Basic
   * @name GetAlertsbasiccount
   * @request GET:/alertsbasiccount
   */
  getAlertsbasiccount = (params: RequestParams = {}) =>
    this.request<number, string>({
      path: `/alertsbasiccount`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Alerts Basic
   * @name GetAlertsbasiccountgroup
   * @request GET:/alertsbasiccountgroup
   */
  getAlertsbasiccountgroup = (query: { group: string }, params: RequestParams = {}) =>
    this.request<number, string>({
      path: `/alertsbasiccountgroup`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Alerts Basic
   * @name GetAlertsbasicafterupdate
   * @request GET:/alertsbasicafterupdate
   */
  getAlertsbasicafterupdate = (query: { ts: number }, params: RequestParams = {}) =>
    this.request<TwAlertsBasic[], string>({
      path: `/alertsbasicafterupdate`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
