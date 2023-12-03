import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import IssueStatusFilter from './IssueStatusFilter';

const IssueActions = () => {
  return (
    <Flex justify={'between'} mb={'5'}>
      <IssueStatusFilter />
      <Button ml={'1'}>
        <Link href='/issues/new'>New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
