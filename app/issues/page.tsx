import { Issue, Status } from '@prisma/client';
import IssueActions from './IssueActions';
import IssueTable from './IssueTable';

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

export default IssuesPage;
