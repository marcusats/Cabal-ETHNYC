import React from "react";
import {
	Button,
	Popover,
	PopoverHeader,
	PopoverTrigger,
	Select,
} from "@chakra-ui/react";
import NewDataTypeOption from "./newDataTypeOption";

export default function SelectNewDataType() {
	// name
	//worldCoin
	//
	const options = [
		{
			text: "Name",
			value: "name",
			title: "Add Name",
			dataType: "",
		},
	];
	return (
		<div>
			<Popover>
				<PopoverTrigger>
					<Button>Add More Data Types</Button>
				</PopoverTrigger>
				<Portal>
					<PopoverContent>
						<PopoverArrow />
						<PopoverHeader>Adding New Stuff?</PopoverHeader>
						{options.map((item) => {
							return <NewDataTypeOption item={item} />;
						})}
					</PopoverContent>
				</Portal>
			</Popover>
		</div>
	);
}
