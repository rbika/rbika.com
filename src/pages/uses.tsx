import type { GetStaticProps, NextPage } from 'next'
import { format } from 'date-fns'
import { getUsesData } from '@/utils/uses'
import UsesData from '@/types/usesData'
import Seo from '@/components/Seo'
import PageContainer from '@/components/PageContainer'

type UsesProps = {
  usesData: UsesData
}

const Uses: NextPage<UsesProps> = ({ usesData }) => {
  return (
    <PageContainer>
      <Seo path="/uses" />

      <header className="mb-12">
        <h1 className="text-4xl leading-tight">Uses</h1>
        <p className="text-secondary mt-4 sm:mt-2 text-sm">
          Last update: Apr 22, 2023.
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
          It&apos;s nice to find new apps, tools, and gear other developers use,
          so here is my list. You can also check more &ldquo;uses&rdquo; pages
          on this website:{' '}
          <a href="https://uses.tech/" target="_blank" rel="noreferrer">
            uses.tech
          </a>
          .
          <br />
          If you find a missing link or something wrong please let me know:{' '}
          <a href="https://twitter.com/rbika" target="_blank" rel="noreferrer">
            @rbika
          </a>
          .
        </p>

        <h2>Code Editor</h2>
        <ul>
          <li>
            <a href="https://code.visualstudio.com">VS Code</a> - I used Vim for
            many years but now I switched to VS Code. I use VS Code with the
            default theme (Dark+). Here are my{' '}
            <a href="https://github.com/rbika/dotfiles-macos/tree/master/src/vscode">
              settings and keybindings
            </a>
            .
          </li>
        </ul>

        <h2>Terminal</h2>
        <ul>
          <li>
            <a href="https://iterm2.com">iTerm2</a> - macOS Terminal
            replacement. Here is my{' '}
            <a href="https://github.com/rbika/dotfiles-macos/blob/master/src/zsh/.zshrc">
              zsh config
            </a>
          </li>
          <li>
            <a href="https://github.com/rbika/iterm2-vscode-dark-plus">Dark+</a>{' '}
            - I made a port from VS Code Dark+ theme to iTerm2.
          </li>
        </ul>

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
            <a href="https://www.notion.so/">Notion</a> - Multi-platform
            note-taking app with markdown support.
          </li>
          <li>
            <a href="https://www.apple.com/apple-music/">Spotify</a> - Music
            streaming.
          </li>
          <li>
            <a href="https://rectangleapp.com/">Rectangle</a> - macOS&apos;s
            window management is terrible.
          </li>
        </ul>
      </div>
    </PageContainer>
  )
}

export default Uses
