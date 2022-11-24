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

const INITIAL_VALUES = {
  client: "",
  technologies: [],
  requiredCapacity: [],
  repoName: "",
  repos: [],
  slackChannelName: "",
  slackChannels: [],
  accessZonesName: "",
  accessZones: [],
};

const AddProject = ({ fields }) => {
  const technologiesDataFields = useMemo(
    () => [fields["technology"] ?? [], fields["seniorityLevel"] ?? []],
    [fields],
  );
  const capacityDataFields = useMemo(
    () => [
      { codename: "noOfDevs", label: "No. of devs", fields: generateNumbers(100) },
      fields["seniorityLevel"] ?? [],
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

  const handleOnChange = useCallback(
    (setFormData, fieldName) => (data) => setFormData(fieldName, data),
    [],
  );

  const validate = yup.object({
    client: yup.string().required("Enter client name."),
    technologies: yup.array().of(yup.object()),
    requiredCapacity: yup.array().of(yup.object()),
    repoName: yup.string(),
    repos: yup.array().of(yup.string()).min(1).required(),
    slackChannelName: yup.string(),
    // .test('channel-name', 'Slack channel name shall not be empty.', () =>
    //   slackChannelInputValue.length > 0 ? true : false,
    // ),
    slackChannels: yup.array().of(yup.string()).min(1).required(),
    accessZonesName: yup.string(),
    accessZones: yup.array().of(yup.string()).min(1).required(),
  });

  return (
    <>
      <Title>Add Project</Title>
      <div className='w-full'>
        <div className='max-w-sm m-auto'>
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={validate}
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

                    <ObjectList
                      setList={setTechnologies}
                      list={technologies}
                      onChange={handleOnChange(formik.setFieldValue, "technologies")}
                      name='technologies'
                      dataFields={technologiesDataFields}
                      label='Add technologies'
                    />

                    <ObjectList
                      setList={setRequiredCapacity}
                      list={requiredCapacity}
                      onChange={handleOnChange(formik.setFieldValue, "requiredCapacity")}
                      name='requiredCapacity'
                      dataFields={capacityDataFields}
                      label='Add required capacity'
                    />

                    <StringList
                      setList={setReposList}
                      list={reposList}
                      onChange={handleOnChange(formik.setFieldValue, "repos")}
                      name='repos'
                      textInput={{
                        label: "Repositories",
                        id: "addproject-repos",
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
                        label: "Access zones",
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
