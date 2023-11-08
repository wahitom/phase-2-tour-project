import React, { useState } from "react";

import Amboseli from "./PackagesChild/Amboseli";
import Diani from "./PackagesChild/Diani";
import Malindi from "./PackagesChild/Malindi";
import MaasaiMara from "./PackagesChild/MaasaiMara";
import Nakuru from "./PackagesChild/Nakuru";
import RiftValley from "./PackagesChild/RiftValley";

const Availablepackages = () => {
  return (
    <>
      <MaasaiMara />
      <Diani />
      <Malindi />
      <Nakuru />
      <RiftValley />
      <Amboseli />
    </>
  );
};

export default Availablepackages;
