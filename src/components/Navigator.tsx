"use client";

import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Box from "@mui/material/Box";

export default function Navigator() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="h-screen bg-gray-900 text-gray-200"
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding className="hover:bg-opacity-90">
            <ListItemButton>
              <ListItemIcon>
                <FiberManualRecordIcon className="text-gray-200" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FiberManualRecordIcon className="text-gray-200" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <section className="w-[64px]">
      <aside
        id="default-sidebar"
        className="z-30 w-[64px] h-screen transition-transform translate-x-0"
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

const problems = {
  selective: [
    { id: 1, title: "객관식 문제 1" },
    { id: 2, title: "객관식 문제 2" },
    { id: 3, title: "객관식 문제 3" },
    { id: 4, title: "객관식 문제 4" },
    { id: 5, title: "객관식 문제 5" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
    { id: 6, title: "객관식 문제 6" },
  ],
  subjective: [
    { id: 1, title: "서술형 문제 1" },
    { id: 2, title: "서술형 문제 2" },
    { id: 3, title: "서술형 문제 3" },
    { id: 4, title: "서술형 문제 4" },
    { id: 5, title: "서술형 문제 5" },
    { id: 6, title: "서술형 문제 6" },
  ],
};
