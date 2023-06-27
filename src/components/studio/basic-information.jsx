import {Button, Form, Space} from "@douyinfe/semi-ui";

export const BasicInformation = ({formState, values, formApi}) => {
  const {
    Section,
    Input,
    DatePicker,
    TimePicker,
    Select,
    Switch,
    InputNumber,
    Checkbox,
    CheckboxGroup,
    RadioGroup,
    Radio
  } = Form;
  return (
    <>
      <Section text="基本信息">
        <Input field='name' label='配置名' placeholder="请输入配置文件名" trigger={['blur', 'change']} rules={[
          {required: true, message: '配置名不能为空'},
          {max: 20, message: '配置名不能超过20个字符'}
        ]}/>
      </Section>
    </>
  )
}