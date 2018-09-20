import Loadable from 'react-loadable';
import PageLoader from 'components/PageLoader';

export const DocumentationLayout = Loadable({
  loader: () => import('layouts/DocumentationLayout'),
  loading: PageLoader
});

export const DocumentationIntroduce = Loadable({
  loader: () => import('pages/DocumentationIntroduce'),
  loading: PageLoader
});

export const DocumentationGettingStarted = Loadable({
  loader: () => import('pages/DocumentationGettingStarted'),
  loading: PageLoader
});

export const DocumentationTrain = Loadable({
  loader: () => import('pages/DocumentationTrain'),
  loading: PageLoader
});

export const DocumentationRecognize = Loadable({
  loader: () => import('pages/DocumentationRecognize'),
  loading: PageLoader
});

export const DocumentationModelSwitch = Loadable({
  loader: () => import('pages/DocumentationModelSwitch'),
  loading: PageLoader
});

export const DocumentationModelMerge = Loadable({
  loader: () => import('pages/DocumentationModelMerge'),
  loading: PageLoader
});

export const DocumentationQA = Loadable({
  loader: () => import('pages/DocumentationQA'),
  loading: PageLoader
});

export const DocumentationAppendix = Loadable({
  loader: () => import('pages/DocumentationAppendix'),
  loading: PageLoader
});
