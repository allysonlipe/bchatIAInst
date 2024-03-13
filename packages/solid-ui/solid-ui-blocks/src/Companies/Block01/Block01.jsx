import React from 'react'
// import SVG from 'react-inlinesvg'
import { Container, Flex, Box, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import bolt360 from './bolt360.png'
import pegado from './pegado.png'
import pensarClube from './pensarClube.png'
import rnEditora from './rnEditora.png'
import alfa from './alfa.png'

const styles = {
  logo: {
    width: [100, 150],
    height: [50, 75]
  },
}

const CompaniesBlock01 = ({ content }) => {
  const { text, collection, buttons } = content

  return (
    <Container sx={{ textAlign: `center`}}>
      <ContentText content={text} />
      {text && collection && <Divider />}
      <Flex sx={{ flexWrap: `wrap`, m: -3 }}>


        {collection?.map(({ text }, index) => (
          <Box key={`item-${index}`} sx={{ flexGrow: 1, p: [1, 3] }}>
            <Reveal
              effect='fadeInGrow'
              delay={0.2 * (index + 2)}
              title={text?.[0]?.text}
            >
              {index === 0 && <img src={bolt360} css={css(styles.logo)} alt="Bolt360" />}
              {index === 1 && <img src={pensarClube} css={css(styles.logo)} alt="Pensar Clube" />}
              {index === 2 && <img src={pegado} css={css(styles.logo)} alt="Pegado" />}
              {index === 3 && <img src={rnEditora} css={css(styles.logo)} alt="Rn Editora" />}
              {index === 4 && <img src={alfa} css={css(styles.logo)} alt="Alfa" />}
            </Reveal>
          </Box>
        ))}
      </Flex>
      {buttons && (
        <>
          <Divider space={3} />
          <ContentButtons content={buttons} />
        </>
      )}
    </Container>
  )
}

export default WithDefaultContent(CompaniesBlock01)


