import { spawnSync } from 'node:child_process'

// Agave Install e.g. installAgave('0.1.0')
const installSolana = (version: string) => {
  spawnSync(
    `sh -c "$(curl --netrc-optional -sSfL https://release.solana.com/v${version}/install)"`,
    {
      shell: true,
      stdio: 'inherit',
    },
  )
}

export default installSolana
