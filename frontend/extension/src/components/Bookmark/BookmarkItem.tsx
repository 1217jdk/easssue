import React from "react";
import { BookmarkItemProps } from "./types";

export const BookmarkItem: React.FC<BookmarkItemProps> = ({ treeItem }) => {
  return (
    <div>
      <a href={treeItem.url} target="_blank">
        <img
          className="m-auto rounded-md w-[32px] h-[32px]"
          src={
            "https://www.google.com/s2/favicons?domain=" +
            treeItem.url +
            "&sz=32"
          }
          // style={{ width: 32, height: 32 }}
          alt=""
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "bookmark2.svg";
          }}
        />
        <div className="mt-2 text-xs text-ellipsis line-clamp-2 text-white text-center">
          {treeItem.title}
        </div>
      </a>
    </div>
  );
};
