import {BaseDirectory, createDir as createDirFs, exists, readDir} from "@tauri-apps/api/fs";
import {appDataDir, resolve as pathResolve} from "@tauri-apps/api/path";

/**
 * 在profile目录下创建文件夹
 * @param dirPath 待创建的文件夹路径，如114514/img
 * @returns {Promise<unknown>}
 */
const createDir = async (dirPath) => {
  dirPath = `\\${dirPath.replace(/\//g, '\\')}`;
  try {
    await createDirFs(`profile${dirPath}`, {dir: BaseDirectory.AppData, recursive: true});
    return true;
  } catch (error) {
    return false;
  }
};
const genId = () => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
//TODO
export const listProfile = () => {
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
export const createProfile = (name, payload) => {
  const id = genId();
  return createDir(id)
    .then(() => createDir(`${id}/img`))
    .then(() => {
      console.log('createDirs success');
      // 在这里添加额外的逻辑
    })
    .catch(() => console.log('createDirs error'));
};