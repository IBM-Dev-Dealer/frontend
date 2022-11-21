import { wrapper, dot, first, second, third } from './Loader.module.scss';

const Loader = ({ loading }) => {
  return (
    loading && (
      <div className={wrapper}>
        <div className={`${dot} ${first}`} />
        <div className={`${dot} ${second}`} />
        <div className={`${dot} ${third}`} />
      </div>
    )
  );
};

export default Loader;

Loader.defaultProps = {
  loading: true,
};
