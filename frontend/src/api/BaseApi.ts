import axios from "axios";
import iziToast from "izitoast";

export default abstract class BaseApi {
  private static handleError(error: any, statusCode: number = 501) {
    console.error(error);
    if (typeof error === "object" && error.response?.data?.message) {
      switch (statusCode) {
        case 400:
          iziToast.warning({
            message: error.response.data.message,
            title: "Invalid Request",
          });
          break;
        case 402:
          iziToast.warning({
            message: error.response.data.message,
            title: "Caution",
          });
          break;

        default:
          iziToast.error({
            message: error.response.data.message,
            title: "Error",
          });
          break;
      }
    } else {
      iziToast.error({
        message: String(error),
        title: "Error",
      });
    }
  }

  static async handleGetRequest<T>(url: string, params?: string) {
    try {
      const req = await axios.get<T>(url);
      return req.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  static async handlePostRequest<T, M>(url: string, body: M) {
    try {
      const req = await axios.post<T>(url, body);
      return req.data;
    } catch (error) {
      this.handleError(error);
    }
  }
}
