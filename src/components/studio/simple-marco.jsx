import {Card} from "@douyinfe/semi-ui";
import {useMemo, useState} from "react";
import {Dropdown, Tag} from '@douyinfe/semi-ui';

const SimpleMarco = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const handleContextMenu = (event) => {
    event.preventDefault(); // 阻止默认右键菜单行为
    setShowDropdown(true)
  };
  const subDropdown = useMemo(
    () => (
      <Dropdown.Menu>
        <Dropdown.Item>Menu Item 1</Dropdown.Item>
        <Dropdown.Item>Menu Item 2</Dropdown.Item>
        <Dropdown.Item>Menu Item 3</Dropdown.Item>
      </Dropdown.Menu>
    ),
    []
  );
  return (
    <>
      <Card style={{width: 200, height: 300, border: 'solid 1px red'}} shadows="always"
            onContextMenu={handleContextMenu}
            bodyStyle={{display: 'flex', flexDirection: 'column'}}>
        <div className="flex flex-col">
          <span>左键</span>
          <span>左键</span>
          <span>左键</span>
        </div>
      </Card>
    </>
  )
}
export default SimpleMarco;