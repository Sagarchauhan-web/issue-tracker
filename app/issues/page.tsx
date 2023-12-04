import { Issue, Status } from '@prisma/client';
import IssueActions from './IssueActions';
import IssueTable from './IssueTable';
import { Metadata } from 'next';

interface Props {
  searchParams: { status: Status; orderBy: keyof Issue; page: string };
}

const IssuesPage = async ({ searchParams }: Props) => {
  return (
    <div>
      <IssueActions />
      <IssueTable searchParams={searchParams} />
    </div>
  );
};

export const dynamic = 'force-dynamic';
// export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Issue Tracker - Issue List',
  description: 'View all project issues',
};

export default IssuesPage;
