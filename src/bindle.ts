import * as core from '@actions/core'
import * as downloader from './downloader'
import * as sys from './system'

async function run(): Promise<void> {
  try {
    const osPlatform = sys.getPlatform()
    const osArch = sys.getArch()

    const version =
      core.getInput('version') !== '' ? core.getInput('version') : 'v0.8.0'
    core.info(`setting up bindle ${version} on ${osPlatform} - ${osArch}`)

    let binaryExtension = ''
    if (osPlatform === 'windows') {
      binaryExtension = '.exe'
    }

    const downloadUrl = `https://bindle.blob.core.windows.net/releases/bindle-${version}-${osPlatform}-${osArch}.tar.gz`;
    await downloader
      .getConfig(`bindle-server${binaryExtension}`, downloadUrl, `bindle-server${binaryExtension}`)
      .download()
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()