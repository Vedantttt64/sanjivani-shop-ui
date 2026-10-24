import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';
import { sectorProjectLabels } from '@/app/data/sectorProjectsData';

type ProjectsPageProps = {
  searchParams: Promise<{ section?: string | string[] }>;
};

export async function generateMetadata({
  searchParams,
}: ProjectsPageProps): Promise<Metadata> {
  const params = await searchParams;
  const requestedSection = params.section;
  const section = Array.isArray(requestedSection)
    ? requestedSection[0]?.toLowerCase()
    : requestedSection?.toLowerCase();
  const currentSection =
    section && Object.prototype.hasOwnProperty.call(sectorProjectLabels, section)
      ? section
      : 'air';

  return {
    title: `${sectorProjectLabels[currentSection]} Projects | Sanjivani`,
  };
}

export default function ProjectsPage() {
  return <ProjectsClient />;
}
