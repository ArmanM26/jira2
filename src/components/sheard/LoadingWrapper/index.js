import { Spin } from "antd";

const LoadingWrapper = ({ loading, children }) => {
  return (
    <>
      {loading ? (
        <div className="main_loading_container">
          <Spin size="large" />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingWrapper;
