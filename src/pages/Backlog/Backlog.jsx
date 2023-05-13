import React from "react";
import styled from "styled-components";

import useDataFetching from "../../hooks/useDataFetching";
import Task from "../../components/Task/Task";

const BacklogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  h2 {
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1ps solid darkgray;
  }
`;

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5%;
`;

const Backlog = () => {
  const [loading, error, tasks] = useDataFetching(
    ` http://localhost:4000/tasks`
  );

  return (
    <BacklogWrapper>
      <h2>Backlog</h2>
      <TaskWrapper>
        {loading || error ? (
          <span>{error || loading}</span>
        ) : (
          tasks.map((task) => (
            <Task key={task.id} title={task.title} body={task.body} />
          ))
        )}
      </TaskWrapper>
    </BacklogWrapper>
  );
};

export default Backlog;
