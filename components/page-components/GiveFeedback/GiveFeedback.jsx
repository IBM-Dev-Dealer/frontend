import Title from "../../atoms/Title/Title";
import { Form, Formik } from "formik";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import StarRating from "../../atoms/StarRating/StarRating";
import { DIMENSIONS_RATING, INFO_MESSAGE } from "./constants";
import ObjectList from "../../molecules/ObjectList/ObjectList";
import { useState } from "react";
import { useObjectListState } from "../../molecules/ObjectList/useObjectListState";
import Button from "../../atoms/Button/Button";
import Link from "next/link";
import { ROUTES } from "../../../utils/utils";
import { INITIAL_VALUES, VALIDATE } from "./formikConstants";
import TextArea from "../../atoms/TextArea/TextArea";
import UnorderedList from "../../atoms/UnorderedList/UnorderedList";
import { useNotifications } from "../../../context/hooks/useNotifications";

const GiveFeedback = ({
	loggedUserRoles,
	projectId,
	devsWhoRequestedFeedback,
	devData,
	newSeniorityLevelFields,
}) => {
	const [feedbackView, setFeedbackView] = useState("");
	const [newSeniorityLevelsVisible, setNewSeniorityLevelsVisible] =
		useState(false);

	const {
		objectList: newSeniorityLevels,
		setObjectList: setNewSeniorityLevels,
	} = useObjectListState();

	const handleUpdateSeniority = async () => {
		setNewSeniorityLevelsVisible((prev) => !prev);
	};

	const { notify } = useNotifications();
	const submitHandler = (values) => {
		try {
			console.log("values", values);
			notify({
				kind: "success",
				message: "Feedback sent successfully!",
				id: Math.floor(Math.random() * 10000).toString(),
			});
		} catch (error) {
			notify({
				kind: "error",
				message: "Server error!",
				id: Math.floor(Math.random() * 10000).toString(),
			});
		}
	};
	return (
		<div>
			<Title>
				Give Feedback{" "}
				<Link
					href={ROUTES.REQUEST_FEEDBACK}
					className="cursor-pointer border-b hover:border-black border-transparent active:opacity-20"
				>
					Want to request feedback instead?
				</Link>
			</Title>
			<div className="mb-6 max-w-xl m-auto">
				<Dropdown
					infoMessage={INFO_MESSAGE.FEEDBACK_VIEW}
					infoMessagePosition="right"
					list={loggedUserRoles.map((role) => ({ label: role }))}
					placeholder={
						feedbackView
							? `Give feedback as: ${feedbackView}`
							: "Select Feedback View"
					}
					select={(role) => setFeedbackView(role.label)}
				/>
			</div>

			<div>
				{feedbackView === "project-manager" && (
					<div className="max-w-md m-auto">
						<div className="text-center	drop-shadow-sm text-xl mb-2">
							Give feedback to a developer
						</div>
						<Formik
							initialValues={INITIAL_VALUES.PM}
							validationSchema={VALIDATE.PM}
							onSubmit={(values) => {
								submitHandler(values);
							}}
						>
							{(formik) => {
								return (
									<Form
										onKeyDown={(e) =>
											e.key === "Enter" ? e.preventDefault() : null
										}
										className="flex flex-col gap-2"
									>
										<Dropdown
											name="dev"
											list={devsWhoRequestedFeedback}
											placeholder="Developer to give feedback to"
											select={(dev) => {
												setNewSeniorityLevelsVisible(false);
												formik.resetForm();
												formik.setFieldValue("dev", dev);
											}}
											selected={formik.values.dev}
										/>
										{formik.values.dev && (
											<div className="flex flex-col gap-2 pt-2 border-t border-transparent-gray-05 px-4">
												<Dropdown
													name="businessResults"
													list={DIMENSIONS_RATING}
													placeholder="Business Results"
													selected={formik.values.businessResults}
													select={(value) =>
														formik.setFieldValue("businessResults", value)
													}
													infoMessage={INFO_MESSAGE.BUSINESS_RESULTS}
												/>

												<Dropdown
													name="clientSuccess"
													list={DIMENSIONS_RATING}
													placeholder="Client Success"
													selected={formik.values.clientSuccess}
													select={(value) =>
														formik.setFieldValue("clientSuccess", value)
													}
													infoMessage={INFO_MESSAGE.CLIENT_SUCCESS}
												/>

												<Dropdown
													name="innovation"
													list={DIMENSIONS_RATING}
													placeholder="Innovation"
													selected={formik.values.innovation}
													select={(value) =>
														formik.setFieldValue("innovation", value)
													}
													infoMessage={INFO_MESSAGE.INNOVATION}
												/>

												<StarRating
													name="teamInteraction"
													rating={formik.values.teamInteraction}
													setRating={(value) =>
														formik.setFieldValue("teamInteraction", value)
													}
													maxRating={5}
													label={"Team Interaction"}
													infoMessage={INFO_MESSAGE.TEAM_INTERACTION}
												/>

												{devData && (
													<UnorderedList
														label={"Previous seniority levels per technology"}
														list={devData.techSeniority}
														onClick={handleUpdateSeniority}
														changeEnabler={{
															enablesChange: true,
															label: "Update seniority levels?",
															isChangeComponentVisible:
																newSeniorityLevelsVisible,
														}}
													/>
												)}

												{newSeniorityLevelsVisible && (
													<ObjectList
														name="newSeniorityLevels"
														dataFields={[
															{
																...newSeniorityLevelFields["technology"],
																// fields: devData.techSeniority.map((t) => t.technology), // uses only fields in list
															} ?? [],
															newSeniorityLevelFields["seniorityLevel"] ?? [],
														]}
														list={newSeniorityLevels}
														setList={(newList) => {
															formik.setFieldValue(
																"newSeniorityLevels",
																newList
															);
															return setNewSeniorityLevels(newList);
														}}
														label="New Seniority Levels"
													/>
												)}

												<TextArea
													label={"Add more feedback"}
													name="additionalFeedback"
													setValue={formik.setFieldValue}
													value={formik.values.additionalFeedback}
												/>

												<Button label="Submit Feedback" type="submit" />
											</div>
										)}
									</Form>
								);
							}}
						</Formik>
					</div>
				)}

				{feedbackView === "dev" && (
					<div className="max-w-md m-auto">
						<div className="text-center	drop-shadow-sm text-xl mb-2">
							Give feedback to a project
						</div>
						<Formik
							initialValues={INITIAL_VALUES.DEV}
							validationSchema={VALIDATE.DEV}
							onSubmit={(values) => {
								submitHandler(values);
							}}
						>
							{(formik) => {
								return (
									<Form
										onKeyDown={(e) =>
											e.key === "Enter" ? e.preventDefault() : null
										}
										className="flex flex-col gap-2"
									>
										<StarRating
											name="overallRating"
											rating={formik.values.overallRating}
											setRating={(value) =>
												formik.setFieldValue("overallRating", value)
											}
											maxRating={5}
											label={"Overall Rating"}
											infoMessage={
												"Rating of the overall project. How well did the project go. How satisfying or stressful it was. How were the tasks managed."
											}
										/>

										<TextArea
											label={"What went well"}
											name="whatWentWell"
											setValue={formik.setFieldValue}
											value={formik.values.whatWentWell}
										/>

										<TextArea
											label={"What could be improved"}
											name="whatCouldBeImproved"
											setValue={formik.setFieldValue}
											value={formik.values.whatCouldBeImproved}
										/>

										<Button label="Submit Feedback" type="submit" />
									</Form>
								);
							}}
						</Formik>
					</div>
				)}
			</div>
		</div>
	);
};

export default GiveFeedback;
