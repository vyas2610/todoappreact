import axios from "axios";
async function ApiExe(url, method = "GET", params = {}) {
    let header = {
        "Content-Type": "application/json",
        Accept: "application/json"
    };
    const instance = axios.create({
        baseURL: '/',
        headers: header
    });

    let data = params?.data ?? {};

    return await instance({
        url,
        method,
        data,
    });


}
export default ApiExe;