import * as React from "react";
import { Dialog, Form } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";

const NewSite = () => (
	<Dialog.Root>
		<Dialog.Trigger asChild>
			<button className="Button violet">Add Site</button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className="DialogOverlay" />
			<Dialog.Content className="DialogContent">
				<Dialog.Title className="DialogTitle">Add Site</Dialog.Title>
				   
				<Dialog.Close asChild>
					<button className="IconButton" aria-label="Close">
						<Cross2Icon />
					</button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
);

export default NewSite;
