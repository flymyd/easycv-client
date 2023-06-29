import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {Form, Button, Space, Steps, useFormApi} from '@douyinfe/semi-ui';
import {PageTitle} from "@/components/page-title.jsx";
import SimpleMarco from "@/components/studio/simple-marco.jsx";

const Studio = () => {
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
  const [searchParams, setSearchParams] = useSearchParams();
  const formRef = useRef();
  return <div className="flex flex-col w-full">
    <PageTitle title={searchParams.get('id') ? '编辑' : '新建配置文件'} back/>
    {/*<Button onClick={()=>console.log(formRef.current.formApi.getValues())}>test</Button>*/}
    <Form ref={formRef}>
      <div className="flex items-start gap-10">
        <Section text="基本信息">
          <Input field='name' label='配置名' placeholder="请输入配置文件名" trigger={['blur', 'change']} rules={[
            {required: true, message: '配置名不能为空'},
            {max: 20, message: '配置名不能超过20个字符'}
          ]}/>
        </Section>
        <Section text={'采集源分辨率'} style={{marginTop: 0}}>
          <div style={{display: 'flex', gap: 12}}>
            <InputNumber field='sourceWidth' initValue={2560} style={{width: 80}} step={10}
                         label={{text: '宽', required: true}}/>
            <InputNumber field='sourceHeight' initValue={1440} style={{width: 80}} step={10}
                         label={{text: '高', required: true}}/>
          </div>
        </Section>
      </div>
      <Section text="工作流编辑" style={{marginTop: 26}}>
        <Select
          field='workflowType'
          label={{text: '类型', required: true}}
          initValue="1"
        >
          <Select.Option value='1'>多键宏</Select.Option>
          <Select.Option value='2'>坐标定位</Select.Option>
          <Select.Option value='3'>图像识别定位</Select.Option>
          <Select.Option value='4'>高级图像识别定位</Select.Option>
        </Select>
        <SimpleMarco/>
      </Section>
      <Space>
        <Button type='primary' theme='solid' style={{width: 120, marginTop: 12, marginRight: 4}}>保存</Button>
      </Space>
    </Form>
  </div>
}
export default Studio;