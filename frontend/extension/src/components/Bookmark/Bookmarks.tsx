import { FC } from "react";
import { BookmarksProps } from "./types";
import { BookmarkItem } from './BookmarkItem';
export const Bookmarks: FC<BookmarksProps> = ({
  bookmarkTree,
}) => {
  return (
    <>
      {bookmarkTree.map((treeItem) => {
        return (
          <BookmarkItem treeItem={treeItem}/>
        );
      })}
    </>
  );
};
