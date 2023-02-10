import * as core from '@actions/core'
import * as downloader from './downloader'
import * as sys from './system'

async function run(): Promise<void> {
  try {
    const osPlatform = sys.getPlatform()
    const osArch = sys.getArch()

    const version =
      core.getInput('version') !== '' ? core.getInput('version') : 'v0.36.0'
    core.info(`setting up wasmtime ${version} on ${osPlatform} - ${osArch}`)

    let binaryExtension = ''
    let archiveExtension = '.tar.xz'
    if (osPlatform === 'windows') {
      archiveExtension = '.zip'
      binaryExtension = '.exe'
    }

    const downloadUrl = `https://github.com/bytecodealliance/wasmtime/releases/download/${version}/wasmtime-${version}-x86_64-${osPlatform}${archiveExtension}`;
    await downloader
      .getConfig(`wasmtime${binaryExtension}`, downloadUrl, `wasmtime${binaryExtension}`)
      .download()
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()