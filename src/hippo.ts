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


    // https://github.com/deislabs/hippo/releases/download/${version}/hippo-server-${osPlatform}-x64.tar.gz
    // https://github.com/deislabs/hippo/releases/download/v0.19.0/hippo-server-osx-x64.tar.gz
    // https://github.com/deislabs/hippo/releases/download/v0.19.0/hippo-server-win-x64.zip

    const downloadUrl = `https://github.com/deislabs/hippo/releases/download/v0.19.0/hippo-server-win-x64.zip`;
    await downloader
      .getConfig(`win-x64`, downloadUrl, `win-x64`)
      .downloadAsDir()
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()