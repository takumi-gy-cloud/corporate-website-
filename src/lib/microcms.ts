/**
 * AstroとmicroCMSを接続するための設定ファイル
 * 共通して呼び出す便利な機能や外部サービスとの接続処理
 */

import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});