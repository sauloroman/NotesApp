import React from 'react';

export const SkeletonFormCreateNote: React.FC = () => {
  return (
    <form>
      <fieldset className="border-b border-gray-300 p-4 px-6 animate-pulse">
        <div className="mb-4">
          <div className="w-full h-8 bg-gray-200 rounded"></div>
        </div>
        <div className="flex gap-4 mb-4 items-center">
          <div className="w-20 h-5 bg-gray-200 rounded"></div>
          <div className="flex-1 h-6 bg-gray-200 rounded"></div>
        </div>
        <div className="flex gap-4 text-sm items-center">
          <div className="w-32 h-5 bg-gray-200 rounded"></div>
          <div className="w-20 h-5 bg-gray-200 rounded"></div>
        </div>
      </fieldset>
      <div className="p-4 px-6 border-b border-gray-300 animate-pulse">
        <div className="w-full h-96 bg-gray-200 rounded"></div>
      </div>
      <div className="p-4 px-6 animate-pulse flex justify-end">
        <div className="w-32 h-8 bg-gray-300 rounded"></div>
      </div>
    </form>
  );
};
