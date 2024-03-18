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
    <AccordionItem className="bg-white/5" value={question}>
      <AccordionTrigger className="">
        <h3 className="text-[1.375rem] leading-[1.3]">{question}</h3>
      </AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "border border-transparent focus-within:border-lightAccent mt-px overflow-hidden first:mt-0 first:rounded-tl-3xl    focus-within:relative focus-within:z-10 ",
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
          " group flex border-t-2 border-r rounded-tl-3xl border-r-white/30 border-t-white/30  flex-1 cursor-default items-center text-left justify-between p-6  ",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <svg
          className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-[315deg] text-white group-data-[state=open]:text-lightAccent"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.4853 10.4827C36.2853 13.216 37.3333 16.4867 37.3333 20C37.3333 29.5667 29.5667 37.3333 20 37.3333C10.4333 37.3333 2.66667 29.5667 2.66667 20C2.66667 10.4333 10.4333 2.66667 20 2.66667C21.72 2.66667 23.3827 2.91734 24.952 3.38534C25.6573 3.596 26.4013 3.19333 26.6107 2.488C26.8213 1.78266 26.42 1.04 25.7147 0.829336C23.9027 0.290669 21.9853 0 20 0C8.96133 0 0 8.96133 0 20C0 31.0387 8.96133 40 20 40C31.0387 40 40 31.0387 40 20C40 15.944 38.7907 12.1693 36.712 9.016C36.308 8.40133 35.48 8.232 34.8653 8.636C34.2507 9.04133 34.0813 9.868 34.4853 10.4827ZM18.6667 18.6667H12C11.264 18.6667 10.6667 19.264 10.6667 20C10.6667 20.736 11.264 21.3333 12 21.3333H18.6667V28C18.6667 28.736 19.264 29.3333 20 29.3333C20.736 29.3333 21.3333 28.736 21.3333 28V21.3333H28C28.736 21.3333 29.3333 20.736 29.3333 20C29.3333 19.264 28.736 18.6667 28 18.6667H21.3333V12C21.3333 11.264 20.736 10.6667 20 10.6667C19.264 10.6667 18.6667 11.264 18.6667 12V18.6667ZM29.9 5.77467C30.224 6 30.54 6.23733 30.8467 6.484C31.4213 6.94533 32.2613 6.85333 32.7213 6.28C33.1827 5.70667 33.092 4.86667 32.5187 4.40533C32.164 4.12133 31.8 3.848 31.4267 3.58667C30.8227 3.16667 29.9907 3.31467 29.5693 3.91734C29.1493 4.52134 29.2973 5.35334 29.9 5.77467Z"
            fill="currentColor"
          />
        </svg>

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
      <div className="pb-6 border-r  border-r-white/30 px-6">{children}</div>
    </Accordion.Content>
  )
);

export default AccordionFAQ;