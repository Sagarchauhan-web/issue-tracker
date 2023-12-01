import React from 'react';
import IssueForm from '../../_components/issueForm';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  console.log(params);
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
