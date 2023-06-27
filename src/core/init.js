import {BaseDirectory, createDir, exists} from "@tauri-apps/api/fs";

async function initApp() {
  const profileFolder = await exists('profile', {dir: BaseDirectory.AppData});
  if (!profileFolder) {
    await createDir('profile', {dir: BaseDirectory.AppData, recursive: true});
  }
}

export default initApp;