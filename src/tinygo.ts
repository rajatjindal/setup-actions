import * as core from '@actions/core'
import * as downloader from './downloader'
import * as sys from './system'
import os from 'os'

async function run(): Promise<void> {
  try {
    const osPlatform = sys.getPlatform() === 'macos' ? 'darwin' : sys.getPlatform()
    const osArch = sys.getArch()

    const version =
      core.getInput('version') !== '' ? core.getInput('version') : 'v0.25.0'
    core.info(`setting up tinygo ${version} on ${osPlatform} - ${osArch}`)

    let archiveExtension = osPlatform === 'windows' ? '.zip' : '.tar.gz';

    const downloadUrl = `https://github.com/tinygo-org/tinygo/releases/download/${version}/tinygo${version.replace('v', '')}.${osPlatform}-${osArch}${archiveExtension}`;
    await downloader
      .getConfig(`tinygo`, downloadUrl, `tinygo`)
      .downloadAsDir()
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()