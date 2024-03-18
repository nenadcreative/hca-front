/** @format */

import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionFAQ = ({ question, children }) => (
  <Accordion.Root
    className=" w-full  "
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem
      className=" bg-white shadow-lg rounded-lg relative group"
      value={question}
    >
      <AccordionTrigger className="">
        <div className=" w-[26px] h-[26px] hidden sm:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <rect
              x="7.26172"
              y="2.99609"
              width="11.9844"
              height="21.2265"
              fill="#00A5E4"
            />
            <path
              d="M12.9999 0C5.85959 0 0 5.85959 0 12.9999C0 15.323 0.62857 17.5969 1.82096 19.6017L0.0394062 24.9971C-0.0521015 25.2708 0.0192969 25.5728 0.223133 25.7766C0.428441 25.982 0.732519 26.0521 1.00273 25.9604L6.39813 24.1788C8.40287 25.3712 10.6768 25.9998 12.9999 25.9998C20.1402 25.9998 25.9998 20.1402 25.9998 12.9999C25.9998 5.85959 20.1402 0 12.9999 0ZM12.9999 22.9021C11.7398 22.9021 10.7147 21.8771 10.7147 20.617C10.7147 19.3569 11.7398 18.3318 12.9999 18.3318C14.26 18.3318 15.285 19.3569 15.285 20.617C15.285 21.8771 14.26 22.9021 12.9999 22.9021ZM16.2111 11.9429L14.5233 13.6307V15.285C14.5233 16.1249 13.8397 16.8085 12.9999 16.8085C12.1601 16.8085 11.4765 16.1249 11.4765 15.285V13.6307C11.4765 12.8169 11.7933 12.0522 12.3691 11.4765L14.0569 9.78864C14.4471 9.39849 14.5233 9.00341 14.5233 8.49951C14.5233 7.62099 13.8085 6.90614 12.93 6.90614C12.1288 6.90614 11.4765 7.55853 11.4765 8.35965C11.4765 9.19947 10.7928 9.88309 9.95302 9.88309C9.1132 9.88309 8.42958 9.19947 8.42958 8.35965C8.42958 5.87813 10.4484 3.85932 12.9299 3.85932C15.4888 3.85932 17.5701 5.94064 17.5701 8.49951C17.5701 9.93915 17.0992 11.0549 16.2111 11.9429Z"
              fill="#00A5E4"
            />
            <path
              d="M12.8838 5.63672C14.2358 5.63672 15.2498 5.91337 15.9258 6.46668C16.6159 7.01999 16.9609 7.84996 16.9609 8.95658C16.9609 10.0632 16.8483 10.8719 16.6229 11.3826C16.4117 11.8792 15.954 12.397 15.2498 12.9362C14.5456 13.4611 14.102 13.8654 13.9189 14.1492C13.7359 14.4329 13.6443 14.745 13.6443 15.0855V15.7453H11.3839C10.9474 15.2629 10.7291 14.6174 10.7291 13.8087C10.7291 13.2979 11.1727 12.6808 12.0599 11.9572C12.9613 11.2337 13.5105 10.7371 13.7077 10.4675C13.9189 10.1838 14.0246 9.84329 14.0246 9.44604C14.0246 8.60899 13.426 8.19046 12.2289 8.19046C11.3839 8.19046 10.5178 8.27558 9.63056 8.44583L9.18694 8.53095L9.03906 6.38156C10.2502 5.885 11.5318 5.63672 12.8838 5.63672ZM10.9192 20.3633V16.937H13.9612V20.3633H10.9192Z"
              fill="white"
            />
          </svg>
        </div>

        <p className=" font-display display-sm font-bold">{question}</p>
      </AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "border border-transparent focus-within:border-lightAccent mt-px overflow-hidden first:mt-0 first:rounded-tl-3xl focus-within:relative focus-within:z-10 ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          " flex flex-row items-center w-full  text-left     cursor-default gap-2 p-3  md:p-6  ",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <div className=" bg-brand-yellow ml-auto   px-[7.6px] py-[11.25px] rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            className=" group-data-[state=open]:rotate-180"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.53026 9.53037C9.23736 9.82327 8.76256 9.82327 8.46966 9.53037L0.823183 1.88387C0.530293 1.59097 0.530293 1.11617 0.823183 0.823275L1.17674 0.469675C1.46963 0.176775 1.9445 0.176775 2.2374 0.469675L8.99996 7.23228L15.7626 0.469675C16.0555 0.176775 16.5303 0.176775 16.8232 0.469675L17.1768 0.823275C17.4697 1.11617 17.4697 1.59097 17.1768 1.88387L9.53026 9.53037Z"
              fill="#151E2D"
            />
          </svg>
        </div>

        {/*   <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        /> /*/}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        " data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="pb-6 border-r  border-r-white/30 px-3 md:px-14">
        {children}
      </div>
    </Accordion.Content>
  )
);

export default AccordionFAQ;
