// 變更表格顯示欄位
export const setNewHeader = (tHeader, item) => {
  const newList = [];
  tHeader.map((element) => {
    if (element.name === item) {
      const newItem = { ...element, show: !element.show };
      return newList.push(newItem);
    } else {
      return newList.push(element);
    }
  });
  return newList;
};
//加工資料,新增checked欄位預設false
export const getCheckboxData = (data) => {
  const newData = [];
  data.forEach((element) => {
    return newData.push({ ...element, checked: false });
  });
  return newData;
};
//變更checkbox狀態
export const setCheckData = ({ status, data, item }) => {
  const newData = [];
  data.forEach((element) => {
    if (element === item) {
      return newData.push({ ...item, checked: status });
    } else {
      return newData.push(element);
    }
  });
  return newData;
};
//變更checkbox狀態(全選)
export const setAllCheckData = ({ status, data, perPage, currentPage }) => {
  // status (true | false)
  const newData = [];
  const range_end = currentPage * perPage; //最後一筆
  const range_start = range_end - perPage; //起始筆數
  // 判斷是否全選
  if (status) {
    //全選
    // 全選(目前頁面第active頁,每頁共有perPage筆)
    data.forEach((element, idx) => {
      if (idx >= range_start && idx < range_end) {
        return newData.push({ ...element, checked: true });
      } else {
        return newData.push({ ...element, checked: false });
      }
    });
  } else {
    data.forEach((element) => {
      return newData.push({ ...element, checked: false });
    });
  }

  return newData;
};
