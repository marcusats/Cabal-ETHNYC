import { useRouter } from "next/router";
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
export default function ServiceId() {
  const router = useRouter();
  const { serviceId } = router.query;
  return (
    <div>
      <h2>{serviceId}</h2>
      <div></div>
    </div>
  );
}
