export interface BookmarkProps {
  setBookmarkModalOpen: Function;
  bookmarkTree: chrome.bookmarks.BookmarkTreeNode[];
}

export interface BookmarksProps {
  bookmarkTree: chrome.bookmarks.BookmarkTreeNode[];
}

export interface BookmarkAddProps {
  setBookmarkModalOpen: Function;
}

export interface BookmarkItemProps {
  treeItem: chrome.bookmarks.BookmarkTreeNode;
}
export interface ContainerProps  {
  children: React.ReactNode;
};