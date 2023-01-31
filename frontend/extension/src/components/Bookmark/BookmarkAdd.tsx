import { FC } from "react";
import { BookmarkAddProps } from "./types";
export const BookmarkAdd: FC<BookmarkAddProps> = ({
  setBookmarkModalOpen
}) => {
  const onCreateClick = () => {
    setBookmarkModalOpen(true);
  };
  return (
    <button onClick={onCreateClick}>
      <img
        className="m-auto"
        style={{ width: 32, height: 32 }}
        src="bookmark.svg"
      />
      <div className="mt-2 text-xs text-ellipsis line-clamp-2 text-white">
        북마크 추가
      </div>
    </button>
  );
};
