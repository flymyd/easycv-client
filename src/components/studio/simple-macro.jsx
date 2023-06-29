import "react-contexify/dist/ReactContexify.css";
import {Card} from "@douyinfe/semi-ui";
import {Item, Menu, Separator, Submenu, useContextMenu} from "react-contexify";
import {useEffect, useState} from "react";
import {
  DEFAULT_PX,
  DIRECTION,
  getMacroIcon,
  getMacroLabel,
  keyCodeDefine,
  mouseDefine
} from "@/components/studio/macro/define.jsx";
import _ from 'lodash'
const MENU_ID = 'simple-macro';

const SimpleMacro = ({onStateChange}) => {
  const [macroList, setMacroList] = useState([])
  const [currentClick, setCurrentClick] = useState(-1)
  const {show} = useContextMenu({id: MENU_ID});
  const handleContextMenu = (event, key) => {
    event.stopPropagation();
    setCurrentClick(key)
    show({event, props: {key}})
  }
  useEffect(() => onStateChange(macroList), [macroList])
  const handleItemClick = ({id, props, triggerEvent, data}) => {
    //删除
    if (id === 'delete') {
      setMacroList((prevState) => {
        prevState.splice(currentClick, 1);
        return [...prevState];
      })
    } else if (id.includes('mouse') && id.includes('click')) {
      //新增
      const prefix = id.split('-').slice(0, 2).join('-');
      if (currentClick != -1) {
        setMacroList((prevState) => {
          prevState.splice(currentClick + 1, 0, ...[`${prefix}-press`, `${prefix}-release`]);
          return [...prevState];
        })
      } else setMacroList([...macroList, `${prefix}-press`, `${prefix}-release`])
    } else if (currentClick != -1) {
      setMacroList((prevState) => {
        prevState.splice(currentClick + 1, 0, id);
        return [...prevState];
      })
    } else setMacroList([...macroList, id])
  }
  return (
    <>
      <Card style={{width: 260}} shadows="always"
            bodyStyle={{display: 'flex', flexDirection: 'column', padding: 0}}>
        <div className="flex flex-col mt-2 pb-7" style={{minHeight: 300}}
             onContextMenu={(e) => handleContextMenu(e, '-1')}>
          {
            macroList.map((k, i) =>
              <div className="py-1 hover:bg-neutral-800 hover:text-white" key={k + i}
                   onContextMenu={(e) => handleContextMenu(e, i)}>
                <div className="flex flex-row items-center mx-2">{getMacroIcon(k)}{getMacroLabel(k)}</div>
              </div>)
          }
        </div>
      </Card>
      <Menu id={MENU_ID} theme="dark" animation="fade">
        <Submenu label="新增延迟">
          <Item id="latency-5" onClick={handleItemClick}>5ms</Item>
          <Item id="latency-10" onClick={handleItemClick}>10ms</Item>
          <Item id="latency-20" onClick={handleItemClick}>20ms</Item>
          <Item id="latency-50" onClick={handleItemClick}>50ms</Item>
          <Item id="latency-100" onClick={handleItemClick}>100ms</Item>
          <Item id="latency-200" onClick={handleItemClick}>200ms</Item>
          <Item id="latency-500" onClick={handleItemClick}>500ms</Item>
          <Item id="latency-1000" onClick={handleItemClick}>1000ms</Item>
        </Submenu>
        <Item id="delete" onClick={handleItemClick} disabled={currentClick == -1}>删除</Item>
        <Separator/>
        <Submenu label="新增鼠标按键事件">
          {
            mouseDefine.map(v => <Submenu label={v.label} disabled={v.disabled} key={v.id}>
              {
                v.children.map(k => <Item id={k.id} onClick={handleItemClick} key={k.id}>{k.label}</Item>)
              }
            </Submenu>)
          }
        </Submenu>
        <Submenu label="新增键盘按键事件">
          {
            keyCodeDefine.map(v => <Submenu label={v.label} disabled={v.disabled} key={v.id}>
              {
                Object.keys(v.children).map(k => <Item id={v.id + '-' + k} onClick={handleItemClick}
                                                       key={'keycode-' + k}>{v.children[k]}</Item>)
              }
            </Submenu>)
          }
        </Submenu>
        <Submenu label="新增鼠标移动事件">
          {
            Object.keys(DIRECTION).map(d => <Submenu key={d} label={`向${DIRECTION[d]}移动`}>
              {DEFAULT_PX.map(v => <Item id={`move-${d}-${v}`} key={d + v} onClick={handleItemClick}>{v}px</Item>)}
            </Submenu>)
          }
        </Submenu>
      </Menu>
    </>
  )
}
export default SimpleMacro;