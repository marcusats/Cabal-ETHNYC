import React, { useState, useContext } from "react";
import { Context } from "../providers/provider";
import {
	Button,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import ManageDataTypeAccessCard from "./manageDataTypeAccessCard";

export default function ManageAccess({}) {
	const [name, setName] = useState("");
	const { walletId } = useContext(Context);

	const newServices = [
		{
			serviceWalletId: "0x1234",
			serviceName: "FaceBook",
			allowedDataTypes: [
				{
					dataTypeAddress: "0x2345",
					dataTypeName: "Name",
					allowAccess: false,
				},
				{
					dataTypeAddress: "0x2345",
					dataTypeName: "Birthday",
					allowAccess: false,
				},
			],
		},
	];

	return (
		<div className="manage-access">
			<h2 className="Title">Manage Access</h2>
			<div className="services-container">
				{newServices.map((item) => {
					return (
						<>
							hi
							<Accordion allowToggle>
								<AccordionItem>
									<AccordionButton>
										<h5>{item.serviceName}</h5>
										<AccordionIcon />
									</AccordionButton>
									<AccordionPanel>
										<span className="row-end">
											<Button
												size="sm"
												onClick={() => {
													router.push(`/manageAccess/${item.id}`);
												}}>
												More Details
											</Button>
											<Button size="sm" variant="danger">
												Revoke All To All
											</Button>
										</span>
										<div class="data-type">
											<h6>Data Type</h6>
											<h6>Allow Access?</h6>
										</div>

										{item.allowedDataTypes.map((dataType, idx) => {
											return (
												<ManageDataTypeAccessCard
													item={dataType}
													idx={idx}
													service={item.serviceName}
												/>
											);
										})}
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</>
					);
				})}
			</div>
		</div>
	);
}
