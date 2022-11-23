import Dropdown from '../../atoms/Dropdown/Dropdown';
import Title from '../../atoms/Title/Title';
import Button from '../../atoms/Button/Button';
import StringList from '../../molecules/StringList/StringList';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useStringListState } from '../../molecules/StringList/useStringListState';

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

  // useEffect(() => {
  //   if (slackChannelInputValue === '' && slackChannelInputWasTouched === true)
  //     setSlackChannelInputValue('#');
  // }, [slackChannelInputValue, setSlackChannelInputValue, slackChannelInputWasTouched]);

  const validate = yup.object({
    client: yup.string().required('Please enter client name.'),
    technologies: yup.array().of(yup.string()).min(1).required(),
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
                  <Dropdown
                    list={[
                      { label: 'item1', value: '#item1' },
                      { label: 'item2', value: '#item2' },
                      { label: 'item3', value: '#item3' },
                    ]}
                  />
                  <Button label={'prezz me'} type='button' />
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
                      wasTouched: slackChannelInputWasTouched,
                    }}
                  />
                  <Button label={'Submit'} type='submit' />
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
