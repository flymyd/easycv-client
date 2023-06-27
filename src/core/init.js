import {BaseDirectory, createDir, exists} from "@tauri-apps/api/fs";

async function initApp() {
  const imgFolder = await exists('profile', {dir: BaseDirectory.AppData});
  if (!imgFolder) {
    await createDir('profile', {dir: BaseDirectory.AppData, recursive: true});
  }
}

export default initApp;