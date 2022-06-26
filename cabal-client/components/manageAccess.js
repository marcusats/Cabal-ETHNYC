import React, { useState, useContext } from "react";
import { Context } from "../providers/provider";
import {
	Button,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Switch,
} from "@chakra-ui/react";

export default function ProfilePage(params) {
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
				},
				{
					dataTypeAddress: "0x2345",
					dataTypeName: "Birthday",
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
						<Accordion allowToggle>
							<AccordionItem>
								<AccordionButton>
									<h6>{item.serviceName}</h6>
									<AccordionIcon />
								</AccordionButton>
								<AccordionPanel>
									<span>
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
										<p>Data Type</p>
										<p>Allow Access?</p>
									</div>

									{item.allowedDataTypes.map((item) => {
										return (
											<div className="data-type">
												{item.dataTypeName}
												<Switch isChecked={item.allowAccess} />
											</div>
										);
									})}
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					);
				})}
			</div>
		</div>
	);
}
