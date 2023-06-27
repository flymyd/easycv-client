import {Card, Col, Row, Typography} from "@douyinfe/semi-ui";

const Index = () => {
  const { Text } = Typography;
  return <>
    <Row gutter={16}>
      <Col span={8}>
        <Card
          title='Semi Design'
          style={{ maxWidth: 360 }}
          headerExtraContent={
            <Text link>
              更多
            </Text>
          }
        >
          Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
        </Card>
      </Col>
    </Row>
  </>
}
export default Index;