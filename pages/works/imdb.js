import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="IMDB Clone">
    <Container>
      <Title>
        IMDB Movies Application <Badge>2023</Badge>
      </Title>
      <P>
        IMDB Movies Application that uses API to fetch movies from a movie
        database
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://imdb-clone-henna.vercel.app/">
            https://imdb-clone-henna.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, Tailwindcss, Rapid Football Api</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/5.png" alt="walknote" />
      <WorkImage src="/images/projects/6.png" alt="walknote" />
      <WorkImage src="/images/projects/7.png" alt="walknote" />

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/projects/9.png" alt="walknote" />
        <WorkImage src="/images/projects/8.png" alt="walknote" />
      </SimpleGrid>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/NYrBPf-C8gE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
