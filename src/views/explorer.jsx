import {useEffect} from "react";
import {readDir, BaseDirectory, createDir} from '@tauri-apps/api/fs';
import {Button} from "antd";

const Explorer = () => {
  function processEntries(entries) {
    for (const entry of entries) {
      console.log(`Entry: ${entry.path}`);
      if (entry.children) {
        processEntries(entry.children)
      }
    }
  }
  const showEntry = async () => {
    const entries = await readDir('db', {dir: BaseDirectory.AppData, recursive: true});
    await processEntries(entries)
  }
  return <>
    <Button onClick={showEntry}>114514</Button>
  </>
}
export default Explorer;