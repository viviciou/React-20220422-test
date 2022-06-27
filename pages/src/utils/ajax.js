// 參考 https://penueling.com/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/%E5%A6%82%E4%BD%95%E8%AE%93fetch%E4%B9%9F%E5%8F%AF%E4%BB%A5%E6%9C%89timeout%E6%95%88%E6%9E%9C/
const Ajax = async (param) => {
  const { url, options, time } = param;
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort();
  }, time);
  let config = { ...options, singnal: controller.singnal };
  try {
    let response = await fetch(url, config);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export default Ajax;
