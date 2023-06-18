import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbSignUp from '../public/images/projects/12.jpg'

import thumbJumia from '../public/images/projects/JUMIAECOMMERCE.jpg'

import thumbIMDB from '../public/images/projects/13.jpg'

import thumbFlutterwave from '../public/images/projects/14.jpg'
import thumbRemita from '../public/images/projects/15.jpg'
import thumbIMDBB from '../public/images/projects/16.jpg'
import thumbCoinSniper from '../public/images/projects/17.jpg'
import thumbImages from '../public/images/projects/18.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Design a SignUp and Login Form with Validation || Material UI || React"
            thumbnail={thumbSignUp}
            href="https://youtu.be/lD-I3aGv1xs"
          />
          <GridItem
            title="Jumia Ecommerce Admin Panel built with NextJS Firebase Tailwindcss and DaisyUI"
            thumbnail={thumbJumia}
            href="https://youtu.be/enp-9yWhD7k"
          />
          <GridItem
            title="Instagram Clone built with NextJS TailwindCss Firebase and Google Cloud Client"
            thumbnail={thumbIMDB}
            href="https://youtu.be/5wMz84Oz1Dg"
          />
          <GridItem
            title="Complete Guide to Integrating Flutterwave Payments into Your React Application"
            thumbnail={thumbFlutterwave}
            href="https://youtu.be/Kl66ojXKVX8"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Complete Guide to Integrating Remita Payments into Your React Application"
            thumbnail={thumbRemita}
            href="https://youtu.be/vgSztV5kz-U"
          />
          <GridItem
            title="IMDB Clone built with NextJS TailwindCss and TMDB API"
            thumbnail={thumbIMDBB}
            href="https://youtu.be/NYrBPf-C8gE"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Build a Cryptocurrency Listing Site Like CoinSniper with Next.js"
            thumbnail={thumbCoinSniper}
            href="https://youtu.be/s25BeA2UX18"
          />
          <GridItem
            title="Upload Multiple Images or Files with FIREBASE CLOUD STORAGE AND REACT"
            thumbnail={thumbImages}
            href="https://youtu.be/1KSKjkJylAo"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
