import { RootNode } from "@/types";

export const data: RootNode = {
  name: "Root",
  type: "folder",
  permissions: ["read", "write"],
  children: [
    {
      name: "Folder 1",
      type: "folder",
      permissions: ["read", "write"],
      children: [
        {
          name: "File 1",
          type: "file",
          permissions: ["read"],
        },
        {
          name: "File 2",
          type: "file",
          permissions: ["read", "write"],
        },
      ],
    },
    {
      name: "Folder 2",
      type: "folder",
      permissions: ["read"],
      children: [],
    },
    {
      name: "File 3",
      type: "file",
      permissions: ["read"],
    },
  ],
};
