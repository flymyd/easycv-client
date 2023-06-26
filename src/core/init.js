import {BaseDirectory, createDir, exists} from "@tauri-apps/api/fs";

async function initApp() {
  const imgFolder = await exists('img', {dir: BaseDirectory.AppData});
  if (!imgFolder) {
    await createDir('img', {dir: BaseDirectory.AppData, recursive: true});
  }
}

export default initApp;