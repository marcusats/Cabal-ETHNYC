import React from "react";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

export default function ManageAccess() {
  const router = useRouter();
  const services = [
    { name: "Facebook", id: "facebook" },
    { name: "Github", id: "facebook" },
    { name: "Quae", id: "facebook" },
    { name: "Gypsy", id: "facebook" },
  ];
  return (
    <div className="manage-access">
      <h2 className="Title">Manage Access</h2>
      {/* <button
				onClick={() => {
					router.push("/manageAccess/glah");
				}}>
				<p>go to "glah"</p>
			</button> */}
      <div className="services-container">
        {services.map((item) => {
          return (
            <div className="inlineRow">
              <h3>{item.name}</h3>
              <span>
                <Button>Details</Button>
                <Button variant="danger">Revoke</Button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
