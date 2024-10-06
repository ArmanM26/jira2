import { useState, useEffect } from "react";

const Login = () => {
  const [page, setPage] = useState(1);
  const [resultCount, setResultCount] = useState(10);
  const [showModal, setShowModel] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=3&results=10&seed=abc")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, [page]);

  const handleChangePagination = (value) => {
    setPage(value === "next" ? page + 1 : page - 1);
  };

  return (
    <div>
      <button onClick={() => handleChangePagination("prev")}>prev</button>
      <span> page={page}</span>
      <button onClick={() => handleChangePagination("next")}>next</button>
      <button onClick={() => setShowModel(!showModal)}>
        {showModal ? "Close Modal" : "Open Modal"}
      </button>
      {showModal && (
        <div>
          <h2>Model</h2>
        </div>
      )}
    </div>
  );
};

export default Login;
