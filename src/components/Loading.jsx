import "ldrs/ring";

import { trefoil } from "ldrs";

trefoil.register();

// Default values shown

const Loading = ({fullScreen}) => {

  const height = fullScreen ? {"minHeight":'100vh'} : {"minHeight":'0vh'}

  return (
    <div style={height} className="flex bg-black items-center w-full justify-center h-full">
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
