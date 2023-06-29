// 根据鼠标事件 id 查找对应的 label
import {IconArrowDown, IconArrowUp, IconClock, IconCommand} from "@douyinfe/semi-icons";

function getMouseLabelById(id) {
  for (let mouseItem of mouseDefine) {
    for (let child of mouseItem.children) {
      if (child.id === id) {
        return mouseItem.label + '-' + child.label;
      }
    }
  }
  return '';
}

// 根据键盘事件 id 查找对应的 label
function getKeyboardLabelById(id) {
  const arr = id.split("-");
  const objId = arr.slice(0, arr.length - 1).join("-");
  const keyCode = arr[arr.length - 1];
  for (let keyboardItem of keyCodeDefine) {
    if (keyboardItem.id === objId) {
      return keyboardItem.children[keyCode] || '';
    }
  }
  return '';
}

export function getMarcoLabel(id) {
  if (id.indexOf('mouse') === 0) {
    return getMouseLabelById(id)
  } else if (id.indexOf('key') === 0) {
    return getKeyboardLabelById(id)
  } else if (id.indexOf('latency') === 0) {
    return '延迟-' + id.split('-')[1] + 'ms'
  } else return ''
}

export function getMarcoIcon(id) {
  let icon = <></>;
  if (id.indexOf('mouse') === 0) {
    if (id.includes('press')) {
      icon = <IconArrowDown/>
    } else {
      icon = <IconArrowUp/>
    }
  } else if (id.indexOf('key') === 0) {
    icon = <IconCommand/>
  } else if (id.indexOf('latency') === 0) {
    icon = <IconClock/>
  }
  return <div className="mr-2">{icon}</div>
}

export const mouseDefine = [
  {
    label: '左键',
    id: 'mouse-left',
    children: [
      {label: '点击', id: 'mouse-left-click'},
      {label: '按下', id: 'mouse-left-press'},
      {label: '释放', id: 'mouse-left-release'},
    ]
  },
  {
    label: '中键',
    id: 'mouse-middle',
    children: [
      {label: '点击', id: 'mouse-middle-click'},
      {label: '按下', id: 'mouse-middle-press'},
      {label: '释放', id: 'mouse-middle-release'},
    ]
  },
  {
    label: '右键',
    id: 'mouse-right',
    children: [
      {label: '点击', id: 'mouse-right-click'},
      {label: '按下', id: 'mouse-right-press'},
      {label: '释放', id: 'mouse-right-release'},
    ]
  },
  {
    disabled: true,
    label: '额外按键',
    id: 'addon',
    children: []
  },
]
export const keyCodeDefine = [
  {
    label: '数字键(主键盘)',
    id: 'key-number',
    children: {48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9"}
  },
  {
    label: '字母键(A~M)',
    id: 'key-alphabet-A-M',
    children: {
      65: "A",
      66: "B",
      67: "C",
      68: "D",
      69: "E",
      70: "F",
      71: "G",
      72: "H",
      73: "I",
      74: "J",
      75: "K",
      76: "L",
      77: "M",
    }
  },
  {
    label: '字母键(N~Z)',
    id: 'key-alphabet-N-Z',
    children: {
      78: "N",
      79: "O",
      80: "P",
      81: "Q",
      82: "R",
      83: "S",
      84: "T",
      85: "U",
      86: "V",
      87: "W",
      88: "X",
      89: "Y",
      90: "Z"
    }
  },
  {
    label: '数字键(小键盘)',
    id: 'key-number-mini',
    children: {
      96: "0",
      97: "1",
      98: "2",
      99: "3",
      100: "4",
      101: "5",
      102: "6",
      103: "7",
      104: "8",
      105: "9",
      106: "乘号",
      107: "加号",
      109: "减号",
      110: "小数点",
      111: "除号",
    }
  },
  {
    label: '符号键',
    id: 'key-symbol',
    children: {
      186: "分号",
      187: "等于号",
      188: "逗号",
      189: "减号",
      190: "句点",
      191: "问号",
      192: "波浪号",
      219: "左方括号([)",
      220: "反斜杠(\\)",
      221: "右方括号(])",
      222: "单引号(')"
    }
  },
  {
    label: 'F键(F1~F12)',
    id: 'key-function-f',
    children: {
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
    }
  },
  {
    label: '功能键(主键盘)',
    id: 'key-function',
    children: {
      8: "退格(BackSpace)",
      9: "制表符(Tab)",
      13: "回车(Enter)",
      16: "Shift",
      17: "Ctrl",
      18: "Alt",
      20: "大小写锁定(CapsLock)",
      27: "Esc",
      32: "空格(Space)",
      91: "左Windows键",
      92: "右Windows键",
      93: "菜单键",
    }
  },
  {
    label: '功能键(小键盘)',
    id: 'key-function-mini',
    children: {
      144: "数字锁定(NumLock)",
      145: "滚动锁定(ScrollLock)",
      19: "暂停(PauseBreak)",
      45: "插入(Insert)",
      36: "移动到开头(Home)",
      33: "向上翻页(PageUp)",
      46: "删除(Delete)",
      35: "移动到末尾(End)",
      34: "向下翻页(PageDown)",
      38: "向上移动(↑)",
      37: "向左移动(←)",
      40: "向下移动(↓)",
      39: "向右移动(→)",
    }
  },
]