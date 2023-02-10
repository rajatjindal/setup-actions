import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as downloader from './downloader'
import * as sys from './system'

async function run(): Promise<void> {
  try {
    const osPlatform = sys.getPlatform()
    const osArch = sys.getArch()

    const version =
      core.getInput('version') !== '' ? core.getInput('version') : 'v0.8.0'
    core.info(`setting up spin ${version} on ${osPlatform} - ${osArch}`)

    let archiveExtension = '.tar.gz'
    let binaryExtension = ''
    if (osPlatform === 'windows') {
      archiveExtension = '.zip'
      binaryExtension = '.exe'
    }

    const downloadUrl = `https://github.com/fermyon/spin/releases/download/${version}/spin-${version}-${osPlatform}-${osArch}${archiveExtension}`
    await downloader
      .getConfig(`spin${binaryExtension}`, downloadUrl, `spin${binaryExtension}`)
      .download()

    const plugins = core.getInput('plugins').split(',');
    if (plugins.length > 0) {
      await exec.exec('spin', ['plugin', 'update'])
      plugins.every(async function (plugin) {
        //TODO: use Promise.All
        await exec.exec('spin', ['plugin', 'install', plugin, '--yes'])
      })
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
