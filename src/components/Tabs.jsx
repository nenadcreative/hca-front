/** @format */

// /** @format */

import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { formatStartMonth } from "../lib/index";
import { formatStartDay } from "../lib/index";
import DecoratedText from "../components/DecoratedText";

const TabsNewsAndEvents = ({ content }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleContent = (itemId) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };

  return (
    <Tabs.Root
      defaultValue="fall 2024"
      className="w-full flex flex-col gap-16"
    >
      <Tabs.List
        className="flex flex-wrap justify-center gap-10  text-display-md font-bold   "
        aria-label="Manage your account"
      >
        {/* <Tabs.Trigger
          value="all"
          className=" px-4 py-3 bg-transparent text-dark-1  data-[state=active]:text-white data-[state=active]:bg-dark-2 "
        >
          All
        </Tabs.Trigger> */}
        <Tabs.Trigger
          value="fall 2024"
          className=" px-4 py-3 bg-transparent text-dark-1  data-[state=active]:text-white data-[state=active]:bg-dark-2 "
        >
          Fall 2024
        </Tabs.Trigger>
        <Tabs.Trigger
          value="winter 2024"
          className=" px-4 py-3 bg-transparent text-dark-1  data-[state=active]:text-white data-[state=active]:bg-dark-2 "
        >
          Winter 2024
        </Tabs.Trigger>
        <Tabs.Trigger
          value="spring 2025"
          className=" px-4 py-3 bg-transparent text-dark-1  data-[state=active]:text-white data-[state=active]:bg-dark-2 "
        >
          Spring 2025
        </Tabs.Trigger>
        <Tabs.Trigger
          value="summer 2025"
          className=" px-4 py-3 bg-transparent text-dark-1  data-[state=active]:text-white data-[state=active]:bg-dark-2 "
        >
          Summer 2025
        </Tabs.Trigger>
        {/* {categories.map((category) => (
        <Tabs.Trigger
          value={category.title}
          className="text-body-base px-3 py-[8.5px] text-left rounded-md data-[state=active]:border data-[state=active]:font-bold data-[state=active]:border-blue data-[state=active]:bg-[#02bef70f] data-[state=active]:shadow-sm"
        >
          {category.title} 
           </Tabs.Trigger>

    
      ))} */}
      </Tabs.List>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
        {content.map((item) => (
          <Tabs.Content value="all" key={item.id}>
            <div className="flex flex-col sm:flex-row w-full items-start justify-start gap-5 overflow-hidden bg-white px-6 py-10 rounded-lg shadow-lg">
              {/* Display start date */}
              <div className="w-[72px] h-[72px]  px-4 py-1 flex flex-col items-center bg-brand-blue text-center">
                <p className=" text-body-sm font-bold text-gray">
                  {formatStartMonth(item.attributes.startDate)}
                </p>
                <p className=" font-display text-display-lg font-bold text-white">
                  {formatStartDay(item.attributes.startDate)}
                </p>
              </div>

              {/* Display item title and description */}
              <div className="flex flex-col lg:w-[80%] w-full">
                <p className="text-display-sm font-bold text-dark-1 mb-2">
                  {item.attributes.title}
                </p>
                {expandedItem === item.id ? (
                  <div>
                    <BlocksRenderer content={item.attributes.content} />
                  </div>
                ) : (
                  <div>
                    <BlocksRenderer
                      content={item.attributes.shortDescription}
                    />
                  </div>
                )}

                {/* Toggle button to show/hide content */}
                <a
                  className="rounded-lg cursor-pointer group min-w-[200px] mt-5 justify-start font-semibold text-body-md underline hover:no-underline decoration-brand-yellow decoration-2 underline-offset-8 text-dark1 flex items-center gap-2 pl-0"
                  onClick={() => toggleContent(item.id)}
                >
                  {expandedItem === item.id ? "Show Less" : "Read More"}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:-rotate-45 transition-all duration-200"
                  >
                    <circle cx="12" cy="12" r="12" fill="#FDC72F" />
                    <path
                      d="M12.4493 16.769C12.3822 16.696 12.329 16.6093 12.2926 16.5138C12.2563 16.4183 12.2376 16.316 12.2376 16.2126C12.2376 16.1092 12.2563 16.0068 12.2926 15.9114C12.329 15.8159 12.3822 15.7292 12.4493 15.6562L15.5381 12.2859L6.71986 12.2859C6.52894 12.2859 6.34584 12.2031 6.21084 12.0558C6.07584 11.9085 6 11.7087 6 11.5004C6 11.292 6.07584 11.0923 6.21084 10.945C6.34584 10.7976 6.52894 10.7149 6.71986 10.7149L15.5381 10.7149L12.4493 7.34322C12.3141 7.19566 12.2381 6.99552 12.2381 6.78684C12.2381 6.57816 12.3141 6.37802 12.4493 6.23046C12.5846 6.0829 12.768 6 12.9592 6C13.1505 6 13.3339 6.0829 13.4691 6.23046L17.7883 10.9433C17.8554 11.0163 17.9086 11.103 17.945 11.1985C17.9813 11.294 18 11.3963 18 11.4997C18 11.6031 17.9813 11.7055 17.945 11.8009C17.9086 11.8964 17.8554 11.9831 17.7883 12.0561L13.4691 16.769C13.4022 16.8422 13.3228 16.9003 13.2353 16.9399C13.1478 16.9796 13.054 17 12.9592 17C12.8645 17 12.7707 16.9796 12.6832 16.9399C12.5957 16.9003 12.5162 16.8422 12.4493 16.769Z"
                      fill="#151E2D"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Tabs.Content>
        ))}
        {content.map((item) =>
          item.attributes.category === "fall2024" ? (
            <Tabs.Content value="fall 2024" key={item.id}>
              <div className="flex flex-col sm:flex-row w-full items-start justify-start gap-5 overflow-hidden bg-white px-6 py-10 rounded-lg shadow-lg">
                {/* Display start date */}
                <div className="w-[72px] h-[72px]  px-4 py-1 flex flex-col items-center bg-brand-blue text-center">
                  <p className=" text-body-sm font-bold text-gray">
                    {formatStartMonth(item.attributes.startDate)}
                  </p>
                  <p className=" font-display text-display-lg font-bold text-white">
                    {formatStartDay(item.attributes.startDate)}
                  </p>
                </div>

                {/* Display item title and description */}
                <div className="flex flex-col lg:w-[80%] w-full">
                  <p className="text-display-sm font-bold text-dark-1 mb-2">
                    {item.attributes.title}
                  </p>
                  {expandedItem === item.id ? (
                    <div>
                      <BlocksRenderer content={item.attributes.content} />
                    </div>
                  ) : (
                    <div>
                      <BlocksRenderer
                        content={item.attributes.shortDescription}
                      />
                    </div>
                  )}

                  {/* Toggle button to show/hide content */}
                  <a
                    className="rounded-lg cursor-pointer group min-w-[200px] mt-5 justify-start font-semibold text-body-md underline hover:no-underline decoration-brand-yellow decoration-2 underline-offset-8 text-dark1 flex items-center gap-2 pl-0"
                    onClick={() => toggleContent(item.id)}
                  >
                    {expandedItem === item.id ? "Show Less" : "Read More"}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 group-hover:-rotate-45 transition-all duration-200"
                    >
                      <circle cx="12" cy="12" r="12" fill="#FDC72F" />
                      <path
                        d="M12.4493 16.769C12.3822 16.696 12.329 16.6093 12.2926 16.5138C12.2563 16.4183 12.2376 16.316 12.2376 16.2126C12.2376 16.1092 12.2563 16.0068 12.2926 15.9114C12.329 15.8159 12.3822 15.7292 12.4493 15.6562L15.5381 12.2859L6.71986 12.2859C6.52894 12.2859 6.34584 12.2031 6.21084 12.0558C6.07584 11.9085 6 11.7087 6 11.5004C6 11.292 6.07584 11.0923 6.21084 10.945C6.34584 10.7976 6.52894 10.7149 6.71986 10.7149L15.5381 10.7149L12.4493 7.34322C12.3141 7.19566 12.2381 6.99552 12.2381 6.78684C12.2381 6.57816 12.3141 6.37802 12.4493 6.23046C12.5846 6.0829 12.768 6 12.9592 6C13.1505 6 13.3339 6.0829 13.4691 6.23046L17.7883 10.9433C17.8554 11.0163 17.9086 11.103 17.945 11.1985C17.9813 11.294 18 11.3963 18 11.4997C18 11.6031 17.9813 11.7055 17.945 11.8009C17.9086 11.8964 17.8554 11.9831 17.7883 12.0561L13.4691 16.769C13.4022 16.8422 13.3228 16.9003 13.2353 16.9399C13.1478 16.9796 13.054 17 12.9592 17C12.8645 17 12.7707 16.9796 12.6832 16.9399C12.5957 16.9003 12.5162 16.8422 12.4493 16.769Z"
                        fill="#151E2D"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </Tabs.Content>
          ) : (
            ""
          )
        )}
        {content.map((item) =>
          item.attributes.category === "winter2024" ? (
            <Tabs.Content value="winter 2024" key={item.id}>
              <div className="flex flex-col sm:flex-row w-full items-start justify-start gap-5 overflow-hidden bg-white px-6 py-10 rounded-lg shadow-lg">
                {/* Display start date */}
                <div className="w-[72px] h-[72px]  px-4 py-1 flex flex-col items-center bg-brand-blue text-center">
                  <p className=" text-body-sm font-bold text-gray">
                    {formatStartMonth(item.attributes.startDate)}
                  </p>
                  <p className=" font-display text-display-lg font-bold text-white">
                    {formatStartDay(item.attributes.startDate)}
                  </p>
                </div>

                {/* Display item title and description */}
                <div className="flex flex-col lg:w-[80%] w-full">
                  <p className="text-display-sm font-bold text-dark-1 mb-2">
                    {item.attributes.title}
                  </p>
                  {expandedItem === item.id ? (
                    <div>
                      <BlocksRenderer content={item.attributes.content} />
                    </div>
                  ) : (
                    <div>
                      <BlocksRenderer
                        content={item.attributes.shortDescription}
                      />
                    </div>
                  )}

                  {/* Toggle button to show/hide content */}
                  <a
                    className="rounded-lg cursor-pointer group min-w-[200px] mt-5 justify-start font-semibold text-body-md underline hover:no-underline decoration-brand-yellow decoration-2 underline-offset-8 text-dark1 flex items-center gap-2 pl-0"
                    onClick={() => toggleContent(item.id)}
                  >
                    {expandedItem === item.id ? "Show Less" : "Read More"}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 group-hover:-rotate-45 transition-all duration-200"
                    >
                      <circle cx="12" cy="12" r="12" fill="#FDC72F" />
                      <path
                        d="M12.4493 16.769C12.3822 16.696 12.329 16.6093 12.2926 16.5138C12.2563 16.4183 12.2376 16.316 12.2376 16.2126C12.2376 16.1092 12.2563 16.0068 12.2926 15.9114C12.329 15.8159 12.3822 15.7292 12.4493 15.6562L15.5381 12.2859L6.71986 12.2859C6.52894 12.2859 6.34584 12.2031 6.21084 12.0558C6.07584 11.9085 6 11.7087 6 11.5004C6 11.292 6.07584 11.0923 6.21084 10.945C6.34584 10.7976 6.52894 10.7149 6.71986 10.7149L15.5381 10.7149L12.4493 7.34322C12.3141 7.19566 12.2381 6.99552 12.2381 6.78684C12.2381 6.57816 12.3141 6.37802 12.4493 6.23046C12.5846 6.0829 12.768 6 12.9592 6C13.1505 6 13.3339 6.0829 13.4691 6.23046L17.7883 10.9433C17.8554 11.0163 17.9086 11.103 17.945 11.1985C17.9813 11.294 18 11.3963 18 11.4997C18 11.6031 17.9813 11.7055 17.945 11.8009C17.9086 11.8964 17.8554 11.9831 17.7883 12.0561L13.4691 16.769C13.4022 16.8422 13.3228 16.9003 13.2353 16.9399C13.1478 16.9796 13.054 17 12.9592 17C12.8645 17 12.7707 16.9796 12.6832 16.9399C12.5957 16.9003 12.5162 16.8422 12.4493 16.769Z"
                        fill="#151E2D"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </Tabs.Content>
          ) : (
            ""
          )
        )}
        {content.map((item) =>
          item.attributes.category === "spring2025" ? (
            <Tabs.Content value="spring 2025" key={item.id}>
              <div className="flex flex-col sm:flex-row w-full items-start justify-start gap-5 overflow-hidden bg-white px-6 py-10 rounded-lg shadow-lg">
                {/* Display start date */}
                <div className="w-[72px] h-[72px]  px-4 py-1 flex flex-col items-center bg-brand-blue text-center">
                  <p className=" text-body-sm font-bold text-gray">
                    {formatStartMonth(item.attributes.startDate)}
                  </p>
                  <p className=" font-display text-display-lg font-bold text-white">
                    {formatStartDay(item.attributes.startDate)}
                  </p>
                </div>

                {/* Display item title and description */}
                <div className="flex flex-col lg:w-[80%] w-full">
                  <p className="text-display-sm font-bold text-dark-1 mb-2">
                    {item.attributes.title}
                  </p>
                  {expandedItem === item.id ? (
                    <div>
                      <BlocksRenderer content={item.attributes.content} />
                    </div>
                  ) : (
                    <div>
                      <BlocksRenderer
                        content={item.attributes.shortDescription}
                      />
                    </div>
                  )}

                  {/* Toggle button to show/hide content */}
                  <a
                    className="rounded-lg cursor-pointer group min-w-[200px] mt-5 justify-start font-semibold text-body-md underline hover:no-underline decoration-brand-yellow decoration-2 underline-offset-8 text-dark1 flex items-center gap-2 pl-0"
                    onClick={() => toggleContent(item.id)}
                  >
                    {expandedItem === item.id ? "Show Less" : "Read More"}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 group-hover:-rotate-45 transition-all duration-200"
                    >
                      <circle cx="12" cy="12" r="12" fill="#FDC72F" />
                      <path
                        d="M12.4493 16.769C12.3822 16.696 12.329 16.6093 12.2926 16.5138C12.2563 16.4183 12.2376 16.316 12.2376 16.2126C12.2376 16.1092 12.2563 16.0068 12.2926 15.9114C12.329 15.8159 12.3822 15.7292 12.4493 15.6562L15.5381 12.2859L6.71986 12.2859C6.52894 12.2859 6.34584 12.2031 6.21084 12.0558C6.07584 11.9085 6 11.7087 6 11.5004C6 11.292 6.07584 11.0923 6.21084 10.945C6.34584 10.7976 6.52894 10.7149 6.71986 10.7149L15.5381 10.7149L12.4493 7.34322C12.3141 7.19566 12.2381 6.99552 12.2381 6.78684C12.2381 6.57816 12.3141 6.37802 12.4493 6.23046C12.5846 6.0829 12.768 6 12.9592 6C13.1505 6 13.3339 6.0829 13.4691 6.23046L17.7883 10.9433C17.8554 11.0163 17.9086 11.103 17.945 11.1985C17.9813 11.294 18 11.3963 18 11.4997C18 11.6031 17.9813 11.7055 17.945 11.8009C17.9086 11.8964 17.8554 11.9831 17.7883 12.0561L13.4691 16.769C13.4022 16.8422 13.3228 16.9003 13.2353 16.9399C13.1478 16.9796 13.054 17 12.9592 17C12.8645 17 12.7707 16.9796 12.6832 16.9399C12.5957 16.9003 12.5162 16.8422 12.4493 16.769Z"
                        fill="#151E2D"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </Tabs.Content>
          ) : (
            ""
          )
        )}
        {content.map((item) =>
          item.attributes.category === "summer2025" ? (
            <Tabs.Content value="summer 2025" key={item.id}>
              <div className="flex flex-col sm:flex-row w-full items-start justify-start gap-5 overflow-hidden bg-white px-6 py-10 rounded-lg shadow-lg">
                {/* Display start date */}
                <div className="w-[72px] h-[72px]  px-4 py-1 flex flex-col items-center bg-brand-blue text-center">
                  <p className=" text-body-sm font-bold text-gray">
                    {formatStartMonth(item.attributes.startDate)}
                  </p>
                  <p className=" font-display text-display-lg font-bold text-white">
                    {formatStartDay(item.attributes.startDate)}
                  </p>
                </div>

                {/* Display item title and description */}
                <div className="flex flex-col lg:w-[80%] w-full">
                  <p className="text-display-sm font-bold text-dark-1 mb-2">
                    {item.attributes.title}
                  </p>
                  {expandedItem === item.id ? (
                    <div>
                      <BlocksRenderer content={item.attributes.content} />
                    </div>
                  ) : (
                    <div>
                      <BlocksRenderer
                        content={item.attributes.shortDescription}
                      />
                    </div>
                  )}

                  {/* Toggle button to show/hide content */}
                  <a
                    className="rounded-lg cursor-pointer group min-w-[200px] mt-5 justify-start font-semibold text-body-md underline hover:no-underline decoration-brand-yellow decoration-2 underline-offset-8 text-dark1 flex items-center gap-2 pl-0"
                    onClick={() => toggleContent(item.id)}
                  >
                    {expandedItem === item.id ? "Show Less" : "Read More"}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 group-hover:-rotate-45 transition-all duration-200"
                    >
                      <circle cx="12" cy="12" r="12" fill="#FDC72F" />
                      <path
                        d="M12.4493 16.769C12.3822 16.696 12.329 16.6093 12.2926 16.5138C12.2563 16.4183 12.2376 16.316 12.2376 16.2126C12.2376 16.1092 12.2563 16.0068 12.2926 15.9114C12.329 15.8159 12.3822 15.7292 12.4493 15.6562L15.5381 12.2859L6.71986 12.2859C6.52894 12.2859 6.34584 12.2031 6.21084 12.0558C6.07584 11.9085 6 11.7087 6 11.5004C6 11.292 6.07584 11.0923 6.21084 10.945C6.34584 10.7976 6.52894 10.7149 6.71986 10.7149L15.5381 10.7149L12.4493 7.34322C12.3141 7.19566 12.2381 6.99552 12.2381 6.78684C12.2381 6.57816 12.3141 6.37802 12.4493 6.23046C12.5846 6.0829 12.768 6 12.9592 6C13.1505 6 13.3339 6.0829 13.4691 6.23046L17.7883 10.9433C17.8554 11.0163 17.9086 11.103 17.945 11.1985C17.9813 11.294 18 11.3963 18 11.4997C18 11.6031 17.9813 11.7055 17.945 11.8009C17.9086 11.8964 17.8554 11.9831 17.7883 12.0561L13.4691 16.769C13.4022 16.8422 13.3228 16.9003 13.2353 16.9399C13.1478 16.9796 13.054 17 12.9592 17C12.8645 17 12.7707 16.9796 12.6832 16.9399C12.5957 16.9003 12.5162 16.8422 12.4493 16.769Z"
                        fill="#151E2D"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </Tabs.Content>
          ) : (
            ""
          )
        )}
      </div>
      {/* <div className=" flex flex-col gap-6 lg:w-3/5">
      {content.map((item) =>
        item.category.map((multiple) => (
          <Tabs.Content value={multiple.title}>
            <div className=" relative bg-white group hover:cursor-pointer hover:bg-offwhite border border-light-gray rounded-lg p-6">
              <a
                className="absolute w-full h-full top-0 left-0"
                href={`${url}${item.slug.current}`}
              ></a>
              <div className=" flex  flex-col-reverse md:flex-row md:items-center justify-between gap-2 mb-6">
                <div className=" flex flex-row flex-wrap gap-2">
                  {item.category.map((item) => (
                    <div className=" bg-offwhite text-body-xs text-black px-2.5 border border-black rounded-full ">
                      {item.title}
                    </div>
                  ))}
                </div>
                <div
                  className=" w-[142px] flex flex-row items-center gap-1.5 justify-end text-dark-blue font-display text-display-btn font-medium"
                  href={`${url}${item.slug.current}`}
                >
                  Full Outline{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className=" rotate-45 group-hover:rotate-0"
                  >
                    <path
                      d="M5.8335 14.1666L14.1668 5.83331M14.1668 5.83331H5.8335M14.1668 5.83331V14.1666"
                      stroke="#008EEF"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <p className=" text-body-lg font-semibold mb-4">{item.title}</p>
              <p className=" text-body-base font-semibold text-dark-gray mb-4">
                {item.shortDescription}
              </p>
              {item.length && (
                <div className=" flex flex-row gap-2 text-body-xs font-semibold text-dark-gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_35_37720)">
                      <path
                        d="M9.99984 4.99996V9.99996L13.3332 11.6666M18.3332 9.99996C18.3332 14.6023 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6023 1.6665 9.99996C1.6665 5.39759 5.39746 1.66663 9.99984 1.66663C14.6022 1.66663 18.3332 5.39759 18.3332 9.99996Z"
                        stroke="#424A54"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_37720">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  {item.length}
                </div>
              )}
            </div>
          </Tabs.Content>
        ))
      )}
    </div> */}
    </Tabs.Root>
  );
};

export { TabsNewsAndEvents };
