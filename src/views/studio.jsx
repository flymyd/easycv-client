import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {Form, Button, Space, Steps, useFormApi} from '@douyinfe/semi-ui';
import {PageTitle} from "@/components/page-title.jsx";
import {BasicInformation} from "@/components/studio/basic-information.jsx";
import {WorkFlow} from "@/components/studio/workflow.jsx";
import {SetEnv} from "@/components/studio/set-env.jsx";

const Studio = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0)
  const formRef = useRef();
  const next = () => setCurrentStep((prevState) => prevState + 1)
  const prev = () => setCurrentStep((prevState) => prevState - 1)
  const steps = ['设置基本信息', '创建自动化流程', '设置运行环境']
  return <div className="flex flex-col w-full">
    <PageTitle title={searchParams.get('id') ? '编辑' : '新建配置文件'} back/>
    <Steps className="mb-5" type="basic" size="small" current={currentStep}>
      {
        steps.map((txt, i) => <Steps.Step key={txt + i} title={txt} description={currentStep === i && '您在此步'}/>)
      }
    </Steps>
    {/*<Form style={{width: 560}}>*/}
    {/*  {currentStep === 0 ? <BasicInformation {...formData[currentStep]} /> : currentStep === 1 ?*/}
    {/*    <WorkFlow {...formData[currentStep]} /> : <SetEnv {...formData[currentStep]} />}*/}
    {/*</Form>*/}
    <Button onClick={()=>console.log(formRef.current.formApi.getValues())}>test</Button>
    <Form style={{width: 560}} ref={formRef}
          component={currentStep === 0 ? BasicInformation : currentStep === 1 ? WorkFlow : SetEnv}></Form>
    <div className="steps-action">
      {currentStep < steps.length - 1 && (
        <Button type="primary" onClick={() => next()}>
          下一步
        </Button>
      )}
      {currentStep === steps.length - 1 && (
        <Button type="primary" onClick={() => console.log('Processing complete!')}>
          完成
        </Button>
      )}
      {currentStep > 0 && (
        <Button style={{marginLeft: 8}} onClick={() => prev()}>
          上一步
        </Button>
      )}
    </div>
  </div>
}
export default Studio;