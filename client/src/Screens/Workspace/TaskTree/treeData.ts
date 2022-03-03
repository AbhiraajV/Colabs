export interface treeDataInterface {
  Title?: string;
  TaskTitle?: string;

  Tasks?: treeDataInterface[];
  ChildTask?: treeDataInterface[];
}
const treeData: any = [
  {
    content: "main",
    children: [
      { content: "childless entry1" },
      {
        content: "subtree with children",
        children: [
          { content: "child1" },
          { content: "child2" },
          { content: "child3" },
          {
            content: "custom-content",
            children: [
              { content: "child3-child1" },
              { content: "child3-child2" },
              { content: "child3-child3" },
            ],
          },
        ],
      },
      { content: "childless entry2" },
    ],
  },
  {
    content: "main",
    children: [
      { content: "childless entry1" },
      {
        content: "subtree with children",
        children: [
          { content: "child1" },
          { content: "child2" },
          { content: "child3" },
          {
            content: "custom-content",
            children: [
              { content: "child3-child1" },
              { content: "child3-child2" },
              { content: "child3-child3" },
            ],
          },
        ],
      },
      { content: "childless entry2" },
    ],
  },
];
export default treeData;
