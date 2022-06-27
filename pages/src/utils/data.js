// tab content
import TabPanel1 from "../pages/TabPage/TabPanel1";
import Example2 from "../pages/TabPage/Example2";

export const gridCardData = () => {
  return [
    {
      id: "001",
      title: "AAA",
      desc: "aaaatest..."
    },
    {
      id: "002",
      title: "BBB",
      desc: "bbbtest..."
    },
    {
      id: "003",
      title: "CCC",
      desc: "ccctest..."
    },
    {
      id: "004",
      title: "ddd",
      desc: "dddtest..."
    },
    {
      id: "005",
      title: "eee",
      desc: "eeetest..."
    },
    {
      id: "006",
      title: "fff",
      desc: "ffftest..."
    },
    {
      id: "007",
      title: "gggg",
      desc: "gggtest..."
    },
    {
      id: "008",
      title: "hhh",
      desc: "hhhtest..."
    }
  ];
};

export const tabItemsData = () => {
  return [
    {
      id: 0,
      title: "aaa",
      content: <TabPanel1 />
    },
    {
      id: 1,
      title: "bbb",
      content: <Example2 />
    },
    {
      id: 2,
      title: "ccc",
      content: "ccc"
    }
  ];
};
