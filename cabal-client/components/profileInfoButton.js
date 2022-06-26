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
<<<<<<< HEAD
import { Input } from "@chakra-ui/react";
export default function ProfileInfoButton({ item, idx }) {
  const [visible, setVisible] = useState(false);
  function testInput(x) {
    console.log(x);
  }
  return (
    <>
      <Tooltip
        label={
          item.value !== null ? "Completed" : "Todo: Click To Store Your Info"
        }
      >
        <button
          onClick={() => setVisible(true)}
          className={`profile-info-btn ${idx % 2 ? "" : "odd"}`}
        >
          <span
            class={`status ${item.value !== null ? "success" : "todo"}`}
          ></span>
          <p>{item.title}</p>
        </button>
      </Tooltip>

      <Modal isOpen={visible} size={"lg"} onClose={() => setVisible(false)}>
        <ModalOverlay />
        <ModalContent className={"custom-modal"}>
          <ModalHeader>{item.title}</ModalHeader>
          <ModalCloseButton />
=======
import { useEffect } from "react";
import { Spinner } from "@uiball/loaders";
import LoadingWrapper from "../helper/loadingWrapper";
export default function ProfileInfoButton({ item, idx }) {
	const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		setLoading(true);
		// todo: get status and data value
		setLoading(false);
	}, []);
	return (
		<>
			<Tooltip
				label={
					item.value !== null ? "Completed" : "Todo: Click To Store Your Info"
				}>
				<button
					onClick={() => setVisible(true)}
					className={`profile-info-btn ${idx % 2 ? "" : "odd"}`}>
					<LoadingWrapper loading={loading} type={"dot-spinner"} size={20}>
						<span class={`status ${completed ? "success" : "todo"}`}></span>
					</LoadingWrapper>
					<p>{item.title}</p>
				</button>
			</Tooltip>
>>>>>>> 3887c8502244316df78e2f65be6d78e88686e6cb

          <ModalBody>
            {console.log(item.vale, typeof item.value)}
            {typeof item.value === null ? item.value : "error"}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
