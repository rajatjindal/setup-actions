import * as core from '@actions/core'
import * as downloader from './downloader'
import * as sys from './system'

async function run(): Promise<void> {
  try {
    let osPlatform = sys.getPlatform();
    if (osPlatform === 'windows') {
      osPlatform = 'win'
    } else if (osPlatform === 'darwin') {
      osPlatform = 'osx'
    }

    const version =
      core.getInput('version') !== '' ? core.getInput('version') : 'v0.19.0'
    core.info(`setting up hippo ${version} on ${osPlatform}`)

    let archiveExtension = '.tar.gz'
    if (osPlatform === 'windows') {
      archiveExtension = '.zip'
    }
    const folderName = `${osPlatform}-x64`

    const downloadUrl = `https://github.com/deislabs/hippo/releases/download/${version}/hippo-server-${folderName}${archiveExtension}`;
    await downloader
      .getConfig(folderName, downloadUrl, folderName)
      .downloadAsDir()
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()