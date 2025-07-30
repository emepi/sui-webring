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
				   <Form.Root className="FormRoot"
				    onSubmit={(event) => {
					    event.preventDefault();
						console.log(new FormData(event.target as HTMLFormElement));
				    }}
				   >
					 <Form.Field className="FormField" name="title">
					<div
				        style={{
					    display: "flex",
					    alignItems: "baseline",
					    justifyContent: "space-between",
				        }}
			        >
						<Form.Label className="FormLabel">Title</Form.Label>
				        <Form.Message className="FormMessage" match="valueMissing">
					        Please enter site title
				        </Form.Message>
					</div>
					 <Form.Control asChild>
				        <input className="Input" type="text" required />
			         </Form.Control>

					 </Form.Field>

					 <Form.Field className="FormField" name="description">
					 <div
				        style={{
					        display: "flex",
					        alignItems: "baseline",
					        justifyContent: "space-between",
				        }}
			        >
						<Form.Label className="FormLabel">Description</Form.Label>
				        <Form.Message className="FormMessage" match="valueMissing">
					       Please enter a description
				        </Form.Message>
					</div>
					<Form.Control asChild>
				        <textarea className="Textarea" required />
			        </Form.Control>
					 </Form.Field>
					 
					 <Form.Field className="FormField" name="bannerURL">
					<div
				        style={{
					    display: "flex",
					    alignItems: "baseline",
					    justifyContent: "space-between",
				        }}
			        >
						<Form.Label className="FormLabel">Banner URL</Form.Label>
					</div>
					 <Form.Control asChild>
				        <input className="Input" type="text"/>
			         </Form.Control>

					 </Form.Field>

					 <Form.Field className="FormField" name="siteURL">
					<div
				        style={{
					    display: "flex",
					    alignItems: "baseline",
					    justifyContent: "space-between",
				        }}
			        >
						<Form.Label className="FormLabel">Site URL</Form.Label>
				        <Form.Message className="FormMessage" match="valueMissing">
					        Please enter site URL
				        </Form.Message>
					</div>
					 <Form.Control asChild>
				        <input className="Input" type="text" required />
			         </Form.Control>

					 </Form.Field>

					 <Form.Submit asChild>
			            <button className="Button" style={{ marginTop: 10 }}>
				            Submit site
			            </button>
		            </Form.Submit>
				   </Form.Root>
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
