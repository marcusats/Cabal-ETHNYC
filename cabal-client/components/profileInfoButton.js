import React, { useState } from "react";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

export default function ProfileInfoButton({ item }) {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<button onClick={() => setVisible(true)} className="profile-info-btn">
				<h4>{item.title}</h4>
			</button>

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
