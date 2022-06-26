import React, { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Switch,
	FormControl,
} from "@chakra-ui/react";
export default function ManageDataTypeAccessCard({ item, idx, service }) {
	const [visible, setVisible] = useState(false);
	return (
		<div>
			<button
				className={`data-type ${idx % 2 ? "" : "odd"}`}
				onClick={() => setVisible(true)}>
				<p>{item.dataTypeName}</p>
				<Switch
					isChecked={item.allowAccess}
					className={`custom-switch ${
						item.allowAccess ? "checked" : "unchecked"
					}`}
				/>
			</button>
			<Modal isOpen={visible} size={"lg"} onClose={() => setVisible(false)}>
				<ModalOverlay />
				<ModalContent className={"custom-modal"}>
					<ModalHeader>
						Edit {service}'s' Access To {item.dataTypeName}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<h6>Change Here</h6>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
}
