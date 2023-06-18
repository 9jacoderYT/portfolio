import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Jumia Ecommerce Application">
    <Container>
      <Title>
        Jumia Ecommerce Application <Badge>2023-</Badge>
      </Title>
      <P>
        An Ecommerce Application modelled after Jumia.ng, coded with its own
        admin page for stock and order management
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://jumia-clone-theta.vercel.app/">
            https://jumia-clone-theta.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Laptop, Tablet and Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            NodeJS, NextJS, Tailwindcss, Google Client, Material UI, Daisy UI
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/JUMIAECOMMERCE.jpg" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/enp-9yWhD7k"
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
