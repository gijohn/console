import * as React from 'react';

import { navFactory } from '@console/internal/components/utils';
import { DetailsPage } from '@console/internal/components/factory';
import { K8sResourceKindReference } from '@console/internal/module/k8s';
import { TemplateModel } from '@console/internal/models';

import { VMDisksFirehose } from '../vm-disks';
import { VMTemplateDetailsConnected } from './vm-template-details';
import { VMNics } from '../vm-nics';

export const VMTemplateDetailsPage: React.FC<VMTemplateDetailsPageProps> = (props) => {
  const nicsPage = {
    href: 'nics',
    name: 'Network Interfaces',
    component: VMNics,
  };

  const disksPage = {
    href: 'disks',
    name: 'Disks',
    component: VMDisksFirehose,
  };

  const pages = [
    navFactory.details(VMTemplateDetailsConnected),
    navFactory.editYaml(),
    nicsPage,
    disksPage,
  ];

  const menuActions = undefined; // TODO(mlibra): menuActions

  return (
    <DetailsPage
      {...props}
      kind={TemplateModel.kind}
      kindObj={TemplateModel}
      name={props.match.params.name}
      namespace={props.match.params.ns}
      menuActions={menuActions}
      pages={pages}
    />
  );
};

type VMTemplateDetailsPageProps = {
  name: string;
  namespace: string;
  kind: K8sResourceKindReference;
  match: any;
};
