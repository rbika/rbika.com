import type { NextPage } from 'next'
import Seo from '@/components/Seo'
import PageContainer from '@/components/PageContainer'

const Uses: NextPage = () => {
  return (
    <PageContainer>
      <Seo path="/uses" />

      <header className="mb-12">
        <h1 className="text-4xl leading-tight">Uses</h1>
        <p className="text-secondary mt-4 sm:mt-2 text-sm">
          Last update: Sep 22, 2024.
        </p>
      </header>

      <div
        className="
          text-secondary max-w-none
          prose dark:prose-invert 
          prose-h2:font-medium 
          prose-a:no-underline prose-a:font-normal prose-a:underline-offset-1 hover:prose-a:decoration-solid hover:prose-a:underline
        "
      >
        <p>
          Here are the apps and tools I use as a developer.
          <br />
          please let me know if you find a missing link or something wrong:{' '}
          <a href="https://twitter.com/rbika" target="_blank" rel="noreferrer">
            @rbika
          </a>
          .
        </p>

        <h2>Code Editor</h2>
        <div>
          <a href="https://code.visualstudio.com">VS Code</a> - Here are my{' '}
          <a href="https://github.com/rbika/dotfiles-macos/tree/master/src/vscode">
            settings and keybindings
          </a>
          .
          <ul>
            <li>
              Theme -{' '}
              <a href="https://github.com/rbika/dotfiles-macos/blob/master/src/vscode/settings.json">
                custom darker version
              </a>{' '}
              of the <a href="https://www.nordtheme.com/">Nord theme</a>.<br />
            </li>
            <li>
              Font -{' '}
              <a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a>.
            </li>
          </ul>
        </div>

        <h2>Terminal</h2>
        <div>
          <a href="https://iterm2.com">iTerm2</a> - Here is my{' '}
          <a href="https://github.com/rbika/dotfiles-macos/blob/master/src/zsh/.zshrc">
            zsh config
          </a>
          .
          <ul>
            <li>
              Theme -{' '}
              <a href="https://github.com/rbika/iterm2-nord-dark">
                custom darker version
              </a>{' '}
              of the <a href="https://www.nordtheme.com/">Nord theme</a>.<br />
            </li>
            <li>
              Font -{' '}
              <a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a>.
            </li>
          </ul>
        </div>

        <h2>macOS apps</h2>
        <ul>
          <li>
            <a href="https://www.raycast.com/">Raycast</a> - Spotlight
            replacement.
          </li>
          <li>
            <a href="https://www.figma.com/">Figma</a> - When I need to do some
            simple edits.
          </li>
          <li>
            <a href="https://git-fork.com/">Fork</a> - Best Git client for
            macOS.
          </li>
          <li>
            <a href="https://www.google.com/chrome/">Google Chrome</a> - My
            preferred browser.
          </li>
          <li>
            <a href="https://www.craft.do/">Craft</a> - Multi-platform
            note-taking app with markdown support.
          </li>
          <li>
            <a href="https://karabiner-elements.pqrs.org/">
              Karabiner Elements
            </a>{' '}
            - Keyboard customizer for macOS.
          </li>
          <li>
            <a href="https://www.apple.com/apple-music/">Spotify</a> - Music
            streaming.
          </li>
        </ul>
      </div>
    </PageContainer>
  )
}

export default Uses
