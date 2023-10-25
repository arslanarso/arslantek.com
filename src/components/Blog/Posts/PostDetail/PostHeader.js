import ShareSocial from '../../ShareSocial';
import { DateReadTime } from '../DateReadTime';

const PostHeader = (props) => {
  const { title, date, readTime, slug } = props;

  return (
    <header className="relative">
      <h1 className="text-[42px] flex items-center justify-center font-bold tracking-tight my-10 leading-loose">
        {title}
      </h1>
      <section className="mb-2 flex items-center justify-between gap-2">
        <DateReadTime date={date} timeToRead={readTime} />
        <ShareSocial slug={slug} title={title} />
      </section>
    </header>
  );
};

export default PostHeader;
