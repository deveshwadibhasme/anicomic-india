import "ldrs/ring";

import { trefoil } from "ldrs";

trefoil.register();

// Default values shown

const Loading = () => {
  return (
    <div className="flex items-center w-full justify-center h-full">
      <l-trefoil
        size="70"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.4"
        color="orange"
      ></l-trefoil>
    </div>
  );
};

export default Loading;
