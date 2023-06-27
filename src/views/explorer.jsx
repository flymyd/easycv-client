import {useEffect, useState} from "react";
import {readDir, BaseDirectory, createDir} from '@tauri-apps/api/fs';
import {resolve as pathResolve, appDataDir} from '@tauri-apps/api/path';
import {PageTitle} from "@/components/page-title.jsx";
import {Notification, Row, Col, Card, Avatar, CardGroup} from '@douyinfe/semi-ui';

const Explorer = () => {
  const {Meta} = Card;
  const [profileList, setProfileList] = useState([])
  const [profileRoot, setProfileRoot] = useState('')
  const listProfiles = () => {
    return new Promise(async (resolve) => {
      try {
        const profiles = await readDir('profile', {dir: BaseDirectory.AppData, recursive: true});
        const appDataDirPath = await appDataDir();
        const path = await pathResolve(appDataDirPath, 'profile')
        resolve({path, profiles});
      } catch (error) {
        console.error(error);
        resolve({path: '', profiles: []});
      }
    });
  }
  useEffect(() => {
    listProfiles().then(res => {
      if (res.path) {
        const profiles = res.profiles.filter(o => o.children).map(v => ({
          name: v.name,
          path: v.path
        }))
        setProfileList(profiles)
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
    style: {width: '32%'},
    bodyStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
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
              <Meta title={obj.name} avatar={<Avatar alt='Card meta img' size="default"
                                                     src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg'/>}
              />
            </Card>
          )
        }
        <Card {...defaultCardProps}>
          <Meta title="添加新的" avatar={<Avatar alt='Card meta img' size="default"
                                                 src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg'/>}
          />
        </Card>
      </CardGroup>
    </div>
  </>
}
export default Explorer;