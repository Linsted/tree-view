import { RootNode } from "@/types";

export const data: RootNode = {
  id: "1",
  name: "Root",
  type: "folder",
  permissions: ["read", "write"],
  children: [
    {
      id: "2",
      name: "Folder 1",
      type: "folder",
      permissions: ["read", "write"],
      children: [
        {
          id: "3",
          name: "File 1",
          type: "file",
          permissions: ["read"],
        },
        {
          id: "4",
          name: "File 2",
          type: "file",
          permissions: ["read", "write"],
        },
        {
          id: "9",
          name: "Folder 3",
          type: "folder",
          permissions: ["read"],
          children: [
            {
              id: "10",
              name: "File 1",
              type: "file",
              permissions: ["read"],
            },
            {
              id: "11",
              name: "File 2",
              type: "file",
              permissions: ["read", "write"],
            },
          ],
        },
      ],
    },
    {
      id: "5",
      name: "Folder 2",
      type: "folder",
      permissions: ["read"],
      children: [
        {
          id: "6",
          name: "File 3",
          type: "file",
          permissions: ["read"],
        },
      ],
    },
    {
      id: "8",
      name: "Folder 3 (Empty)",
      type: "folder",
      permissions: ["read"],
      children: [],
    },
    {
      id: "7",
      name: "File 3",
      type: "file",
      permissions: ["read"],
    },
  ],
};
