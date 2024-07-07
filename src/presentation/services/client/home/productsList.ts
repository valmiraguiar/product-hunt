'use client';

import { IProductModelProps } from '@/domain/models/product/product-model';
import { LoadingStateEnum } from '@/presentation/constants/loading-state';
import { useState } from 'react';

const mockData: IProductModelProps[] = [
  {
    imgUrl:
      'https://ph-files.imgix.net/9d1cb278-90b0-46b9-9ae3-d6a8ee5180f1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'PyjamaHR',
    description: 'Hiring made so easy, you can do it in your pyjamas',
    redirectUrl: 'https://pyjamahr.com/',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['Hiring', 'Procutivity', 'Human Resources'],
  },
  {
    imgUrl:
      'https://ph-files.imgix.net/c89a76ca-4224-431e-ba7a-73e0feed0e37.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'OTTO SEO by Search Atlas',
    description: 'Automate your SEO and start ranking',
    redirectUrl: 'https://searchatlas.com/otto-launch-ph/',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['SEO', 'Artificial Intelligence'],
  },
  {
    imgUrl:
      'https://ph-files.imgix.net/25aaa27a-fa1f-4093-9a34-c9e9b6730542.vnd.microsoft.icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'MindPal',
    description: 'Build any internal AI tool in 5 minutes',
    redirectUrl: 'https://mindpal.space/',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['Productivity', 'Artificial Intelligence'],
  },
  {
    imgUrl:
      'https://ph-files.imgix.net/5df7b002-1e7c-4a29-8950-247d1dc9ccac.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'Onyxium AI',
    description: 'Find all the best AI models in one single platform',
    redirectUrl: 'https://onyxium-ai-xi.vercel.app/',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['SaaS', 'Developer Tools', 'Artificial Intelligence'],
  },
  {
    imgUrl:
      'https://ph-files.imgix.net/667311a5-da9f-4bbb-a5bf-3551325c5379.x-icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'OHMNI',
    description: 'Anti-surveillance fashion from M.I.A',
    redirectUrl: 'https://www.ohmni.com/',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['Fashion', 'Clothing'],
  },
  {
    imgUrl:
      'https://ph-files.imgix.net/1e9127e3-d6c9-449e-b9d1-6e9ab72efc9c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'Content Studio AI',
    description: 'Simplify content creation with AI powered tools',
    redirectUrl: 'https://contentstudioai.com/',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['Productivity', 'Artificial Intelligence', 'Video'],
  },
  {
    imgUrl:
      'https://ph-files.imgix.net/06bd7980-247e-4848-b9c4-bdd9f8cb11e8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'Tubie',
    description: 'The tube feeding companion app',
    redirectUrl: 'https://tubieapp.com/',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['Medical', 'Dieting', 'Health'],
  },
  {
    imgUrl:
      'https://ph-files.imgix.net/8b9e94fa-85f7-493e-8832-7fce54899d0e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'FreePhotoAI',
    description: 'Create professional photos with AI',
    redirectUrl: 'https://freephotoai.co/',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['Photography', 'Artificial Intelligence', 'Photo editing'],
  },
  {
    imgUrl:
      'https://ph-files.imgix.net/a2385936-77eb-4156-9a8f-f19cfe1c5466.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'Shazam Events',
    description: 'Find concerts by genre, artist, venue and date anywhere',
    redirectUrl: 'https://www.shazam.com/events/brazil',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['Android', 'Music', 'Concerts'],
  },
  {
    imgUrl:
      'https://ph-files.imgix.net/038db2aa-6216-42e8-84bf-868bc2feb765.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'Rakun Card - Special Needs Travel',
    description: 'A card to show your special needs like ADHD or allergies',
    redirectUrl: 'https://www.rakunfriends.com/card',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['Travel', 'Food & Drink', 'Health'],
  },
  {
    imgUrl:
      'https://ph-files.imgix.net/b0dcc819-5672-4bce-9f70-b531b7aad4c7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'TTSynth.com',
    description: 'Convert text to speech with natural voices free online',
    redirectUrl: 'https://ttsynth.com/',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['Productivity', 'Artificial Intelligence', 'Audio'],
  },
  {
    imgUrl:
      'https://ph-files.imgix.net/b8526fa6-7596-4c66-8802-dcdd4a4aec46.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'Masteriyo LMS',
    description: 'Create & sell unlimited online courses',
    redirectUrl: 'https://masteriyo.com/',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['WordPress', 'Monetization', 'Online Learning'],
  },
  {
    imgUrl:
      'https://ph-files.imgix.net/ba4ae4f3-2f3f-4b4f-b21d-172cb3418e3e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'Pygma',
    description: 'AI copilot for Instagram',
    redirectUrl: 'https://www.pygma.me/',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['Instagram', 'Social Media', 'Artificial Intelligence'],
  },
  {
    imgUrl:
      'https://ph-files.imgix.net/c6d66a4e-e690-442e-842d-d70605c770e0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2',
    name: 'Zebracat',
    description: 'Turn text into impactful videos in minutes with AI',
    redirectUrl: 'https://www.zebracat.ai/',
    numberOfVotes: Math.random(),
    comments: Math.random(),
    topics: ['Marketing', 'Artificial Intelligence', 'Video'],
  },
];

const useProductList = () => {
  const [listLoadingState, setListLoadingState] = useState<LoadingStateEnum>(
    LoadingStateEnum.NOT_STARTED,
  );
  const [productListDataState, setProductListDataState] = useState<
    IProductModelProps[]
  >([]);

  const getProductList = async () => {
    try {
      setListLoadingState(LoadingStateEnum.PENDING);

      const response = await Promise.resolve(mockData);
      setProductListDataState(response);
    } catch {
      setListLoadingState(LoadingStateEnum.ERROR);
    } finally {
      setListLoadingState(LoadingStateEnum.DONE);
    }
  };

  return {
    listLoadingState,
    productListDataState,
    getProductList,
  };
};

export default useProductList;
