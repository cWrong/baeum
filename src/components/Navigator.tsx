"use client";

import { Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";

export default function Navigator() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <section>
      <aside
        id="default-sidebar"
        className="z-40 w-18 h-screen transition-transform translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-900">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                className="flex items-center p-2 rounded-lg text-white group"
                onClick={() => setIsOpen(true)}
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
      <Drawer
        open={isOpen}
        onClose={handleClose}
        className="bg-gray-900 text-gray-300"
      >
        <Drawer.Header
          className="text-gray-300 [&>button]:hover:bg-opacity-10"
          title="문제"
          titleIcon={() => <></>}
        />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0 "
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup className="flex flex-col items-start my-4">
                    {problems["selective"].map((problem) => (
                      <Sidebar.Item
                        href={`problem/selective/${problem.id}`}
                        icon={GoDotFill}
                        className="flex justify-start w-[256px] h-[40px] hover:bg-opacity-10 text-gray-100 text-sm"
                      >
                        {problem.title}
                      </Sidebar.Item>
                    ))}
                  </Sidebar.ItemGroup>
                  <hr className="h-px my-4 border-0 bg-gray-700"></hr>
                  <Sidebar.ItemGroup className="flex flex-col items-start my-4">
                    {problems["subjective"].map((problem) => (
                      <Sidebar.Item
                        href={`problem/selective/${problem.id}`}
                        icon={GoDotFill}
                        className="flex justify-start w-[256px] h-[40px] hover:bg-opacity-10 text-gray-100 text-sm"
                      >
                        {problem.title}
                      </Sidebar.Item>
                    ))}
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
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
