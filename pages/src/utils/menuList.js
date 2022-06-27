export const menuList = () => {
  return [
    {
      Id: "001",
      ParentId: "",
      Name: "首頁",
      Type: "url",
      Url: "/"
    },
    {
      Id: "002",
      ParentId: "",
      Name: "元件清單",
      Type: "fold",
      Url: "/"
    },
    {
      Id: "003",
      ParentId: "",
      Name: "CSS元件清單",
      Type: "fold",
      Url: "/"
    },
    {
      Id: "004",
      ParentId: "002",
      Name: "TablePage",
      Type: "url",
      Url: "/tablePage"
    },
    {
      Id: "005",
      ParentId: "002",
      Name: "TabPage",
      Type: "url",
      Url: "/tabPage"
    },
    {
      Id: "006",
      ParentId: "003",
      Name: "GridCardPage",
      Type: "url",
      Url: "/gridCardPage"
    },
    {
      Id: "007",
      ParentId: "002",
      Name: "InfiniteScrollPage",
      Type: "url",
      Url: "/infiniteScrollPage"
    },
    {
      Id: "008",
      ParentId: "",
      Name: "Oops",
      Type: "url",
      Url: "/oops"
    }
  ];
};
