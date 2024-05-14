import ListItem from '@/presentation/components/layout/internal/ListItem';

const HomeLayout: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-white p-2 m-64">
      <ListItem
        title="Wegic"
        description="The first AI web designer & developer by your side"
      />
    </div>
  );
};

export default HomeLayout;
