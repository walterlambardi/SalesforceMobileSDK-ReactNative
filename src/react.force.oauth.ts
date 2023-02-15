/*
 * Copyright (c) 2015-present, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import { NativeModules } from "react-native";
import { exec as forceExec, ExecSuccessCallback, ExecErrorCallback } from "./react.force.common";
import { OAuthMethod, UserAccount } from "./typings/oauth";
const { SalesforceOauthReactBridge, SFOauthReactBridge } = NativeModules;

const exec = <T>(
  successCB: ExecSuccessCallback<T>,
  errorCB: ExecErrorCallback,
  methodName: OAuthMethod,
  args: Record<string, unknown>,
): void => {
  forceExec(
    "SFOauthReactBridge",
    "SalesforceOauthReactBridge",
    SFOauthReactBridge,
    SalesforceOauthReactBridge,
    successCB,
    errorCB,
    methodName,
    args,
  );
};

/**
 * Initiates the authentication process, with the given app configuration.
 *   success         - The success callback function to use.
 *   fail            - The failure/error callback function to use.
 * Returns a dictionary with:
 *   accessToken
 *   refreshToken
 *   clientId
 *   userId
 *   orgId
 *   loginUrl
 *   instanceUrl
 *   userAgent
 *   community id
 *   community url
 */
export const authenticate = (successCB: ExecSuccessCallback<UserAccount>, errorCB: ExecErrorCallback): void => {
  exec(successCB, errorCB, "authenticate", {});
};

/**
 * Obtain authentication credentials.
 *   success - The success callback function to use.
 *   fail    - The failure/error callback function to use.
 * Returns a dictionary with:
 *   accessToken
 *   refreshToken
 *   clientId
 *   userId
 *   orgId
 *   loginUrl
 *   instanceUrl
 *   userAgent
 *   community id
 *   community url
 */
export const getAuthCredentials = (successCB: ExecSuccessCallback<UserAccount>, errorCB: ExecErrorCallback): void => {
  exec(successCB, errorCB, "getAuthCredentials", {});
};

/**
 * Logout the current authenticated user. This removes any current valid session token
 * as well as any OAuth refresh token.  
 */
export const logout = <T>(success: ExecSuccessCallback<T>, fail: ExecErrorCallback) => {
    // @ts-ignore
    exec(success, fail, "logoutCurrentUser", {});
};
