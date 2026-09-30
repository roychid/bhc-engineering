import { PageHead, ProjectGrid, ContactCTA } from '../../components/Parts';

export const metadata = { title: 'Projects | BHC Engineering & Design' };

export default function Projects() {
  return <>
    <PageHead title="Projects" lede="A selection of the kinds of work we take on, across residential, commercial and industrial sectors." img="sector-industrial" />
    <section className="block wrap"><ProjectGrid /></section>
    <ContactCTA />
  </>;
}
