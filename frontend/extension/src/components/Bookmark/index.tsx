import { FC } from "react";
import { BookmarkProps} from "./types";
import { BookmarkAdd } from "./BookmarkAdd";
import { Bookmarks } from "./Bookmarks";
import { BookmarkContainer } from "./BookmarkContainer";

export const Bookmark: FC<BookmarkProps> = ({
  setBookmarkModalOpen,
  bookmarkTree,
}) => {
  return (
    <>
      <BookmarkContainer>
        <Bookmarks
          bookmarkTree={bookmarkTree}
        />
        <BookmarkAdd
          setBookmarkModalOpen={setBookmarkModalOpen}
        />
      </BookmarkContainer>
    </>
  );
};
