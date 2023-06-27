import {useEffect, useState} from "react";
import {readDir, BaseDirectory, createDir} from '@tauri-apps/api/fs';
import {resolve as pathResolve, appDataDir} from '@tauri-apps/api/path';
import {PageTitle} from "@/components/page-title.jsx";
import {Notification, Row, Col, Card, Avatar, CardGroup, Typography, Button} from '@douyinfe/semi-ui';
import {IconPlusCircle} from "@douyinfe/semi-icons";
import {listProfile} from "@/utils/profiles.js";
import {useNavigate} from "react-router-dom";


const Explorer = () => {
  const {Meta} = Card;
  const {Text} = Typography;
  const navigate = useNavigate()
  const [profileList, setProfileList] = useState([])
  const [profileRoot, setProfileRoot] = useState('')
  useEffect(() => {
    listProfile().then(res => {
      if (res.path) {
        const profiles = res.profiles.filter(o => o.children).map(v => ({
          name: v.name,
          path: v.path
        }))
        setProfileList(profiles)
        console.log(res.path)
        setProfileRoot(res.path)
      } else {
        Notification.error({
          title: '配置文件获取失败，请检查软件访问权限',
          duration: 3,
        })
      }
    })
  }, [])
  const defaultCardProps = {
    shadows: 'hover',
    style: {width: '32%', userSelect: 'none'},
    bodyStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      userSelect: 'none'
    }
  }
  return <>
    <div className="flex flex-col w-full">
      <PageTitle title="配置管理器"/>
      {/*<h3>工作区路径：{profileRoot ? profileRoot : '获取失败'}</h3>*/}
      <CardGroup>
        {
          profileList.map(obj =>
            <Card key={obj.path}{...defaultCardProps}>
              <Meta title={obj.name}
                    avatar={<Avatar alt='Profile' size="extra-small">{obj.name.slice(0, 1)}</Avatar>}/>
            </Card>
          )
        }
        <Card {...defaultCardProps} onClick={() => navigate('/studio')}>
          <div className="flex flex-row items-center">
            <IconPlusCircle size="extra-large" className="mr-3" style={{color: 'var(--semi-color-success)'}} />
            <Text type="success" strong>新增配置文件</Text>
          </div>
        </Card>
      </CardGroup>
    </div>
  </>
}
export default Explorer;