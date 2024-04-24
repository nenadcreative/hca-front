/** @format */

// /** @format */

import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AccordionMenu } from "./Accordion";
import classNames from "classnames";

const NavigationMenuDemo = ({ content }) => {
  return (
    <NavigationMenu.Root className="z-50 lg:flex w-full hidden">
      <NavigationMenu.List className="center m-0 flex list-none gap-8 rounded-[6px] bg-transparent p-1 text-white text-body-sm">
        <NavigationMenu.Item>
          <NavigationMenu.Link className="block select-none " href="/">
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        {content.map((dropdown) => (
          <NavigationMenu.Item key={dropdown.id}>
            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px]">
              {dropdown.attributes.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                className="relative top-[1px] transition-transform duration-[300] ease-in group-data-[state=open]:-rotate-180"
              >
                <path
                  d="M5.71777 7.5L10.7178 12.5L15.7178 7.5"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="w-full text-dark-1 pb-12 px-2 absolute top-0 left-0 ">
              <div className="bg-[#E4E5E7] absolute top-0 left-0 w-full h-[94px]"></div>
              <ul
                className={classNames(
                  "one m-0 grid max-w-[1264px] gap-5 mx-auto list-none",
                  {
                    "grid-cols-2":
                      dropdown.attributes.children.data.length === 2,
                    "grid-cols-3":
                      dropdown.attributes.children.data.length === 3,
                    "grid-cols-4":
                      dropdown.attributes.children.data.length === 4,
                    "grid-cols-5":
                      dropdown.attributes.children.data.length === 5,
                  }
                )}
              >
                {dropdown.attributes.children.data.map((childDropdown) => (
                  <li
                    key={childDropdown.id}
                    className="flex flex-col relative z-50"
                  >
                    <p className="font-display text-display-xs mb-4 font-bold py-[33.5px]">
                      {childDropdown.attributes.title}
                    </p>
                    <ul className="flex flex-col gap-4">
                      {childDropdown.attributes.children.data.map(
                        (childLinks) => (
                          <React.Fragment key={childLinks.id}>
                            {childLinks.attributes.children.data.length ===
                            0 ? (
                              <ListItem
                                key={childLinks.id}
                                href={childLinks.attributes.url}
                              >
                                {childLinks.attributes.title}
                              </ListItem>
                            ) : (
                              <div className="pb-3 border-b border-[#EDEEEF] flex flex-col items-start">
                                <AccordionMenu
                                  question={childLinks.attributes.title}
                                >
                                  {childLinks.attributes.children.data.map(
                                    (nestedChild) => (
                                      <ListItem
                                        className=" !border-none !pb-0"
                                        key={nestedChild.id}
                                        href={nestedChild.attributes.url}
                                      >
                                        {nestedChild.attributes.title}
                                      </ListItem>
                                    )
                                  )}
                                </AccordionMenu>
                              </div>
                            )}
                          </React.Fragment>
                        )
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ))}
        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px]" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>
      <div className="absolute top-[119px] z-50 overflow-hidden flex shadow-lg justify-center flex-row items-center w-screen right-0">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut w-full  bg-white h-[var(--radix-navigation-menu-viewport-height)] overflow-hidden transition-[width,_height] duration-300" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, href, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none pb-3 border-b border-[#EDEEEF] no-underline outline-none transition-colors ",

            className
          )}
          href={href}
          ref={forwardedRef}
        >
          <p className="text-body-sm">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavigationMenuDemo;
