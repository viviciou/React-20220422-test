// 上一頁
export const prevPage = (currentPage,handleCurrentPage) => {
	if (currentPage > 1) {
		handleCurrentPage(currentPage--);
	}
};
// 下一頁
export const nextPage = (currentPage,handleCurrentPage) => {
	if (currentPage < numPages()) {
		handleCurrentPage(currentPage++);
	}
};
// 總頁數
export const numPages = (total,perPage) => {
	return Math.ceil(total / perPage);
};
