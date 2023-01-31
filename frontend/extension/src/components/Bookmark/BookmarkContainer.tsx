import React from "react";
import { ContainerProps } from './types';

export const BookmarkContainer: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="bg-black/25 p-4 rounded-lg m-2 mb-8">
      <div className="grid grid-cols-10 gap-4">{children}</div>
    </div>
  );
};
