export abstract class ServiceBase {
  static API_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

  static getUrl(path: string) {
    return `${this.API_URL}${path}`
  }
}