import Title from '../../atoms/Title/Title';
import Button from '../../atoms/Button/Button';
import StringList from '../../molecules/StringList/StringList';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useStringListState } from '../../molecules/StringList/useStringListState';
import ObjectList from '../../molecules/ObjectList/ObjectList';
import { useObjectListState } from '../../molecules/ObjectList/useObjectListState';
import { DATA_FIELDS, DATA_FIELDS_NAMES } from './dummydata';

const INITIAL_VALUES = {
  client: '',
  technologies: [],
  repos: [],
  slackChannelName: '',
  slackChannels: [],
};

const AddProject = () => {
  const {
    stringList: slackChannelList,
    setStringList: setSlackChannelList,
    stringInputValue: slackChannelInputValue,
    setStringInputValue: setSlackChannelInputValue,
    inputWasTouched: slackChannelInputWasTouched,
    setInputWasTouched: setSlackChannelInputWasTouched,
  } = useStringListState();

  const { objectList: technologies, setObjectList: setTechnologies } =
    useObjectListState(DATA_FIELDS_NAMES);

  const validate = yup.object({
    client: yup.string().required('Please enter client name.'),
    technologies: yup.array().of(yup.object()),
    repos: yup.array().of(yup.string()).min(1).required(),
    slackChannelName: yup.string(),
    // .test('channel-name', 'Slack channel name shall not be empty.', () =>
    //   slackChannelInputValue.length > 0 ? true : false,
    // ),
    slackChannels: yup.array().of(yup.string()).min(1).required(),
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
              console.log('[AddProject] form values', values);
            }}
          >
            {(formik) => {
              return (
                <Form>
                  <div className='flex flex-col gap-6'>
                    <StringList
                      emptyValue='#'
                      setList={setSlackChannelList}
                      list={slackChannelList}
                      name='slackChannels'
                      textInput={{
                        label: 'Slack Channels',
                        id: 'addproject-stringlist',
                        disabled: false,
                        name: 'slackChannelName',
                        value: slackChannelInputValue,
                        setValue: setSlackChannelInputValue,
                        touch: () => setSlackChannelInputWasTouched(true),
                        untouch: () => setSlackChannelInputWasTouched(false),
                        wasTouched: slackChannelInputWasTouched,
                      }}
                    />

                    <ObjectList
                      setList={setTechnologies}
                      list={technologies}
                      name='technologies'
                      dataFieldsNames={DATA_FIELDS_NAMES}
                      dataFields={DATA_FIELDS}
                      label='Add technologies'
                    />

                    <Button label={'Submit'} type='submit' />
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
