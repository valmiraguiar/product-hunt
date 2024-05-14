import VoteButton from '@/presentation/components/layout/internal/VoteButton';

const HomeLayout: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-white p-2 m-64">
      <VoteButton numberOfVotes="252" />
    </div>
  );
};

export default HomeLayout;
