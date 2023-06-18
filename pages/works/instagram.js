import {
  Container,
  Badge,
  List,
  Link,
  ListItem,
  SimpleGrid,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Instagram Clone">
    <Container>
      <Title>
        Instagram Clone <Badge>2022</Badge>
      </Title>
      <P>An Instagram Clone fully functional and mobile responsive</P>
      <P>You can create an account, login and make a post</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://instagram-clone-sandy-two.vercel.app/">
            https://instagram-clone-sandy-two.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Laptop, Tablet, and Mobile</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, Tailwindcss, Firebase</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/projects/3.png" alt="walknote" />
        <WorkImage src="/images/projects/4.png" alt="walknote" />
      </SimpleGrid>
      <WorkImage src="/images/projects/1.png" alt="walknote" />
      <WorkImage src="/images/projects/2.png" alt="walknote" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/5wMz84Oz1Dg"
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
