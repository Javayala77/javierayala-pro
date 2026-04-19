import { GoogleAdsApi } from "google-ads-api"

let _client: GoogleAdsApi | null = null

export function getGoogleAdsClient(): GoogleAdsApi {
  if (!_client) {
    _client = new GoogleAdsApi({
      client_id: process.env.GOOGLE_ADS_CLIENT_ID!,
      client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET!,
      developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN!,
    })
  }
  return _client
}

export function getMccId(): string {
  return process.env.GOOGLE_ADS_MCC_ID!.replace(/-/g, "")
}

export function getMccCustomer() {
  const client = getGoogleAdsClient()
  const mccId = getMccId()
  return client.Customer({
    customer_id: mccId,
    refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN!,
    login_customer_id: mccId,
  })
}

export function getClientCustomer(customerId: string) {
  const client = getGoogleAdsClient()
  const mccId = getMccId()
  return client.Customer({
    customer_id: customerId,
    refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN!,
    login_customer_id: mccId,
  })
}
