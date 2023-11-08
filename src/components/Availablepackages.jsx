import React from "react";

import Stack from "react-bootstrap/Stack";

import Amboseli from "./PackagesChild/Amboseli";
import Diani from "./PackagesChild/Diani";
import Malindi from "./PackagesChild/Malindi";
import MaasaiMara from "./PackagesChild/MaasaiMara";
import Nakuru from "./PackagesChild/Nakuru";
import RiftValley from "./PackagesChild/RiftValley";

const Availablepackages = () => {
  return (
    <Stack gap={3}>
      <MaasaiMara className="p-2" />
      <Diani className="p-2" />
      <Malindi className="p-2" />
      <Nakuru className="p-2" />
      <RiftValley className="p-2" />
      <Amboseli className="p-2" />
    </Stack>
  );
};

export default Availablepackages;
