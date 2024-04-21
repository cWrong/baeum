"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { ProblemListType, getProblemList } from "@/utils/problem";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function Navigator() {
  const router = useRouter();
  
  const [open, setOpen] = useState(false);
  const [problems, setProblems] = useState<ProblemListType>({
    selective: [],
    subjective: [],
  });

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  React.useEffect(() => {
    (async () => setProblems(await getProblemList()))();
  }, []);

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="h-full bg-gray-900 text-gray-200"
    >
      <List>
        {problems["selective"].map((problem) => (
          <ListItem
            key={problem.id}
            disablePadding
            className="hover:bg-opacity-90"
            onClick={() => router.push(`/problem/selective/${problem.id}`)}
          >
            <ListItemButton>
              <ListItemIcon>
                <FiberManualRecordIcon className="text-gray-200" />
              </ListItemIcon>
              <ListItemText primary={problem.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider className="text-white" />
      <List>
        {problems["subjective"].map((problem) => (
          <ListItem
            key={problem.id}
            disablePadding
            className="hover:bg-opacity-90"
            onClick={() => router.push(`/problem/subjective/${problem.id}`)}
          >
            <ListItemButton>
              <ListItemIcon>
                <FiberManualRecordIcon className="text-gray-200" />
              </ListItemIcon>
              <ListItemText primary={problem.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <section className="w-[60px]">
      <aside
        id="default-sidebar"
        className="z-30 w-[60px] h-screen transition-transform translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-900">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                className="flex items-center p-2 rounded-lg text-white group"
                onClick={() => setOpen(true)}
              >
                <svg
                  className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 17 14"
                >
                  <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </section>
  );
}
