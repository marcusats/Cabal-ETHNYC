import React, { useState } from "react";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Tooltip,
} from "@chakra-ui/react";

export default function ProfileInfoButton({ item, idx }) {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<Tooltip
				label={
					item.value !== null ? "Completed" : "Todo: Click To Store Your Info"
				}>
				<button
					onClick={() => setVisible(true)}
					className={`profile-info-btn ${idx % 2 ? "" : "odd"}`}>
					<span
						class={`status ${item.value !== null ? "success" : "todo"}`}></span>
					<p>{item.title}</p>
				</button>
			</Tooltip>

			<Modal isOpen={visible} size={"lg"} onClose={() => setVisible(false)}>
				<ModalOverlay />
				<ModalContent className={"custom-modal"}>
					<ModalHeader>{item.title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>{item.info}</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
