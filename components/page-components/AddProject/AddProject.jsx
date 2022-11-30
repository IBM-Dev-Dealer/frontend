import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";
import StringList from "../../molecules/StringList/StringList";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { useStringListState } from "../../molecules/StringList/useStringListState";
import ObjectList from "../../molecules/ObjectList/ObjectList";
import { useObjectListState } from "../../molecules/ObjectList/useObjectListState";
import { generateNumbers } from "../../../utils/utils";
import { useCallback, useMemo } from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import { useTextInputState } from "../../atoms/TextInput/useTextInputState";
import PickDate from "../../atoms/PickDate/PickDate";

const INITIAL_VALUES = {
  client: "",
  clientLogoURL: "",
  projectName: "",
  projectPeriod: { start: null, end: null },
  technologies: [],
  requiredCapacity: [],
  repoName: "",
  repositories: [],
  slackChannelName: "",
  slackChannels: [],
  accessZonesName: "",
  accessZones: [],
};

const VALIDATE = yup.object({
  client: yup.string().required("Enter client name."),
  clientLogoURL: yup.string(),
  projectName: yup.string().required("Enter project name."),
  projectPeriod: yup.object({ start: yup.string(), end: yup.string() }),
  technologies: yup.array().of(yup.object()),
  requiredCapacity: yup.array().of(yup.object()),
  repoName: yup.string(),
  repositories: yup.array().of(yup.string()).min(1).required(),
  slackChannelName: yup.string(),
  // .test('channel-name', 'Slack channel name shall not be empty.', () =>
  //   slackChannelInputValue.length > 0 ? true : false,
  // ),
  slackChannels: yup.array().of(yup.string()).min(1).required(),
  accessZonesName: yup.string(),
  accessZones: yup.array().of(yup.string()).min(1).required(),
});

const AddProject = ({ fields }) => {
  const technologiesDataFields = useMemo(() => [fields["technology"] ?? []], [fields]);
  const capacityDataFields = useMemo(
    () => [
      { codename: "developers", label: "Developers", fields: generateNumbers(100) },
      fields["seniorityLevel"] ?? [],
      fields["technology"] ?? [],
    ],
    [fields],
  );

  const {
    stringList: slackChannelList,
    setStringList: setSlackChannelList,
    stringInputValue: slackChannelInputValue,
    setStringInputValue: setSlackChannelInputValue,
    inputWasTouched: slackChannelInputWasTouched,
    setInputWasTouched: setSlackChannelInputWasTouched,
  } = useStringListState();

  const {
    stringList: reposList,
    setStringList: setReposList,
    stringInputValue: reposInputValue,
    setStringInputValue: setReposInputValue,
    inputWasTouched: reposInputWasTouched,
    setInputWasTouched: setReposInputWasTouched,
  } = useStringListState();

  const {
    stringList: accessZonesList,
    setStringList: setAccessZonesList,
    stringInputValue: accessZonesInputValue,
    setStringInputValue: setAccessZonesInputValue,
    inputWasTouched: accessZonesInputWasTouched,
    setInputWasTouched: setAccessZonesInputWasTouched,
  } = useStringListState();

  const { objectList: technologies, setObjectList: setTechnologies } = useObjectListState();
  const { objectList: requiredCapacity, setObjectList: setRequiredCapacity } = useObjectListState();
  const { stringInputValue: clientInputValue, setStringInputValue: setClientInputValue } =
    useTextInputState();
  const {
    stringInputValue: clientLogoURLInputValue,
    setStringInputValue: setClientLogoURLInputValue,
  } = useTextInputState();
  const { stringInputValue: projectNameInputValue, setStringInputValue: setProjectNameInputValue } =
    useTextInputState();

  const handleOnChange = useCallback(
    (setFormData, fieldName) => (data) => setFormData(fieldName, data),
    [],
  );

  return (
    <>
      <Title>Add Project</Title>
      <div className='w-full'>
        <div className='max-w-md m-auto'>
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={VALIDATE}
            onSubmit={(values) => {
              //   submitHandler(values);
              console.log("[AddProject] form values", values);
            }}
          >
            {(formik) => {
              return (
                <Form onKeyDown={(e) => (e.key === "Enter" ? e.preventDefault() : null)}>
                  <div className='flex flex-col gap-2'>
                    <TextInput
                      name='client'
                      labelText='Client'
                      value={clientInputValue}
                      onChange={(e) => {
                        setClientInputValue(e.target.value);
                        handleOnChange(formik.setFieldValue, "client")(e.target.value);
                      }}
                      id={"addproject-client"}
                      placeholder='Client'
                      clearValue={(ref) => {
                        setClientInputValue("");
                        formik.setFieldValue("client", "");
                        ref.current.blur();
                      }}
                    />

                    <TextInput
                      name='clientLogoURL'
                      labelText='Client Logo URL'
                      value={clientLogoURLInputValue}
                      onChange={(e) => {
                        setClientLogoURLInputValue(e.target.value);
                        handleOnChange(formik.setFieldValue, "clientLogoURL")(e.target.value);
                      }}
                      id={"addproject-clientLogoURL"}
                      placeholder='ClientLogoURL'
                      clearValue={(ref) => {
                        setClientLogoURLInputValue("");
                        formik.setFieldValue("clientLogoURL", "");
                        ref.current.blur();
                      }}
                    />

                    <TextInput
                      name='projectName'
                      labelText='Project Name'
                      value={projectNameInputValue}
                      onChange={(e) => {
                        setProjectNameInputValue(e.target.value);
                        handleOnChange(formik.setFieldValue, "projectName")(e.target.value);
                      }}
                      id={"addproject-projectName"}
                      placeholder='ProjectName'
                      clearValue={(ref) => {
                        setProjectNameInputValue("");
                        formik.setFieldValue("projectName", "");
                        ref.current.blur();
                      }}
                    />

                    <PickDate
                      name='projectPeriod'
                      label='Project duration'
                      isPeriod
                      placeholderPeriod={{ start: "Starting date", end: "Ending date" }}
                      periodState={{
                        set: handleOnChange(formik.setFieldValue, "projectPeriod"),
                        value: formik.values.projectPeriod,
                      }}
                    />

                    <ObjectList
                      setList={setTechnologies}
                      list={technologies}
                      onChange={handleOnChange(formik.setFieldValue, "technologies")}
                      name='technologies'
                      dataFields={technologiesDataFields}
                      label='Add Technologies'
                    />

                    <ObjectList
                      setList={setRequiredCapacity}
                      list={requiredCapacity}
                      onChange={handleOnChange(formik.setFieldValue, "requiredCapacity")}
                      name='requiredCapacity'
                      dataFields={capacityDataFields}
                      label='Add Required Capacity'
                    />

                    <StringList
                      setList={setReposList}
                      list={reposList}
                      onChange={handleOnChange(formik.setFieldValue, "repositories")}
                      name='repositories'
                      textInput={{
                        label: "Repositories",
                        id: "addproject-repositories",
                        name: "repoName",
                        value: reposInputValue,
                        setValue: setReposInputValue,
                        touch: () => setReposInputWasTouched(true),
                        untouch: () => setReposInputWasTouched(false),
                        wasTouched: reposInputWasTouched,
                      }}
                    />

                    <StringList
                      emptyValue='#'
                      setList={setSlackChannelList}
                      list={slackChannelList}
                      onChange={handleOnChange(formik.setFieldValue, "slackChannels")}
                      name='slackChannels'
                      textInput={{
                        label: "Slack Channels",
                        id: "addproject-slackchannels",
                        name: "slackChannelName",
                        value: slackChannelInputValue,
                        setValue: setSlackChannelInputValue,
                        touch: () => setSlackChannelInputWasTouched(true),
                        untouch: () => setSlackChannelInputWasTouched(false),
                        wasTouched: slackChannelInputWasTouched,
                      }}
                    />

                    <StringList
                      setList={setAccessZonesList}
                      list={accessZonesList}
                      onChange={handleOnChange(formik.setFieldValue, "accessZones")}
                      name='accessZones'
                      textInput={{
                        label: "Access Zones",
                        id: "addproject-accessZones",
                        name: "accessZonesName",
                        value: accessZonesInputValue,
                        setValue: setAccessZonesInputValue,
                        touch: () => setAccessZonesInputWasTouched(true),
                        untouch: () => setAccessZonesInputWasTouched(false),
                        wasTouched: accessZonesInputWasTouched,
                      }}
                    />

                    <Button label={"Submit"} type='submit' />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddProject;
